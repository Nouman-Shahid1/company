import React from "react";

const ServicesBanner = ({ title, description, servicedescription }) => {
  return (
    <>
      <div className="relative mt-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHNlcnZpY2VzfGVufDB8fHx8MTY0MTU5MTk2Ng&ixlib=rb-1.2.1&q=80&w=1080"
            alt="Services Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#cae7f2] opacity-50"></div>
        </div>
        <div className="relative py-12 md:py-28 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-[70px] font-bold text-white drop-shadow-lg">
            {title}
          </h1>
          <p className="text-sm md:text-lg text-white mt-4 w-[90%] md:w-[75%] lg:w-[65%] mx-auto drop-shadow-md">
            {description}
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-8 px-4 mt-20">
        <h2 className="text-[32px] font-bold mb-4 text-[#042638]">
          Service Description
        </h2>
        {servicedescription.map((desc, index) => (
          <p key={index} className="text-[#7987a1] mb-4">
            {desc}
          </p>
        ))}
      </div>
    </>
  );
};

export default ServicesBanner;
