import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import { useState } from "react";
import BigBirdLogo from "/img/BigBirdLogo.jpg";

const FirstCard = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      className=" bg-neutral-900 p-6 rounded-3xl hover:duration-1000 "
    >
      <Link to={"/birds"}>
        {/* first card  */}
        <div className="flex items-center justify-center p-5">
          {/* image  */}
          <img
            className=" h-60 w-60 rounded-tl-3xl rounded-br-3xl"
            src={BigBirdLogo}
            alt="BigBirdLogo"
          />
          {/* image  */}
        </div>

        {/* paragraph part  */}
        <div className=" flex flex-col justify-center gap-2">
          <p className=" text-gray-400 font-semibold">Bird</p>
          <p className=" text-4xl text-white">ငှက်</p>
          <div className="flex items-center justify-between">
            <p className="text-gray-400">
              ငှက်သည် အမွှေးအတောင်ရှိ၍ အတောင်ပံ နှစ်ဖက်ရှိသော
              သွေးနွေးသတ္တဝါအမျိုးအစားတွင်ပါဝင်သည်။
            </p>
            <GrLinkNext
              className={
                isHover ? "text-4xl text-white" : "text-4xl text-gray-400 "
              }
            />
          </div>
        </div>
        {/* paragraph part  */}

        {/* end of first card  */}
      </Link>
    </div>
  );
};

export default FirstCard;
