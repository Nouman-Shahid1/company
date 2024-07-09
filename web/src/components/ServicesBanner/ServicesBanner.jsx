import React from "react";
import background from "../../assets/images/bg.jpg";
const ServicesBanner = ({ title, description, servicedescription }) => {
  return (
    <>
      <div
        className="pt-32 md:pb-32 pb-10 w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative py-12 md:py-28 px-4 md:px-20 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-[70px] font-bold text-white drop-shadow-lg">
            {title}
          </h1>
          <p className="text-sm md:text-lg text-white mt-8 w-[90%] md:w-[65%] lg:w-[53%] drop-shadow-md">
            {description}
          </p>
        </div>
      </div>
      <div className="bg-black">
        <div className="max-w-6xl mx-auto px-4 pt-28 bg-black">
          <h2 className="text-[32px] font-bold mb-4 text-white">
            Service Description
          </h2>
          {servicedescription.map((desc, index) => (
            <p key={index} className="text-[#9aa7bf] pb-4">
              {desc}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesBanner;
