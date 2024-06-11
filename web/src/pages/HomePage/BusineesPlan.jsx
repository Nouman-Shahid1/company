import React from "react";
import { Link } from "react-router-dom";
import planImage from "../../assets/images/plan.png";

const BusinessPlanSection = () => {
  return (
    <section className="bg-white">
      <div className="flex flex-wrap items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 bg-[#f4f4f4] py-20 sm:py-40 px-6 sm:px-10 flex justify-center lg:justify-end">
          <div className="w-full lg:w-2/4">
            <img
              className="w-full h-auto rounded-lg shadow-lg"
              src={planImage}
              alt="Business Plan"
            />
            <div className="mt-8 text-center lg:text-left">
              <h2 className="text-xl font-semibold text-gray-800">
                We're Ready To Grow Your Business With Us
              </h2>
              <p className="mt-4 text-gray-600">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition.
              </p>
              <Link
                to="/contact"
                className="inline-block mt-6 px-6 py-3 text-base font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded-md"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:pl-12 px-6 sm:px-10">
          <h2 className="text-sm font-semibold tracking-wide text-green-500 uppercase">
            Welcome The WebCraft Solutions Limited
          </h2>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-gray-900">
            We Care About Your Business Plan.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11.09v6.18c0 .28.22.5.5.5s.5-.22.5-.5v-6.18a.5.5 0 00-.5-.5.5.5 0 00-.5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-lg leading-6 text-gray-900">
                  Components of a Business Strategy
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11.09v6.18c0 .28.22.5.5.5s.5-.22.5-.5v-6.18a.5.5 0 00-.5-.5.5.5 0 00-.5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-lg leading-6 text-gray-900">
                  Business Consulting
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap space-x-4">
            <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11.09v6.18c0 .28.22.5.5.5s.5-.22.5-.5v-6.18a.5.5 0 00-.5-.5.5.5 0 00-.5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-lg leading-6 text-gray-900">Experience</p>
                <p className="text-gray-500">
                  Leverage frameworks to provide a robust synopsis.
                </p>
              </div>
            </div>
            <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11.09v6.18c0 .28.22.5.5.5s.5-.22.5-.5v-6.18a.5.5 0 00-.5-.5.5.5 0 00-.5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-lg leading-6 text-gray-900">Awards Winner</p>
                <p className="text-gray-500">
                  Leverage frameworks to provide a robust synopsis.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link
              to="/about"
              className="inline-block px-6 py-3 text-base font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded-md"
            >
              More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPlanSection;
