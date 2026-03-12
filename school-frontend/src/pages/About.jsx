function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">About Us</h1>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-7">
            Our school provides a strong academic foundation and encourages
            students to become confident, disciplined, and responsible citizens.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
            alt="School"
            className="rounded-xl shadow-md"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-16">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-900 mb-3">Our Vision</h3>
          <p className="text-gray-700">
            To inspire students to achieve excellence in education and life.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-900 mb-3">Our Mission</h3>
          <p className="text-gray-700">
            To create a safe and engaging environment for learning and growth.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About