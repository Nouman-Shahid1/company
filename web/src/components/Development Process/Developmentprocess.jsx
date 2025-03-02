"use client"; // For Next.js App Router compatibility

import React from "react";
import { FaRocket, FaSearch, FaCode, FaClipboardList, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Discovery",
    description: "Understanding your business needs and goals to lay a solid foundation.",
    icon: <FaSearch className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 2,
    title: "Planning & Strategy",
    description: "Crafting a roadmap, setting milestones, and defining technology stack.",
    icon: <FaClipboardList className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 3,
    title: "Design & Development",
    description: "Creating high-performance solutions tailored to your needs.",
    icon: <FaCode className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 4,
    title: "Testing & QA",
    description: "Rigorous quality assurance to ensure flawless delivery.",
    icon: <FaCheckCircle className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 5,
    title: "Launch & Support",
    description: "Seamless deployment and continuous optimization.",
    icon: <FaRocket className="w-6 h-6 text-blue-600" />,
  },
];

const DevelopmentProcess = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
        {/* Optional Curved Dashed Line */}
        <div className="absolute inset-x-0 top-2 hidden md:block">
          <div className="relative">
            <svg
              className="w-full"
              xmlns="http://www.w3.org/2000/svg"
              width="875"
              height="48"
              viewBox="0 0 875 48"
              fill="none"
            >
              <path
                d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                stroke="#D4D4D8"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="1 12"
              />
            </svg>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Our Development Process</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We follow a proven process to ensure successful delivery, every time.
          </p>
        </div>

        {/* Grid - First Row (3 Steps) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {steps.slice(0, 3).map((step) => (
            <div key={step.id} className="relative space-y-4">
              {/* Icon */}
              <div className="flex justify-center">{step.icon}</div>

              {/* Circle Number */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">{step.id}</span>
              </div>

              {/* Content */}
              <h3 className="mt-4 text-xl font-semibold leading-tight text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Grid - Second Row (2 Steps) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {steps.slice(3).map((step) => (
            <div key={step.id} className="relative space-y-4">
              {/* Icon */}
              <div className="flex justify-center">{step.icon}</div>

              {/* Circle Number */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">{step.id}</span>
              </div>

              {/* Content */}
              <h3 className="mt-4 text-xl font-semibold leading-tight text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
