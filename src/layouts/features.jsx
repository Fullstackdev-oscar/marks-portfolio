// import { Typography } from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { FeatureCard } from "../components";

const Features = () => {
  const features = [
    {
      title: "Animation Coding",
      description:
        "You're not supposed to animate drawings. You're supposed to animate feelings",
      learnMoreLink: "#",
      icon: "animation_coding_vector.png",
    },
    {
      title: "App development",
      description: '"Don\'t comment bad code, rewrite it." Brian Kernighan',
      learnMoreLink: "#",
      icon: "app_development_vector.png",
    },
    {
      title: "Graphics Design",
      description:
        "Good design is like a refrigerator when it works, no one notices, but when it doesn't, it sure stinks.",
      learnMoreLink: "#",
      icon: "graphics_design_vector.png",
      isThirdCard: true,
    },
    {
      title: "Mobile App",
      description:
        "Mobile is becoming not only the new digital hub, but also the bridge ot the physical world.",
      learnMoreLink: "#",
      icon: "mobile_app_vector.png",
    },
    {
      title: "CEO Marketing",
      description:
        "Ignoring online marketing is like openinig a business but not telling anyone...",
      learnMoreLink: "#",
      icon: "ceo_marketing_vector.png",
    },
    {
      title: "UI/UX",
      description:
        "A user interface is well-designed when the program behaves exactly how the user thought it would.",
      learnMoreLink: "#",
      icon: "ui_ux_vector.png",
    },
  ];

  return (
    <div className="w-full py-16">
      <div className=" mx-auto">
        <h2 className="text-3xl font-bold mb-8 ">Features</h2>
        <div className="flex items-center">
          <Typography variant="h3">What I do</Typography>
          <img src="../../sand_clock.png" alt="" />{" "}
        </div>{" "}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              learnMoreLink={feature.learnMoreLink}
              isThirdCard={feature.isThirdCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

// const Features = () => {
//   return (
//     <div>
//       <Typography>Features</Typography>
//       <div className="flex items-center">
//         <Typography>What I do</Typography>
//         <img src="../../../public/sand_clock.png" alt="" />
//       </div>{" "}
//       <div className="features-cards flex flex-wrap justify-between">
//         <FeaturesCard
//           icon="animation_coding_vector.png"
//           title="animation"
//           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, numquam?"
//         />
//         <FeaturesCard
//           icon="animation_coding_vector.png"
//           title="animation"
//           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, numquam?"
//         />
//         <FeaturesCard
//           icon="animation_coding_vector.png"
//           title="animation"
//           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, numquam?"
//         />
//         <FeaturesCard
//           icon="animation_coding_vector.png"
//           title="animation"
//           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, numquam?"
//         />
//         <FeaturesCard
//           icon="animation_coding_vector.png"
//           title="animation"
//           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, numquam?"
//         />
//         <FeaturesCard
//           icon="animation_coding_vector.png"
//           title="animation"
//           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, numquam?"
//         />
//       </div>
//     </div>
//   );
// };

//export default Features;
