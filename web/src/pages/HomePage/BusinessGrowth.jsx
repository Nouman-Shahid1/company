import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import businessImage from "../../assets/images/Photo.jpg"; // Adjust the path as necessary

function BusinessGrowthSection() {
  const skills = [
    { title: "Clients", percent: 95, description: "Quick Response" },
    { title: "Project", percent: 85, description: "Finished Jobs" },
  ];

  return (
    <div className="bg-gray-900 text-white">
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 lg:h-screen flex flex-col justify-center pl-40">
          <div className="">
            <p className="text-green-500 font-medium">Why Choose Me</p>
            <h2 className="mt-2 text-3xl leading-9 font-extrabold w-[70%]">
              We Provide Solutions To Grow Your Business
            </h2>
            <p className="mt-4 w-[80%]">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Thinking to further the overall proposition.
            </p>
          </div>
          <div className="mt-8 flex space-x-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-lg text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <CircularProgressbar
                    value={skill.percent}
                    text={`${skill.percent}%`}
                    styles={buildStyles({
                      textColor: "#fff",
                      pathColor: "#22c55e",
                      trailColor: "#374151",
                    })}
                  />
                </div>
                <p className="mt-2">{skill.title}</p>
                <p className="font-medium">{skill.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-2">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500 w-6 h-6"
              />
              <p className="ml-2">2,800+ Active clients</p>
            </div>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500 w-6 h-6"
              />
              <p className="ml-2">106+ Projects</p>
            </div>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500 w-6 h-6"
              />
              <p className="ml-2">1,670+ 5 star reviews</p>
            </div>
            <div className="mt-4">
              <a href="#contact" className="text-green-500 underline">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-96 lg:h-screen">
          <img
            src={businessImage}
            alt="Business Growth"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default BusinessGrowthSection;
