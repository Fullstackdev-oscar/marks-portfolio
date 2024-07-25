import { Typography } from "@material-tailwind/react";
import { FaHandPaper, FaHandSparkles } from "react-icons/fa";

import HeadlineCopy from "./headlineCopy";
import { Rating } from "@/components";

const Headline = () => {
  const headlineText = [
    "Hello,",
    "We Build Creative",
    "Innovative and Responsive",
    "Websites...",
  ];

  return (
    <section className="mt-4 md:mt-20 xl:text-justify">
      <div className="  text-center md:text-justify md:flex justify-between ">
        <div className="font-marko-one font-normal text-4xl">
          <h1 className=" mb-6">Hello</h1>
          <h1 className="text-[#700F6C]">We Build Creative,</h1>
          <h1 className="text-[#700F6C]">Innovative and Responsive</h1>
          <h1 className="text-[#700F6C]">Websites ...</h1>
          {/* {headlineText.map((text, index) => (
            <>
              <Typography
                variant="h2"
                className="font-marko-one mt-2 text-purple-600 font-normal"
                key={index}
              >
                {text}
              </Typography>
            </>
          ))} */}
        </div>
        <div className="headline_image mt-4">
          <div className="flex justify-center items-center  ">
            <img
              src="/photo_2024-07-11_18-13-31-removebg-preview.png"
              className="headline-image"
              width={200}
              height={200}
              alt=""
            />
          </div>
          <img
            src="/purple_mind.png"
            alt=""
            width={120}
            height={120}
            className=" relative float-left left-8 bottom-64"
          />
          <img
            src="/grad_cap_wear.png"
            alt=""
            width={80}
            height={80}
            className=" relative float-right right-8 bottom-[18rem]"
          />
          <img
            src="/light_bulb.png"
            alt=""
            width={150}
            height={150}
            className="relative float-right bottom-40 left-24"
          />
        </div>
      </div>
      <HeadlineCopy className="text-justify" />
      <Rating />
    </section>
  );
};

export default Headline;
