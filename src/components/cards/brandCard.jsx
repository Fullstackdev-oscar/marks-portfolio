import React from "react";

const BrandCard = ({ logo }) => {
  return (
    <div className="flex items-center p-4 h-36 justify-center ">
      {/* <div className="flex items-center p-4 h-36 justify-center shadow-md drop-shadow-md"> */}
      <img width={150} height={150} src={logo} alt="logo" />
    </div>
  );
};

export default BrandCard;
