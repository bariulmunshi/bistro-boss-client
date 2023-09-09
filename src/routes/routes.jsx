import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
const router = createBrowserRouter([
  /* Layout-1(Main) */
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/menu",
        element:<Menu></Menu>
      },
      {
        path:"/order/:category",
        element:<Order></Order>
      }
    ],
  },
]);
export default router;
