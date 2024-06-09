import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Iframe from "react-iframe";

const projects = [
  {
    title: "Django Central",
    description: "Django related news, tutorials and information",
    url: "https://djangocentral.com/?ref=madewithtailwindcss.com",
  },
  {
    title: "React Website",
    description: "React related news, tutorials and information",
    url: "https://reactjs.org/",
  },
  {
    title: "Node.js Website",
    description: "Node.js related news, tutorials and information",
    url: "https://nodejs.org/",
  },
  {
    title: "Next.js Website",
    description: "Next.js related news, tutorials and information",
    url: "https://nextjs.org/",
  },
];

function ProjectsSection() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-green-500 font-medium">Our Projects</p>
          <h2 className="mt-2 text-3xl leading-9 font-extrabold text-gray-900">
            Explore Our Successful Projects
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <a
              href={project.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition relative overflow-hidden"
            >
              <div className="absolute inset-0">
                <Iframe
                  url={project.url}
                  width="100%"
                  height="100%"
                  display="initial"
                  position="relative"
                  style={{ pointerEvents: "none" }}
                />
              </div>
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10 p-4">
                <h3 className="text-lg leading-6 font-medium text-white">
                  {project.title}{" "}
                  <FaExternalLinkAlt className="inline-block ml-2" />
                </h3>
                <p className="mt-2 text-sm leading-5 text-gray-400">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href="#more-work"
            className="px-6 py-3 text-base font-medium text-white bg-green-500 hover:bg-green-600 rounded-md"
          >
            More Work
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
