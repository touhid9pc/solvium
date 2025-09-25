import WysiwygContent from "@/components/WysiwygContent";
import DocumentLayout from "@/layouts/DocumentLayout";
import React from "react";

const Glossary = () => {
  const content = `
            <p class="md:text-xl">Here’s a Solvium Glossary for you! This glossary holds references of common key terms that are used in our ecosystem, from our platform to documentation.</p><br/>
            
            <h2 class="font-bold md:text-xl">Staking</h2>
            <p class="md:text-xl">By staking, you are simply locking your digital assets to generate liquidity and stability for Solvium’s platform. Staking is a part of a bigger process that includes lending through Solvium, which brings back to you high rewards and APY.<br/>By staking stablecoins in Solvium's pools, investors not only secure high-yield potential but also contribute to the growth of an inclusive, borderless financial ecosystem.</p><br/>
            
            <h2 class="font-bold md:text-xl">Yield Farming (coming soon)</h2>
            <p class="md:text-xl">Yield farming refers to a strategy where users maximize their returns by providing liquidity to Solvium's upcoming yield-generating protocols. Solvium is welcoming early bird’s, who are often referred to as “liquidity farmers” who may receive additional rewards. Solvium is rewarding early bird contributions that help us build our community and ecosystem.</p><br/>
            
            <h2 class="font-bold md:text-xl">Vaults</h2>
            <p class="md:text-xl">Vaults are lending pools in Solvium. By staking, we bring to you optimized yield pools, which have an option of 6 months and 12 months. These are options stakers can choose from, with complete statistics and comparison on returns from both pools.<br/>Users then deposit their assets into these smart contract-secured vaults, which operate on fixed durations (6 months or 12 months). Both of these vaults are managed with risk strategies, and our technology is built to create balance and sustainable returns.<br/>Along with our lending pools, we will soon be bringing stakers lending vaults to create further security of assets.</p><br/>
            
            <h2 class="font-bold md:text-xl">APY (Annual Percentage Yield)</h2>
            <p class="md:text-xl">Annual Percentage Yield is calculated as per the return earned on deposited assets; these take into account our auto-compounding and re-lending strategies. Solvium’s automated compounding and repatriation of capital ensure that we bring out the maximum returns and utilize the earning potential of your assets.</p><br/>
            
            <h2 class="font-bold md:text-xl">Cooldown Period</h2>
            <p class="md:text-xl">The cooldown period is a mandatory wait time; this is usually set for users generally before they can withdraw their capital after their unstake or redemption request. A cooldown period works like a safeguard that ensures balance and stability of Solvium's pool. Liquidity shall be carefully monitored by our team, and the cooling period may vary depending on factors such as pool duration, user type, or protocol conditions.</p><br/>
            
            <h2 class="font-bold md:text-xl">Liquidity</h2>
            <p class="md:text-xl">As mentioned above, liquidity is carefully monitored by Solvium's backend team. Liquidity refers to the ease with which digital assets can bring in more potential or how easily can they be.<br/>Liquidity refers to how easily digital assets can be converted into other assets or used within Solvium's pools. By contributing liquidity, stakers provide the foundation for swaps, lending, and reward distribution across the ecosystem.</p><br/>
            
            <h2 class="font-bold md:text-xl">Governance (Coming Soon)</h2>
            <p class="md:text-xl">Solvium’s governance is user-oriented, as it gives them the power to vote and influence the platform’s future decisions. Holding and staking governance tokens helps investors earn voting rights, which allows them to participate in key protocol decisions such as pool strategies, reward allocations, and new feature rollouts.</p><br/>
            
            <h2 class="font-bold md:text-xl">Lending (Coming Soon)</h2>
            <p class="md:text-xl">Solvium's lending pools are here to enable investors to provide their held assets that can be powered by lending to MSME and rural borrowers. Lending is the biggest player in compounding and auto-compounding strategies that earn investors interest while creating financial inclusion and bridging credit gaps in the emerging markets.</p><br/>
            
            <h2 class="font-bold md:text-xl">Smart Contracts</h2>
            <p class="md:text-xl">Smart contracts are self-executing programs on the blockchain that enforce agreements automatically. At Solvium, they ensure that deposits, withdrawals, and rewards are handled securely, transparently, and without the need for intermediaries.</p><br/>
            
            <h2 class="font-bold md:text-xl">Rewards</h2>
            <p class="md:text-xl">Solvium rewards are simply the earnings and interest gained on the lending amount that investors have staked by participating in Solvium's lending pools. These include stablecoin staking results, yield farming incentives, and governance benefits, which highly depend on the choice of pools and the staking period. A more mature stake would yield higher rewards.</p><br/>
            
            <h2 class="font-bold md:text-xl">Risk Management</h2>
            <p class="md:text-xl">Like any other staking and lending platform, risk management at Solvium involves advanced financial strategies, on-chain monitoring, and expert oversight to ensure that yields remain stable. This is done to protect investor capital and ensure consistent high performance as well as compliant strategies.</p>
        `;

  return (
    <DocumentLayout>
      <WysiwygContent>{content}</WysiwygContent>
    </DocumentLayout>
  );
};

export default Glossary;
