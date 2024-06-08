import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCard = ({ title, icon, description }) => (
  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition-transform duration-300 hover:scale-105 p-6">
    <div className="flex items-center space-x-3 mb-4">
      <FontAwesomeIcon icon={icon} size="2x" className="text-indigo-600" />
      <div className="font-bold text-xl">{title}</div>
    </div>
    <p className="text-gray-700 text-base">
      {description ||
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."}
    </p>
  </div>
);

export default ServiceCard;
