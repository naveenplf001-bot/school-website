import { useState } from 'react'
import { Link } from 'react-router-dom'

const menuItems = [
  {
    label: 'Our School',
    children: [
      { label: 'Mission & Goal', path: '/mission-goal' },
      { label: 'Campus', path: '/campus' },
      {
        label: 'Academics',
        children: [
          { label: 'Curriculum', path: '/academics' },
          { label: 'Methodology', path: '/methodology' },
          { label: 'Test / Assessment', path: '/assessment' },
          { label: 'Leave Applications', path: '/leave-applications' },
          { label: 'Value Education', path: '/value-education' },
          { label: 'Mental Ability', path: '/mental-ability' },
        ],
      },
      {
        label: 'Activities',
        children: [
          { label: 'Assembly', path: '/assembly' },
          { label: 'Yoga', path: '/yoga' },
          { label: 'Games', path: '/games' },
          { label: 'Co-Curricular / Clubs', path: '/clubs' },
          { label: 'Karate', path: '/karate' },
          { label: 'Aerobics', path: '/aerobics' },
        ],
      },
      {
        label: 'Support System',
        children: [
          { label: 'Prefectorial System', path: '/prefectorial-system' },
          { label: 'Mentoring & Counselling', path: '/mentoring-counselling' },
          { label: 'Transport', path: '/transport' },
          { label: 'Career Guidance', path: '/career-guidance' },
        ],
      },
      {
        label: 'Infrastructure',
        children: [
          { label: 'Library', path: '/library' },
          { label: 'Teaching through AV', path: '/teaching-av' },
          { label: 'Labs', path: '/labs' },
        ],
      },
    ],
  },
  {
    label: 'Souvenir',
    children: [
      { label: 'Souvenir - 40th Year', path: '/souvenir' },
      { label: 'Souvenir - 25th Year', path: '/souvenir' },
    ],
  },
  {
    label: 'Videos',
    children: [
      { label: 'Popular Videos', path: '/videos' },
      { label: 'Archive Videos', path: '/videos' },
    ],
  },
  {
    label: 'Admission',
    children: [
      { label: 'Prospectus', path: '/admission' },
      { label: 'Circular', path: '/admission' },
      { label: 'Fees / Terms', path: '/admission' },
    ],
  },
  {
    label: 'Student Committee',
    children: [
      { label: 'Make a Difference', path: '/student-committee' },
    ],
  },
  {
    label: 'Archive',
    children: [
      { label: 'Academic Toppers', path: '/results' },
      { label: 'News Letter', path: '/news' },
    ],
  },
]

function DesktopMenuItem({ item }) {
  const [open, setOpen] = useState(false)
  const hasChildren = item.children && item.children.length > 0

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {item.path ? (
        <Link
          to={item.path}
          className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-800 hover:text-blue-900 transition"
        >
          {item.label}
          {hasChildren && <span className="text-xs">▾</span>}
        </Link>
      ) : (
        <button
          type="button"
          className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-800 hover:text-blue-900 transition"
        >
          {item.label}
          {hasChildren && <span className="text-xs">▾</span>}
        </button>
      )}

      {hasChildren && open && (
        <ul className="absolute left-0 top-full min-w-[250px] bg-white shadow-lg border border-slate-200 rounded-md py-2 z-50">
          {item.children.map((child, index) => (
            <DesktopSubMenuItem key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  )
}

function DesktopSubMenuItem({ item }) {
  const [open, setOpen] = useState(false)
  const hasChildren = item.children && item.children.length > 0

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {item.path ? (
        <Link
          to={item.path}
          className="flex items-center justify-between px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900 transition"
        >
          <span>{item.label}</span>
          {hasChildren && <span className="text-xs">▸</span>}
        </Link>
      ) : (
        <button
          type="button"
          className="w-full flex items-center justify-between text-left px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900 transition"
        >
          <span>{item.label}</span>
          {hasChildren && <span className="text-xs">▸</span>}
        </button>
      )}

      {hasChildren && open && (
        <ul className="absolute left-full top-0 min-w-[250px] bg-white shadow-lg border border-slate-200 rounded-md py-2 z-50">
          {item.children.map((child, index) => (
            <DesktopSubMenuItem key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  )
}

function MobileMenuItem({ item }) {
  const [open, setOpen] = useState(false)
  const hasChildren = item.children && item.children.length > 0

  return (
    <div className="border-b border-slate-200">
      <div className="flex items-center justify-between py-3 gap-3">
        {item.path ? (
          <Link to={item.path} className="text-sm font-medium text-slate-800">
            {item.label}
          </Link>
        ) : (
          <span className="text-sm font-medium text-slate-800">{item.label}</span>
        )}

        {hasChildren && (
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="text-sm px-2 py-1 text-blue-900 font-semibold"
          >
            {open ? '−' : '+'}
          </button>
        )}
      </div>

      {hasChildren && open && (
        <div className="pl-4 pb-3">
          {item.children.map((child, index) => (
            <MobileMenuItem key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  )
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="shadow-md bg-white sticky top-0 z-50">
      <div className="bg-blue-900 text-white text-sm px-6 py-2">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-2">
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@schoolname.com</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/cropped-jeevanalogo.webp"
            alt="School Logo"
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {menuItems.map((item, index) => (
              <DesktopMenuItem key={index} item={item} />
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="lg:hidden bg-blue-900 text-white px-4 py-2 rounded-md"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t px-6 py-4">
          {menuItems.map((item, index) => (
            <MobileMenuItem key={index} item={item} />
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar