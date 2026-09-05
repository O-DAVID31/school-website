import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Users, Image, Newspaper, Phone } from 'lucide-react'
import logo from '../assets/logo.png'
import Countdown from '../components/Countdown'
import NewsTicker from '../components/NewsTicker'

const quickLinks = [
  { to: '/about', icon: BookOpen, label: 'About Us', desc: 'History, vision & mission' },
  { to: '/staff', icon: Users, label: 'Staff', desc: 'Meet our administration' },
  { to: '/gallery', icon: Image, label: 'Gallery', desc: 'School photos' },
  { to: '/events', icon: Newspaper, label: 'News & Events', desc: 'Latest updates' },
  { to: '/contact', icon: Phone, label: 'Contact', desc: 'Get in touch' },
]

const heroImages = ['/hero-main.jpg', '/hero-community.jpg', '/hero-cultural.jpg', '/hero-sports.jpg', '/hero-students.jpg']

function Home() {
  const [bgIndex, setBgIndex] = useState(0)
  const [loadedCount, setLoadedCount] = useState(1)

  useEffect(() => {
    const preload = setTimeout(() => setLoadedCount(heroImages.length), 2000)
    return () => clearTimeout(preload)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((i) => (i + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <NewsTicker />

      <section className="relative text-white text-center py-16 sm:py-20 md:py-24 px-6 overflow-hidden">
        {heroImages.slice(0, loadedCount).map((img, i) => (
          <img
            key={img}
            src={img}
            alt=""
            fetchPriority={i === 0 ? 'high' : 'low'}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: i === bgIndex ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/55 to-primary/90"></div>
        <div className="relative z-10">
          <img src={logo} alt="Nkyerepoaso M/A JHS Crest" className="h-20 w-20 sm:h-24 sm:w-24 mx-auto mb-5" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">NKYEREPOASO M/A JHS</h1>
          <p className="text-base sm:text-lg text-secondary font-medium mb-8">
            Honor · Pride · Success — nurturing excellence since 1968
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/about" className="bg-secondary text-primary font-semibold px-6 py-3 rounded-lg hover:opacity-90">
              Learn More
            </Link>
            <Link to="/contact" className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-primary">1968</p>
            <p className="text-sm text-gray-600 mt-1">Established</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">5</p>
            <p className="text-sm text-gray-600 mt-1">Dedicated Teachers</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">58</p>
            <p className="text-sm text-gray-600 mt-1">Years of Excellence</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">Ofoase</p>
            <p className="text-sm text-gray-600 mt-1">Circuit, Juaben Municipal</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-primary">Latest News & Upcoming Event</h2>
            <Link to="/events" className="text-secondary font-semibold hover:underline text-sm">View All →</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-primary shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">School Celebrates Strong BECE Results</h3>
              <p className="text-gray-600 text-sm">
                Nkyerepoaso M/A JHS recently achieved strong academic results in the BECE, and the school is now raising funds to sustain and build on this progress.
              </p>
            </div>
            <div className="bg-secondary/10 p-6 rounded-lg border border-secondary">
              <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Upcoming Event</p>
              <h3 className="font-bold text-primary text-lg mb-3">Maiden Speech & Prize Giving Day</h3>
              <Countdown />
              <p className="text-gray-700 text-sm mt-3">Thu, 24 Sept 2026 · 9:00 AM · School Premises</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-xl sm:text-2xl font-bold text-primary text-center mb-10">Explore the School</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {quickLinks.map(({ to, icon: Icon, label, desc }) => (
            <Link
              key={to}
              to={to}
              className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg hover:border-secondary transition"
            >
              <Icon className="mx-auto mb-3 text-primary" size={32} />
              <h3 className="font-semibold text-gray-800">{label}</h3>
              <p className="text-xs text-gray-500 mt-1">{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">A Brief Word</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to Nkyerepoaso M/A JHS — a school built on the values of Honor, Pride and Success since 1968. For over five decades, we have nurtured the children of our community with discipline, care and a commitment to academic excellence, most recently reflected in our strong BECE results. As we celebrate 58 years of impact and look ahead to our 60th anniversary in 2028, we remain dedicated to giving every pupil who passes through our gates the skills and character to build an independent, successful future.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home