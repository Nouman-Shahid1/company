import React from "react";
import ServiceCard from "@/components/ServicesCard/ServiceCard";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ServicesBanner from "@/components/ServicesBanner/ServicesBanner";
const servicesData = [
  {
    imageSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6602fb752b79f717154972e6_Dynamic%20365%20Main.webp",
    heading: "Dynamics 365 Finance & Operations Services",
    services: [
      "ERP Consultancy",
      "ERP Upgrade",
      "Enhancements and customizations",
      "Integrations with other platforms",
      "Support & Business Continuity",
    ],
    heading2: "Dynamics 365 CE/CRM Services",
    services2: [
      "CE/CRM Consultancy",
      "CE/CRM Upgrade",
      "CE/CRM Enhancements and customizations",
      "Integrations with other platforms",
      "Support & Business Continuity",
    ],
  },
];
const Description = [
  "Empower your business with our specialized Microsoft Dynamics 365 solutions. From optimizing operations with Dynamics 365 Finance & Operations to enhancing customer relationships with Dynamics 365 CE/CRM, our tailored services drive success in today's dynamic market.",
];
const benefits = [
  {
    title: "Customization",
    description:
      "Tailored to fit unique business requirements, whether through modifying existing features or building custom applications.",
  },
  {
    title: "Integration",
    description:
      "Seamlessly integrates with Microsoft products like Office 365, Power BI, and Azure, streamlining workflows and enhancing collaboration.",
  },
  {
    title: "Scalability",
    description:
      "Dynamics 365 adapts to business growth seamlessly, catering to both startups and large enterprises.",
  },
  {
    title: "Insights and Analytics",
    description:
      "Leverages AI and machine learning for actionable insights, aiding decision-making and driving business growth.",
  },
  {
    title: "Enhanced Customer Engagement",
    description:
      "Builds strong customer relationships through personalized interactions and exceptional service, fostering loyalty and satisfaction.",
  },
  {
    title: "Operational Efficiency",
    description:
      "Automates core business processes, including finance and supply chain, reducing costs and accelerating time-to-market.",
  },
  {
    title: "Flexibility and Mobility",
    description:
      "Enables access to data and applications from anywhere, empowering remote work and enhancing collaboration.",
  },
];

const Page = () => {
  return (
    <>
      <Navbar />
      <ServicesBanner
        title="Dynamics 365 ERP"
        description="With a diversified range of applications lying under Microsoft Dynamics 365, we provide result-oriented solutions to businesses in just 48 hours."
        servicedescription={Description}
      />
      <div className="">
        {servicesData.map((data, index) => (
          <ServiceCard
            key={index}
            heading={data.heading}
            heading2={data.heading2}
            imageSrc={data.imageSrc}
            services={data.services}
            services2={data.services2}
            benefits={benefits}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Page;
