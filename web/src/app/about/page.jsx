import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import { Briefcase, Globe, Handshake, Rocket, TrendingUp, CheckCircle } from "lucide-react";  // If using Lucide
// import DevelopmentProcess from "@/components/Development Process/Developmentprocess";
import dynamic from "next/dynamic"; 
export default function AboutPage() {
  const DevelopmentProcess = dynamic(() => import("@/components/Development Process/Developmentprocess"), { ssr: false, }); 
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />

<section className="pb-20 pt-36 px-6 md:px-16 bg-black relative overflow-hidden">
  {/* Optional Background Pattern */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-grid-squares opacity-10"></div>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
    {/* Left Side - Text with Points */}
    <div className="text-left">
      <h2 className="text-5xl font-extrabold text-white leading-tight">
        Who We Are
      </h2>
      <p className="mt-6 text-lg text-gray-400 leading-relaxed">
        The WebCraft Solutions Limited is your trusted partner in digital transformation, blending technology, creativity, and strategy to fuel your business growth.
      </p>
      <p className="mt-4 text-lg text-gray-400 leading-relaxed">
        Our global team of experts delivers solutions that combine cutting-edge technology with human-centered design, ensuring measurable results.
      </p>

      {/* Key Points with Professional Icons */}
      <div className="mt-8 space-y-6">
        {[
          { icon: <Rocket className="text-blue-500 w-8 h-8" />, text: "Innovative software & digital solutions tailored to your business." },
          { icon: <Globe className="text-blue-500 w-8 h-8" />, text: "Global reach with localized expertise for diverse markets." },
          { icon: <Handshake className="text-blue-500 w-8 h-8" />, text: "Long-term partnerships built on transparency & trust." },
        ].map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            {item.icon}
            <p className="text-gray-400 text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Right Side - Image with Overlay */}
    <div className="relative group">
      <img
        src="https://wallpapers.com/images/hd/team-background-sd8enx084kz1h2rb.jpg"
        alt="Our Team"
        className="rounded-xl shadow-2xl object-cover w-full h-[400px] transition-transform transform group-hover:scale-105 duration-500"
      />
    </div>
  </div>
</section>

{/* Our Mission Section */}
<section className="py-20 bg-[#121417] px-6 md:px-16 relative">
  <div className="max-w-6xl mx-auto text-center relative z-10">
    <h2 className="text-5xl font-extrabold text-white">Our Mission</h2>
    <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
      Empowering businesses to unlock their full potential through cutting-edge technology, innovative solutions, and strategies that drive growth and long-term value.
    </p>
  </div>

  {/* Mission Pillars with Icons */}
  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      {
        icon: <Rocket className="text-blue-500 w-14 h-14 mx-auto" />,
        title: "Innovation Focused",
        description: "We constantly evolve to leverage the latest technologies for your competitive advantage.",
      },
      {
        icon: <TrendingUp className="text-blue-500 w-14 h-14 mx-auto" />,
        title: "Business-Driven",
        description: "Our strategies align with your long-term vision to drive sustainable growth.",
      },
      {
        icon: <CheckCircle className="text-blue-500 w-14 h-14 mx-auto" />,
        title: "Quality & Precision",
        description: "We deliver with precision, on time, and within budget — always ensuring quality.",
      },
    ].map((pillar, index) => (
      <div
        key={index}
        className="p-8 bg-[#1a1d23] border border-gray-800 rounded-2xl text-center hover:shadow-2xl transition duration-500 transform hover:-translate-y-1"
      >
        <div className="mb-4">{pillar.icon}</div>
        <h4 className="text-2xl font-bold text-white">{pillar.title}</h4>
        <p className="mt-3 text-gray-400">{pillar.description}</p>
      </div>
    ))}
  </div>

  {/* Dynamic Statistics Section */}
  <div className="mt-20 py-10 bg-black/50 rounded-xl border border-gray-800 max-w-6xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[
        { label: "Projects Delivered", value: "3,000+" },
        { label: "Clients Served", value: "236+" },
        { label: "Countries Reached", value: "23+" },
        { label: "Years of Experience", value: "10+" },
      ].map((stat, index) => (
        <div key={index} className="flex flex-col items-center">
          <h3 className="text-5xl font-extrabold text-white">{stat.value}</h3>
          <p className="text-gray-400 text-lg mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="py-20 bg-[#121417] px-6 md:px-16">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-5xl font-extrabold text-white">Our Services</h2>
    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
      Explore the wide range of technology solutions and services offered by The WebCraft Solutions Limited to fuel your business growth.
    </p>
  </div>

  {/* Services Grid */}
  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      {
        icon: <Briefcase className="w-14 h-14 text-blue-500 mx-auto" />,
        title: "Custom Software Development",
        description: "Tailored software solutions built to fit your business processes and needs, ensuring scalability and performance.",
      },
      {
        icon: <Globe className="w-14 h-14 text-blue-500 mx-auto" />,
        title: "Web & Mobile App Development",
        description: "Modern, responsive web and mobile applications designed to enhance user experience and business efficiency.",
      },
      {
        icon: <TrendingUp className="w-14 h-14 text-blue-500 mx-auto" />,
        title: "Digital Marketing & SEO",
        description: "Data-driven marketing strategies and SEO services to improve your online presence and visibility.",
      },
      {
        icon: <Handshake className="w-14 h-14 text-blue-500 mx-auto" />,
        title: "IT Consulting & Strategy",
        description: "Expert consulting services to align your IT infrastructure with your long-term business objectives.",
      },
      {
        icon: <CheckCircle className="w-14 h-14 text-blue-500 mx-auto" />,
        title: "Cloud Solutions & DevOps",
        description: "Cloud migrations, architecture optimization, and DevOps automation to streamline your operations.",
      },
      {
        icon: <Rocket className="w-14 h-14 text-blue-500 mx-auto" />,
        title: "Blockchain & AI Solutions",
        description: "Cutting-edge blockchain and AI services to bring innovation and automation to your business processes.",
      },
    ].map((service, index) => (
      <div
        key={index}
        className="p-8 bg-[#1a1d23] border border-gray-800 rounded-2xl text-center hover:shadow-2xl transition duration-500 transform hover:-translate-y-1"
      >
        <div className="mb-4">{service.icon}</div>
        <h4 className="text-2xl font-bold text-white">{service.title}</h4>
        <p className="mt-3 text-gray-400">{service.description}</p>
      </div>
    ))}
  </div>
</section>




      <WhyChooseUs/>

      <section class="text-center py-16 bg-black">
        <h2 class="text-3xl md:text-5xl font-bold text-white">
          Weve helped our clients complete +3,000 projects
        </h2>
        <p class="text-lg text-white mt-2">
          Over the last 1 years, we&apos;ve been driven by our passion for
          helping global clients achieve their goals.
        </p>

        <div class="mt-16 grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 md:px-40">
          <div class="bg-transparent border border-gray-200 p-6 rounded-lg shadow-lg">
            <div class="text-yellow-400 text-2xl mb-2">★★★★★</div>
            <p class="text-white mb-4 text-base">
              The WebCraft Solutions Limited has stood out for their promptness
              and responsiveness.<br></br> <br></br> The client is extremely
              satisfied with their performance and technical skills. All in all,
              they&apos;re a reliable and committed partner.<br></br>
              <br></br>
            </p>
            <p class="text-gray-100 font-semibold">
              Parham, President, Kudo Westervelt
            </p>
          </div>
          <div class="bg-transparent border border-gray-200 p-6 rounded-lg shadow-lg">
            <div class="text-yellow-400 text-2xl mb-2">★★★★★</div>
            <p class="text-white mb-4 text-base">
              It is an absolute honor to work with such hard working and
              dedicated folks. <br></br>
              <br></br>The effort that you give every month is a lot but you
              really surpassed it to achieve this new record.<br></br>
              <br></br> <br></br>
            </p>
            <p class="text-gray-100 font-semibold">Nimesh Shah, CEO, Orbrick</p>
          </div>
          <div class="bg-transparent border border-gray-200 p-6 rounded-lg shadow-lg">
            <div class="text-yellow-400 text-2xl mb-2">★★★★★</div>
            <p class="text-white mb-4 text-base">
              The WebCraft Solutions Limited helped us hit the ground running on
              our MVP development. <br></br>
              <br></br>They helped us build out a number of important
              integrations across payments, authentication and blockchain
              integrations.<br></br>
              <br></br>
            </p>
            <p class="text-gray-100 font-semibold">
              Ramesh Doddi, CTO, HoneyBricks
            </p>
          </div>
          <div class="bg-transparent border border-gray-200 p-6 rounded-lg shadow-lg">
            <div class="text-yellow-400 text-2xl mb-2">★★★★★</div>
            <p class="text-white mb-4 text-base">
              Responsive and committed, The WebCraft Solutions Limited provides
              quality work in a timely manner. <br></br>
              <br></br>They also ensure that the developers they provide meet
              the client&apos;s needs, leading to an ongoing partnership.
            </p>
            <p class="text-gray-100 font-semibold">
              Eric Hurst, Co-Founder Intellirent
            </p>
          </div>
          <div class="bg-transparent border border-gray-200 p-6 rounded-lg shadow-lg">
            <div class="text-yellow-400 text-2xl mb-2">★★★★★</div>
            <p class="text-white mb-4 text-base">
              After we raised our seed round, we needed to scale our engineering
              team quickly to deliver on a growing number of integrations.{" "}
              <br></br>
              <br></br>Their embedded team offering quickly become a core part
              of our company.<br></br>
              <br></br>
            </p>
            <p class="text-gray-100 font-semibold">Andy Crebar, CEO, Sapling</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
