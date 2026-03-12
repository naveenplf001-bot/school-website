function Academics() {
  const classes = [
    'Pre-Primary',
    'Primary School',
    'Middle School',
    'High School',
    'Higher Secondary',
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Academics</h1>

      <p className="text-gray-700 mb-10 max-w-4xl">
        We offer structured academic programs with experienced teachers,
        modern teaching methods, and activity-based learning.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {classes.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-blue-900">{item}</h2>
            <p className="text-gray-600 mt-2">
              Well-designed learning programs for this academic level.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Academics