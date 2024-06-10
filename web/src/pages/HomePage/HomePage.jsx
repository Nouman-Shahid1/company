import React from "react";
import MainSection from "./MainSection";
import BusinessPlanSection from "./BusineesPlan";
import ClientsSection from "./ClientSection";
import Services from "./Services";
import BusinessGrowthSection from "./BusinessGrowth";
import ProjectsSection from "./ProjectSection";
import Testimonial from "./Testimonial";
import Apponitment from "./AppointmentSection";
import TeamSection from "./Team";
import BlogSection from "./BlogSection";
import NewsletterSection from "./NewsLetters";
function HomePage() {
  return (
    <div>
      <MainSection />
      <BusinessPlanSection />
      <ClientsSection />
      <Services />
      <BusinessGrowthSection />
      {/* <ProjectsSection /> */}
      <Testimonial />
      <Apponitment />
      <TeamSection />
      <BlogSection />
      <NewsletterSection />
    </div>
  );
}

export default HomePage;
