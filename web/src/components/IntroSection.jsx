// src/components/IntroSection.js
import React from "react";

const IntroSection = ({ backgroundImage, title, subtitle, description }) => {
  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-between text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "100% 100%",
        height: "60vh",
      }}
    >
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-8 lg:p-24 bg-black bg-opacity-90">
        <div className="text-center lg:text-left">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500"></div>
            <h2 className="text-sm font-semibold tracking-wide">{title}</h2>
          </div>
          <h1 className="mt-2 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {subtitle}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
