function GallerySection() {
  const images = [
    'https://images.unsplash.com/photo-1509062522246-3755977927d7',
    'https://images.unsplash.com/photo-1497486751825-1233686d5d80',
    'https://images.unsplash.com/photo-1588072432836-e10032774350',
    'https://images.unsplash.com/photo-1577896851231-70ef18881754',
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        School Gallery
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            className="w-full h-56 object-cover rounded-xl shadow-md"
          />
        ))}
      </div>
    </section>
  )
}

export default GallerySection