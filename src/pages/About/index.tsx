import WysiwygContent from "@/components/WysiwygContent";
import DocumentLayout from "@/layouts/DocumentLayout";

const About = () => {
  const content = `
            <h2 class="font-bold md:text-xl">Welcome to Solvium</h2><br />
            <p class="md:text-xl">Hello there! Welcome to Solvium!</p><br />
            <p class="md:text-xl">
                If you have come seeking a staking and lending solution that fits right to your wealth creation goals, you are at the right place. Solvium is here to redefine the financial ecosystem by creating a more inclusive future. We are bringing the best for DeFi and giving it purpose. Our blockchain rails unlock the highest potential of your digital assets, while our compounding strategies work to bring you high returns. With transparency, compliance, and security at its heart, Solvium is bringing the next generation of staking to you.
            </p><br />
            <p class="md:text-xl">
                Investors often seek smarter and sustainable returns, but Solvium is more than just smart profits; it now brings you purpose. While you stake and make investments, the capital sits idle and locked away. Why not use it where it is needed so that economic growth can smoothly flow in emerging markets? Through Solvium, communities neglected by conventional lending institutions can finally be a part of an inclusive ecosystem. We are creating a larger cycle of growth, empowering MSMEs and upcountry communities by bringing them access to credit, while bringing back stable, reliable, and high-potential yields to you.
            </p><br />
            <p class="md:text-xl">
                Solvium’s protocol runs on trust, clarity, and cutting-edge technology. Solvium is driven by innovative solutions that optimize blockchain, DeFi, and risk management strategies to ensure smooth operations. Our lending pools, transactions, and governance provide investors additional security.
            </p><br />
            <p class="md:text-xl">
                Solvium is not just staking; it is the start of a new staking era. We have additionally integrated features like instant token swaps, decentralized governance, and upcoming on-chain lending. We’re creating a borderless ecosystem where investors can participate in every layer of the financial future. Whether you are a first-time digital investor or an institution, Solvium is designed to make wealth creation simple, rewarding, and accessible.
            </p>
        `;

  return (
    <DocumentLayout>
      <WysiwygContent>{content}</WysiwygContent>
    </DocumentLayout>
  );
};

export default About;
