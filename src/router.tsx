import { createBrowserRouter } from "react-router-dom";
import HomePage from "./containers/HomePage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
