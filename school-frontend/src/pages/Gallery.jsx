function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1509062522246-3755977927d7',
    'https://images.unsplash.com/photo-1497486751825-1233686d5d80',
    'https://images.unsplash.com/photo-1588072432836-e10032774350',
    'https://images.unsplash.com/photo-1577896851231-70ef18881754',
    'https://images.unsplash.com/photo-1513258496099-48168024aec0',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Gallery</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            className="w-full h-64 object-cover rounded-xl shadow-md"
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery