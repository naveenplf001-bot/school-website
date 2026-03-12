import HeroSlider from '../components/HeroSlider'
import AdmissionBanner from '../components/AdmissionBanner'
import NewsCard from '../components/NewsCard'
import GallerySection from '../components/GallerySection'

function Home() {
  const newsData = [
    {
      title: 'Annual Day Celebration',
      date: 'March 10, 2026',
      description: 'Students performed cultural programs and received awards.',
    },
    {
      title: 'Admissions Open',
      date: 'March 08, 2026',
      description: 'Admissions are now open for the academic year 2026-2027.',
    },
    {
      title: 'Sports Meet Winners',
      date: 'March 05, 2026',
      description: 'Our students won prizes in the inter-school sports meet.',
    },
  ]

  return (
    <div>
      <HeroSlider />

      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">About Our School</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Our school is dedicated to academic excellence, character building,
          and the overall development of every student.
        </p>
      </section>

      <AdmissionBanner />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
          Latest News
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {newsData.map((item, index) => (
            <NewsCard
              key={index}
              title={item.title}
              date={item.date}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <GallerySection />
    </div>
  )
}

export default Home