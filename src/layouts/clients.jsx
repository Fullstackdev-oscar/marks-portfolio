import { ClientSlider } from "@/components";
import React from "react";

const Clients = () => {
  return (
    <section className=" py-16 bg-gray-900" id="clients">
      <div className=" mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#700F6C] mb-4">
            Our Clients
          </h2>
          <p className="text-gray-600">Trusted by over 786+ clients.</p>
          <p className="text-gray-600">
            Our clients are our top priority, and we are committed to providing
            them with the highest level of service.
          </p>
        </div>
        <ClientSlider/>
      </div>
    </section>
  );
};

export default Clients;
