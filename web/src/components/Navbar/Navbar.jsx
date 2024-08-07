"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import logo from "../../assets/images/logobg.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [scroll, setScroll] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const closeDropdown = () => {
    setDropdown(false);
  };

  const links = [
    { id: 1, link: "Case Studies" },
    { id: 2, link: "Services" },
    { id: 3, link: "About" },
    { id: 4, link: "Reviews" },
    { id: 5, link: "Careers" },
    { id: 6, link: "Learning" },
  ];

  const services = [
    { name: "Web Development", path: "/services/web-development" },
    {
      name: "Mobile App Development",
      path: "/services/mobile-app-development",
    },
    { name: "Generative AI", path: "/services/generative-ai" },
    {
      name: "Custom Software Development",
      path: "/services/custom-development",
    },
    {
      name: "Digital Transformation",
      path: "/services/digital-transformation",
    },
    {
      name: "Microsoft Dynamics 365",
      path: "/services/microsoft-dynamics-365-business-solutions",
    },
    {
      name: "Cybersecurity Solutions",
      path: "/services/cybersecurity-solutions",
    },
    { name: "QA Testing & Automation", path: "/services/quality-assurance" },
    {
      name: "Business Process Outsourcing",
      path: "/services/business-process-outsourcing",
    },
    { name: "Cloud Services", path: "/services/cloud-services" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dropdownRef]);

  return (
    <div
      className={`fixed top-0  w-full z-20 pt-2 h-24 transition-colors duration-300 ${
        scroll ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-[90%] mx-auto">
        <div className="hidden md:flex items-center w-full">
          <Link href="/">
            <div>
              <Image
                src={logo}
                alt="WebCraft Logo"
                className="h-20 w-auto cursor-pointer"
              />
            </div>
          </Link>
          <ul className="flex space-x-6 h-full items-center mx-auto">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="relative px-4 cursor-pointer capitalize font-medium text-white hover:text-[#5c67f5] duration-200"
              >
                {link === "Services" ? (
                  <div className="flex items-center" onClick={toggleDropdown}>
                    <span>{link}</span>
                    <FaChevronDown className="ml-2 text-sm" />
                  </div>
                ) : (
                  <Link href={`/${link.toLowerCase().replace(" ", "-")}`}>
                    <span>{link}</span>
                  </Link>
                )}
                {link === "Services" && dropdown && (
                  <ul
                    className="absolute left-0 top-full mt-2 bg-black text-white shadow-lg rounded-md w-72"
                    ref={dropdownRef}
                  >
                    {services.map(({ name, path }, index) => (
                      <Link href={path} key={index}>
                        <li
                          className="px-4 py-2 text-white hover:text-[#5c67f5] hover:bg-[#181c1f] duration-200"
                          onClick={closeDropdown}
                        >
                          <span>{name}</span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="ml-4">
            <button className="bg-[#6168d1] text-white gap-5 h-full px-8 py-4 rounded-sm flex items-center justify-center text-lg font-semibold shadow hover:bg-blue-900 duration-200">
              <span>Start Project</span>
            </button>
          </Link>
        </div>

        {/* Mobile Navbar */}
        <div className="flex md:hidden items-center w-full justify-between">
          <Link href="/">
            <div>
              <Image
                src={logo}
                alt="WebCraft Logo"
                className="h-20 w-auto cursor-pointer"
              />
            </div>
          </Link>
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-gray-800"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>

        {nav && (
          <div className="fixed left-0 top-0 overflow-auto w-full h-full bg-black text-white flex flex-col justify-start items-start pt-2 pl-6 z-50 md:hidden">
            <div className="flex justify-between items-center w-full mb-6">
              <Link href="/">
                <div>
                  <Image
                    src={logo}
                    alt="WebCraft Logo"
                    className="h-20 w-auto cursor-pointer"
                  />
                </div>
              </Link>
              <FaTimes
                size={30}
                onClick={() => setNav(!nav)}
                className="cursor-pointer"
              />
            </div>
            <ul className="space-y-6 text-lg w-full">
              {links.map(({ id, link }) => (
                <li key={id} className="w-full">
                  {link === "Services" ? (
                    <div>
                      <div
                        className="flex gap-20 items-center cursor-pointer capitalize font-medium text-white hover:text-[#5c67f5] duration-200"
                        onClick={toggleDropdown}
                      >
                        <span>{link}</span>
                        <FaChevronDown className="ml-2 text-sm" />
                      </div>
                      {dropdown && (
                        <ul className="mt-4 space-y-4" ref={dropdownRef}>
                          {services.map(({ name, path }, index) => (
                            <li
                              key={index}
                              className="text-white hover:text-[#5c67f5] duration-200"
                              onClick={() => {
                                closeDropdown();
                                setNav(false);
                              }}
                            >
                              <Link href={path}>
                                <span>{name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <div className="cursor-pointer capitalize font-medium text-white hover:text-[#5c67f5] duration-200">
                      <Link
                        href={`/${link.toLowerCase().replace(" ", "-")}`}
                        onClick={() => setNav(false)}
                      >
                        <span>{link}</span>
                      </Link>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <button className="bg-[#5c67f5] text-white mt-8 px-10 py-3 flex items-center text-lg shadow hover:bg-[#4b54d1] duration-200 w-full justify-center">
                <span>Get in Touch</span>
                <FaArrowRight className="ml-2" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
