function PageHero({ title, subtitle, background = '/b1.webp' }) {
  return (
    <section
      className="relative h-[300px] md:h-[360px] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{title}</h1>
        <p className="text-sm md:text-lg max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  )
}

export default PageHero