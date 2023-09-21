import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Services from "../../Pages/Services/Services";
import Blog from "../../Pages/Blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
