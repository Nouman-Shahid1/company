import React from "react";
import teamImage from "../../assets/images/team.png";

const TeamSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${teamImage})` }}
    >
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-black bg-opacity-50 backdrop-blur-lg rounded-lg px-32 py-24">
          <h1 className="text-white text-4xl font-bold">Our Expert Team</h1>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
