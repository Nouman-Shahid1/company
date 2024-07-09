import React from "react";
import ServiceCard from "@/components/ServicesCard/ServiceCard";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ServicesBanner from "@/components/ServicesBanner/ServicesBanner";
const servicesData = [
  {
    imageSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/65fc0dc6612a6f271c773f02_image%2024.webp",
    services: [
      "Discovery and Planning",
      "Design and User Experience",
      "Development",
      "Testing",
      "Deployment",
      "Maintenance and Updates",
    ],
  },
];
const Description = [
  "The WebCraft Solutions Limited's Mobile App Development Services encompasses building of this field encompasses various platforms, including iOS (Apple), Android (Google), and others, and it plays a crucial role in shaping the way people interact with technology in our increasingly mobile-driven world. Mobile developers work on designing, coding, testing, and optimizing mobile apps to provide users with seamless and efficient digital experiences on their handheld devices.",
];
const benefits = [
  {
    title: "Expanded Market Reach",
    description:
      "Mobile apps enable businesses to reach a broader audience as smartphones and tablets are ubiquitous and accessible to a large portion of the global population.",
  },
  {
    title: "Enhanced User Experience",
    description:
      "Mobile apps are designed to provide a user-friendly and intuitive experience, often leading to higher user engagement and customer satisfaction.",
  },
  {
    title: "Improved Brand Loyalty",
    description:
      "A well-designed and functional mobile app can foster brand loyalty and keep customers coming back for more.",
  },
  {
    title: "Increased Sales and Revenue",
    description:
      "Mobile apps can serve as a powerful sales and revenue channel through in-app purchases, subscriptions, and e-commerce functionalities.",
  },
  {
    title: "Access to Device Features",
    description:
      "Developers can leverage device-specific features like GPS, camera, and sensors to create innovative and personalized experiences.",
  },
  {
    title: "Offline Access",
    description:
      "Many mobile apps offer offline functionality, allowing users to access content and perform tasks even without an internet connection.",
  },
  {
    title: "Push Notifications",
    description:
      "Apps can send push notifications to users, keeping them informed, engaged, and prompting action.",
  },
  {
    title: "Data Analytics",
    description:
      "Mobile apps provide valuable data on user behavior, enabling businesses to make data-driven decisions and refine their strategies.",
  },
];

const page = () => {
  return (
    <>
      <Navbar />
      <ServicesBanner
        title="Mobile App Development"
        description="Creating captivating and user-friendly mobile applications that engage your audience and enhance your brand presence."
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
