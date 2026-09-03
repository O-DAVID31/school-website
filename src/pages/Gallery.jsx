import { useState, useEffect } from 'react'
import { Palette, Users, Trophy, Smile, HeartHandshake, Building2, Award, X, ChevronLeft, ChevronRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const categories = [
  { title: 'Cultural Activities', icon: Palette, images: ['cultural-1.jpg', 'cultural-2.jpg', 'cultural-3.jpg', 'cultural-4.jpg', 'cultural-5.jpg', 'cultural-6.jpg', 'cultural-7.jpg'] },
  { title: 'Our Students', icon: Users, images: ['students-1.jpg', 'students-2.jpg', 'students-3.jpg', 'students-4.jpg'] },
  { title: 'Sports Activities', icon: Trophy, images: ['sports-1.jpg', 'sports-2.jpg', 'sports-3.jpg', 'sports-4.jpg', 'sports-5.jpg'] },
  { title: 'Teacher & Student Interaction', icon: Smile, images: ['fun-interaction-1.jpg', 'fun-interaction-2.jpg'] },
  { title: 'Staff Interaction', icon: Users, images: ['teacher-interaction-1.jpg', 'teacher-interaction-2.jpg', 'teacher-interaction-3.jpg'] },
  { title: 'Community Engagement', icon: HeartHandshake, images: ['community-1.jpg', 'community-2.jpg', 'community-3.jpg', 'community-4.jpg'] },
  { title: 'The School Building', icon: Building2, images: ['school-building-1.jpg'] },
  { title: 'BECE Excellence', icon: Award, images: ['best-student-male.jpg', 'best-student-female.jpg'] },
]

function PhotoCard({ src, alt, onClick }) {
  return (
    <button onClick={onClick} className="bg-white p-2 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left">
      <img src={src} alt={alt} className="w-full aspect-square object-cover rounded-lg" />
    </button>
  )
}

function Gallery() {
  const [active, setActive] = useState(null) // { catIndex, imgIndex } or null

  useEffect(() => {
    function handleKey(e) {
      if (!active) return
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') showNext()
      if (e.key === 'ArrowLeft') showPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [active])

  function showNext() {
    setActive((prev) => {
      if (!prev) return prev
      const total = categories[prev.catIndex].images.length
      return { ...prev, imgIndex: (prev.imgIndex + 1) % total }
    })
  }

  function showPrev() {
    setActive((prev) => {
      if (!prev) return prev
      const total = categories[prev.catIndex].images.length
      return { ...prev, imgIndex: (prev.imgIndex - 1 + total) % total }
    })
  }

  const activeCategory = active ? categories[active.catIndex] : null
  const activeImage = activeCategory ? activeCategory.images[active.imgIndex] : null

  return (
    <div>
      <PageHeader title="Gallery" subtitle="Photos of our school, students, staff and facilities" />

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {categories.map(({ title, icon: Icon, images }, catIndex) => (
          <section key={title}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="text-primary" size={20} />
              </div>
              <h2 className="text-xl font-bold text-primary">{title}</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {images.map((img, imgIndex) => (
                <PhotoCard
                  key={img}
                  src={`/gallery/${img}`}
                  alt={title}
                  onClick={() => setActive({ catIndex, imgIndex })}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4" onClick={() => setActive(null)}>
          <button className="absolute top-5 right-5 text-white hover:text-secondary" onClick={() => setActive(null)} aria-label="Close">
            <X size={32} />
          </button>

          <button className="absolute left-3 md:left-8 text-white hover:text-secondary" onClick={(e) => { e.stopPropagation(); showPrev() }} aria-label="Previous photo">
            <ChevronLeft size={40} />
          </button>

          <div onClick={(e) => e.stopPropagation()} className="max-w-3xl max-h-[80vh] text-center">
            <img src={`/gallery/${activeImage}`} alt={activeCategory.title} className="max-h-[75vh] mx-auto rounded-lg object-contain" />
            <p className="text-white mt-4 text-sm">
              {activeCategory.title} — {active.imgIndex + 1} of {activeCategory.images.length}
            </p>
          </div>

          <button className="absolute right-3 md:right-8 text-white hover:text-secondary" onClick={(e) => { e.stopPropagation(); showNext() }} aria-label="Next photo">
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  )
}

export default Gallery