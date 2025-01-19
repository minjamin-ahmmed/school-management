import AllBlogs from "../Components/AllBlogs";
import Banner from "../Components/Banner";
import FeaturedBlogs from "../Components/FeaturedBlogs";

const Blogs = () => {
  return (
    <div>
      <Banner />

      <FeaturedBlogs />
      <AllBlogs />
    </div>
  );
};

export default Blogs;
