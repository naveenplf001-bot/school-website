import PageHero from './PageHero'

function InfoPage({ title, subtitle, content, image = '/b2.webp' }) {
  return (
    <div>
      <PageHero title={title} subtitle={subtitle} background={image} />

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              {title}
            </h2>
            <p className="text-slate-600 leading-7">{content}</p>
          </div>

          <div>
            <img
              src={image}
              alt={title}
              className="w-full h-[320px] object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default InfoPage