import { Nav, Footer } from "../components/index";
import { Outlet } from "react-router-dom";

const HomePageLayout = () => {
  return (
    <div className=" p-4 bg-black">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomePageLayout;
