import { Link } from "react-router-dom";
import BirdLogo from "../assets/BirdLogo.png";

const Footer = () => {
  return (
    <div className=" py-28 text-gray-400 flex flex-col items-center justify-between gap-8">
      <div>
        <img className=" h-14" src={BirdLogo} alt="BirdLogo" />
      </div>

      <div className="flex items-center justify-center gap-20">
        <Link to={"/"} className=" uppercase hover:text-white">
          Home
        </Link>
        <Link to={"/birds"} className="uppercase hover:text-white">
          Birds
        </Link>
      </div>

      <p>
        {" "}
        &#169; All rights reserved by{" "}
        <span className="text-blue-800">WordPress River</span>
      </p>
    </div>
  );
};

export default Footer;
