// Copyright (C) Parity Technologies (UK) Ltd.
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

//! Autogenerated weights for `pallet_child_bounties`
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2023-04-17, STEPS: `50`, REPEAT: `20`, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! WORST CASE MAP SIZE: `1000000`
//! HOSTNAME: `runner-yu9ayb4d-project-163-concurrent-0`, CPU: `Intel(R) Xeon(R) CPU @ 2.60GHz`
//! EXECUTION: Some(Wasm), WASM-EXECUTION: Compiled, CHAIN: Some("polkadot-dev"), DB CACHE: 1024

// Executed Command:
// ./target/production/polkadot
// benchmark
// pallet
// --chain=polkadot-dev
// --steps=50
// --repeat=20
// --no-storage-info
// --no-median-slopes
// --no-min-squares
// --pallet=pallet_child_bounties
// --extrinsic=*
// --execution=wasm
// --wasm-execution=compiled
// --header=./file_header.txt
// --output=./runtime/polkadot/src/weights/

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::Weight};
use core::marker::PhantomData;

/// Weight functions for `pallet_child_bounties`.
pub struct WeightInfo<T>(PhantomData<T>);
impl<T: frame_system::Config> pallet_child_bounties::WeightInfo for WeightInfo<T> {
	/// Storage: ChildBounties ParentChildBounties (r:1 w:1)
	/// Proof: ChildBounties ParentChildBounties (max_values: None, max_size: Some(16), added: 2491, mode: MaxEncodedLen)
	/// Storage: Bounties Bounties (r:1 w:0)
	/// Proof: Bounties Bounties (max_values: None, max_size: Some(177), added: 2652, mode: MaxEncodedLen)
	/// Storage: System Account (r:2 w:2)
	/// Proof: System Account (max_values: None, max_size: Some(128), added: 2603, mode: MaxEncodedLen)
	/// Storage: ChildBounties ChildBountyCount (r:1 w:1)
	/// Proof: ChildBounties ChildBountyCount (max_values: Some(1), max_size: Some(4), added: 499, mode: MaxEncodedLen)
	/// Storage: ChildBounties ChildBountyDescriptions (r:0 w:1)
	/// Proof: ChildBounties ChildBountyDescriptions (max_values: None, max_size: Some(16400), added: 18875, mode: MaxEncodedLen)
	/// Storage: ChildBounties ChildBounties (r:0 w:1)
	/// Proof: ChildBounties ChildBounties (max_values: None, max_size: Some(145), added: 2620, mode: MaxEncodedLen)
	/// The range of component `d` is `[0, 16384]`.
	fn add_child_bounty(d: u32, ) -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `579`
		//  Estimated: `14808`
		// Minimum execution time: 70_716_000 picoseconds.
		Weight::from_parts(72_460_192, 0)
			.saturating_add(Weight::from_parts(0, 14808))
			// Standard Error: 9
			.saturating_add(Weight::from_parts(955, 0).saturating_mul(d.into()))
			.saturating_add(T::DbWeight::get().reads(5))
			.saturating_add(T::DbWeight::get().writes(6))
	}
	/// Storage: Bounties Bounties (r:1 w:0)
	/// Proof: Bounties Bounties (max_values: None, max_size: Some(177), added: 2652, mode: MaxEncodedLen)
	/// Storage: ChildBounties ChildBounties (r:1 w:1)
	/// Proof: ChildBounties ChildBounties (max_values: None, max_size: Some(145), added: 2620, mode: MaxEncodedLen)
	/// Storage: ChildBounties ChildrenCuratorFees (r:1 w:1)
	/// Proof: ChildBounties ChildrenCuratorFees (max_values: None, max_size: Some(28), added: 2503, mode: MaxEncodedLen)
	fn propose_curator() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `633`
		//  Estimated: `10745`
		// Minimum execution time: 19_039_000 picoseconds.
		Weight::from_parts(19_690_000, 0)
			.saturating_add(Weight::from_parts(0, 10745))
			.saturating_add(T::DbWeight::get().reads(3))
			.saturating_add(T::DbWeight::get().writes(2))
	}
	/// Storage: Bounties Bounties (r:1 w:0)
	/// Proof: Bounties Bounties (max_values: None, max_size: Some(177), added: 2652, mode: MaxEncodedLen)
	/// Storage: ChildBounties ChildBounties (r:1 w:1)
	/// Proof: ChildBounties ChildBounties (max_values: None, max_size: Some(145), added: 2620, mode: MaxEncodedLen)
	/// Storage: System Account (r:1 w:1)
	/// Proof: System Account (max_values: None, max_size: Some(128), added: 2603, mode: MaxEncodedLen)
	fn accept_curator() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `779`
		//  Estimated: `10845`
		// Minimum execution time: 34_010_000 picoseconds.
		Weight::from_parts(34_977_000, 0)
			.saturating_add(Weight::from_parts(0, 10845))
			.saturating_add(T::DbWeight::get().reads(3))
			.saturating_add(T::DbWeight::get().writes(2))
	}
	/// Storage: ChildBounties ChildBounties (r:1 w:1)
	/// Proof: ChildBounties ChildBounties (max_values: None, max_size: Some(145), added: 2620, mode: MaxEncodedLen)
	/// Storage: Bounties Bounties (r:1 w:0)
	/// Proof: Bounties Bounties (max_values: None, max_size: Some(177), added: 2652, mode: MaxEncodedLen)
	/// Storage: System Account (r:1 w:1)
	/// Proof: System Account (max_values: None, max_size: Some(128), added: 2603, mode: MaxEncodedLen)
	fn unassign_curator() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `779`
		//  Estimated: `10845`
		// Minimum execution time: 49_181_000 picoseconds.
		Weight::from_parts(50_691_000, 0)
			.saturating_add(Weight::from_parts(0, 10845))
			.saturating_add(T::DbWeight::get().reads(3))
			.saturating_add(T::DbWeight::get().writes(2))
	}
	/// Storage: Bounties Bounties (r:1 w:0)
	/// Proof: Bounties Bounties (max_values: None, max_size: Some(177), added: 2652, mode: MaxEncodedLen)
	/// Storage: ChildBounties ChildBounties (r:1 w:1)
	/// Proof: ChildBounties ChildBounties (max_values: None, max_size: Some(145), added: 2620, mode: MaxEncodedLen)
	fn award_child_bounty() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `676`
		//  Estimated: `7252`
		// Minimum execution time: 22_730_000 picoseconds.
		Weight::from_parts(23_593_000, 0)
			.saturating_add(Weight::from_parts(0, 7252))
			.saturating_add(T::DbWeight::get().reads(2))
			.saturating_add(T::DbWeight::get().writes(1))
	}
	/// Storage: ChildBounties ChildBounties (r:1 w:1)
	/// Proof: ChildBounties ChildBounties (max_values: None, max_size: Some(145), added: 2620, mode: MaxEncodedLen)
	/// Storage: System Account (r:3 w:3)
	/// Proof: System Account (max_values: None, max_size: Some(128), added: 2603, mode: MaxEncodedLen)
	/// Storage: ChildBounties ParentChildBounties (r:1 w:1)
	/// Proof: ChildBounties ParentChildBounties (max_values: None, max_size: Some(16), added: 2491, mode: MaxEncodedLen)
	/// Storage: ChildBounties ChildBountyDescriptions (r:0 w:1)
	/// Proof: ChildBounties ChildBountyDescriptions (max_values: None, max_size: Some(16400), added: 18875, mode: MaxEncodedLen)
	fn claim_child_bounty() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `648`
		//  Estimated: `15890`
		// Minimum execution time: 114_716_000 picoseconds.
		Weight::from_parts(115_642_000, 0)
			.saturating_add(Weight::from_parts(0, 15890))
			.saturating_add(T::DbWeight::get().reads(5))
			.saturating_add(T::DbWeight::get().writes(6))
	}
	/// Storage: Bounties Bounties (r:1 w:0)
	/// Proof: Bounties Bounties (max_values: None, max_size: Some(177), added: 2652, mode: MaxEncodedLen)
	/// Storage: ChildBounties ChildBounties (r:1 w:1)
	/// Proof: ChildBounties ChildBounties (max_values: None, max_size: Some(145), added: 2620, mode: MaxEncodedLen)
	/// Storage: ChildBounties ChildrenCuratorFees (r:1 w:1)
	/// Proof: ChildBounties ChildrenCuratorFees (max_values: None, max_size: Some(28), added: 2503, mode: MaxEncodedLen)
	/// Storage: ChildBounties ParentChildBounties (r:1 w:1)
	/// Proof: ChildBounties ParentChildBounties (max_values: None, max_size: Some(16), added: 2491, mode: MaxEncodedLen)
	/// Storage: System Account (r:2 w:2)
	/// Proof: System Account (max_values: None, max_size: Some(128), added: 2603, mode: MaxEncodedLen)
	/// Storage: ChildBounties ChildBountyDescriptions (r:0 w:1)
	/// Proof: ChildBounties ChildBountyDescriptions (max_values: None, max_size: Some(16400), added: 18875, mode: MaxEncodedLen)
	fn close_child_bounty_added() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `879`
		//  Estimated: `20422`
		// Minimum execution time: 74_948_000 picoseconds.
		Weight::from_parts(76_771_000, 0)
			.saturating_add(Weight::from_parts(0, 20422))
			.saturating_add(T::DbWeight::get().reads(6))
			.saturating_add(T::DbWeight::get().writes(6))
	}
	/// Storage: Bounties Bounties (r:1 w:0)
	/// Proof: Bounties Bounties (max_values: None, max_size: Some(177), added: 2652, mode: MaxEncodedLen)
	/// Storage: ChildBounties ChildBounties (r:1 w:1)
	/// Proof: ChildBounties ChildBounties (max_values: None, max_size: Some(145), added: 2620, mode: MaxEncodedLen)
	/// Storage: System Account (r:3 w:3)
	/// Proof: System Account (max_values: None, max_size: Some(128), added: 2603, mode: MaxEncodedLen)
	/// Storage: ChildBounties ChildrenCuratorFees (r:1 w:1)
	/// Proof: ChildBounties ChildrenCuratorFees (max_values: None, max_size: Some(28), added: 2503, mode: MaxEncodedLen)
	/// Storage: ChildBounties ParentChildBounties (r:1 w:1)
	/// Proof: ChildBounties ParentChildBounties (max_values: None, max_size: Some(16), added: 2491, mode: MaxEncodedLen)
	/// Storage: ChildBounties ChildBountyDescriptions (r:0 w:1)
	/// Proof: ChildBounties ChildBountyDescriptions (max_values: None, max_size: Some(16400), added: 18875, mode: MaxEncodedLen)
	fn close_child_bounty_active() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `1066`
		//  Estimated: `23025`
		// Minimum execution time: 93_040_000 picoseconds.
		Weight::from_parts(95_399_000, 0)
			.saturating_add(Weight::from_parts(0, 23025))
			.saturating_add(T::DbWeight::get().reads(7))
			.saturating_add(T::DbWeight::get().writes(7))
	}
}
