import Navbar from "../components/Navbar/Navbar";
import client1 from "../assets/images/client1.webp";
import client2 from "../assets/images/client2.webp";
import client3 from "../assets/images/client3.webp";
import client4 from "../assets/images/client4.webp";
import client5 from "../assets/images/client5.webp";
import client6 from "../assets/images/client6.webp";
import client7 from "../assets/images/client7.webp";
import client8 from "../assets/images/client8.webp";
// import mainImage from "../assets/images/market.jpg";
import Footer from "@/components/Footer/Footer";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
const clients = [
  { name: "Client 1", logo: client1 },
  { name: "Client 2", logo: client2 },
  { name: "Client 3", logo: client3 },
  { name: "Client 4", logo: client4 },
  { name: "Client 5", logo: client5 },
  { name: "Client 6", logo: client6 },
  { name: "Client 7", logo: client7 },
  { name: "Client 8", logo: client8 },
];
const services = [
  {
    title: "Web Development",
    description:
      "Deliver high-quality web development, design and functionality tailored for your business.",
    imgSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6671de247c0baad125ec99be_Web%20Development.png",
    imgAlt: "Web Development Icon",
    path: "/services/web-development",
  },
  {
    title: "Digital Transformation",
    description:
      "Digitize, automate and accelerate your business operations through digital transformation.",
    imgSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6671de4472f466c6ec3a3300_Digital%20Transformation.png",
    imgAlt: "Digital Transformation Icon",
    path: "/services/digital-transformation",
  },
  {
    title: "Generative AI",
    description:
      "Harness Generative AI and new technologies to innovate, automate, and stay ahead of the competition.",
    imgSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6671ddfeb123a3a3d48768f6_Generative%20AI.png",
    imgAlt: "Generative AI Icon",
    path: "/services/generative-ai",
  },
  {
    title: "Mobile App Development",
    description:
      "Make your mobile app stand out from the crowd with our Android and iOS development.",
    imgSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6671de62c40da9ba7ef7af9d_Mobile%20App%20Development.png",
    imgAlt: "Mobile App Development Icon",
    path: "/services/mobile-app-development",
  },
  {
    title: "Custom Development",
    description:
      "Get custom software perfectly built for your business to boost productivity and efficiency.",
    imgSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6671de50483002553c942ae8_Custom%20Software%20Development.png",
    imgAlt: "Custom Development Icon",
    path: "/services/custom-development",
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Keep your digital assets safe and protect your business from threats with our cybersecurity solutions.",
    imgSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6671de6dbee6622cc090f605_Cybersecurity%20Solutions.png",
    imgAlt: "Cybersecurity Solutions Icon",
    path: "/services/cybersecurity-solutions",
  },
  {
    title: "Microsoft Dynamics 365",
    description:
      "Implement and optimize Microsoft Dynamics 365 to streamline your business processes.",
    imgSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6671de18d5df930e6fc05ff1_Microsoft%20Dynamics%20365.png",
    imgAlt: "Microsoft Dynamics 365 Icon",
    path: "/services/microsoft-dynamics-365",
  },
  {
    title: "QA Testing & Automation",
    description:
      "Ensure your software meets the highest standards with our QA testing and automation services.",
    imgSrc:
      "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6671de30125b2c3c3ab89a13_QA%20Testing%20%26%20Automation.png",
    imgAlt: "QA Testing & Automation Icon",
    path: "/services/qa-testing-automation",
  },
  {
    title: "Business Process Outsourcing",
    description:
      "Outsource your business processes to enhance efficiency and reduce costs with our BPO services.",
    imgSrc: "https://img.icons8.com/?size=100&id=96323&format=png&color=25c9be",
    imgAlt: "BPO Icon",
    path: "/services/business-process-outsourcing",
  },
  {
    title: "Cloud Services",
    description:
      "Leverage cloud computing to scale your operations and enhance flexibility with our cloud services.",
    imgSrc:
      "https://img.icons8.com/?size=100&id=32fUGrUStbEu&format=png&color=25c9be",
    imgAlt: "Cloud Services Icon",
    path: "/services/cloud-services",
  },
];
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className=" pt-24 md:pt-64 pb-32 flex items-center relative">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source
            src="https://apart-next.vercel.app/images/video/hero-bg-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://apart-next.vercel.app/images/shape/hero-bg-sp-2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className=" ml-20 p-4 md:p-8 relative z-10 max-w-5xl">
          <h3 className="font-medium text-white text-lg mb-4">
            Welcome To The WebCraft Solutions Limited
          </h3>
          <h1 className="text-[37px] sm:text-[40px] md:text-[60px] lg:text-[70px] font-bold  text-white mb-4 leading-tight">
            Grow your business with our new bold agency
          </h1>
          <p className=" text-white opacity-70 mb-8 text-lg">
            We understand the effect a great brand story can have with its
            audience, but we also under stand the trust and affinity that can
            only come with great design. We never underestimate any parts of
            each project.
          </p>
          <div class="text-box bg-blue-900">
            <a href="#" class="btn btn-white btn-        animate">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="overflow-hidden py-3 mt-16 max-w-7xl mx-auto">
        <Marquee pauseOnHover="true">
          {clients.map((client, index) => (
            <div key={index} className="flex-shrink-0 px-4">
              <img
                src={client.logo.src}
                alt={client.name}
                className="h-16 mx-auto"
              />
            </div>
          ))}
        </Marquee>
      </div>
      <ServicesSection/>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] sm:text-[36px] md:text-[42px] font-extrabold text-gray-900 text-center">
            From Idea to Completion, we bring Full-Stack Expertise
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-b-4 pb-6 hover:border-[#0b026f] transition-colors"
              >
                <Link href={service.path}>
                  <div className="group">
                    <div className="relative flex items-center p-6 bg-white rounded-lg hover:bg-[#FAFAFA] transition-colors group">
                      <div className="mr-4">
                        <img
                          src={service.imgSrc}
                          alt={service.imgAlt}
                          className="w-[140px] md:w-[80px]"
                        />
                      </div>
                      <div>
                        <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#042638] group-hover:text-blue-900">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-[#7987a1] text-base sm:text-lg">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-t from-blue-200 to-white py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="max-w-[610px] px-4 sm:px-6">
            <p className="text-blue-900 font-bold text-base md:text-lg">
              Pricing
            </p>
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#042638]">
              We leverage the{" "}
              <span className="text-blue-900">latest advancements in AI</span>{" "}
              to deliver the highest quality technology,{" "}
              <span className="text-blue-900">on time and on budget</span>.
            </h2>
            <p className="mt-4 text-[#7987a1] text-sm md:text-base">
              We’ve been helping customers since 2024 and take pride in
              delivering high-quality custom services designed to help you
              build, grow, and revolutionize your business.
            </p>
            <div className="flex mt-6">
              <button className="border-2 border-[#042638] text-[#042638] py-2 px-4 md:py-4 md:px-8 rounded-full text-xs md:text-base lg:text-lg hover:text-white hover:bg-[#0b026f] hover:border-[#042638] whitespace-nowrap">
                See Our Reviews
              </button>
            </div>
            <div className="flex flex-wrap justify-around mt-8 gap-6 sm:gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#042638]">
                  236+
                </h3>
                <p className="text-[#7987a1] text-base md:text-lg">
                  Active Clients
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#042638]">
                  3,000+
                </h3>
                <p className="text-[#7987a1] text-base md:text-lg">
                  Projects Delivered
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#042638]">
                  23+
                </h3>
                <p className="text-[#7987a1] text-base md:text-lg">
                  Countries Supported
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 p-6 bg-white shadow-lg rounded-3xl w-full md:w-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start">
              <div className="mb-4 sm:mb-0">
                <p className="text-blue-900 font-bold text-base md:text-lg">
                  Starting from
                </p>
                <h3 className="text-[32px] md:text-[40px] font-bold text-[#042638]">
                  $18 / hr
                </h3>
              </div>
              <button className="px-4 py-2 md:px-6 md:py-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-900 text-xs md:text-base">
                Contact Us →
              </button>
            </div>
            <p className="mt-4 text-[#7987a1] text-sm md:text-lg">
              With tools like ChatGPT and CoPilot, software development is being
              rapidly enabled by machines. The WebCraft Solutions Limited
              engineers are trained with these technologies, improving the ROI
              of your project.
              <br />
              <br />
              Experience working with us for 2 weeks completely free of charge.
              <br />
              <br />
              We guarantee that we will make a positive impact on your project
              or continue working for free until we do.
            </p>
            <hr className="border-1 border-[#d7d7d7] mt-5" />
            <div className="mt-4 space-y-4">
              <div className="flex items-start">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-teal-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.707l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 111.414 1.414z" />
                </svg>
                <div className="ml-4 text-sm md:text-lg">
                  <p className="text-[#042638] font-bold">
                    Software Outsourcing
                  </p>
                  <p className="text-[#7987a1] text-xs md:text-base">
                    Let us handle end-to-end delivery with complete software
                    development outsourcing.
                  </p>
                </div>
              </div>
              <div className="flex items-start mt-4">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-teal-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8 9a3 3 0 110-6 3 3 0 010 6zm0 2a5 5 0 00-4.546 2.916C2.77 15.08 3.7 16 5 16h6a1 1 0 110 2H5a3 3 0 01-2.829-2H3a3 3 0 012.829-2H9v1H5.586A2 2 0 006 14h8a2 2 0 000-4H8zm8 4a1 1 0 011-1h.586a1 1 0 011 1h-2.586z" />
                </svg>
                <div className="ml-4 text-sm md:text-lg">
                  <p className="text-[#042638] font-bold">Staff Augmentation</p>
                  <p className="text-[#7987a1] text-xs md:text-base">
                    Add talent to your existing team through The WebCraft
                    Solutions Limited and save time on sourcing, recruiting, and
                    training.
                  </p>
                </div>
              </div>
              <div className="flex items-start mt-4">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-teal-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 3a1 1 0 00-.993.883L9 4v2H6.086a1 1 0 00-.707.293l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 000-1.414l-4-4A1 1 0 006.086 6H9V4a1 1 0 011-1zM10 8a1 1 0 011 1v3h3.086a1 1 0 01.707.293l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4A1 1 0 0114.914 13H12v-3a1 1 0 00-.883-.993L11 9H8.914a1 1 0 01-.707-.293L4 4H3a1 1 0 011-1h6z" />
                </svg>
                <div className="ml-4 text-sm md:text-lg">
                  <p className="text-[#042638] font-bold">Dedicated Teams</p>
                  <p className="text-[#7987a1] text-xs md:text-base">
                    Move faster with a dedicated and functional team to your
                    existing software development process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="text-center py-16 bg-blue-400">
        <h2 class="text-3xl md:text-5xl font-bold text-white">
          We've helped our clients complete +3,000 projects
        </h2>
        <p class="text-lg text-white mt-2">
          Over the last 14 years, we've been driven by our passion for helping
          global clients achieve their goals.
        </p>

        <div class="mt-16 grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 md:px-40">
          <div class="bg-transparent border border-gray-200 p-6 rounded-lg shadow-lg">
            <div class="text-yellow-400 text-2xl mb-2">★★★★★</div>
            <p class="text-white mb-4 text-base">
              The WebCraft Solutions Limited has stood out for their promptness
              and responsiveness.<br></br> <br></br> The client is extremely
              satisfied with their performance and technical skills. All in all,
              they're a reliable and committed partner.<br></br>
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
              the client's needs, leading to an ongoing partnership.
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
