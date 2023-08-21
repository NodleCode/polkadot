(function() {var implementors = {
"kusama_runtime":[["impl MaxEncodedLen for <a class=\"struct\" href=\"kusama_runtime/struct.NposCompactSolution24.html\" title=\"struct kusama_runtime::NposCompactSolution24\">NposCompactSolution24</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"kusama_runtime/governance/pallet_custom_origins/enum.Origin.html\" title=\"enum kusama_runtime::governance::pallet_custom_origins::Origin\">Origin</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"kusama_runtime/enum.RuntimeSlashReason.html\" title=\"enum kusama_runtime::RuntimeSlashReason\">RuntimeSlashReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"kusama_runtime/enum.RuntimeHoldReason.html\" title=\"enum kusama_runtime::RuntimeHoldReason\">RuntimeHoldReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"kusama_runtime/enum.OriginCaller.html\" title=\"enum kusama_runtime::OriginCaller\">OriginCaller</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"kusama_runtime/enum.RuntimeLockId.html\" title=\"enum kusama_runtime::RuntimeLockId\">RuntimeLockId</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"kusama_runtime/enum.RuntimeFreezeReason.html\" title=\"enum kusama_runtime::RuntimeFreezeReason\">RuntimeFreezeReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"kusama_runtime/enum.ProxyType.html\" title=\"enum kusama_runtime::ProxyType\">ProxyType</a>"]],
"pallet_xcm":[["impl MaxEncodedLen for <a class=\"enum\" href=\"pallet_xcm/pallet/enum.Origin.html\" title=\"enum pallet_xcm::pallet::Origin\">Origin</a>"],["impl&lt;ConsumerIdentifier, MaxConsumers: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u32.html\">u32</a>&gt;&gt; MaxEncodedLen for <a class=\"struct\" href=\"pallet_xcm/pallet/struct.RemoteLockedFungibleRecord.html\" title=\"struct pallet_xcm::pallet::RemoteLockedFungibleRecord\">RemoteLockedFungibleRecord</a>&lt;ConsumerIdentifier, MaxConsumers&gt;<span class=\"where fmt-newline\">where\n    BoundedVec&lt;(ConsumerIdentifier, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u128.html\">u128</a>), MaxConsumers&gt;: MaxEncodedLen,</span>"]],
"polkadot_parachain":[["impl MaxEncodedLen for <a class=\"struct\" href=\"polkadot_parachain/primitives/struct.Id.html\" title=\"struct polkadot_parachain::primitives::Id\">Id</a>"]],
"polkadot_runtime":[["impl MaxEncodedLen for <a class=\"enum\" href=\"polkadot_runtime/enum.RuntimeSlashReason.html\" title=\"enum polkadot_runtime::RuntimeSlashReason\">RuntimeSlashReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"polkadot_runtime/enum.RuntimeFreezeReason.html\" title=\"enum polkadot_runtime::RuntimeFreezeReason\">RuntimeFreezeReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"polkadot_runtime/enum.RuntimeHoldReason.html\" title=\"enum polkadot_runtime::RuntimeHoldReason\">RuntimeHoldReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"polkadot_runtime/enum.ProxyType.html\" title=\"enum polkadot_runtime::ProxyType\">ProxyType</a>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"polkadot_runtime/struct.NposCompactSolution16.html\" title=\"struct polkadot_runtime::NposCompactSolution16\">NposCompactSolution16</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"polkadot_runtime/enum.OriginCaller.html\" title=\"enum polkadot_runtime::OriginCaller\">OriginCaller</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"polkadot_runtime/enum.RuntimeLockId.html\" title=\"enum polkadot_runtime::RuntimeLockId\">RuntimeLockId</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"polkadot_runtime/governance/pallet_custom_origins/enum.Origin.html\" title=\"enum polkadot_runtime::governance::pallet_custom_origins::Origin\">Origin</a>"]],
"polkadot_runtime_common":[["impl&lt;AccountId, LeasePeriod&gt; MaxEncodedLen for <a class=\"struct\" href=\"polkadot_runtime_common/assigned_slots/struct.ParachainTemporarySlot.html\" title=\"struct polkadot_runtime_common::assigned_slots::ParachainTemporarySlot\">ParachainTemporarySlot</a>&lt;AccountId, LeasePeriod&gt;<span class=\"where fmt-newline\">where\n    AccountId: MaxEncodedLen,\n    LeasePeriod: MaxEncodedLen,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.70.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;LeasePeriod&gt;: MaxEncodedLen,</span>"]],
"polkadot_runtime_parachains":[["impl MaxEncodedLen for <a class=\"enum\" href=\"polkadot_runtime_parachains/origin/pallet/enum.Origin.html\" title=\"enum polkadot_runtime_parachains::origin::pallet::Origin\">Origin</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"polkadot_runtime_parachains/inclusion/enum.UmpQueueId.html\" title=\"enum polkadot_runtime_parachains::inclusion::UmpQueueId\">UmpQueueId</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"polkadot_runtime_parachains/inclusion/enum.AggregateMessageOrigin.html\" title=\"enum polkadot_runtime_parachains::inclusion::AggregateMessageOrigin\">AggregateMessageOrigin</a>"]],
"polkadot_test_runtime":[["impl MaxEncodedLen for <a class=\"enum\" href=\"polkadot_test_runtime/enum.RuntimeSlashReason.html\" title=\"enum polkadot_test_runtime::RuntimeSlashReason\">RuntimeSlashReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"polkadot_test_runtime/enum.RuntimeFreezeReason.html\" title=\"enum polkadot_test_runtime::RuntimeFreezeReason\">RuntimeFreezeReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"polkadot_test_runtime/enum.RuntimeHoldReason.html\" title=\"enum polkadot_test_runtime::RuntimeHoldReason\">RuntimeHoldReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"polkadot_test_runtime/enum.OriginCaller.html\" title=\"enum polkadot_test_runtime::OriginCaller\">OriginCaller</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"polkadot_test_runtime/enum.RuntimeLockId.html\" title=\"enum polkadot_test_runtime::RuntimeLockId\">RuntimeLockId</a>"]],
"rococo_runtime":[["impl MaxEncodedLen for <a class=\"enum\" href=\"rococo_runtime/enum.RuntimeLockId.html\" title=\"enum rococo_runtime::RuntimeLockId\">RuntimeLockId</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"rococo_runtime/enum.RuntimeFreezeReason.html\" title=\"enum rococo_runtime::RuntimeFreezeReason\">RuntimeFreezeReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"rococo_runtime/enum.OriginCaller.html\" title=\"enum rococo_runtime::OriginCaller\">OriginCaller</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"rococo_runtime/enum.ProxyType.html\" title=\"enum rococo_runtime::ProxyType\">ProxyType</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"rococo_runtime/enum.RuntimeHoldReason.html\" title=\"enum rococo_runtime::RuntimeHoldReason\">RuntimeHoldReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"rococo_runtime/enum.RuntimeSlashReason.html\" title=\"enum rococo_runtime::RuntimeSlashReason\">RuntimeSlashReason</a>"]],
"westend_runtime":[["impl MaxEncodedLen for <a class=\"enum\" href=\"westend_runtime/enum.ProxyType.html\" title=\"enum westend_runtime::ProxyType\">ProxyType</a>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"westend_runtime/struct.NposCompactSolution16.html\" title=\"struct westend_runtime::NposCompactSolution16\">NposCompactSolution16</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"westend_runtime/enum.RuntimeLockId.html\" title=\"enum westend_runtime::RuntimeLockId\">RuntimeLockId</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"westend_runtime/enum.RuntimeSlashReason.html\" title=\"enum westend_runtime::RuntimeSlashReason\">RuntimeSlashReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"westend_runtime/enum.OriginCaller.html\" title=\"enum westend_runtime::OriginCaller\">OriginCaller</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"westend_runtime/enum.RuntimeFreezeReason.html\" title=\"enum westend_runtime::RuntimeFreezeReason\">RuntimeFreezeReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"westend_runtime/enum.RuntimeHoldReason.html\" title=\"enum westend_runtime::RuntimeHoldReason\">RuntimeHoldReason</a>"]],
"xcm":[["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/v3/enum.NetworkId.html\" title=\"enum xcm::v3::NetworkId\">NetworkId</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/enum.VersionedMultiAssets.html\" title=\"enum xcm::VersionedMultiAssets\">VersionedMultiAssets</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/enum.VersionedResponse.html\" title=\"enum xcm::VersionedResponse\">VersionedResponse</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/v3/enum.MaybeErrorCode.html\" title=\"enum xcm::v3::MaybeErrorCode\">MaybeErrorCode</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/v3/enum.AssetInstance.html\" title=\"enum xcm::v3::AssetInstance\">AssetInstance</a>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"xcm/v3/struct.MultiAssets.html\" title=\"struct xcm::v3::MultiAssets\">MultiAssets</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/v3/enum.AssetId.html\" title=\"enum xcm::v3::AssetId\">AssetId</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/enum.VersionedMultiLocation.html\" title=\"enum xcm::VersionedMultiLocation\">VersionedMultiLocation</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/v2/enum.BodyId.html\" title=\"enum xcm::v2::BodyId\">BodyId</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/v3/enum.Fungibility.html\" title=\"enum xcm::v3::Fungibility\">Fungibility</a>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"xcm/v3/struct.MultiAsset.html\" title=\"struct xcm::v3::MultiAsset\">MultiAsset</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/v3/enum.WildFungibility.html\" title=\"enum xcm::v3::WildFungibility\">WildFungibility</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/v3/enum.BodyId.html\" title=\"enum xcm::v3::BodyId\">BodyId</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/enum.VersionedAssetId.html\" title=\"enum xcm::VersionedAssetId\">VersionedAssetId</a>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"xcm/v3/struct.PalletInfo.html\" title=\"struct xcm::v3::PalletInfo\">PalletInfo</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/enum.VersionedNetworkId.html\" title=\"enum xcm::VersionedNetworkId\">VersionedNetworkId</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/v3/enum.Response.html\" title=\"enum xcm::v3::Response\">Response</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/enum.VersionedInteriorMultiLocation.html\" title=\"enum xcm::VersionedInteriorMultiLocation\">VersionedInteriorMultiLocation</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/v3/enum.MultiAssetFilter.html\" title=\"enum xcm::v3::MultiAssetFilter\">MultiAssetFilter</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/v2/enum.NetworkId.html\" title=\"enum xcm::v2::NetworkId\">NetworkId</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/v3/enum.Junctions.html\" title=\"enum xcm::v3::Junctions\">Junctions</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/v3/enum.WildMultiAsset.html\" title=\"enum xcm::v3::WildMultiAsset\">WildMultiAsset</a>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"xcm/v2/struct.MultiLocation.html\" title=\"struct xcm::v2::MultiLocation\">MultiLocation</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/v3/enum.BodyPart.html\" title=\"enum xcm::v3::BodyPart\">BodyPart</a>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"xcm/v3/struct.MultiLocation.html\" title=\"struct xcm::v3::MultiLocation\">MultiLocation</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/v3/enum.Error.html\" title=\"enum xcm::v3::Error\">Error</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/v2/enum.Junction.html\" title=\"enum xcm::v2::Junction\">Junction</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/enum.VersionedJunction.html\" title=\"enum xcm::VersionedJunction\">VersionedJunction</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/enum.VersionedMultiAsset.html\" title=\"enum xcm::VersionedMultiAsset\">VersionedMultiAsset</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/v3/enum.Junction.html\" title=\"enum xcm::v3::Junction\">Junction</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/v2/enum.Junctions.html\" title=\"enum xcm::v2::Junctions\">Junctions</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm/v2/enum.BodyPart.html\" title=\"enum xcm::v2::BodyPart\">BodyPart</a>"]],
"xcm_fuzzer":[["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm_fuzzer/relay_chain/enum.RuntimeLockId.html\" title=\"enum xcm_fuzzer::relay_chain::RuntimeLockId\">RuntimeLockId</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm_fuzzer/relay_chain/enum.RuntimeHoldReason.html\" title=\"enum xcm_fuzzer::relay_chain::RuntimeHoldReason\">RuntimeHoldReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm_fuzzer/relay_chain/enum.RuntimeFreezeReason.html\" title=\"enum xcm_fuzzer::relay_chain::RuntimeFreezeReason\">RuntimeFreezeReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm_fuzzer/parachain/enum.RuntimeFreezeReason.html\" title=\"enum xcm_fuzzer::parachain::RuntimeFreezeReason\">RuntimeFreezeReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm_fuzzer/parachain/enum.OriginCaller.html\" title=\"enum xcm_fuzzer::parachain::OriginCaller\">OriginCaller</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm_fuzzer/parachain/enum.RuntimeHoldReason.html\" title=\"enum xcm_fuzzer::parachain::RuntimeHoldReason\">RuntimeHoldReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm_fuzzer/parachain/enum.RuntimeLockId.html\" title=\"enum xcm_fuzzer::parachain::RuntimeLockId\">RuntimeLockId</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm_fuzzer/relay_chain/enum.OriginCaller.html\" title=\"enum xcm_fuzzer::relay_chain::OriginCaller\">OriginCaller</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm_fuzzer/relay_chain/enum.RuntimeSlashReason.html\" title=\"enum xcm_fuzzer::relay_chain::RuntimeSlashReason\">RuntimeSlashReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"xcm_fuzzer/parachain/enum.RuntimeSlashReason.html\" title=\"enum xcm_fuzzer::parachain::RuntimeSlashReason\">RuntimeSlashReason</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()