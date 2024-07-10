// eslint-disable-next-line react/prop-types
const FeatureCard = ({ title, description, icon, learnMoreLink }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 h-full flex flex-col ">
      <img src={`../../../${icon}`} alt="" width={20} height={20} />
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <a
        href={learnMoreLink}
        className="text-blue-500 hover:text-blue-700 mt-auto"
      >
        Learn More
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
