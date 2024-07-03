"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
const services = [
  {
    title: "Web Development",
    description:
      "Deliver high-quality web development, design and functionality tailored for your business.",
    imgSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6671de247c0baad125ec99be_Web%20Development.png",
    imgAlt: "Web Development Icon",
    path: "/services/web-development",
  },
  {
    title: "Digital Transformation",
    description:
      "Digitize, automate and accelerate your business operations through digital transformation.",
    imgSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6671de4472f466c6ec3a3300_Digital%20Transformation.png",
    imgAlt: "Digital Transformation Icon",
    path: "/services/digital-transformation",
  },
  {
    title: "Generative AI",
    description:
      "Harness Generative AI and new technologies to innovate, automate, and stay ahead of the competition.",
    imgSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6671ddfeb123a3a3d48768f6_Generative%20AI.png",
    imgAlt: "Generative AI Icon",
    path: "/services/generative-ai",
  },
  {
    title: "Mobile App Development",
    description:
      "Make your mobile app stand out from the crowd with our Android and iOS development.",
    imgSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6671de62c40da9ba7ef7af9d_Mobile%20App%20Development.png",
    imgAlt: "Mobile App Development Icon",
    path: "/services/mobile-app-development",
  },
  {
    title: "Custom Development",
    description:
      "Get custom software perfectly built for your business to boost productivity and efficiency.",
    imgSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6671de50483002553c942ae8_Custom%20Software%20Development.png",
    imgAlt: "Custom Development Icon",
    path: "/services/custom-development",
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Keep your digital assets safe and protect your business from threats with our cybersecurity solutions.",
    imgSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6671de6dbee6622cc090f605_Cybersecurity%20Solutions.png",
    imgAlt: "Cybersecurity Solutions Icon",
    path: "/services/cybersecurity-solutions",
  },
  {
    title: "Microsoft Dynamics 365",
    description:
      "Implement and optimize Microsoft Dynamics 365 to streamline your business processes.",
    imgSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6671de18d5df930e6fc05ff1_Microsoft%20Dynamics%20365.png",
    imgAlt: "Microsoft Dynamics 365 Icon",
    path: "/services/microsoft-dynamics-365",
  },
  {
    title: "QA Testing & Automation",
    description:
      "Ensure your software meets the highest standards with our QA testing and automation services.",
    imgSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6671de30125b2c3c3ab89a13_QA%20Testing%20%26%20Automation.png",
    imgAlt: "QA Testing & Automation Icon",
    path: "/services/qa-testing-automation",
  },
  {
    title: "Business Process Outsourcing",
    description:
      "Outsource your business processes to enhance efficiency and reduce costs with our BPO services.",
    imgSrc: "https://img.icons8.com/?size=100&id=96323&format=png&color=25c9be",
    imgAlt: "BPO Icon",
    path: "/services/business-process-outsourcing",
  },
  {
    title: "Cloud Services",
    description:
      "Leverage cloud computing to scale your operations and enhance flexibility with our cloud services.",
    imgSrc:
      "https://img.icons8.com/?size=100&id=32fUGrUStbEu&format=png&color=25c9be",
    imgAlt: "Cloud Services Icon",
    path: "/services/cloud-services",
  },
];

const ServicesSection = () => {
  return (
    <div className="bg-[#121417] text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-[32px] sm:text-[36px] md:text-[42px] font-extrabold text-white pb-10 text-center">
          From Idea to Completion, we bring Full-Stack Expertise
        </h2>
        <div className="relative mt-16">
          <div className="hidden md:block absolute w-1 bg-[#23252d] h-full left-1/2 transform -translate-x-1/2"></div>
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col md:flex-row justify-between items-center w-full mb-8`}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div
        className={`flex flex-col md:flex-row ${
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        } w-full md:w-4/5 items-center mx-auto`}
      >
        <Link href={service.path} passHref className="w-full md:w-5/12">
          <div className=" bg-[#191A20] hover:border border border-transparent hover:border-yellow-500 p-4 md:py-8 md:px-4 rounded-lg shadow-lg mb-4 md:mb-0">
            <div className="md:hidden flex justify-center mb-2">
              <div
                className={`h-10 w-10 rounded-full flex justify-center items-center ${getColor(
                  index
                )} text-white`}
              >
                <span className="text-xl font-bold">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </div>
            </div>
            <div className="mr-4">
              <img
                src={service.imgSrc}
                alt={service.imgAlt}
                className="w-[140px] md:w-[80px] filter grayscale"
              />
            </div>
            <h2 className="text-xl md:text-3xl font-bold mb-2 md:my-4">
              {service.title}
            </h2>
            <p className="text-base md:text-gray-400">{service.description}</p>
            <a href="#" className="text-purple-700 mt-6 inline-block text-lg">
              View Details →
            </a>
          </div>
        </Link>
        <div className="hidden md:flex relative w-2/12 justify-center items-center">
          <div
            className={`h-14 w-14 rounded-full flex justify-center items-center ${getColor(
              index
            )} text-black text-xl font-bold absolute`}
          >
            {(index + 1).toString().padStart(2, "0")}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const getColor = (index) => {
  const colors = ["bg-[#f0f0f0]"];
  return colors[index % colors.length];
};

export default ServicesSection;
