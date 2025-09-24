import DashboardLayout from "@/layouts/DashboardLayout";
import DocumentLayout from "@/layouts/DocumentLayout";
import React from "react";

const About = () => {
  const content = ` <h2>Welcome to Solvium</h2>
    <p><strong>Hello there! Welcome to Solvium!</strong></p>
    <p>
      If you have come seeking a staking and lending solution that fits right to your
      wealth creation goals, you are at the right place. Solvium is here to redefine
      the financial ecosystem...
    </p>`;

  return (
    <div
      className="prose prose-invert max-w-none text-white"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default About;
