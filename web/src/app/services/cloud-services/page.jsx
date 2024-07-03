import React from "react";
import ServiceCard from "@/components/ServicesCard/ServiceCard";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ServicesBanner from "@/components/ServicesBanner/ServicesBanner";
const servicesData = [
  {
    imageSrc: "https://stl.tech/wp-content/uploads/2022/12/CaaS.jpg",
    services: [
      "Cloud Strategy and Planning",
      "Cloud Migration",
      "Cloud Management and Optimization",
      "Cloud Security",
      "Disaster Recovery and Backup",
    ],
  },
];
const Description = [
  "Cloud Services are essential for modern organizations aiming to leverage the power of cloud computing to enhance their operations. This service encompasses a wide range of solutions, including cloud strategy, migration, management, and security. By adopting cloud services, businesses can achieve greater scalability, flexibility, and cost-efficiency.",
  "The process involves careful planning and execution to ensure seamless migration of applications and data to the cloud. Once migrated, ongoing management and optimization of cloud resources ensure that the infrastructure remains efficient and cost-effective. Security measures are also a critical component, protecting data and applications from threats. By utilizing cloud services, organizations can improve their operational efficiency, reduce costs, and stay competitive in a rapidly evolving digital landscape.",
];
const benefits = [
  {
    title: "Scalability",
    description:
      "Cloud computing allows businesses to scale resources up or down based on demand, ensuring they can handle peak loads and minimize costs during low-demand periods.",
  },
  {
    title: "Cost Efficiency",
    description:
      "By leveraging cloud services, businesses can reduce the need for physical infrastructure, leading to significant cost savings on hardware, maintenance, and energy.",
  },
  {
    title: "Flexibility and Mobility",
    description:
      "Cloud computing provides employees with the ability to access data and applications from anywhere, enhancing mobility and remote work capabilities.",
  },
  {
    title: "Disaster Recovery",
    description:
      "Cloud services offer robust disaster recovery solutions, ensuring business continuity by backing up data and applications in secure, off-site locations.",
  },
  {
    title: "Automatic Updates",
    description:
      "Cloud providers handle regular software updates and security patches, ensuring that systems are always up-to-date without the need for manual intervention.",
  },
  {
    title: "Collaboration",
    description:
      "Cloud computing enhances collaboration by enabling multiple users to work on the same documents and projects simultaneously, regardless of their location.",
  },
  {
    title: "Security",
    description:
      "Cloud providers invest heavily in security measures, offering advanced protection against cyber threats, data breaches, and ensuring compliance with industry standards.",
  },
  {
    title: "Environmentally Friendly",
    description:
      "Using cloud services can reduce the carbon footprint of an organization by optimizing energy usage and reducing the need for physical hardware.",
  },
];

const page = () => {
  return (
    <>
      <Navbar />
      <ServicesBanner
        title="Cloud Services"
        description="Providing comprehensive cloud solutions including strategy, migration, management, and security to ensure seamless and scalable operations."
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
