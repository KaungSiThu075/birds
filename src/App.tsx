import { Route, Routes, useRoutes } from "react-router-dom";
import "./App.css";
import { HomeRoute, BirdsRoute, BirdDetailRoute } from "./routes/index";

const App = () => {
  const HomeRouting = useRoutes(HomeRoute);
  const BirdsRouting = useRoutes(BirdsRoute);
  const BirdDetailRouting = useRoutes(BirdDetailRoute);
  return (
    <Routes>
      <Route path="/*" element={HomeRouting} />
      <Route path="birds" element={BirdsRouting} />
      <Route path="birds/:id" element={BirdDetailRouting} />
    </Routes>
  );
};

export default App;
