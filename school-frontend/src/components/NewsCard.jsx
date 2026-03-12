function NewsCard({ title, date, description }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5">
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <h3 className="text-lg font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  )
}

export default NewsCard