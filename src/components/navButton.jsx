import { Tooltip } from "@material-tailwind/react";

const NavButton = ({ title, customFunc, icon, color }) => (
  <Tooltip content={title} placement="bottom">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3"
    >
      {icon}
    </button>
  </Tooltip>
);

export default NavButton;
