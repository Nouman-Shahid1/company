import React from "react";
import MainSection from "./MainSection";
import BusinessPlanSection from "./BusineesPlan";
import ClientsSection from "./ClientSection";

function HomePage() {
  return (
    <div>
      <MainSection />
      <BusinessPlanSection />
      <ClientsSection/>
    </div>
  );
}

export default HomePage;
