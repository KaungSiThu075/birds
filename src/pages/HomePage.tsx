import {
  FirstCard,
  SecondCard,
  ThirdCard,
  FourthCard,
  FifthCard,
  SixthCard,
} from "../components/index";

const HomePage = () => {
  return (
    <div className=" flex flex-col gap-5">
      <div className="flex flex-col gap-5  lg:grid lg:grid-cols-2">
        <FirstCard />

        <div className="flex flex-col gap-5 lg:items-center">
          <SecondCard />
          <div className=" flex flex-col gap-5 sm:grid sm:grid-cols-2 sm:gap-5">
            <ThirdCard />
            <FourthCard />
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-5">
        <FifthCard />
        <SixthCard />
      </div>
    </div>
  );
};

export default HomePage;
