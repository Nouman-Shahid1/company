import React from "react";
import MainSection from "./MainSection";
import BusinessPlanSection from "./BusineesPlan";
import ClientsSection from "./ClientSection";
import Services from "./Services";
import BusinessGrowthSection from "./BusinessGrowth";
import ProjectsSection from "./ProjectSection";
import Testimonial from "./Testimonial";
function HomePage() {
  return (
    <div>
      <MainSection />
      <BusinessPlanSection />
      <ClientsSection />
      <Services />
      <BusinessGrowthSection />
      <ProjectsSection />
      <Testimonial/>
    </div>
  );
}

export default HomePage;
