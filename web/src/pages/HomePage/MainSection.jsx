import React from "react";
import { Link } from "react-router-dom";
import mainImage from "../../assets/images/main.png";

const MainSection = () => {
  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-between text-white h-screen"
      style={{ backgroundImage: `url(${mainImage})` }}
    >
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-8 lg:p-24 bg-black bg-opacity-90">
        <div className="text-center lg:text-left">
          <h2 className="text-sm font-semibold tracking-wide uppercase">
            Welcome to Whitecollar Solution
          </h2>
          <h1 className="mt-2 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            The Best Value for <span className="text-green-400">Business</span>{" "}
            and Corporation
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Collaboratively administrate empowered markets plug and play
            networks dynamically procrastinate.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start">
            <Link
              to="/consulting"
              className="inline-flex items-center justify-center px-6 py-3 mb-4 sm:mb-0 sm:mr-4 text-base font-medium text-white bg-green-500 hover:bg-green-600 rounded-md"
            >
              Get Consulting
            </Link>
            <Link
              to="/videos"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded-md"
            >
              <svg
                className="w-5 h-5 mr-2 -ml-1"
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
              Watch Videos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
