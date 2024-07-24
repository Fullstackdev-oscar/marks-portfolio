import React from "react";

const Clients = () => {
  return (
    <section className=" py-16">
      <div className=" mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Clients</h2>
          <p className="text-gray-600">Trusted by over 786+ clients.</p>
          <p className="text-gray-600">
            Our clients are our top priority, and we are committed to providing
            them with the highest level of service.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <img
              src="https://via.placeholder.com/150"
              alt="Client Logo 1"
              className="mx-auto"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/150"
              alt="Client Logo 2"
              className="mx-auto"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/150"
              alt="Client Logo 3"
              className="mx-auto"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/150"
              alt="Client Logo 4"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
