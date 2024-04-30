import { createBrowserRouter } from "react-router-dom";

import Voting from "../pages/Voting";
import Main from "../pages/Main";
import Not from "../pages/404/404";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "Voting/:votingAddress",
    element: <Voting />,
  },
  { path: "*", element: <Not /> },
]);
