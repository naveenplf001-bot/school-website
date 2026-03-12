function Results() {
  const toppers = [
    { name: 'Aarav', marks: '489 / 500', className: 'Class 10' },
    { name: 'Diya', marks: '1170 / 1200', className: 'Class 12' },
    { name: 'Rahul', marks: '475 / 500', className: 'Class 10' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Results</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {toppers.map((student, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
            <h2 className="text-xl font-bold text-blue-900">{student.name}</h2>
            <p className="text-gray-700 mt-2">{student.className}</p>
            <p className="text-yellow-600 font-semibold mt-2">{student.marks}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Results