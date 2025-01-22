import { createBrowserRouter } from "react-router-dom";

import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../Pages/Home/Page/Home";
import AboutUs from "../Pages/AboutUs/Page/AboutUs";
import Alumni from "../Pages/Alumni/Page/Alumni";
import Events from "../Pages/Events/Page/Events";
import EventDetails from "../Pages/EventDetails/Page/EventDetails";
import News from "../Pages/News/Page/News";
import CampusGallery from "../Pages/CampusGallery/Page/campusGallery";
import Blogs from "../Pages/Blogs/Page/Blogs";
import ContactUs from "../Pages/ContactUs/Page/ContactUs";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import UserProfile from "../Pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Mainlayout />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/alumni-association",
        element: <Alumni />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/events/:id",
        element: <EventDetails />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/news/:id",
        element: <NewsDetails />,
      },
      {
        path: "/campus-gallery",
        element: <CampusGallery />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/sign-up",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/user-profile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
