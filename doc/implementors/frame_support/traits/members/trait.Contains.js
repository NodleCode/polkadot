(function() {var implementors = {
"kusama_runtime":[["impl Contains&lt;<a class=\"enum\" href=\"kusama_runtime/enum.RuntimeCall.html\" title=\"enum kusama_runtime::RuntimeCall\">RuntimeCall</a>&gt; for <a class=\"struct\" href=\"kusama_runtime/struct.BaseFilter.html\" title=\"struct kusama_runtime::BaseFilter\">BaseFilter</a>"],["impl Contains&lt;<a class=\"struct\" href=\"xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"kusama_runtime/xcm_config/struct.OnlyParachains.html\" title=\"struct kusama_runtime::xcm_config::OnlyParachains\">OnlyParachains</a>"],["impl Contains&lt;<a class=\"enum\" href=\"kusama_runtime/enum.RuntimeCall.html\" title=\"enum kusama_runtime::RuntimeCall\">RuntimeCall</a>&gt; for <a class=\"struct\" href=\"kusama_runtime/xcm_config/struct.SafeCallFilter.html\" title=\"struct kusama_runtime::xcm_config::SafeCallFilter\">SafeCallFilter</a>"]],
"pallet_xcm":[["impl&lt;Prefix: Get&lt;<a class=\"struct\" href=\"xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt;, Body: Get&lt;<a class=\"enum\" href=\"xcm/v3/junction/enum.BodyId.html\" title=\"enum xcm::v3::junction::BodyId\">BodyId</a>&gt;&gt; Contains&lt;<a class=\"struct\" href=\"xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"pallet_xcm/struct.IsMajorityOfBody.html\" title=\"struct pallet_xcm::IsMajorityOfBody\">IsMajorityOfBody</a>&lt;Prefix, Body&gt;"],["impl&lt;Prefix: Get&lt;<a class=\"struct\" href=\"xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt;, Body: Get&lt;<a class=\"enum\" href=\"xcm/v3/junction/enum.BodyId.html\" title=\"enum xcm::v3::junction::BodyId\">BodyId</a>&gt;&gt; Contains&lt;<a class=\"struct\" href=\"xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"pallet_xcm/struct.IsVoiceOfBody.html\" title=\"struct pallet_xcm::IsVoiceOfBody\">IsVoiceOfBody</a>&lt;Prefix, Body&gt;"]],
"polkadot_runtime":[["impl Contains&lt;<a class=\"struct\" href=\"xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"polkadot_runtime/xcm_config/struct.CollectivesOrFellows.html\" title=\"struct polkadot_runtime::xcm_config::CollectivesOrFellows\">CollectivesOrFellows</a>"],["impl Contains&lt;<a class=\"struct\" href=\"xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"polkadot_runtime/xcm_config/struct.OnlyParachains.html\" title=\"struct polkadot_runtime::xcm_config::OnlyParachains\">OnlyParachains</a>"],["impl Contains&lt;<a class=\"enum\" href=\"polkadot_runtime/enum.RuntimeCall.html\" title=\"enum polkadot_runtime::RuntimeCall\">RuntimeCall</a>&gt; for <a class=\"struct\" href=\"polkadot_runtime/xcm_config/struct.SafeCallFilter.html\" title=\"struct polkadot_runtime::xcm_config::SafeCallFilter\">SafeCallFilter</a>"]],
"rococo_runtime":[["impl Contains&lt;&lt;&lt;MultiSignature as Verify&gt;::Signer as IdentifyAccount&gt;::AccountId&gt; for <a class=\"struct\" href=\"rococo_runtime/struct.MigController.html\" title=\"struct rococo_runtime::MigController\">MigController</a>"],["impl Contains&lt;<a class=\"struct\" href=\"xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"rococo_runtime/xcm_config/struct.OnlyParachains.html\" title=\"struct rococo_runtime::xcm_config::OnlyParachains\">OnlyParachains</a>"],["impl Contains&lt;<a class=\"enum\" href=\"rococo_runtime/enum.RuntimeCall.html\" title=\"enum rococo_runtime::RuntimeCall\">RuntimeCall</a>&gt; for <a class=\"struct\" href=\"rococo_runtime/xcm_config/struct.SafeCallFilter.html\" title=\"struct rococo_runtime::xcm_config::SafeCallFilter\">SafeCallFilter</a>"],["impl Contains&lt;<a class=\"enum\" href=\"rococo_runtime/enum.RuntimeCall.html\" title=\"enum rococo_runtime::RuntimeCall\">RuntimeCall</a>&gt; for <a class=\"struct\" href=\"rococo_runtime/struct.BaseFilter.html\" title=\"struct rococo_runtime::BaseFilter\">BaseFilter</a>"]],
"westend_runtime":[["impl Contains&lt;<a class=\"enum\" href=\"westend_runtime/enum.RuntimeCall.html\" title=\"enum westend_runtime::RuntimeCall\">RuntimeCall</a>&gt; for <a class=\"struct\" href=\"westend_runtime/xcm_config/struct.SafeCallFilter.html\" title=\"struct westend_runtime::xcm_config::SafeCallFilter\">SafeCallFilter</a>"]],
"xcm_builder":[["impl Contains&lt;(<a class=\"struct\" href=\"xcm_builder/test_utils/struct.MultiLocation.html\" title=\"struct xcm_builder::test_utils::MultiLocation\">MultiLocation</a>, <a class=\"enum\" href=\"xcm_builder/test_utils/enum.Junction.html\" title=\"enum xcm_builder::test_utils::Junction\">Junction</a>)&gt; for <a class=\"struct\" href=\"xcm_builder/test_utils/struct.TestUniversalAliases.html\" title=\"struct xcm_builder::test_utils::TestUniversalAliases\">TestUniversalAliases</a>"],["impl&lt;ParaId: <a class=\"trait\" href=\"polkadot_parachain/primitives/trait.IsSystem.html\" title=\"trait polkadot_parachain::primitives::IsSystem\">IsSystem</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u32.html\">u32</a>&gt;&gt; Contains&lt;<a class=\"struct\" href=\"xcm_builder/test_utils/struct.MultiLocation.html\" title=\"struct xcm_builder::test_utils::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"xcm_builder/struct.IsChildSystemParachain.html\" title=\"struct xcm_builder::IsChildSystemParachain\">IsChildSystemParachain</a>&lt;ParaId&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()