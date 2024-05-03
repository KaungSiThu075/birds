import { useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import Feather from "../../../birds-app/img/feather.png";

const ThirdCard = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <a
      href="https://my.wikipedia.org/wiki/%E1%80%84%E1%80%BE%E1%80%80%E1%80%BA"
      target="blank"
      className="bg-neutral-900 p-6 rounded-3xl hover:duration-1000 "
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <div className="flex items-center justify-center ">
        <img className=" h-40 w-40" src={Feather} alt="wiki to birds" />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-white text-xl font-semibold">Wikipedia</p>
        <GrLinkNext
          className={
            isHover ? "text-4xl text-white" : "text-4xl text-gray-400 "
          }
        />
      </div>
    </a>
  );
};

export default ThirdCard;
