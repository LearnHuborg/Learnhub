import { Link } from "react-router-dom";
import ArrowRight from "../../assets/icons/arrow-right.svg";

export const LearnMoreButton = ({ to }) => {
  return (
    <Link to={to}>
      <button
        className="flex justify-center place-items-center rounded-[50px] p-1 px-4 gap-2 text-[24px] font-medium text-blue-text-color opacity-0 transform translate-y-2 transition-opacity duration-500 ease-in-out hover:opacity-100"
        style={{
          background: "rgba(217, 217, 217, 0.40)",
          boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        Learn More
        <img src={ArrowRight} alt="" />
      </button>
    </Link>
  );
};
