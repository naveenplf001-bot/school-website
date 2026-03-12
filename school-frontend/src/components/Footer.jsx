function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-3">School Name</h2>
          <p className="text-sm">
            We provide quality education, discipline, and holistic development.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Academics</li>
            <li>Admission</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm">School Road, Chennai, Tamil Nadu</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
          <p className="text-sm">Email: info@schoolname.com</p>
        </div>
      </div>

      <div className="border-t border-blue-800 text-center py-4 text-sm">
        © 2026 School Name. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer