import React from "react";
import IntroSection from "../../components/IntroSection";
import AboutImage from "../../assets/images/about.png";

function AboutPage() {
  const sectionProps = {
    backgroundImage: AboutImage,
    title: "About Us",
    subtitle: "Know About Us",
    description:
      "Collaboratively administrate empowered markets plug and play networks dynamically procrastinate.",
  };

  return (
    <div>
      <IntroSection {...sectionProps} />
    </div>
  );
}

export default AboutPage;
