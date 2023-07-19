// Copyright 2020 Parity Technologies (UK) Ltd.
// This file is part of Polkadot.

// Polkadot is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Polkadot is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Polkadot.  If not, see <http://www.gnu.org/licenses/>.

//! The scheduler module for parachains and parathreads.
//!
//! This module is responsible for two main tasks:
//!   - Partitioning validators into groups and assigning groups to parachains and parathreads
//!   - Scheduling parachains and parathreads
//!
//! It aims to achieve these tasks with these goals in mind:
//! - It should be possible to know at least a block ahead-of-time, ideally more,
//!   which validators are going to be assigned to which parachains.
//! - Parachains that have a candidate pending availability in this fork of the chain
//!   should not be assigned.
//! - Validator assignments should not be gameable. Malicious cartels should not be able to
//!   manipulate the scheduler to assign themselves as desired.
//! - High or close to optimal throughput of parachains and parathreads. Work among validator groups should be balanced.
//!
//! The Scheduler manages resource allocation using the concept of "Availability Cores".
//! There will be one availability core for each parachain, and a fixed number of cores
//! used for multiplexing parathreads. Validators will be partitioned into groups, with the same
//! number of groups as availability cores. Validator groups will be assigned to different availability cores
//! over time.

use frame_support::pallet_prelude::*;
use primitives::{
	v5::{Assignment, ParasEntry},
	CoreIndex, GroupIndex, Id as ParaId,
};
use scale_info::TypeInfo;
use sp_std::prelude::*;

// Only used to link to configuration documentation.
#[allow(unused)]
use crate::configuration::HostConfiguration;

/// Reasons a core might be freed
#[derive(Clone, Copy)]
pub enum FreedReason {
	/// The core's work concluded and the parablock assigned to it is considered available.
	Concluded,
	/// The core's work timed out.
	TimedOut,
}

pub trait AssignmentProvider<BlockNumber> {
	/// How many cores are allocated to this provider.
	fn session_core_count() -> u32;

	/// Pops an [`Assignment`] from the provider for a specified [`CoreIndex`].
	/// The `concluded_para` field makes the caller report back to the provider
	/// which [`ParaId`] it processed last on the supplied [`CoreIndex`].
	fn pop_assignment_for_core(
		core_idx: CoreIndex,
		concluded_para: Option<ParaId>,
	) -> Option<Assignment>;

	/// Push back an already popped assignment. Intended for provider implementations
	/// that need to be able to keep track of assignments over session boundaries,
	/// such as the on demand assignment provider.
	fn push_assignment_for_core(core_idx: CoreIndex, assignment: Assignment);

	/// Returns the availability period specified by the implementation.
	/// See
	/// [`HostConfiguration::chain_availability_period`] and
	/// [`HostConfiguration::thread_availability_period`]
	/// for more information.
	fn get_availability_period(core_idx: CoreIndex) -> BlockNumber;

	/// How many retries a collator gets to provide a collation in this implementation.
	/// Zero retries means that the collator has 1 chance as per the bulk (slot auction)
	/// parachain model.
	fn get_max_retries(core_idx: CoreIndex) -> u32;
}

/// How a core is mapped to a backing group and a `ParaId`
#[derive(Clone, Encode, Decode, PartialEq, TypeInfo)]
#[cfg_attr(feature = "std", derive(Debug))]
pub struct CoreAssignment<BlockNumber> {
	/// The core that is assigned.
	pub core: CoreIndex,
	/// The para id and accompanying information needed to collate and back a parablock.
	pub paras_entry: ParasEntry<BlockNumber>,
	/// The index of the validator group assigned to the core.
	pub group_idx: GroupIndex,
}

impl<BlockNumber> CoreAssignment<BlockNumber> {
	/// Returns the [`ParaId`] of the assignment.
	pub fn para_id(&self) -> ParaId {
		self.paras_entry.para_id()
	}

	/// Returns the inner [`ParasEntry`] of the assignment.
	pub fn to_paras_entry(self) -> ParasEntry<BlockNumber> {
		self.paras_entry
	}
}
