import { useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";

const SixthCard = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      className=" bg-neutral-900 p-6 rounded-3xl hover:duration-1000 text-white
      md:flex md:flex-col md:justify-around"
    >
      <Link to={"/birds"}>
        <GrLinkNext
          className={
            isHover
              ? "text-4xl text-white transform rotate-90"
              : "text-4xl text-gray-400 transform rotate-90"
          }
        />
        <p className="text-4xl">Let's</p>
        <div className="flex items-center justify-between">
          <p className="text-4xl">
            Explore <span className=" text-blue-800">Together</span>
          </p>
          <GrLinkNext
            className={
              isHover ? "text-4xl text-white" : "text-4xl text-gray-400 "
            }
          />
        </div>
      </Link>
    </div>
  );
};

export default SixthCard;
