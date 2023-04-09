import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Product from "../pages/product/Product";
import Booking from "../pages/booking/Booking";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import PrivateRoute from "./PrivateRoute";
import HomeCard from "../pages/Home/HomeCard";

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "/category",
      //   element: <HomeCard></HomeCard>,
      //  loader: () => fetch(`db/category.json`),
      // },
      {
        path: "/category/:id",
        element: <Product />,
        loader: ({ params }) =>
          fetch(`https://weerolibrary-server.vercel.app/category/${params.id}`),
      },
      // {
      //   path: '/categories/:id',
      //   element: (
      //     <PrivateRoute>
      //       <Categories></Categories>
      //     </PrivateRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(
      //       `https://mall-of-recondition-laptops-server.vercel.app/categories/${params.id}`
      //     ),
      // },
      {
        path: "/booking",
        element: (
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
    ],
  },
]);
export default router;
