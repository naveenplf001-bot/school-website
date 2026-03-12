function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            School Contact Details
          </h2>
          <p className="text-gray-700 mb-2">Address: School Road, Chennai</p>
          <p className="text-gray-700 mb-2">Phone: +91 98765 43210</p>
          <p className="text-gray-700">Email: info@schoolname.com</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Send a Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-3"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-3"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border rounded-lg px-4 py-3"
            ></textarea>
            <button className="bg-blue-900 text-white px-6 py-3 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact