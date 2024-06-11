import React from "react";
import teamImage from "../../assets/images/team.png";

const TeamSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${teamImage})` }}
    >
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="bg-black bg-opacity-50 backdrop-blur-lg rounded-lg px-6 py-8 md:px-16 md:py-12 lg:px-24 lg:py-16">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            Our Expert Team
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
