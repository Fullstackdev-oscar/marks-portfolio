import { Typography } from "@material-tailwind/react";

import HeadlineCopy from "./headlineCopy";

const Headline = () => {
  const headlineText = [
    "Hello",
    "We Build Creative",
    "Innovative and Responsive",
    "Websites...",
  ];

  return (
    <div>
      <div className=" flex justify-between mt-8">
        <div>
          {headlineText.map((text, index) => (
            <Typography className="font-marko-one" key={index}>
              {text}
            </Typography>
          ))}
        </div>
        {/* <div className="headline_image mx-2">
          <img
            src="../../public/headline_image.png"
            className="headline-image"
            alt=""
          />
          <img
            src="../../../public/think.png"
            alt=""
            className=" relative float-left bottom-40 right-7"
          />
          <img
            src="../../../public/grad_cap.png"
            alt=""
            className=" relative float-right bottom-52 left-24"
          />
          <img
            src="../../../public/light_bulb.png"
            alt=""
            className=" relative  float-left bottom-48  left-20"
          />
        </div> */}
      </div>
      <HeadlineCopy />
    </div>
  );
};

export default Headline;
