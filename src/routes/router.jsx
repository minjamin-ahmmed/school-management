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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
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
        path: "/campus-gallery",
        element: <CampusGallery />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
