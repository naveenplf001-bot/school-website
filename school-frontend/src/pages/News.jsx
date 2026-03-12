function News() {
  const newsItems = [
    {
      title: 'School Reopens',
      description: 'The new term begins with fresh energy and full academic schedule.',
    },
    {
      title: 'Inter-school Competition',
      description: 'Students participated in district-level competitions.',
    },
    {
      title: 'New Computer Lab',
      description: 'A new modern computer lab has been opened for students.',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">News & Events</h1>

      <div className="space-y-6">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News