const ContactForm = () => {
  return (
    <div className="w-11/12 lg:w-9/12 mx-auto py-16 animate-fadeIn">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-16">
        <div className="lg:w-1/2">
          <h3 className="text-accent font-bold text-4xl mb-6 transition duration-500 transform hover:scale-105">
            Contact Us
          </h3>
          <div className="space-y-2 font-medium mb-8">
            {[
              "School Officer",
              "School Help Desk",
              "College Office",
              "College Help Desk",
            ].map((label, index) => (
              <p
                key={index}
                className="transition duration-300 ease-in-out transform hover:translate-x-2"
              >
                <strong>{label}:</strong> 021893374
              </p>
            ))}
          </div>

          <h3 className="text-accent font-bold text-xl mb-6">Map</h3>
          <div className="w-full h-64 overflow-hidden rounded-lg border border-gray-300 transition duration-500 transform hover:scale-105">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.8475522756253!2d88.9582063!3d24.559929699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc6d7307bfb0fd%3A0x6fce50ba75c4c4d3!2sBirkutsha%20Abinash%20School%20And%20College!5e0!3m2!1sen!2sbd!4v1737348449250!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </div>

        <div className="lg:w-1/2">
          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-lg font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition duration-300"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition duration-300"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-lg font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter the subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition duration-300"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                maxLength="500"
                placeholder="Enter your message here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition duration-300"
                required
              ></textarea>
              <small className="block text-gray-500 mt-1">Max 500 words</small>
            </div>

            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="max-w-sm bg-accent text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 hover:scale-105 transition duration-300"
              >
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
