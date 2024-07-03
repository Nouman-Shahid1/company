import React from "react";
import ServiceCard from "@/components/ServicesCard/ServiceCard";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ServicesBanner from "@/components/ServicesBanner/ServicesBanner";
const servicesData = [
  {
    imageSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6601698cb7dff0363a482d7d_Web%20Development%20Service.webp",
    services: [
      "Front-end Development",
      "Back-end Development",
      "Content Management System (CMS) Integration",
      "E-commerce Features",
      "Responsive Design",
    ],
  },
];
const Description = [
  "We offer Web Development Services to businesses of all sizes to give them a boost.",
  "Web development involves a range of tasks, including designing the user interface, developing the back-end functionality, and ensuring that the website or web app is responsive and user-friendly.",
  "Web development encompasses both the visual aspects of a website and its underlying technical infrastructure.",
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
];

const page = () => {
  return (
    <>
      <Navbar />
      <ServicesBanner
        title="Web Development"
        description="Encompasses building and maintaining websites, including front-end (user interface) and back-end (server-side) development."
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
      {/* <section class="text-gray-700 body-font">
        <div class="flex justify-center mt-10 text-4xl font-regular">
          Benefits
        </div>
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-wrap text-center justify-center">
            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <svg
                    class="w-32 mb-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 20l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 12l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 4.5v9"></path>
                  </svg>
                </div>
                <h2 class="title-font font-regular text-2xl text-gray-900">
                  Tailored to Specific Needs
                </h2>
                <p class="mt-2 text-base leading-relaxed">
                  Custom software is built to address your unique business
                  requirements.
                </p>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <svg
                    class="w-32 mb-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M2 12l2-2-2-2"></path>
                    <path d="M22 12l-2-2 2-2"></path>
                    <path d="M12 22l-2-2 2-2"></path>
                    <path d="M12 2l2 2-2 2"></path>
                  </svg>
                </div>
                <h2 class="title-font font-regular text-2xl text-gray-900">
                  Enhanced Efficiency
                </h2>
                <p class="mt-2 text-base leading-relaxed">
                  Custom software improves operational efficiency by
                  streamlining processes.
                </p>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <svg
                    class="w-32 mb-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 3.34v7.66H8V3.34a5.5 5.5 0 118 0z"></path>
                    <path d="M12 21v-5.67"></path>
                    <path d="M8 10.67h8"></path>
                  </svg>
                </div>
                <h2 class="title-font font-regular text-2xl text-gray-900">
                  Scalability
                </h2>
                <p class="mt-2 text-base leading-relaxed">
                  As your business grows, custom software can scale with your
                  needs.
                </p>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <svg
                    class="w-32 mb-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </div>
                <h2 class="title-font font-regular text-2xl text-gray-900">
                  Cost Savings
                </h2>
                <p class="mt-2 text-base leading-relaxed">
                  While the initial investment may be higher, long-term savings
                  are achieved by reducing licensing and operational costs.
                </p>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <svg
                    class="w-32 mb-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M9 3L3 9l6 6"></path>
                    <path d="M15 21l6-6-6-6"></path>
                  </svg>
                </div>
                <h2 class="title-font font-regular text-2xl text-gray-900">
                  Competitive Advantage
                </h2>
                <p class="mt-2 text-base leading-relaxed">
                  Custom software gives you a competitive edge by offering
                  unique functionalities not available to competitors.
                </p>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <svg
                    class="w-32 mb-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M16 8l-4 8-4-8"></path>
                  </svg>
                </div>
                <h2 class="title-font font-regular text-2xl text-gray-900">
                  Data Security
                </h2>
                <p class="mt-2 text-base leading-relaxed">
                  You have control over security protocols, ensuring compliance
                  with specific data security requirements.
                </p>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <svg
                    class="w-32 mb-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M4 13V4a1 1 0 011-1h14a1 1 0 011 1v9"></path>
                    <path d="M4 20h16M4 17h16"></path>
                  </svg>
                </div>
                <h2 class="title-font font-regular text-2xl text-gray-900">
                  Integration
                </h2>
                <p class="mt-2 text-base leading-relaxed">
                  Custom software can seamlessly integrate with your existing
                  systems and processes.
                </p>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <svg
                    class="w-32 mb-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 3v18M3 12h18"></path>
                  </svg>
                </div>
                <h2 class="title-font font-regular text-2xl text-gray-900">
                  Maintenance and Support
                </h2>
                <p class="mt-2 text-base leading-relaxed">
                  Your software is supported by developers who understand its
                  intricacies, ensuring it remains functional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default page;
