import React from "react";
import ServiceCard from "@/components/ServicesCard/ServiceCard";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ServicesBanner from "@/components/ServicesBanner/ServicesBanner";
const servicesData = [
  {
    imageSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/66427edba5b5da089b12be0e_generative%20AI.webp",
    services: [
      "Needs Assessment",
      "Model Training and Customization",
      "Integration and Deployment",
      "Continuous Improvement and Optimization",
      "Support and Maintenance",
    ],
  },
];
const Description = [
  "Generative AI involves leveraging advanced algorithms and machine learning techniques to generate content, designs, solutions, and more. The WebCraft Solutions Limited's Generative AI services help businesses unlock new levels of creativity and efficiency by automating content creation, optimizing workflows, and providing unique data-driven insights.",
  "Generative AI can be applied to various domains, including text generation, image synthesis, product design, and more. Our services are tailored to meet the specific needs of your business, ensuring that the AI solutions we provide align with your goals and drive significant value.",
];
const benefits = [
  {
    title: "Enhanced Creativity",
    description:
      "Generative AI can produce unique and innovative content, designs, and solutions that may not be conceived through traditional methods.",
  },
  {
    title: "Improved Efficiency",
    description:
      "Automating content creation and other tasks reduces manual effort, speeds up processes, and allows your team to focus on higher-value activities.",
  },
  {
    title: "Scalability",
    description:
      "Generative AI models can be scaled to handle large volumes of data and generate outputs at scale, ensuring your business can meet growing demands.",
  },
  {
    title: "Cost Savings",
    description:
      "By automating repetitive tasks, Generative AI helps reduce operational costs and increases overall productivity.",
  },
  {
    title: "Personalization",
    description:
      "AI models can generate personalized content and solutions tailored to individual user preferences, enhancing customer engagement and satisfaction.",
  },
  {
    title: "Data-Driven Insights",
    description:
      "Generative AI provides valuable insights by analyzing large datasets and generating predictive models, helping businesses make informed decisions.",
  },
  {
    title: "Innovation",
    description:
      "Implementing Generative AI can give your business a competitive edge by fostering innovation and allowing you to stay ahead of industry trends.",
  },
];

const page = () => {
  return (
    <>
      <Navbar />
      <ServicesBanner
        title="Generative AI"
        description="Harness the power of Generative AI to revolutionize your business processes and create innovative solutions."
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
