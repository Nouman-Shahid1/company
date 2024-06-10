import React from "react";
import NewsBg from "../../assets/images/newsBG.png";

const NewsletterSection = () => {
  return (
    <section className="relative py-20">
      <div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 rounded-lg shadow-lg overflow-hidden"
        style={{
          backgroundImage: `url(${NewsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-8 text-center text-white">
          <h3 className="text-lg font-semibold mb-2 text-indigo-400">
            Subscribe to Our Newsletter
          </h3>
          <h2 className="text-4xl font-extrabold mb-4">
            Stay Updated with <br />
            <span className="text-indigo-200">
              The WebCraft Solutions Limited
            </span>
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join our newsletter to get the latest updates, tech insights, and
            special offers from The WebCraft Solutions Limited. Stay informed
            about the latest trends in IT consulting, IT services, Shopify,
            WordPress, and custom website design. Let's grow together with
            innovative solutions and expert advice.
          </p>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-8 rounded-full transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 shadow-lg transform hover:scale-105">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
