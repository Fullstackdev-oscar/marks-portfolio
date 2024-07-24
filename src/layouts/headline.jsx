import { Typography } from "@material-tailwind/react";
import { FaHandPaper, FaHandSparkles } from "react-icons/fa";

import HeadlineCopy from "./headlineCopy";

const Headline = () => {
  const headlineText = [
    "Hello,",
    "We Build Creative",
    "Innovative and Responsive",
    "Websites...",
  ];

  return (
    <section className=" mt-20 text-center xl:text-justify">
      <div className=" md:flex justify-between ">
        <div className="font-marko-one font-normal text-4xl">
          <h1>Hello</h1>

          <br />
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
        <div className="headline_image mx-2">
          <img
            src="/photo_2024-07-11_18-13-31-removebg-preview.png"
            className="headline-image"
            width={200}
            height={200}
            alt=""
          />
          <img
            src="/purple_mind.png"
            alt=""
            width={100}
            height={100}
            className=" relative float-left xl:right-10"
          />
          <img
            src="/grad_cap_wear.png"
            alt=""
            width={60}
            height={60}
            className=" relative float-right"
          />
          <img
            src="/light_bulb.png"
            alt=""
            width={120}
            height={120}
            className=" relative float-left"
          />
        </div>
      </div>
      <HeadlineCopy />
    </section>
  );
};

export default Headline;
