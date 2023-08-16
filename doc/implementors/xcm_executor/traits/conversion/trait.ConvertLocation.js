(function() {var implementors = {
"xcm_builder":[["impl&lt;ParaId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u32.html\">u32</a>&gt; + AccountIdConversion&lt;AccountId&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.ConvertLocation.html\" title=\"trait xcm_executor::traits::conversion::ConvertLocation\">ConvertLocation</a>&lt;AccountId&gt; for <a class=\"struct\" href=\"xcm_builder/struct.ChildParachainConvertsVia.html\" title=\"struct xcm_builder::ChildParachainConvertsVia\">ChildParachainConvertsVia</a>&lt;ParaId, AccountId&gt;"],["impl&lt;UniversalLocation: Get&lt;<a class=\"type\" href=\"xcm_builder/test_utils/type.InteriorMultiLocation.html\" title=\"type xcm_builder::test_utils::InteriorMultiLocation\">InteriorMultiLocation</a>&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.array.html\">32</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.ConvertLocation.html\" title=\"trait xcm_executor::traits::conversion::ConvertLocation\">ConvertLocation</a>&lt;AccountId&gt; for <a class=\"struct\" href=\"xcm_builder/struct.GlobalConsensusParachainConvertsFor.html\" title=\"struct xcm_builder::GlobalConsensusParachainConvertsFor\">GlobalConsensusParachainConvertsFor</a>&lt;UniversalLocation, AccountId&gt;"],["impl&lt;Network: Get&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.70.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"xcm_builder/test_utils/enum.NetworkId.html\" title=\"enum xcm_builder::test_utils::NetworkId\">NetworkId</a>&gt;&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.array.html\">20</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.array.html\">20</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.ConvertLocation.html\" title=\"trait xcm_executor::traits::conversion::ConvertLocation\">ConvertLocation</a>&lt;AccountId&gt; for <a class=\"struct\" href=\"xcm_builder/struct.AccountKey20Aliases.html\" title=\"struct xcm_builder::AccountKey20Aliases\">AccountKey20Aliases</a>&lt;Network, AccountId&gt;"],["impl&lt;UniversalLocation: Get&lt;<a class=\"type\" href=\"xcm_builder/test_utils/type.InteriorMultiLocation.html\" title=\"type xcm_builder::test_utils::InteriorMultiLocation\">InteriorMultiLocation</a>&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.array.html\">32</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.ConvertLocation.html\" title=\"trait xcm_executor::traits::conversion::ConvertLocation\">ConvertLocation</a>&lt;AccountId&gt; for <a class=\"struct\" href=\"xcm_builder/struct.GlobalConsensusConvertsFor.html\" title=\"struct xcm_builder::GlobalConsensusConvertsFor\">GlobalConsensusConvertsFor</a>&lt;UniversalLocation, AccountId&gt;"],["impl&lt;AccountId: Decode + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.ConvertLocation.html\" title=\"trait xcm_executor::traits::conversion::ConvertLocation\">ConvertLocation</a>&lt;AccountId&gt; for <a class=\"struct\" href=\"xcm_builder/struct.ParentIsPreset.html\" title=\"struct xcm_builder::ParentIsPreset\">ParentIsPreset</a>&lt;AccountId&gt;"],["impl&lt;ParaId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u32.html\">u32</a>&gt; + AccountIdConversion&lt;AccountId&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.ConvertLocation.html\" title=\"trait xcm_executor::traits::conversion::ConvertLocation\">ConvertLocation</a>&lt;AccountId&gt; for <a class=\"struct\" href=\"xcm_builder/struct.SiblingParachainConvertsVia.html\" title=\"struct xcm_builder::SiblingParachainConvertsVia\">SiblingParachainConvertsVia</a>&lt;ParaId, AccountId&gt;"],["impl&lt;AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.array.html\">32</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, Describe: <a class=\"trait\" href=\"xcm_builder/trait.DescribeLocation.html\" title=\"trait xcm_builder::DescribeLocation\">DescribeLocation</a>&gt; <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.ConvertLocation.html\" title=\"trait xcm_executor::traits::conversion::ConvertLocation\">ConvertLocation</a>&lt;AccountId&gt; for <a class=\"struct\" href=\"xcm_builder/struct.HashedDescription.html\" title=\"struct xcm_builder::HashedDescription\">HashedDescription</a>&lt;AccountId, Describe&gt;"],["impl&lt;Network: Get&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.70.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"xcm_builder/test_utils/enum.NetworkId.html\" title=\"enum xcm_builder::test_utils::NetworkId\">NetworkId</a>&gt;&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.array.html\">32</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.array.html\">32</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.ConvertLocation.html\" title=\"trait xcm_executor::traits::conversion::ConvertLocation\">ConvertLocation</a>&lt;AccountId&gt; for <a class=\"struct\" href=\"xcm_builder/struct.Account32Hash.html\" title=\"struct xcm_builder::Account32Hash\">Account32Hash</a>&lt;Network, AccountId&gt;"],["impl&lt;Network: Get&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.70.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"xcm_builder/test_utils/enum.NetworkId.html\" title=\"enum xcm_builder::test_utils::NetworkId\">NetworkId</a>&gt;&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.array.html\">32</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.array.html\">32</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.ConvertLocation.html\" title=\"trait xcm_executor::traits::conversion::ConvertLocation\">ConvertLocation</a>&lt;AccountId&gt; for <a class=\"struct\" href=\"xcm_builder/struct.AccountId32Aliases.html\" title=\"struct xcm_builder::AccountId32Aliases\">AccountId32Aliases</a>&lt;Network, AccountId&gt;"]],
"xcm_executor":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()