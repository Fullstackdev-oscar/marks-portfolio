import React from "react";
import { Typography } from "@material-tailwind/react";

const HeadlineCopy = () => {
  const supportingCopy = [
    "Template allows us to present information in a professional",
    "way and allowing clients to easily understand the services",
    "offered, and rates conditions.",
  ];
  return (
    <div className="text-gray-400 ">
      {supportingCopy.map((text, index) => (
        <Typography className="font-marko-one" key={index}>
          {text}
        </Typography>
      ))}
    </div>
  );
};

export default HeadlineCopy;
