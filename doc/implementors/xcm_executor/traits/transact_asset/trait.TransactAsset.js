(function() {var implementors = {
"polkadot_test_runtime":[["impl <a class=\"trait\" href=\"xcm_executor/traits/transact_asset/trait.TransactAsset.html\" title=\"trait xcm_executor::traits::transact_asset::TransactAsset\">TransactAsset</a> for <a class=\"struct\" href=\"polkadot_test_runtime/xcm_config/struct.DummyAssetTransactor.html\" title=\"struct polkadot_test_runtime::xcm_config::DummyAssetTransactor\">DummyAssetTransactor</a>"]],
"xcm_builder":[["impl&lt;Assets: Mutate&lt;AccountId&gt;, Matcher: <a class=\"trait\" href=\"xcm_executor/traits/token_matching/trait.MatchesFungibles.html\" title=\"trait xcm_executor::traits::token_matching::MatchesFungibles\">MatchesFungibles</a>&lt;Assets::AssetId, Assets::Balance&gt;, AccountIdConverter: <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.ConvertLocation.html\" title=\"trait xcm_executor::traits::conversion::ConvertLocation\">ConvertLocation</a>&lt;AccountId&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"xcm_builder/test_utils/trait.TransactAsset.html\" title=\"trait xcm_builder::test_utils::TransactAsset\">TransactAsset</a> for <a class=\"struct\" href=\"xcm_builder/struct.FungiblesTransferAdapter.html\" title=\"struct xcm_builder::FungiblesTransferAdapter\">FungiblesTransferAdapter</a>&lt;Assets, Matcher, AccountIdConverter, AccountId&gt;"],["impl&lt;Assets: Mutate&lt;AccountId&gt;, Matcher: <a class=\"trait\" href=\"xcm_executor/traits/token_matching/trait.MatchesFungibles.html\" title=\"trait xcm_executor::traits::token_matching::MatchesFungibles\">MatchesFungibles</a>&lt;Assets::AssetId, Assets::Balance&gt;, AccountIdConverter: <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.ConvertLocation.html\" title=\"trait xcm_executor::traits::conversion::ConvertLocation\">ConvertLocation</a>&lt;AccountId&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, CheckAsset: <a class=\"trait\" href=\"xcm_builder/trait.AssetChecking.html\" title=\"trait xcm_builder::AssetChecking\">AssetChecking</a>&lt;Assets::AssetId&gt;, CheckingAccount: Get&lt;AccountId&gt;&gt; <a class=\"trait\" href=\"xcm_builder/test_utils/trait.TransactAsset.html\" title=\"trait xcm_builder::test_utils::TransactAsset\">TransactAsset</a> for <a class=\"struct\" href=\"xcm_builder/struct.FungiblesMutateAdapter.html\" title=\"struct xcm_builder::FungiblesMutateAdapter\">FungiblesMutateAdapter</a>&lt;Assets, Matcher, AccountIdConverter, AccountId, CheckAsset, CheckingAccount&gt;"],["impl&lt;Assets: Mutate&lt;AccountId&gt;, Matcher: <a class=\"trait\" href=\"xcm_executor/traits/token_matching/trait.MatchesFungibles.html\" title=\"trait xcm_executor::traits::token_matching::MatchesFungibles\">MatchesFungibles</a>&lt;Assets::AssetId, Assets::Balance&gt;, AccountIdConverter: <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.ConvertLocation.html\" title=\"trait xcm_executor::traits::conversion::ConvertLocation\">ConvertLocation</a>&lt;AccountId&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, CheckAsset: <a class=\"trait\" href=\"xcm_builder/trait.AssetChecking.html\" title=\"trait xcm_builder::AssetChecking\">AssetChecking</a>&lt;Assets::AssetId&gt;, CheckingAccount: Get&lt;AccountId&gt;&gt; <a class=\"trait\" href=\"xcm_builder/test_utils/trait.TransactAsset.html\" title=\"trait xcm_builder::test_utils::TransactAsset\">TransactAsset</a> for <a class=\"struct\" href=\"xcm_builder/struct.FungiblesAdapter.html\" title=\"struct xcm_builder::FungiblesAdapter\">FungiblesAdapter</a>&lt;Assets, Matcher, AccountIdConverter, AccountId, CheckAsset, CheckingAccount&gt;"],["impl&lt;Currency: Currency&lt;AccountId&gt;, Matcher: <a class=\"trait\" href=\"xcm_executor/traits/token_matching/trait.MatchesFungible.html\" title=\"trait xcm_executor::traits::token_matching::MatchesFungible\">MatchesFungible</a>&lt;Currency::Balance&gt;, AccountIdConverter: <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.ConvertLocation.html\" title=\"trait xcm_executor::traits::conversion::ConvertLocation\">ConvertLocation</a>&lt;AccountId&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, CheckedAccount: Get&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.70.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;(AccountId, <a class=\"enum\" href=\"xcm_builder/enum.MintLocation.html\" title=\"enum xcm_builder::MintLocation\">MintLocation</a>)&gt;&gt;&gt; <a class=\"trait\" href=\"xcm_builder/test_utils/trait.TransactAsset.html\" title=\"trait xcm_builder::test_utils::TransactAsset\">TransactAsset</a> for <a class=\"struct\" href=\"xcm_builder/struct.CurrencyAdapter.html\" title=\"struct xcm_builder::CurrencyAdapter\">CurrencyAdapter</a>&lt;Currency, Matcher, AccountIdConverter, AccountId, CheckedAccount&gt;"],["impl&lt;Assets: Transfer&lt;AccountId&gt;, Matcher: <a class=\"trait\" href=\"xcm_executor/traits/token_matching/trait.MatchesNonFungibles.html\" title=\"trait xcm_executor::traits::token_matching::MatchesNonFungibles\">MatchesNonFungibles</a>&lt;Assets::CollectionId, Assets::ItemId&gt;, AccountIdConverter: <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.ConvertLocation.html\" title=\"trait xcm_executor::traits::conversion::ConvertLocation\">ConvertLocation</a>&lt;AccountId&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"xcm_builder/test_utils/trait.TransactAsset.html\" title=\"trait xcm_builder::test_utils::TransactAsset\">TransactAsset</a> for <a class=\"struct\" href=\"xcm_builder/struct.NonFungiblesTransferAdapter.html\" title=\"struct xcm_builder::NonFungiblesTransferAdapter\">NonFungiblesTransferAdapter</a>&lt;Assets, Matcher, AccountIdConverter, AccountId&gt;"],["impl&lt;Assets: Mutate&lt;AccountId&gt; + Transfer&lt;AccountId&gt;, Matcher: <a class=\"trait\" href=\"xcm_executor/traits/token_matching/trait.MatchesNonFungibles.html\" title=\"trait xcm_executor::traits::token_matching::MatchesNonFungibles\">MatchesNonFungibles</a>&lt;Assets::CollectionId, Assets::ItemId&gt;, AccountIdConverter: <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.ConvertLocation.html\" title=\"trait xcm_executor::traits::conversion::ConvertLocation\">ConvertLocation</a>&lt;AccountId&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>, CheckAsset: <a class=\"trait\" href=\"xcm_builder/trait.AssetChecking.html\" title=\"trait xcm_builder::AssetChecking\">AssetChecking</a>&lt;Assets::CollectionId&gt;, CheckingAccount: Get&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.70.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;AccountId&gt;&gt;&gt; <a class=\"trait\" href=\"xcm_builder/test_utils/trait.TransactAsset.html\" title=\"trait xcm_builder::test_utils::TransactAsset\">TransactAsset</a> for <a class=\"struct\" href=\"xcm_builder/struct.NonFungiblesAdapter.html\" title=\"struct xcm_builder::NonFungiblesAdapter\">NonFungiblesAdapter</a>&lt;Assets, Matcher, AccountIdConverter, AccountId, CheckAsset, CheckingAccount&gt;"],["impl&lt;Assets: Mutate&lt;AccountId&gt;, Matcher: <a class=\"trait\" href=\"xcm_executor/traits/token_matching/trait.MatchesNonFungibles.html\" title=\"trait xcm_executor::traits::token_matching::MatchesNonFungibles\">MatchesNonFungibles</a>&lt;Assets::CollectionId, Assets::ItemId&gt;, AccountIdConverter: <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.ConvertLocation.html\" title=\"trait xcm_executor::traits::conversion::ConvertLocation\">ConvertLocation</a>&lt;AccountId&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>, CheckAsset: <a class=\"trait\" href=\"xcm_builder/trait.AssetChecking.html\" title=\"trait xcm_builder::AssetChecking\">AssetChecking</a>&lt;Assets::CollectionId&gt;, CheckingAccount: Get&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.70.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;AccountId&gt;&gt;&gt; <a class=\"trait\" href=\"xcm_builder/test_utils/trait.TransactAsset.html\" title=\"trait xcm_builder::test_utils::TransactAsset\">TransactAsset</a> for <a class=\"struct\" href=\"xcm_builder/struct.NonFungiblesMutateAdapter.html\" title=\"struct xcm_builder::NonFungiblesMutateAdapter\">NonFungiblesMutateAdapter</a>&lt;Assets, Matcher, AccountIdConverter, AccountId, CheckAsset, CheckingAccount&gt;"]],
"xcm_executor":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()