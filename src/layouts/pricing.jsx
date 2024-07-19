import { PricingCard } from "../components";
import { Typography } from "@material-tailwind/react";

const Pricing = () => {
  const plans = [
    {
      title: "Static",
      tag: "Customize Your Single Page",
      price: "60",
      technology: "Elementor",
      description:
        "Design your vision, create your reality. Design is where creativity transforms into innovation.",
      features: [
        "Custom Website design",
        "UI/UX Design",
        "Website Analytics",
        "Website Maintenance",
        "SEO Optimization",
        "Responsive Web Development",
        "E-commerce Solutions",
        "Graphic Design Services",
        "Consultation and Training",
        "Content Management Systems",
      ],
    },
    {
      title: "Static",
      tag: "Customize Your Single Page",
      price: "60",
      technology: "Elementor",
      description:
        "Design your vision, create your reality. Design is where creativity transforms into innovation.",
      features: [
        "Custom Website design",
        "UI/UX Design",
        "Website Analytics",
        "Website Maintenance",
        "SEO Optimization",
        "Responsive Web Development",
        "E-commerce Solutions",
        "Graphic Design Services",
        "Consultation and Training",
        "Content Management Systems",
      ],
    },
    {
      title: "Static",
      tag: "Customize Your Single Page",
      price: "60",
      technology: "Elementor",
      description:
        "Design your vision, create your reality. Design is where creativity transforms into innovation.",
      features: [
        "Custom Website design",
        "UI/UX Design",
        "Website Analytics",
        "Website Maintenance",
        "SEO Optimization",
        "Responsive Web Development",
        "E-commerce Solutions",
        "Graphic Design Services",
        "Consultation and Training",
        "Content Management Systems",
      ],
    },
  ];
  return (
    <div className="w-full py-16">
      <div className=" mx-auto">
        <h2 className="text-3xl font-bold mb-8 ">Pricing</h2>
        <div className="flex items-center">
          <Typography variant="h3">Service Offerings</Typography>
          <img src="../../sand_clock.png" alt="" />{" "}
        </div>{" "}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4">
          {plans.map((feature, index) => (
            <PricingCard
              key={index}
              title={feature.title}
              tag={feature.tag}
              price={feature.price}
              features={feature.features}
              description={feature.description}
              learnMoreLink={feature.learnMoreLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
