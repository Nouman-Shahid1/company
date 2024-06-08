import React from "react";
import client1 from "../../assets/images/client1.webp";
import client2 from "../../assets/images/client2.webp";
import client3 from "../../assets/images/client3.webp";
import client4 from "../../assets/images/client4.webp";
import client5 from "../../assets/images/client5.webp";
import client6 from "../../assets/images/client6.webp";
import client7 from "../../assets/images/client7.webp";
import client8 from "../../assets/images/client8.webp";
import "../../index.css";

const ClientsSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="w-[80%] mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Our Trusted Clients
        </h2>
        <div className="marquee">
          <div className="marquee-content">
            <img className="h-12" src={client1} alt="Client 1" />
            <img className="h-12" src={client2} alt="Client 2" />
            <img className="h-12" src={client3} alt="Client 3" />
            <img className="h-12" src={client4} alt="Client 4" />
            <img className="h-12" src={client5} alt="Client 5" />
            <img className="h-12" src={client6} alt="Client 6" />
            <img className="h-12" src={client7} alt="Client 7" />
            <img className="h-12" src={client8} alt="Client 8" />
            <img className="h-12" src={client1} alt="Client 1" />
            <img className="h-12" src={client2} alt="Client 2" />
            <img className="h-12" src={client3} alt="Client 3" />
            <img className="h-12" src={client4} alt="Client 4" />
            <img className="h-12" src={client5} alt="Client 5" />
            <img className="h-12" src={client6} alt="Client 6" />
            <img className="h-12" src={client7} alt="Client 7" />
            <img className="h-12" src={client8} alt="Client 8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
