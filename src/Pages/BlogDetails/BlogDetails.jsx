import img from "../../assets/blog-image.png";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  const blogs = [
    {
      id: 1,
      title:
        "The Ultimate Guide to Balancing School and Extracurricular Activities",
      details:
        "In the rapidly evolving world of technology and business, staying ahead of the competition requires strategic decisions and innovative approaches. Offshore software development has emerged as a transformative strategy, allowing companies to harness global talent and expertise while optimizing costs and accelerating project timelines.",
      date: "20 Aug 2023",
      readingTime: "10 min Read",
      image: img,
      act: "Introduction: The Juggling Act",
      actDetails:
        "Balancing school and extracurricular activities can feel like walking a tightrope. You’re expected to excel in academics, participate in clubs, sports, or arts, and still find time for family, friends, and yourself. While it may seem overwhelming, with the right strategies, it’s possible to strike a balance that allows you to thrive in all areas of your life. This guide will provide you with practical tips to manage your time effectively, prioritize your commitments, and maintain your well-being.",
      priorities: "Understanding Your Priorities",
      priorityDetails:
        "The first step in achieving balance is understanding what’s most important to you. Academics are crucial, but extracurricular activities also play a significant role in personal development. They help build leadership skills, enhance creativity, and provide opportunities for social interaction. Begin by listing your priorities. What are your academic goals? Which activities bring you the most joy or align with your future aspirations? Understanding your priorities will help you make informed decisions about how to allocate your time.",
      time: "Time Management: Your Best Friend",
      timeDetails:
        "Time management is the cornerstone of balancing school and extracurriculars. Start by creating a weekly schedule that includes time for classes, homework, activities, and relaxation. Use tools like planners or digital calendars to organize your tasks. Break down larger assignments into smaller, manageable tasks, and set deadlines for each. Be realistic about how much time you need for each activity, and avoid overcommitting. Remember, quality over quantity is key; it’s better to excel in a few activities than to stretch yourself too thin.",
      art: "The Art of Saying No",
      artDetails:
        "One of the most challenging aspects of balancing school and extracurriculars is learning to say no. It’s easy to get caught up in the excitement of new opportunities, but it’s important to recognize your limits. If you find that your schedule is becoming unmanageable, it’s okay to step back from some activities. Politely decline additional responsibilities or take a temporary break from a club. Saying no doesn’t mean you’re not capable; it means you’re prioritizing your well-being and focusing on what truly matters.",
      wellBeing: "Maintaining Your Well-being",
      wellBeingDetails:
        "Balancing school and extracurricular activities requires mental and physical energy. To maintain your well-being, ensure you’re getting enough sleep, eating nutritious meals, and staying physically active. Incorporate relaxation techniques like meditation or deep breathing exercises into your routine to manage stress. Don’t hesitate to seek support from friends, family, or a counselor if you’re feeling overwhelmed. Remember, your health is the foundation of your success, and taking care of yourself should always be a priority.",
      support: "Seeking Support",
      supportDetails:
        "Balancing school and extracurriculars doesn’t have to be a solo endeavor. Don’t hesitate to reach out to teachers, coaches, or mentors for guidance. They can offer valuable advice on time management, help you navigate challenging situations, and provide encouragement when you need it. Additionally, involve your family in your planning process. They can support you by helping to manage your schedule, providing transportation, or simply being a source of motivation.",
      balance: "Finding Balance: A Continuous Process",
      balanceDetails:
        "Balancing school and extracurricular activities is not a one-time achievement but a continuous process. Your interests, priorities, and responsibilities will evolve over time, and so should your approach to balance. Regularly assess your commitments and adjust your schedule as needed. Be flexible and willing to make changes if something isn’t working. Remember, balance is about creating a life that is fulfilling and manageable, not about achieving perfection.",
      conclusion: "Conclusion: Embrace the Journey",
      conclusionDetails:
        "Balancing school and extracurricular activities is a journey of self-discovery and growth. It requires careful planning, self-discipline, and the courage to make tough decisions. However, the rewards are immense. By finding the right balance, you can excel academically, pursue your passions, and develop into a well-rounded individual. Embrace the challenges, learn from your experiences, and enjoy the journey. With time and practice, you’ll master the art of balance and create a fulfilling and successful life.",
    },
  ];

  const blog = blogs.find((b) => b.id === parseInt(id));

  return (
    <div className="lg:w-9/12 w-11/12 mx-auto py-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
        <div className="lg:col-span-3">
          <div className="w-full h-[500px] mb-10">
            <img
              className="w-full h-full object-cover"
              src={blog.image}
              alt=""
            />
          </div>
          <p className="text-main mb-4">Blog</p>
          <h3 className="text-main text-2xl font-bold mb-4">{blog.title}</h3>
          <div className="flex items-center justify-start gap-8 text-gray-500 mb-4">
            <p>{blog.date}</p>
            <p>{blog.readingTime}</p>
          </div>

          <h3 className="text-xl font-bold text-main mb-4 ">{blog.act}</h3>
          <p className="text-justify text-gray-700 mb-12">{blog.actDetails}</p>

          <h3 className="text-xl font-bold text-main mb-4 ">
            {blog.priorities}
          </h3>
          <p className="text-justify text-gray-700 mb-12">
            {blog.priorityDetails}
          </p>

          <h3 className="text-xl font-bold text-main mb-4 ">{blog.time}</h3>
          <p className="text-justify text-gray-700 mb-12">{blog.timeDetails}</p>

          <h3 className="text-xl font-bold text-main mb-4 ">{blog.art}</h3>
          <p className="text-justify text-gray-700 mb-12">{blog.artDetails}</p>

          <h3 className="text-xl font-bold text-main mb-4 ">
            {blog.wellBeing}
          </h3>
          <p className="text-justify text-gray-700 mb-12">
            {blog.wellBeingDetails}
          </p>

          <h3 className="text-xl font-bold text-main mb-4 ">{blog.support}</h3>
          <p className="text-justify text-gray-700 mb-12">
            {blog.supportDetails}
          </p>

          <h3 className="text-xl font-bold text-main mb-4 ">{blog.balance}</h3>
          <p className="text-justify text-gray-700 mb-12">
            {blog.balanceDetails}
          </p>

          <h3 className="text-xl font-bold text-main mb-4 ">
            {blog.conclusion}
          </h3>
          <p className="text-justify text-gray-700 mb-12">
            {blog.conclusionDetails}
          </p>
        </div>

        <div className="lg:col-span-1 ">
          <div className="border border-gray-300 rounded-xl p-6 lg:sticky lg:top-48">
            <h3 className="text-xl font-bold text-main mb-8">
              Article Contents
            </h3>
            <ul className="underline text-gray-700 space-y-4 list-disc pl-6">
              <li>Introduction: The Juggling Act</li>
              <li>Understanding Your Priorities</li>
              <li>Time Management: Your Best Friend</li>
              <li>The Art of Saying No</li>
              <li>Maintaining Your Well-being</li>
              <li>Seeking Support</li>
              <li>Finding Balance: A Continuous Process</li>
              <li>Conclusion: Embrace the Journey</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
