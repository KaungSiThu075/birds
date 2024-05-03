import { IoPersonOutline } from "react-icons/io5";
import { LuFacebook } from "react-icons/lu";
import { GrLinkNext } from "react-icons/gr";
import { useState } from "react";

const FourthCard = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      className=" flex flex-col gap-3 bg-neutral-900 p-6 text-white rounded-3xl "
    >
      <div className="flex items-center justify-center gap-6 text-4xl p-6 border-solid border border-neutral-800 rounded-3xl">
        <a
          href="https://www.facebook.com/profile.php?id=100064810986327"
          target="blank"
          className=" flex items-center justify-center p-4 border border-solid border-neutral-800 rounded-full
          hover:bg-white hover:text-black"
        >
          <IoPersonOutline />
        </a>

        <a
          href="https://www.facebook.com/bin.birdsinnature"
          target="blank"
          className=" flex items-center justify-center p-4 border border-solid border-neutral-800 rounded-full
            hover:bg-white hover:text-black"
        >
          <LuFacebook />
        </a>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold">Birds In Nature</p>
        <GrLinkNext
          className={
            isHover ? "text-4xl text-white" : "text-4xl text-gray-400 "
          }
        />
      </div>
    </div>
  );
};

export default FourthCard;
