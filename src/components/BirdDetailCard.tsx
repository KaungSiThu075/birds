import { useState } from "react";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";

type BirdCardProps = {
  BirdId: number;
  BirdImagePath: string;
  BirdEnglishName: string;
  BirdMyanmarName: string;
  BirdDescription: string;
};

const BirdDetailCard: React.FC<BirdCardProps> = ({
  BirdImagePath,
  BirdEnglishName,
  BirdMyanmarName,
  BirdDescription,
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="flex flex-col justify-between gap-6">
      <div className="flex items-center justify-center bg-neutral-900 rounded-3xl ">
        <img
          className=" p-5 rounded-3xl "
          src={`../../${BirdImagePath}`}
          alt={BirdEnglishName}
        />
      </div>

      <div
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        className=" bg-neutral-900 rounded-3xl p-6 flex flex-col items-start justify-between gap-5"
      >
        <GrLinkNext
          className={
            isHover
              ? " text-5xl text-white transform rotate-90"
              : "text-5xl text-gray-400 transform rotate-90"
          }
        />
        <p className="text-white text-3xl">
          {BirdMyanmarName}({BirdEnglishName})
        </p>
        <p className="text-gray-400">{BirdDescription}</p>

        <Link
          className="text-white bg-neutral-800 py-2 px-6 rounded-xl text-lg font-medium
          hover:bg-white hover:text-black hover:duration-300 hover:transition"
          to={"/birds"}
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default BirdDetailCard;
