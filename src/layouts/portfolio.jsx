import { Typography } from "@material-tailwind/react";
import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Portfolio = () => {
  const projects = [
    {
      tittle: "Development",
      description: "Web Accessories Landing Page.",
      image: "/portfolio_custom_portfolio_website_setup.png",
    },
    {
      tittle: "Development",
      description: "Custom Portfolio Website Setup.",
      image: "/portfolio_mobile_app_delivery_service_design.png",
    },
    {
      tittle: "Development",
      description: "Mobile app delivery Service Design.",
      image: "/portfolio_mobile_app_design.png",
    },
    {
      tittle: "Development",
      description: "Portfolio Design.",
      image: "/portfolio_porfolio_design.png",
    },
    {
      tittle: "Development",
      description: "NeoBank App Design.",
      image: "/portfolio_service_provider_design.png",
    },
    {
      tittle: "Development",
      description: "The Service Provider For Design.",
      image: "/portfolio_web_accessories_landing_page.png",
    },
  ];
  return (
    <section id="portfolio" className="pt-16 mb-16">
      <div className="flex items-center justify-center">
        <Typography className=" font-marko-one text-[#700F6C]" variant="h3">
          Portfolio
        </Typography>
        {/* <img src="../../sand_clock.png" alt="" />{" "} */}
      </div>
      <h4 className="text-center">Contains previous experience in jobs done</h4>
      <div className="flex items-center"></div>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4 font-sans">
        {projects.map((project, idx) => (
          <div key={idx} className=" bg-[#FAFAFA] shadow-md rounded-md p-4">
            <div className="bg-[#D3D3D3] p-3 mb-3 rounded-md">
              <img
                src={project.image}
                alt="project picture"
                className="mx-auto"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <h5 className=" text-red-400 uppercase font-inter font-bold text-xs">
                {project.tittle}
              </h5>
              <div className="flex items-center">
                <button onClick={() => {}}>
                  <AiOutlineHeart color="red" />
                </button>{" "}
                <p className="text-xs">256</p>
              </div>
            </div>
            <p className=" capitalize font-inter">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
