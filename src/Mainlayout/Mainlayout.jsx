import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Link from "../Components/Footer/Link";

const Mainlayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Link />
      <Footer />
    </div>
  );
};

export default Mainlayout;
