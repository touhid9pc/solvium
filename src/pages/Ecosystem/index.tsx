import WysiwygContent from "@/components/WysiwygContent";
import DocumentLayout from "@/layouts/DocumentLayout";

const Ecosystem = () => {
  const content = `
            <p class="md:text-xl">Solvium is the first Real-World Asset (RWA) backed DeFi protocol designed to bridge the $819B+ rural credit gap in emerging markets.</p><br/>

            <p class="md:text-xl">Built on the proven legacy of 72 Networks, which has delivered 7+ years of operations, 15M+ customers, and 1.5M+ field agents, Solvium combines AI-driven credit assessments and blockchain-powered lending to create a transparent, inclusive, and yield-generating ecosystem.</p><br/>

            <p class="md:text-xl">Here are a few key features of Solvium!</p><br/>

            <h2 class="font-bold md:text-xl">RWA-Backed Lending</h2>
            <p class="md:text-xl">Goods deployed to real borrowers in rural MSME and emerging market sectors. These goods are lent, and the repayment is generated on a monthly basis through 72 Networks</p><br/>

            <h2 class="font-bold md:text-xl">AI + Blockchain</h2>
            <p class="md:text-xl">Smart credit underwriting with 45+ parameters and fully transparent fund tracking</p><br/>

            <h2 class="font-bold md:text-xl">Sustainable Yield</h2>
            <p class="md:text-xl">Stakers earn up to 15% APY, backed by interest income from real-world credit demand, using compounding strategies.</p><br/>

            <h2 class="font-bold md:text-xl">Global-Scale Reach</h2>
            <p class="md:text-xl">Capital deployed across 72 networks, with future plans of expansion into Africa, South America, and Southeast Asia.</p><br/>
        `;

  return (
    <DocumentLayout>
      <WysiwygContent>{content}</WysiwygContent>
    </DocumentLayout>
  );
};

export default Ecosystem;
