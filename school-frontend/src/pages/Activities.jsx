function Activities() {
  const activities = [
    'Sports and Games',
    'Music and Dance',
    'Art and Craft',
    'Science Club',
    'Literary Club',
    'Annual Cultural Programs',
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Activities</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              {activity}
            </h2>
            <p className="text-gray-600">
              Students participate actively in this activity for overall growth.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Activities