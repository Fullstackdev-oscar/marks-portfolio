import React from "react";

const HeadlineImage = () => {
  return (
    <div className="headline-image p-8 relative mt-4 w-1/3">
      {/* <div className="flex justify-center items-center  "> */}
      <img
        src="/photo_2024-07-11_18-13-31-removebg-preview.png"
        alt=""
        className="main-image"
        width={300}
        height={300}
      />
      {/* </div> */}
      <img
        src="/purple_mind.png"
        alt=""
        width={120}
        height={120}
        className=" absolute left-[0%] md:top-[10%] top-0"
      />
      <img
        src="/grad_cap_wear.png"
        alt=""
        // width={80}
        // height={80}
        className="w-16 h-16  lg:w-20 lg:h-20 absolute right-[0%] md:top-[8%] top-0 "
      />
      <img
        src="/light_bulb.png"
        alt=""
        // width={150}
        // height={150}
        className="absolute right-[0%] md:bottom-[45%] bottom-0 "
      />
    </div>
  );
};

export default HeadlineImage;
