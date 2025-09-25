import WysiwygContent from "@/components/WysiwygContent";
import DocumentLayout from "@/layouts/DocumentLayout";

const CDM = () => {
  const content = `<h2 class="font-bold md:text-xl">Staking Capital</h2>
            <p class="md:text-xl">The staking journey at Solvium starts when investors stake their digital assets in Solvium’s decentralized lending pools for 6 months or 12 months with their chosen stablecoins. These assets are then locked within Solvium's stablecoin, a portion of which is further converted into fiat currency. The off-ramp strategy helps Solvium directly deploy capital to MSMEs and rural borrowers via the 72 Networks route and partnerships with NBFCs. By doing so, Solvium is creating financial inclusion and is set to bridge a vast rural credit gap.</p><br />

            <h2 class="font-bold md:text-xl">Distribution Across 72 Networks</h2>
            <p class="md:text-xl">Solvium’s API-linked platform helps the staked funds flow into the network of trusted partners established by 72 Networks that includes NBFCs (Non-Banking Financial Companies) and MFIs (Microfinance Institutions). These MFIs are facilitators of credit and bring back the customer requirements to 72 Networks, who act as the last-mile distributor with their ground-level agent ecosystem. This system is linked to Solvium's API, helping give real-time updates to stakers, as well as ensuring that credit reaches borrowers seamlessly.</p>
            <p class="md:text-xl">Solvium is creating AI-driven credit and risk assessments that generate a socio-economic protocol score based on 45+ assessment parameters. This system evaluates borrowers and keeps the data on-chain, adding to safe and scalable results. Solvium is built for inclusive and risk-conscious lending.</p><br />

            <h2 class="font-bold md:text-xl">Yield Generation</h2>
            <p class="md:text-xl">Having deployed the funds to borrowers, 72 Networks' successful infrastructure of 1.5 million ground-level agents collects the repayment and interest on loans on a monthly basis. These returns are further allocated to three different strategies. One of them is routed back to Solvium’s pools to create steady returns and income. The other is deployed into Solvium’s insurance pools, which reduce loss risk and help absorb potential defaults. The third portion is re-deployed or repatriated into the markets as credit loans in order to compound the returns and generate a higher yield.</p><br />

            <h2 class="font-bold md:text-xl">Return to Stakers</h2>
            <p class="md:text-xl">The interest, compounded returns, and rewards are brought back to Solvium after completion of the lending process. These repayments flow back into staking pools using our highly innovative and transparent technology. These returns are distributed proportionally among stakers in the form of APY (Annual Percentage Yield).</p><br />
        `;

  return (
    <DocumentLayout>
      <WysiwygContent>{content}</WysiwygContent>
    </DocumentLayout>
  );
};

export default CDM;
