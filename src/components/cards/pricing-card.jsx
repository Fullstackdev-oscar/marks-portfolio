/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

const PricingCard = ({ title, tag, price, features, technology }) => {
  return (
    <Card color="gray" variant="gradient" className="w-full max-w-full p-8">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal uppercase"
        >
          {title}
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mt-2 flex justify-center gap-1 text-6xl font-normal"
        >
          <span className="mt-2 text-3xl">$</span>
          {price.whole}{" "}
          <span className="self-end text-3xl">{price.decimal}</span>
        </Typography>
        <Typography variant="small" color="white" className="font-normal  ">
          {technology}
        </Typography>
        <Typography variant="small" color="white" className="font-normal ">
          {tag}
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="">
          {features.map((service, index) => (
            <li key={index} className="flex items-center gap-4 mb-2">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">{service}</Typography>
            </li>
          ))}
          {/* <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">5 team members</Typography>
          </li>

          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">200+ components</Typography>
          </li>

          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">40+ built-in pages</Typography>
          </li>

          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">1 year free updates</Typography>
          </li>

          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">
              Life time technical support
            </Typography>
          </li> */}
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          Order Now
        </Button>
      </CardFooter>
    </Card>
  );
};
export default PricingCard;
