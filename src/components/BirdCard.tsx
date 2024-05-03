import { GrLinkNext } from "react-icons/gr";
import { useState } from "react";
import { Link } from "react-router-dom";

type BirdCardProps = {
  BirdId: number;
  BirdImagePath: string;
  BirdEnglishName: string;
  BirdMyanmarName: string;
};

const BirdCard: React.FC<BirdCardProps> = ({
  BirdId,
  BirdImagePath,
  BirdEnglishName,
  BirdMyanmarName,
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      className="flex flex-col  justify-center gap-4 bg-neutral-900
      p-6
      rounded-3xl
      hover:duration-1000"
    >
      <Link to={`${BirdId}`}>
        <div className="flex items-center justify-center">
          <img
            src={`../../../birds-app/${BirdImagePath}`}
            alt={BirdEnglishName}
            className=" rounded-3xl"
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 uppercase">{BirdEnglishName}</p>
            <p className="text-white text-2xl">{BirdMyanmarName}</p>
          </div>

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

export default BirdCard;
