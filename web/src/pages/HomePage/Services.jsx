import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faDesktop,
  faBriefcase,
  faServer,
  faCloud,
  faMobileAlt,
  faChartLine,
  faLock,
  faPenNib,
  faDatabase,
  faBuilding,
  faBullhorn,
  faCogs,
  faBug,
  faHeadset,
  faSitemap,
  faChartBar,
  faNetworkWired,
  faClipboardCheck,
  faSyncAlt,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons"; // Import the WordPress icon from the brands package
import ServiceCard from "./components/ServiceCard"; // Import the ServiceCard component

function Services() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-8">
        <div className="text-center">
          <p className="text-green-500 font-medium">We Are Expertise In</p>
          <h2 className="mt-2 text-3xl leading-9 font-extrabold text-gray-900">
            We Provide Professional IT Solutions.
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Development Services */}
          <ServiceCard
            title="Web Development"
            icon={faDesktop}
            description="Boost your online presence with our web development services. The WebCraft Solutions Limited delivers high-quality design and powerful functionality tailored for your business."
          />
          <ServiceCard
            title="Mobile App Development"
            icon={faMobileAlt}
            description="Make your mobile app stand out from the crowd with The WebCraft Solutions Limited's custom mobile app solutions that make your project unique. We're here to help your app succeed."
          />
          <ServiceCard
            title="Custom Software Development"
            icon={faServer}
            description="Get custom software perfectly aligned with your business goals. The WebCraft Solutions Limited's solutions are designed to boost your productivity and efficiency."
          />
          <ServiceCard
            title="Shopify Development"
            icon={faShoppingCart}
            description="Boost your online sales with a custom Shopify store designed for conversions and growth by The WebCraft Solutions Limited."
          />
          <ServiceCard
            title="WordPress Development"
            icon={faWordpress}
            description="Create a stunning, high-performance website with The WebCraft Solutions Limited's expert WordPress development services."
          />
          <ServiceCard
            title="Generative AI"
            icon={faCogs}
            description="Revolutionize your business with The WebCraft Solutions Limited's Generative AI solutions. Harness our advanced AI technologies to innovate, automate, and stay ahead of the competition."
          />
          <ServiceCard
            title="API Integration"
            icon={faCogs}
            description="Enable seamless connectivity between your systems with efficient API integration services from The WebCraft Solutions Limited."
          />
          <ServiceCard
            title="Cloud Services"
            icon={faCloud}
            description="Leverage the power of the cloud with scalable and secure cloud service solutions from The WebCraft Solutions Limited."
          />

          {/* Design Services */}
          <ServiceCard
            title="UI/UX Design"
            icon={faPenNib}
            description="Delight your users with intuitive and engaging UI/UX designs from The WebCraft Solutions Limited that enhance their experience."
          />
          <ServiceCard
            title="Database Management"
            icon={faDatabase}
            description="Ensure data integrity and performance with reliable database management services from The WebCraft Solutions Limited."
          />
          <ServiceCard
            title="System Integration"
            icon={faSitemap}
            description="Connect your disparate systems and streamline your operations with integration services from The WebCraft Solutions Limited."
          />
          <ServiceCard
            title="Technical Documentation"
            icon={faFileSignature}
            description="Get clear and comprehensive technical documentation for your projects, ensuring everyone is on the same page."
          />

          {/* Marketing Services */}
          <ServiceCard
            title="Digital Marketing"
            icon={faBullhorn}
            description="Maximize your online presence and reach your target audience with strategic digital marketing from The WebCraft Solutions Limited."
          />
          <ServiceCard
            title="SEO Optimization"
            icon={faChartLine}
            description="Increase your online visibility and drive organic traffic with expert SEO services from The WebCraft Solutions Limited."
          />
          <ServiceCard
            title="E-commerce Solutions"
            icon={faShoppingCart}
            description="Unlock the potential of e-commerce with The WebCraft Solutions Limited's end-to-end solutions for online retail success."
          />
          <ServiceCard
            title="Project Management"
            icon={faClipboardCheck}
            description="Ensure your projects are completed on time and within budget with our expert project management services."
          />

          {/* Other Services */}
          <ServiceCard
            title="Network Solutions"
            icon={faNetworkWired}
            description="Enhance your network's performance and security with our advanced network solutions from The WebCraft Solutions Limited."
          />
          <ServiceCard
            title="Cybersecurity Solutions"
            icon={faLock}
            description="Protect your business from cyber threats with our comprehensive cybersecurity solutions. Keep your digital assets safe and secure with The WebCraft Solutions Limited."
          />
          <ServiceCard
            title="QA Testing & Automation"
            icon={faBug}
            description="Improve your software's reliability with The WebCraft Solutions Limited's QA testing services. Reduce bugs and speed up your time to market."
          />
          <ServiceCard
            title="Technical Support"
            icon={faHeadset}
            description="Get prompt and effective solutions to your IT issues with dedicated technical support from The WebCraft Solutions Limited."
          />
          <ServiceCard
            title="IT Consulting"
            icon={faBriefcase}
            description="Optimize your tech infrastructure with strategic IT consulting from The WebCraft Solutions Limited, tailored to your business needs."
          />
          <ServiceCard
            title="Digital Transformation"
            icon={faChartLine}
            description="Take your business to the next level with our digital transformation services. We help you implement the latest technologies for maximum impact."
          />
          <ServiceCard
            title="Dynamics 365 ERP"
            icon={faBuilding}
            description="Drive efficiency and growth with our tailored Microsoft Dynamics 365 solutions. Transform your business with The WebCraft Solutions Limited."
          />
          <ServiceCard
            title="Business Analysis"
            icon={faChartBar}
            description="Make data-driven decisions and improve your business processes with expert analysis from The WebCraft Solutions Limited."
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
