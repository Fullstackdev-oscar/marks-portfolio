import { Tooltip } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { NavButton } from ".";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const {
    activeMenu,
    mobileNav,
    setMobileNav,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
    handleActiveMenu,
    screenSizer,
    activeNavLink,
    setActiveNavLink,
  } = useStateContext();

  useEffect(() => screenSizer(), [screenSize]);

  const handleNavClick = (name) => {
    setActiveNavLink(name);
    const element = document.getElementById(name);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navbarRoutes = [
    {
      name: "Home",
      path: "#",
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
  ];
  return (
    <div
      id=""
      className="flex items-center justify-between sticky top-0 px-8 py-4 w-full box-border h-16 bg-glass backdrop-blur-sm shadow-glass z-50"
    >
      <a
        className="flex logo items-center hover:cursor-pointer"
        id="#"
        href="#"
      >
        <span className="text-2xl drop-shadow-[0_0_1px_rgba(0,0,0,0.25)]">
          CODE
        </span>
        <img src="../../Vector 7.png" alt="" className="" />
        <span className="text-2xl drop-shadow-[0_4_4px_rgba(0,0,0,0.75)]">
          WEAVERS
        </span>
      </a>
      {mobileNav && (
        <NavButton title="Menu" color="" icon={<AiOutlineMenu />} />
      )}
      <nav
        className={`${
          mobileNav ? "hidden" : "flex justify-between gap-4 navbar-routes"
        }  `}
      >
        <ul className="flex gap-4 items-center uppercase ">
          {navbarRoutes.map((link, index) => (
            <li className="text-sm font-inter" key={index}>
              <a
                href={link.path}
                onClick={(e) => {
                  handleNavClick(link.name);
                }}
                className={`transition duration-300 ease-in-out`}
                style={{
                  borderBottom:
                    activeNavLink === link.name ? " 2px solid black" : "",
                  borderBottomColor:
                    activeNavLink === link.name ? "#700F6C" : "",
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact">
          <Button
            className="font-inter rounded-full font-normal"
            style={{ backgroundColor: "#C602BE" }}
          >
            Contact Us
          </Button>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
