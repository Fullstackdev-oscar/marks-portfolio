import { Typography } from "@material-tailwind/react";
import { FaHandPaper, FaHandSparkles } from "react-icons/fa";

import HeadlineCopy from "./headlineCopy";
import HeadlineImage from "@/components/headlineImage";
import { Rating } from "@/components";

const Headline = () => {
  // const headlineText = [
  //   "Hello,",
  //   "We Build Creative",
  //   "Innovative and Responsive",
  //   "Websites...",
  // ];

  return (
    <section className="mt-8">
      <div className="lg:flex gap-2 ">
        <HeadlineCopy />
        <HeadlineImage />
      </div>
      <Rating />
    </section>
  );
};

export default Headline;
