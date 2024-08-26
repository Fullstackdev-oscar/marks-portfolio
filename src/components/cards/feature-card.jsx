/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { FaLongArrowAltRight } from "react-icons/fa";

const FeatureCard = ({
  title,
  description,
  icon,
  learnMoreLink,
  isThirdCard,
}) => {
  return (
    <div className=" feature-card bg-white hover:bg-gradient-to-b from-[#B400AC] to-[#C82677] via-[#E53B30] hover:text-[#D9D9D9] rounded-lg p-6 h-full flex flex-col font-inter">
      <img
        src={`../../../${icon}`}
        alt=""
        width={20}
        height={20}
        className={`${isThirdCard ? "bg-purple-400" : ""}`}
      />
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <a href={learnMoreLink} className=" card-link hidden hover:scale-100">
        <FaLongArrowAltRight className="text-white" />
      </a>
    </div>
  );
};

// const FeatureCard = ({ title, description, learnMoreLink }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-6 h-full flex flex-col">
//       <h3 className="text-lg font-bold mb-4">{title}</h3>
//       <p className="text-gray-600 mb-4 flex-grow">{description}</p>
//       <a
//         href={learnMoreLink}
//         className="text-blue-500 hover:text-blue-700 mt-auto"
//       >
//         Learn More
//       </a>
//     </div>
//   );
// };

export default FeatureCard;
