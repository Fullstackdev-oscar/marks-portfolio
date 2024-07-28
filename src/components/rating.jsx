import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill, RiLinkedinFill } from "react-icons/ri";
// import { SlSocialLinkedin } from "react-icons/sl";

const Rating = () => {
  return (
    <div className=" flex gap-[5.31rem] mt-[3.44rem]">
      <div className=" ">
        <h2>Work with us</h2>
        <div className="flex gap-2">
          <a href="#">
            <div className="flex  bg-[#D9D9D9] text-blue-800 hover:bg-black  w-8 h-8 cursor-pointer rounded-sm items-center justify-center">
              <FaFacebookF />
            </div>
          </a>

          <a href="#">
            <div className=" flex bg-[#D9D9D9] text-[#C602BE] hover:bg-black w-8 h-8 cursor-pointer rounded-sm items-center justify-center">
              <RiInstagramFill />
            </div>
          </a>

          <a href="#">
            <div className=" flex bg-[#D9D9D9] text-blue-800 hover:bg-black w-8 h-8 cursor-pointer rounded-sm items-center justify-center">
              <RiLinkedinFill />
            </div>
          </a>
        </div>
      </div>

      <div className=" ">
        <h2 className="">Rate our jobs</h2>
        <div className="flex gap-2">
          <div className=" flex bg-[#D9D9D9] text-[#C602BE] hover:bg-black w-8 h-8 cursor-pointer rounded-sm items-center justify-center">
            <RiInstagramFill />
          </div>
          <div className=" flex bg-[#D9D9D9] text-[#C602BE] hover:bg-black w-8 h-8 cursor-pointer rounded-sm items-center justify-center">
            <RiInstagramFill />
          </div>
          <div className=" flex bg-[#D9D9D9] text-[#C602BE] hover:bg-black w-8 h-8 cursor-pointer rounded-sm items-center justify-center">
            <RiInstagramFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
