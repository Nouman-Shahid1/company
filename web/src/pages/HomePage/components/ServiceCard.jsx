import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCard = ({ title, icon, description }) => (
  <div className="max-w-lg rounded-xl overflow-hidden shadow-xl bg-white transform transition-transform duration-300 hover:scale-105 p-8 border-t-4 border-blue-500 flex flex-col justify-between h-full">
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-blue-500 p-4 rounded-full shadow-lg">
          <FontAwesomeIcon icon={icon} size="2x" className="text-white" />
        </div>
        <div className="font-bold text-2xl text-black">{title}</div>
      </div>
      <p className="text-gray-700 text-base mb-4">
        {description ||
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."}
      </p>
    </div>
    <div className="mt-auto">
      <button className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
        Learn More
      </button>
    </div>
  </div>
);

export default ServiceCard;
