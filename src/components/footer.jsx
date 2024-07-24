import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/solid";

export function Footer({
  name = "DevRoy",
  link = "https://x.com/roychinwuba",
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="p-8 ">
      <div className="text-center">
        <Typography variant="small" className="font-normal text-inherit">
          Developed with{" "}
          <HeartIcon className="-mt-0.5 inline-block h-3.5 w-3.5 text-red-600" />{" "}
          by{" "}
          <a
            href={link}
            target="_blank"
            className="transition-colors hover:text-blue-500 font-bold"
          >
            {name}
          </a>{" "}
        </Typography>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
};

Footer.displayName = "/src/components/footer.jsx";

export default Footer;
