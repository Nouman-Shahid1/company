const WhyChooseUs = () => {
  return (
    <section className="bg-black text-white py-28 relative">
      <div className="w-[90%] md:w-[80%] mx-auto px-4 sm:px-8 flex flex-col justify-between lg:flex-row">
        <div className="lg:w-1/2 z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose Us?
          </h2>
          <p className="mb-8">
            We provide exceptional service with personalized attention, ensuring
            that your needs are met with the highest quality solutions.
          </p>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-blue-300 text-3xl mr-4">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 17.25V21h3.75l11.04-11.04-3.75-3.75L3 17.25zm2.41-.91L12 9.75l2.25 2.25-6.59 6.59H5.41v-1.41zm14.83-11.17l-2.83-2.83c-.78-.78-2.05-.78-2.83 0L12 4.5l3.75 3.75 2.83-2.83c.78-.78.78-2.05 0-2.83z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  Expert Designers
                </h3>
                <p>
                  Our designers are the best in the industry, delivering
                  innovative and creative solutions tailored to your needs.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-blue-300 text-3xl mr-4">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  <path d="M16.5 11c-.83 0-1.5.67-1.5 1.5S15.67 14 16.5 14s1.5-.67 1.5-1.5S17.33 11 16.5 11zM7.5 11c-.83 0-1.5.67-1.5 1.5S6.67 14 7.5 14s1.5-.67 1.5-1.5S8.33 11 7.5 11zM12 6c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  Premium Quality
                </h3>
                <p>
                  We ensure that all our products and services are of the
                  highest quality, providing you with exceptional value.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-blue-300 text-3xl mr-4">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 16H8v-2h4v2zm0-4H8v-2h4v2zm0-4H8V9h4v2zm6 8h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V9h4v2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  Advanced Features
                </h3>
                <p>
                  Our solutions come with the most advanced features, designed
                  to meet your business needs effectively.
                </p>
              </div>
            </div>
          </div>
          <button className="mt-8 px-6 py-3 bg-blue-500 text-black font-semibold rounded">
            Get Started Now
          </button>
        </div>
        <div className="lg:w-1/3 mt-8 lg:mt-0 flex justify-center items-center relative">
          <div className="w-full h-64 sm:h-80 md:h-[29rem]">
            <video
              className="rounded-lg w-full h-full object-cover"
              autoPlay
              loop
              muted
            >
              <source
                src="https://apart-next.vercel.app/images/video/video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
