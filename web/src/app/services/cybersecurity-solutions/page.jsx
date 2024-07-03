import React from "react";
import ServiceCard from "@/components/ServicesCard/ServiceCard";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ServicesBanner from "@/components/ServicesBanner/ServicesBanner";
const servicesData = [
  {
    imageSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/66016a84022f657f3d37fc30_Cybersecurity%20Service.webp",
    services: [
      "Firewalls",
      "Intrusion Detection and Prevention Systems (IDPS)",
      "Antivirus and Anti-Malware Software",
      "Encryption",
      "Authentication and Access Control",
      "Security Information and Event Management (SIEM)",
    ],
  },
];
const Description = [
  "Cybersecurity solutions encompass a set of comprehensive strategies, tools, practices, and technologies designed to safeguard digital systems, networks, data, and information from unauthorized access, cyberattacks, and threats.",
  "These solutions are critical in today's interconnected and digitalized world, where organizations face an increasing number of cybersecurity risks.",
  "The WebCraft Solutions Limited provides services to protect sensitive data, preserve the confidentiality, integrity, and availability of digital assets, and ensure the continued operation of systems and services in the face of evolving cyber threats.",
];
const benefits = [
  {
    title: "Data Protection",
    description:
      "Cybersecurity solutions safeguard sensitive data, preventing unauthorized access, theft, or breaches.",
  },
  {
    title: "Threat Prevention",
    description:
      "They proactively detect and prevent various cyber threats, including malware, phishing, and ransomware attacks.",
  },
  {
    title: "Business Continuity",
    description:
      "By protecting systems and data, cybersecurity solutions help ensure uninterrupted business operations.",
  },
  {
    title: "Compliance",
    description:
      "They assist organizations in meeting regulatory and industry-specific cybersecurity compliance requirements.",
  },
  {
    title: "Reputation Management",
    description:
      "Effective cybersecurity preserves an organization's reputation by preventing data breaches and security incidents.",
  },
  {
    title: "Cost Savings",
    description:
      "Preventing cyberattacks and data breaches can save organizations significant financial losses.",
  },
];

const page = () => {
  return (
    <>
      <Navbar />
      <ServicesBanner
        title="Cybersecurity Solutions"
        description="Safeguarding your invaluable digital assets and fortifying your online against the relentless and ever-evolving global landscape of cyber threats."
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
