function Admission() {
  const steps = [
    'Fill out the admission inquiry form',
    'Submit student documents',
    'Attend school interaction process',
    'Complete fee payment and confirmation',
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Admission</h1>

      <p className="text-gray-700 mb-8">
        Admissions are open for the academic year 2026-2027.
      </p>

      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          Admission Process
        </h2>

        <ul className="space-y-3 text-gray-700">
          {steps.map((step, index) => (
            <li key={index}>
              <span className="font-bold">{index + 1}.</span> {step}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Admission