import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className=" flex justify-between items-center pb-20">
      <img
        src="../../src/assets/BirdLogo.png"
        alt="Bird Logo"
        className=" w-12 h-12"
      />
      <div className=" hidden  sm:flex sm:justify-between sm:items-center sm:gap-10">
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-white " : "  text-gray-400  hover:text-white"
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-white  " : "  text-gray-400 hover:text-white"
          }
          to={"/birds"}
        >
          Birds
        </NavLink>
      </div>
      <button className=" bg-neutral-900 text-white px-2 py-1 rounded-md transition hover:duration-500 hover:bg-white hover:text-black">
        Let's Fly
      </button>
    </div>
  );
};

export default Nav;
