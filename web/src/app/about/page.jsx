import Navbar from "../../components/Navbar/Navbar";
import React from "react";
import About from "../../assets/images/about.jpg";
function about() {
  return (
    <>
      <Navbar />
      <img src={About.src} alt="" className="w-full" />
    </>
  );
}

export default about;
