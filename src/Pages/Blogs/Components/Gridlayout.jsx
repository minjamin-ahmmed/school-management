import { Link } from "react-router-dom";
import img from "../../../assets/blog-image.png";
const Gridlayout = () => {
  const blogs = [
    {
      id: 1,
      title:
        "The Ultimate Guide to Balancing School and Extracurricular Activities",
      details:
        "In the rapidly evolving world of technology and business, staying ahead of the competition requires strategic decisions and innovative approaches. Offshore software development has emerged as a transformative strategy, allowing companies to harness global talent and expertise while optimizing costs and accelerating project timelines.",
      date: "20 Aug 2023",
      image: img,
    },
  ];

  const latestBlogs = [
    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      reading_time: "10 min Read",
    },

    {
      title: "How to Choose the Right College Major: A Step-by-Step Approach",
      date: "20 Aug 2023",
      reading_time: "10 min Read",
    },
    {
      title: "Mental Health Matters: Strategies for Managing Stress in School",
      date: "20 Aug 2023",
      reading_time: "10 min Read",
    },
    {
      title: "Mental Health Matters: Strategies for Managing Stress in School",
      date: "20 Aug 2023",
      reading_time: "10 min Read",
    },
  ];

  return (
    <div className="lg:w-9/12 w-11/12 mx-auto py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          {blogs.map((blog, index) => (
            <Link to={`/blogs/${blog.id}`} key={index}>
              {" "}
              <div>
                <h1 className="text-3xl text-main font-bold mb-4">
                  {blog.title}
                </h1>
                <p className="text-gray-500 mb-4">{blog.date}</p>
                <p className="text-main text-justify mb-10">{blog.details}</p>

                <div className="w-full h-96">
                  <img
                    className="h-full w-full object-cover"
                    src={blog.image}
                    alt=""
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="lg:col-span-1">
          <h2 className="text-accent font-bold text-xl mb-6">
            Most Recent Blogs
          </h2>
          {latestBlogs.map((singleBlog, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-main mb-8">
                {singleBlog.title}
              </h3>
              <div className="flex items-center justify-between text-gray-500">
                <p>{singleBlog.date}</p>
                <p>{singleBlog.reading_time}</p>
              </div>

              <div className="divider"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gridlayout;
