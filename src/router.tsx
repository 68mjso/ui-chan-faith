import { createBrowserRouter } from "react-router-dom";
import HomePage from "./containers/HomePage";
import ActionPage from "./containers/ActionPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/pray",
    element: <ActionPage />,
  },
]);
