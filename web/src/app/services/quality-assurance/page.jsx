import React from "react";
import ServiceCard from "@/components/ServicesCard/ServiceCard";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ServicesBanner from "@/components/ServicesBanner/ServicesBanner";
const servicesData = [
  {
    imageSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/65fc0d15267de660e11a7a5f_image%2020.webp",
    services: [
      "Test Planning",
      "Test Case Development",
      "Test Execution",
      "Defect Reporting",
      "Regression Testing",
    ],
  },
];
const Description = [
  "Quality Assurance (QA) Testing is a critical phase in the software development lifecycle aimed at ensuring that software applications, websites, or digital products meet high-quality standards and perform as intended. This service involves systematically testing and validating various aspects of the software to identify defects, inconsistencies, and areas for improvement before the product is released to end-users. QA Testing is an essential service that contributes to the overall quality, reliability, and success of software applications and digital products. By thoroughly evaluating and fine-tuning the software, organizations can provide users with a superior and error-free experience while minimizing risks and costs associated with defects and failures.",
];
const benefits = [
  {
    title: "Bug Detection and Resolution",
    description:
      "QA Testing helps identify and address software defects and issues early in the development process, reducing the cost and effort required to fix them post-release.",
  },
  {
    title: "Improved Reliability",
    description:
      "Rigorous testing ensures that the software performs consistently and reliably across different environments, preventing unexpected crashes or errors.",
  },
  {
    title: "Enhanced User Satisfaction",
    description:
      "QA Testing contributes to delivering a seamless and error-free user experience, leading to higher user satisfaction and increased customer loyalty.",
  },
  {
    title: "Cost Savings",
    description:
      "Early detection and resolution of defects through QA Testing result in cost savings compared to addressing issues after the product is deployed, which can be significantly more expensive.",
  },
  {
    title: "Quality Assurance",
    description:
      "QA Testing ensures that the software meets quality standards and specifications, enhancing its credibility and trustworthiness among users and stakeholders.",
  },
  {
    title: "Timely Release",
    description:
      "Efficient testing processes help meet project timelines and release schedules, ensuring that products are delivered to market promptly.",
  },
  {
    title: "Compliance Assurance",
    description:
      "QA Testing helps ensure that the software complies with industry-specific regulations, security standards, and legal requirements, reducing the risk of non-compliance issues.",
  },
  {
    title: "Risk Mitigation",
    description:
      "Identifying and addressing potential risks and vulnerabilities before they become critical issues helps organizations minimize the impact of unforeseen problems and unexpected downtime.",
  },
];

const page = () => {
  return (
    <>
      <Navbar />
      <ServicesBanner
        title="QA Testing & Automation"
        description="Involves a systematic process of evaluating software applications or systems to identify and fix issues."
        servicedescription={Description}
      />
      <div className="">
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
