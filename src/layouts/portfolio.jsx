import { Typography } from "@material-tailwind/react";
import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Portfolio = () => {
  const projects = [
    {
      tittle: "Development",
      description: "Web Accessories Landing Page.",
      image: "",
    },
    {
      tittle: "Development",
      description: "Custom Portfolio Website Setup.",
      image: "",
    },
    {
      tittle: "Development",
      description: "Mobile app delivery Service Design.",
      image: "",
    },
    {
      tittle: "Development",
      description: "Portfolio Design.",
      image: "",
    },
    {
      tittle: "Development",
      description: "NeoBank App Design.",
      image: "",
    },
    {
      tittle: "Development",
      description: "The Service Provider For Design.",
      image: "",
    },
  ];
  return (
    <section id="portfolio" className="pt-16">
      <h4 className="text-center">Contains previous experience in jobs done</h4>
      <div className="flex items-center justify-center">
        <Typography className=" font-marko-one" variant="h3">
          Portfolio
        </Typography>
        <img src="../../sand_clock.png" alt="" />{" "}
      </div>
      <div className="flex items-center"></div>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4 font-sans">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-lg h-44 p-3">
            <img
              src="  /_Neomorphism experiment_ 1.png"
              alt="project picture"
              className="mx-auto"
            />
            <div className="flex items-center justify-between">
              <h5 className=" text-red-300 uppercase">{project.tittle}</h5>
              <div className="flex items-center">
                <button onClick={() => {}}>
                  <AiOutlineHeart color="red" />
                </button>{" "}
                <p className="text-xs">256</p>
              </div>
            </div>
            <p className=" capitalize">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
