import { UseFetchHook } from "../hooks/UseFetchHook";
import { BirdDetailCard } from "../components/index";
import { useParams } from "react-router-dom";

const BirdDetailPage = () => {
  const { id } = useParams();
  const url = "http://localhost:8000/Tbl_Bird";
  const { data: birds } = UseFetchHook(url);

  return (
    <div>
      {birds &&
        birds
          .filter((bird) => bird.Id === Number(id))
          .map((bird) => {
            return (
              <BirdDetailCard
                key={bird.Id}
                BirdId={bird.Id}
                BirdDescription={bird.Description}
                BirdEnglishName={bird.BirdEnglishName}
                BirdMyanmarName={bird.BirdMyanmarName}
                BirdImagePath={bird.ImagePath}
              />
            );
          })}
    </div>
  );
};

export default BirdDetailPage;
