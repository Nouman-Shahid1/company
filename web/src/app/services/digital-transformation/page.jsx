import React from "react";
import ServiceCard from "@/components/ServicesCard/ServiceCard";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ServicesBanner from "@/components/ServicesBanner/ServicesBanner";
const servicesData = [
  {
    imageSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/65fc0dae7c049f14eee5e88b_image%2036.webp",
    services: [
      "Assessment and Strategy Development",
      "Technology Evaluation",
      "Process Optimization",
      "Change Management",
      "Technology Implementation",
      "Data Analytics and Insights",
    ],
  },
];
const Description = [
  "Digital Transformation Consulting is a strategic process that helps organizations harness the full potential of modern digital technologies to optimize operations, enhance customer experiences, and drive innovation. Through a comprehensive assessment of current systems, workflows, and objectives, digital transformation consultants identify opportunities for leveraging technology to achieve business goals. They then develop and implement tailored strategies that encompass technology adoption, process optimization, and cultural change. This holistic approach ensures that organizations can adapt to the evolving digital landscape, stay competitive, and meet the demands of a digitally savvy market. Digital transformation consulting empowers businesses to thrive in the digital age, facilitating growth, efficiency, and resilience.",
];
const benefits = [
  {
    title: "Strategic Alignment",
    description:
      "Digital transformation consulting helps align technology initiatives with your organization's overarching business strategy, ensuring that technology investments support your long-term goals.",
  },
  {
    title: "Operational Efficiency",
    description:
      "Through process optimization and automation, digital transformation can streamline operations, reduce manual tasks, and enhance efficiency, leading to cost savings and improved productivity.",
  },
  {
    title: "Enhanced Customer Experience",
    description:
      "By leveraging digital technologies, organizations can create seamless and personalized customer experiences, leading to increased customer satisfaction and loyalty.",
  },
  {
    title: "Innovation and Competitiveness",
    description:
      "Digital transformation fosters a culture of innovation, enabling organizations to adapt to market changes more quickly, stay competitive, and seize new opportunities.",
  },
  {
    title: "Data-Driven Decision-Making",
    description:
      "Digital transformation provides access to valuable data insights, empowering data-driven decision-making and enabling organizations to identify trends and opportunities.",
  },
];

const page = () => {
  return (
    <>
      <Navbar />
      <ServicesBanner
        title="Digital Transformation"
        description="Unleashing the full potential of your business through expert guidance and strategic implementation of cutting-edge technologies."
        servicedescription={Description}
      />
      <div className="container mx-auto py-6">
        {servicesData.map((data, index) => (
          <ServiceCard
            key={index}
            imageSrc={data.imageSrc}
            services={data.services}
            benefits={benefits}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default page;
