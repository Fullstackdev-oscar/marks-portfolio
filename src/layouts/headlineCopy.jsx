import React from "react";
import { Typography } from "@material-tailwind/react";

const HeadlineCopy = () => {
  // const supportingCopy = [
  //   "Our company meticulously codes websites from scratch, ",
  //   "meticulously crafting each element to align perfectly",
  //   "with our clients' unique needs and vision.",
  // ];
  return (
    <div className="lg:w-2/3 text-center md:text-left">
      <div className="main-copy text-5xl">
        <h1 className="">Hello</h1>
        <h1 className="text-[#700F6C] mt-12">
          We Build Creative, Innovative and Responsive Websites ...
        </h1>
      </div>

      <div className="support-copy text-xl text-gray-400 mt-8 text-justify">
        Our company meticulously codes websites from scratch, meticulously
        crafting each element to align perfectly with our clients unique needs
        and vision.
      </div>
    </div>
  );
};

export default HeadlineCopy;
