import React from "react";
import MainSection from "./MainSection";
import BusinessPlanSection from "./BusineesPlan";
import ClientsSection from "./ClientSection";
import Services from "./Services";
import BusinessGrowthSection from "./BusinessGrowth";
import ProjectsSection from "./ProjectSection";

function HomePage() {
  return (
    <div>
      <MainSection />
      <BusinessPlanSection />
      <ClientsSection />
      <Services />
      <BusinessGrowthSection />
      <ProjectsSection />
    </div>
  );
}

export default HomePage;
