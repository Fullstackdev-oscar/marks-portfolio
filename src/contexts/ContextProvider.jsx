import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const StateContext = createContext();

const initialState = {
  isClicked: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentMode, setCurrentMode] = useState("Light");
  const [mobileNav, setMobileNav] = useState(true);
  const [activeMenu, setActiveMenu] = useState(false);
  const [isClicked, setIsClicked] = useState(initialState);
  const [activeNavLink, setActiveNavLink] = useState(null);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const handleClick = (link) => setActiveNavLink(link);

  const screenSizer = () => {
    const currentScreenSize = window.innerWidth;
    setScreenSize(currentScreenSize);
    if (currentScreenSize <= 1140) {
      setMobileNav(true);
    } else {
      setMobileNav(false);
    }
  };

  useEffect(() => {
    const handleResize = () => screenSizer();

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  // const handleScroll = () => {
  //   const sections = document.querySelectorAll("section");
  //   const scrollPos = window.scrollY + window.innerHeight / 2;

  //   sections.forEach((section) => {
  //     const sectionTop = section.offsetTop;
  //     const sectionHeight = section.offsetHeight;
  //     const sectionId = section.getAttribute("id");

  //     if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
  //       setActiveNavLink(sectionId);
  //     }
  //   });
  // };
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav ul li");
    window.onscroll = () => {
      var current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id");
        }
      });

      navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      });
    };
  });

  // const sections = document.querySelectorAll("section");
  // const navLi = document.querySelectorAll("nav ul li");
  // window.onscroll = () => {
  //   var current = "";

  //   sections.forEach((section) => {
  //     const sectionTop = section.offsetTop;
  //     if (pageYOffset >= sectionTop - 60) {
  //       current = section.getAttribute("id");
  //     }
  //   });

  //   navLi.forEach((li) => {
  //     li.classList.remove("active");
  //     if (li.classList.contains(current)) {
  //       setActiveNavLink();
  //     }
  //   });
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll(); // Initial check
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        currentMode,
        setMode,
        mobileNav,
        setMobileNav,
        screenSize,
        setScreenSize,
        isClicked,
        handleClick,
        initialState,
        setIsClicked,
        setCurrentMode,
        handleActiveMenu,
        screenSizer,
        activeNavLink,
        setActiveNavLink,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useStateContext = () => useContext(StateContext);
