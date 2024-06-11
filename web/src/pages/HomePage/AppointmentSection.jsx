import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const BusinessSection = () => {
  return (
    <div className="bg-[#7C6BFC] text-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8">
        <div className="w-full md:w-3/4 md:ml-12">
          <h2 className="text-lg font-bold text-green-400 mb-2">How We Work</h2>
          <h3 className="text-4xl font-bold mb-4">
            To Get Your Business To The Next Level
          </h3>
          <p className="mb-8">
            Leverage agile frameworks to provide synopsis for high level
            overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall.
          </p>
          <div className="bg-[#3AD89F] p-6 rounded-lg mb-8 flex flex-col md:flex-row items-center">
            <div className="flex items-center justify-center mb-4 md:mb-0">
              <div className="flex flex-col items-center justify-center w-32 h-32 text-3xl font-bold text-white p-4 rounded-full border-4 border-blue-500">
                <span className="text-4xl">562+</span>
                <p className="text-sm mt-1">Projects</p>
              </div>
            </div>

            <div className="ml-0 md:ml-4 text-white text-center md:text-left">
              <p className="text-2xl">
                We have <span className="font-bold">50+</span> years of
                experience. We offer{" "}
                <span className="font-bold">whitecollar</span> services to you
              </p>
            </div>
          </div>
          <ul>
            <li className="flex items-start mb-6">
              <FaCheckCircle className="mr-2 text-green-400" size={24} />
              <div>
                <p className="font-bold">Planning</p>
                <p className="mb-2">
                  Leverage agile frameworks to provide synopsis for high level
                  overviews.
                </p>
                <hr className="mt-2" />
              </div>
            </li>
            <li className="flex items-start mb-6">
              <FaCheckCircle className="mr-2 text-green-400" size={24} />
              <div>
                <p className="font-bold">Briefing</p>
                <p className="mb-2">
                  Leverage agile frameworks to provide synopsis for high level
                  approaches.
                </p>
                <hr className="mt-2" />
              </div>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="mr-2 text-green-400" size={24} />
              <div>
                <p className="font-bold">Evaluation</p>
                <p className="mb-2">
                  Leverage agile frameworks to provide synopsis for high level
                  overviews iterative.
                </p>
                <hr className="mt-2" />
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold text-green-400 mb-2">Book Now</h2>
          <h3 className="text-4xl font-bold mb-4">
            Get Free Business Appointment
          </h3>
          <div className="bg-white text-black rounded-lg shadow-lg">
            <div className="flex items-center justify-center p-8 md:p-12">
              <div className="mx-auto w-full max-w-[550px] bg-white">
                <form>
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter your phone number"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>

                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label
                          htmlFor="date"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          id="date"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label
                          htmlFor="time"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Time
                        </label>
                        <input
                          type="time"
                          name="time"
                          id="time"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="description"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Description
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      placeholder="Enter your description"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                  </div>
                  <div>
                    <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                      Book Appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;
