import React from "react";
import { Typography } from "@material-tailwind/react";

const HeadlineCopy = () => {
  const supportingCopy = [
    "Our company meticulously codes websites from scratch, ",
    "meticulously crafting each element to align perfectly",
    "with our clients' unique needs and vision.",
  ];
  return (
    <div className="text-gray-400 mt-16 xl:-mt-[7rem] mb-[3.44rem]">
      {supportingCopy.map((text, index) => (
        <Typography className="font-inter" key={index}>
          {text}
        </Typography>
      ))}
    </div>
  );
};

export default HeadlineCopy;
