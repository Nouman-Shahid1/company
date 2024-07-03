import React from "react";

const Benefits = () => {
  return (
    <section className="bg-blue-900 py-10">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-4"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              fill="white"
            />
            <path
              d="M12 6.5c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
              fill="lightblue"
            />
          </svg>
          <h2 className="text-3xl font-bold text-white">
            Web <span className="text-light-blue-500">Development Process</span>
          </h2>
        </div>
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 mr-4"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    fill="white"
                  />
                  <path
                    d="M12 6.5c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
                    fill="lightblue"
                  />
                </svg>
                <h2 className="text-2xl font-bold text-white">Discovery</h2>
              </div>
              <ul className="text-white space-y-2">
                <li>Understand Business Goals & Requirements.</li>
                <li>Conduct Research & Gather Essential Insights.</li>
                <li>Identify Key Opportunities & Challenges.</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="https://cdn.pixabay.com/photo/2017/01/06/19/15/meeting-1951218_960_720.jpg"
                alt="Discovery Illustration"
                className="w-full h-48"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="flex justify-center order-2 md:order-1">
              <img
                src="https://cdn.pixabay.com/photo/2018/02/14/10/18/teamwork-3158236_960_720.jpg"
                alt="Planning & Strategy Illustration"
                className="w-full h-48"
              />
            </div>
            <div className="bg-blue-800 p-6 rounded-lg shadow-lg order-1 md:order-2">
              <div className="flex items-center mb-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 mr-4"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    fill="white"
                  />
                  <path
                    d="M12 6.5c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
                    fill="lightblue"
                  />
                </svg>
                <h2 className="text-2xl font-bold text-white">
                  Planning & Strategy
                </h2>
              </div>
              <ul className="text-white space-y-2">
                <li>Define Project Scope, Objectives & Deliverables.</li>
                <li>Develop Strategic Roadmap For Development.</li>
                <li>Determine Optimal Technology Stack & Frameworks.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 mr-4"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    fill="white"
                  />
                  <path
                    d="M12 6.5c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
                    fill="lightblue"
                  />
                </svg>
                <h2 className="text-2xl font-bold text-white">Development</h2>
              </div>
              <ul className="text-white space-y-2">
                <li>Develop The Front-End & Back-End Components.</li>
                <li>
                  Implement Necessary Features, Functionality & Integrations.
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/29/03/53/code-1869236_960_720.jpg"
                alt="Development Illustration"
                className="w-full h-48"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="flex justify-center order-2 md:order-1">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/19/14/00/qa-1835478_960_720.jpg"
                alt="Testing and Quality Assurance Illustration"
                className="w-full h-48"
              />
            </div>
            <div className="bg-blue-800 p-6 rounded-lg shadow-lg order-1 md:order-2">
              <div className="flex items-center mb-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 mr-4"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    fill="white"
                  />
                  <path
                    d="M12 6.5c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
                    fill="lightblue"
                  />
                </svg>
                <h2 className="text-2xl font-bold text-white">
                  Testing and Quality Assurance
                </h2>
              </div>
              <ul className="text-white space-y-2">
                <li>Conduct Rigorous Testing & Ensure Performance.</li>
                <li>Identify And Fix Bugs, Errors, Or Inconsistencies.</li>
                <li>
                  Perform Compatibility Testing (Multiple Devices, Browsers And
                  Platforms).
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 mr-4"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    fill="white"
                  />
                  <path
                    d="M12 6.5c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
                    fill="lightblue"
                  />
                </svg>
                <h2 className="text-2xl font-bold text-white">Deployment</h2>
              </div>
              <ul className="text-white space-y-2">
                <li>Prepare Web Application For Deployment.</li>
                <li>Configure Servers, Databases & Hosting Environments.</li>
                <li>Ensure Seamless Deployment & Proper Functioning.</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="https://cdn.pixabay.com/photo/2017/05/13/18/19/server-2319121_960_720.jpg"
                alt="Deployment Illustration"
                className="w-full h-48"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="flex justify-center order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1559027615-ce51d5f3d436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRlYW13b3JrfGVufDB8fHx8MTYxNjM2NjYwNA&ixlib=rb-1.2.1&q=80&w=400"
                alt="Launch and Post-Launch Support Illustration"
                className="w-full h-48"
              />
            </div>
            <div className="bg-blue-800 p-6 rounded-lg shadow-lg order-1 md:order-2">
              <div className="flex items-center mb-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 mr-4"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    fill="white"
                  />
                  <path
                    d="M12 6.5c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
                    fill="lightblue"
                  />
                </svg>
                <h2 className="text-2xl font-bold text-white">
                  Launch and Post-Launch Support
                </h2>
              </div>
              <ul className="text-white space-y-2">
                <li>Deploy Web Application To Live Environment.</li>
                <li>
                  Monitor Application&apos;s Performance & Address Issues.
                </li>
                <li>Provide Support, Maintenance & Updates As Needed.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
