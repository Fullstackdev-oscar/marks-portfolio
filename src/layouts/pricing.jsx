import { PricingCard } from "../components";
import { Typography } from "@material-tailwind/react";

const Pricing = () => {
  const plans = [
    {
      title: "Static",
      tag: "Customize Your Single Page",
      price: {
        whole: "35",
        decimal: "99",
      },
      technology: "Elementor",
      features: [
        "Custom Website design",
        "Website Analytics",
        "Website Maintenance",
        "SEO Optimization",
        "Responsive Web Development",
        "E-commerce Solutions",
        "UI/UX Design",
        "Graphic Design Services",
        "Consultation and Training",
        "Content Management Systems",
      ],
    },
    {
      title: "Standard",
      tag: "Customize Your Single Page",
      price: {
        whole: "60",
        decimal: "00",
      },
      technology: "Elementor",
      features: [
        "Custom Website design",
        "Website Analytics",
        "Website Maintenance",
        "SEO Optimization",
        "Responsive Web Development",
        "E-commerce Solutions",
        "UI/UX Design",
        "Graphic Design Services",
        "Consultation and Training",
        "Content Management Systems",
      ],
    },
    {
      title: "Premium",
      tag: "Customize Your Single Page",
      price: {
        whole: "101",
        decimal: "00",
      },
      technology: "Elementor",
      features: [
        "Custom Website design",
        "Website Analytics",
        "Website Maintenance",
        "SEO Optimization",
        "Responsive Web Development",
        "E-commerce Solutions",
        "UI/UX Design",
        "Graphic Design Services",
        "Consultation and Training",
        "Content Management Systems",
      ],
    },
  ];
  return (
    <section className="w-full py-16 text-center" id="pricing">
      <div className=" mx-auto">
        <h2 className="text-3xl font-bold mb-8">Pricing</h2>
        <div className="flex items-center">
          <Typography variant="h3" className=" font-marko-one">
            Service Offerings
          </Typography>
          <img src="../../sand_clock.png" alt="" />{" "}
        </div>{" "}
        <div className="grid xl:grid-cols-3 gap-8 mt-4">
          {plans.map((feature, index) => (
            <PricingCard
              key={index}
              title={feature.title}
              tag={feature.tag}
              price={feature.price}
              features={feature.features}
              technology={feature.technology}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
