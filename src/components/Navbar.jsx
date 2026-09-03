import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/staff', label: 'Staff' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/events', label: 'News & Events' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 bg-primary text-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="School Crest" className="h-12 w-12" />
            <span className="font-bold text-lg">NKYEREPOASO M/A JHS</span>
          </div>

          <div className="hidden md:flex gap-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  isActive ? 'text-secondary font-semibold border-b-2 border-secondary pb-1' : 'hover:text-secondary'
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-primary text-white z-50 transform transition-transform duration-300 md:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col gap-1 px-6">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-3 border-b border-white/10 ${isActive ? 'text-secondary font-semibold' : 'hover:text-secondary'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar