function AdmissionBanner() {
  return (
    <section className="bg-yellow-400 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-blue-950">
            Admissions Open for 2026-2027
          </h2>
          <p className="text-sm text-blue-950 mt-2">
            Join our school for quality education and all-round development.
          </p>
        </div>

        <button className="bg-blue-950 text-white px-6 py-3 rounded-lg font-semibold">
          Apply Now
        </button>
      </div>
    </section>
  )
}

export default AdmissionBanner