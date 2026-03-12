import { useState } from 'react'
import { Link } from 'react-router-dom'

const menuItems = [
    {
        label: 'Our School',
        children: [
            { label: 'Mission & Goal', path: '/about' },
            { label: 'Campus', path: '/about' },
            {
                label: 'Academics',
                children: [
                    { label: 'Curriculum', path: '/academics' },
                    { label: 'Methodology', path: '/academics' },
                    { label: 'Test / Assessment', path: '/academics' },
                    { label: 'Leave Applications', path: '/academics' },
                    { label: 'Value Education', path: '/academics' },
                    { label: 'Mental Ability', path: '/academics' },
                ],
            },
            {
                label: 'Activities',
                children: [
                    { label: 'Assembly', path: '/activities' },
                    { label: 'Yoga', path: '/activities' },
                    { label: 'Games', path: '/activities' },
                    { label: 'Co-Curricular / Clubs', path: '/activities' },
                    { label: 'Karate', path: '/activities' },
                    { label: 'Aerobics', path: '/activities' },
                ],
            },
            {
                label: 'Support System',
                children: [
                    { label: 'Prefectorial System', path: '/about' },
                    { label: 'Mentoring & Counselling', path: '/about' },
                    { label: 'Transport', path: '/contact' },
                    { label: 'Career Guidance', path: '/about' },
                ],
            },
            {
                label: 'Infrastructure',
                children: [
                    { label: 'Library', path: '/gallery' },
                    { label: 'Teaching through AV', path: '/gallery' },
                    { label: 'Labs', path: '/gallery' },
                ],
            },
        ],
    },
    {
        label: 'Souvenir',
        children: [
            { label: 'Souvenir - 40th Year', path: '/gallery' },
            { label: 'Souvenir - 25th Year', path: '/gallery' },
        ],
    },
    {
        label: 'Videos',
        children: [
            { label: 'Popular Videos', path: '/gallery' },
            { label: 'Archive Videos', path: '/gallery' },
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
            { label: 'Make a Difference', path: '/activities' },
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
                    className="px-3 py-2 text-sm font-medium text-slate-800 hover:text-blue-900"
                >
                    {item.label}
                </Link>
            ) : (
                <button className="px-3 py-2 text-sm font-medium text-slate-800 hover:text-blue-900">
                    {item.label}
                </button>
            )}

            {hasChildren && open && (
                <ul className="absolute left-0 top-full min-w-[240px] bg-white shadow-lg border rounded-md py-2 z-50">
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
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900"
                >
                    {item.label}
                </Link>
            ) : (
                <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900">
                    {item.label}
                </button>
            )}

            {hasChildren && open && (
                <ul className="absolute left-full top-0 min-w-[240px] bg-white shadow-lg border rounded-md py-2 z-50">
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
        <div className="border-b">
            <div className="flex items-center justify-between py-3">
                {item.path ? (
                    <Link to={item.path} className="text-sm font-medium text-slate-800">
                        {item.label}
                    </Link>
                ) : (
                    <span className="text-sm font-medium text-slate-800">{item.label}</span>
                )}

                {hasChildren && (
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-sm px-2 py-1 text-blue-900"
                    >
                        {open ? '-' : '+'}
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
                        className="h-10 w-auto"
                    />
                </Link>

                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-2">
                        {menuItems.map((item, index) => (
                            <DesktopMenuItem key={index} item={item} />
                        ))}
                    </ul>
                </nav>

                <button
                    className="lg:hidden bg-blue-900 text-white px-4 py-2 rounded-md"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    Menu
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