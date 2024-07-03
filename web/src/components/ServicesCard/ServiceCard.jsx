"use client";

import React, { useRef, useEffect, useState } from "react";

const ServiceCard = ({
  heading,
  heading2,
  imageSrc,
  services,
  services2,
  benefits,
}) => {
  const textContainerRef = useRef(null);
  const [textContainerHeight, setTextContainerHeight] = useState(0);

  useEffect(() => {
    if (textContainerRef.current) {
      setTextContainerHeight(textContainerRef.current.clientHeight);
    }
  }, [services, services2]);

  return (
    <>
      <div className="flex flex-wrap max-w-6xl mx-auto mb-8">
        <div
          className="w-full md:w-1/2 p-4 flex items-center justify-center"
          style={{ height: textContainerHeight }}
        >
          <img
            src={imageSrc}
            alt="Service"
            className="object-cover h-full w-full rounded-xl"
          />
        </div>
        <div
          className="w-full md:w-1/2 p-4 flex flex-col justify-center"
          ref={textContainerRef}
        >
          {heading && (
            <div className="w-full mb-4">
              <h2 className="text-2xl font-bold text-center">{heading}</h2>
            </div>
          )}
          <ul className="list-none">
            {services.map((service, index) => (
              <li
                key={index}
                className="flex items-center py-5 mb-4 text-[#042638] text-xl font-medium"
                style={{ borderBottom: "1px solid rgba(24, 0, 48, .2)" }}
              >
                <img
                  src="https://img.icons8.com/?size=100&id=a4l6bA9mSmBh&format=png&color=25c9be"
                  alt="Tick Icon"
                  className="h-8 w-8 mr-4"
                />
                <span className="flex-1 text-lg">{service}</span>
              </li>
            ))}
          </ul>
          {heading2 && (
            <div className="w-full mb-4 mt-8">
              <h2 className="text-2xl font-bold">{heading2}</h2>
            </div>
          )}
          {services2 && (
            <ul className="list-none">
              {services2.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center py-5 mb-4 text-[#042638] text-xl font-medium"
                  style={{ borderBottom: "1px solid rgba(24, 0, 48, .2)" }}
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=a4l6bA9mSmBh&format=png&color=25c9be"
                    alt="Tick Icon"
                    className="h-8 w-8 mr-4"
                  />
                  <span className="flex-1 text-lg">{service}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[32px] font-bold mb-4 text-[#042638]">Benefits</h2>
        <ul className="custom-list list-disc list-outside ml-5">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-[#606a7b] py-2 w-full">
              <strong>{benefit.title}:</strong> {benefit.description}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ServiceCard;
