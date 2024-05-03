import { RouteObject } from "react-router-dom";
import { BirdDetailPageLayout } from "../layouts/index";
import { BirdDetailPage } from "../pages/index";

const BirdDetailRoute: RouteObject[] = [
  {
    path: "birds/:id",
    element: <BirdDetailPageLayout />,
    children: [
      {
        index: true,
        element: <BirdDetailPage />,
      },
    ],
  },
];

export default BirdDetailRoute;
