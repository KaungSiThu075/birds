import { Link } from "react-router-dom";
import { UseFetchHook } from "../hooks/UseFetchHook";
import { BirdCard } from "../components/index";

const BirdsPage = () => {
  const url = "http://localhost:8000/Tbl_Bird";
  const { data: birds, loading, error } = UseFetchHook(url);
  return (
    <div className=" p-5 flex flex-col gap-5">
      {error && <p className="text-red-500 text-xl">{error.message}</p>}
      {loading && <p className="text-2xl">Loading.....</p>}
      {!!birds &&
        birds.map((bird) => {
          return (
            <Link to={`birds/${bird.Id}`}>
              <BirdCard
                key={bird.Id}
                BirdId={bird.Id}
                BirdImagePath={`../../${bird.ImagePath}`}
                BirdEnglishName={bird.BirdEnglishName}
                BirdMyanmarName={bird.BirdMyanmarName}
              />
            </Link>
          );
        })}
    </div>
  );
};

export default BirdsPage;
