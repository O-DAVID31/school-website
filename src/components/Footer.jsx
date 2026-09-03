import { Link } from 'react-router-dom'
import { Phone, MapPin } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-primary text-white px-6 py-10 mt-auto">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-3">NKYEREPOASO M/A JHS</h3>
          <p className="text-sm text-gray-300">Honor · Pride · Success</p>
          <p className="text-sm text-gray-300 mt-2">Ofoase Circuit, Juaben Municipality, Ashanti Region</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-secondary">About</Link></li>
            <li><Link to="/staff" className="hover:text-secondary">Staff</Link></li>
            <li><Link to="/gallery" className="hover:text-secondary">Gallery</Link></li>
            <li><Link to="/events" className="hover:text-secondary">News & Events</Link></li>
            <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Contact</h3>
          <p className="text-sm text-gray-300 flex items-center gap-2 mb-2">
            <Phone size={16} /> 0247869806
          </p>
          <p className="text-sm text-gray-300 flex items-center gap-2">
            <MapPin size={16} /> Nkyerepoaso, Juaben Municipality
          </p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-8 pt-6 border-t border-white/10">
        © {new Date().getFullYear()} Nkyerepoaso M/A JHS. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer