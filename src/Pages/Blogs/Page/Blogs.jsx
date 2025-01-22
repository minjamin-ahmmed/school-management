import AllBlogs from "../Components/AllBlogs";
import Banner from "../Components/Banner";
import FeaturedBlogs from "../Components/FeaturedBlogs";
import Gridlayout from "../Components/Gridlayout";

const Blogs = () => {
  return (
    <div>
      <Banner />
      <Gridlayout />
      <FeaturedBlogs />
      <AllBlogs />
    </div>
  );
};

export default Blogs;
