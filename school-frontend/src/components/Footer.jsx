import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* Logo + Description */}
        <div>
          <Link to="/">
            <img
              src="/cropped-jeevanalogo.webp"
              alt="School Logo"
              className="h-12 w-auto mb-3"
            />
          </Link>

          <p className="text-sm">
            We provide quality education, discipline, and holistic development
            for every student.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>

          <ul className="space-y-2 text-sm">

            <li>
              <Link to="/about" className="hover:text-yellow-300 transition">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/academics" className="hover:text-yellow-300 transition">
                Academics
              </Link>
            </li>

            <li>
              <Link to="/admission" className="hover:text-yellow-300 transition">
                Admission
              </Link>
            </li>

            <li>
              <Link to="/gallery" className="hover:text-yellow-300 transition">
                Gallery
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-yellow-300 transition">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>

          <p className="text-sm mb-1">
            School Road, Chennai, Tamil Nadu
          </p>

          <p className="text-sm mb-1">
            Phone: +91 98765 43210
          </p>

          <p className="text-sm">
            Email: info@schoolname.com
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800 text-center py-4 text-sm">
        © 2026 School Name. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer