import { RouteObject } from "react-router-dom";
import { BirdsPageLayout } from "../layouts/index";
import { BirdsPage } from "../pages";

const BirdsRoute: RouteObject[] = [
  {
    path: "birds",
    element: <BirdsPageLayout />,
    children: [
      {
        index: true,
        element: <BirdsPage />,
      },
    ],
  },
];

export default BirdsRoute;
