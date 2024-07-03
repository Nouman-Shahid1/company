import React from "react";
import ServiceCard from "@/components/ServicesCard/ServiceCard";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ServicesBanner from "@/components/ServicesBanner/ServicesBanner";
const servicesData = [
  {
    imageSrc:
      "https://recipe.de/wp-content/uploads/AdobeStock_170263847_Support-scaled.jpg   ",
    services: [
      "Customer Support",
      "Technical Support",
      "Back Office Services",
      "Telemarketing Services",
      "Data Entry Services",
    ],
  },
];
const Description = [
  "Business Process Outsourcing (BPO) Services are designed to help organizations improve efficiency and reduce operational costs by outsourcing non-core business functions. This service includes customer support, technical support, back office services, telemarketing, and data entry. By leveraging BPO services, companies can focus on their core competencies while benefiting from the expertise and efficiency of specialized service providers.",
  "BPO providers utilize advanced technologies and best practices to deliver high-quality services, ensuring that business processes are handled efficiently and effectively. This leads to improved customer satisfaction, streamlined operations, and significant cost savings. In an increasingly competitive market, BPO services offer a strategic advantage by allowing businesses to adapt quickly to changing demands and maintain a high level of service quality.",
];
const benefits = [
  {
    title: "Cost Reduction",
    description:
      "BPO helps organizations reduce operational costs by outsourcing non-core business processes to specialized service providers.",
  },
  {
    title: "Focus on Core Activities",
    description:
      "Outsourcing allows companies to focus on their core competencies and strategic initiatives, while routine tasks are handled by external experts.",
  },
  {
    title: "Access to Expertise",
    description:
      "BPO providers offer specialized knowledge and expertise in specific business processes, enhancing the quality and efficiency of outsourced functions.",
  },
  {
    title: "Scalability and Flexibility",
    description:
      "BPO services can be scaled up or down based on business needs, providing flexibility to adapt to changing market conditions and demands.",
  },
  {
    title: "Improved Efficiency",
    description:
      "By leveraging the best practices and advanced technologies of BPO providers, organizations can improve process efficiency and productivity.",
  },
  {
    title: "Risk Management",
    description:
      "BPO providers can help manage and mitigate risks associated with specific business processes, ensuring compliance with regulations and industry standards.",
  },
  {
    title: "Enhanced Customer Service",
    description:
      "Outsourcing customer service functions to specialized providers can improve response times, customer satisfaction, and overall service quality.",
  },
  {
    title: "Innovation and Technology",
    description:
      "BPO providers often invest in the latest technologies and innovations, giving businesses access to cutting-edge solutions without the need for significant capital investment.",
  },
];

const page = () => {
  return (
    <>
      <Navbar />
      <ServicesBanner
        title="Business Process Outsourcing"
        description="Offering a wide range of business process outsourcing services to enhance efficiency, reduce costs, and improve customer satisfaction."
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
