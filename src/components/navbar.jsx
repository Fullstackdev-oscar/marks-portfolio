import React from "react";
import { Tooltip, Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const Navbar = () => {
  const navbarRoutes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Features",
      path: "#features",
    },
    {
      name: "Portfolio",
      path: "#portfolio",
    },
    {
      name: "Resume",
      path: "#resume",
    },
    {
      name: "Clients",
      path: "#clients",
    },
    {
      name: "Pricing",
      path: "#pricing",
    },
    {
      name: "Blog",
      path: "#blog",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ];
  return (
    <div className="flex items-center justify-between">
      <div className="flex logo items-center">
        <span className="">WEB</span>
        <img src="../../Vector 7.png" alt="" className="" />
        <span>DYNESTY</span>
      </div>

      <nav className="flex justify-between gap-4 navbar-routes">
        <ul className="flex gap-4 items-center uppercase">
          {navbarRoutes.map((link, index) => (
            <li key={index}>
              
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
        <Button>Start Now</Button>
      </nav>
    </div>
  );
};

export default Navbar;
