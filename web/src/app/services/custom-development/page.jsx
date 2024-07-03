import React from "react";
import ServiceCard from "@/components/ServicesCard/ServiceCard";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ServicesBanner from "@/components/ServicesBanner/ServicesBanner";
const servicesData = [
  {
    imageSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/66016a3fea0cd203786594bd_Software%20Development%20Service.webp",
    services: [
      "Requirements Gathering",
      "Design and Planning",
      "Development",
      "Testing",
      "Deployment",
    ],
  },
];
const Description = [
  "Custom software development is the process of creating tailored software applications or solutions designed to meet specific business needs, requirements, and objectives.",
  "Unlike off-the-shelf software, custom software is built from the ground up, considering unique workflows, processes, and goals of an organization. This approach ensures that the software aligns perfectly with the client's operations and can be optimized for efficiency, scalability, and user experience. Custom software can address a wide range of purposes, from automating internal processes to creating customer-facing applications, and it is characterized by its adaptability, scalability, and the ability to evolve as business needs change. This tailored approach empowers organizations to achieve a competitive edge, streamline operations, and innovate in response to evolving market demands.",
];
const benefits = [
  {
    title: "Tailored to Specific Needs",
    description:
      "Custom software is designed to address your organization's unique requirements and challenges, ensuring a perfect fit for your operations.",
  },
  {
    title: "Enhanced Efficiency",
    description:
      "Custom solutions streamline processes, automate tasks, and eliminate inefficiencies, boosting productivity and reducing manual work.",
  },
  {
    title: "Scalability",
    description:
      "As your business grows, custom software can easily adapt and scale to accommodate increased data, users, and functionality.",
  },
  {
    title: "Cost Savings",
    description:
      "While the initial investment may be higher, custom software often leads to long-term cost savings by reducing the need for multiple third-party applications and licenses.",
  },
  {
    title: "Competitive Advantage",
    description:
      "Custom software can provide a competitive edge by enabling innovation, quicker response to market changes, and differentiation from competitors.",
  },
  {
    title: "Data Security",
    description:
      "You have control over security measures, ensuring that sensitive data is protected according to your organization's standards and compliance requirements.",
  },
  {
    title: "Integration",
    description:
      "Custom software can be seamlessly integrated with existing systems and applications, optimizing data flow and reducing data silos.",
  },
  {
    title: "Maintenance and Support",
    description:
      "You have the flexibility to choose ongoing maintenance and support options, ensuring that your software remains up-to-date and functional.",
  },
  {
    title: "Ownership",
    description:
      "You own the intellectual property of the custom software, giving you full control over its use and future development.",
  },
];

const page = () => {
  return (
    <>
      <Navbar />
      <ServicesBanner
        title="Custom Development"
        description="Tailor-made software solutions designed to align seamlessly with your unique business needs and drive productivity to new heights."
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
