import React from "react";
import MainSection from "./MainSection";
import BusinessPlanSection from "./BusineesPlan";
import ClientsSection from "./ClientSection";
import Services from "./Services";

function HomePage() {
  return (
    <div>
      <MainSection />
      <BusinessPlanSection />
      <ClientsSection />
      <Services />
    </div>
  );
}

export default HomePage;
