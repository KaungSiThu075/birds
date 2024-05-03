import { RouteObject } from "react-router-dom";
import { HomePageLayout } from "../layouts/index";
import { HomePage } from "../pages/index";

const HomeRoute: RouteObject[] = [
  {
    path: "/",
    element: <HomePageLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];

export default HomeRoute;
