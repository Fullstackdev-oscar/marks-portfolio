import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const StateContext = createContext();

const initialState = {};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentMode, setCurrentMode] = useState("Light");
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        currentMode,
        setMode,
        activeMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
        isClicked,
        handleClick,
        initialState,
        setIsClicked,
        setCurrentMode,
        
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
