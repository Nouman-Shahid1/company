import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import img from "../../assets/images/logo.png"; // Adjust the path according to your project structure

const projects = [
  {
    title: "E-commerce Platform",
    description: "An advanced platform for managing online stores.",
    url: "https://example.com/ecommerce",
  },
  {
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard for social media analytics.",
    url: "https://example.com/social-media-dashboard",
  },
  {
    title: "Project Management Tool",
    description: "A tool for efficient project management and collaboration.",
    url: "https://example.com/project-management",
  },
  {
    title: "Online Learning Platform",
    description: "A platform for delivering online courses and tutorials.",
    url: "https://example.com/online-learning",
  },
];

function ProjectsSection() {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-purple-700 font-semibold">Our Projects</p>
          <h2 className="mt-2 text-4xl leading-9 font-extrabold text-gray-900">
            Explore Our Recent Projects
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={img}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-3 text-gray-600">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center px-5 py-2 bg-purple-700 text-white font-medium rounded-full hover:bg-purple-800"
                >
                  View Project <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <a
            href="#more-work"
            className="px-8 py-3 text-lg font-medium text-white bg-purple-700 hover:bg-purple-800 rounded-full"
          >
            More Work
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
