import { useState, useEffect } from 'react'
import { Palette, Users, Trophy, Smile, HeartHandshake, Building2, Award, X, ChevronLeft, ChevronRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const categories = [
  {
    title: 'Cultural Activities',
    icon: Palette,
    desc: "Nkyerepoaso M/A JHS takes pride in celebrating and preserving the rich cultural heritage of the Ashanti people. These photographs capture our students and staff participating in traditional dance, drumming, and cultural displays during school events, helping to instill a strong sense of identity, discipline, and appreciation for our Ghanaian traditions in every pupil who passes through our gates.",
    images: ['cultural-1.jpg', 'cultural-2.jpg', 'cultural-3.jpg', 'cultural-4.jpg', 'cultural-5.jpg', 'cultural-6.jpg', 'cultural-7.jpg'],
  },
  {
    title: 'Our Students',
    icon: Users,
    desc: 'Our pupils are the heart of everything we do at Nkyerepoaso M/A JHS. This collection showcases the everyday moments of school life, from classroom learning to friendships built on the playground, reflecting the warmth, curiosity, and determination that define the Nkyerepoaso student community.',
    images: ['students-1.jpg', 'students-2.jpg', 'students-3.jpg', 'students-4.jpg'],
  },
  {
    title: 'Sports Activities',
    icon: Trophy,
    desc: "Physical education and sports are a core part of our holistic approach to child development. These images capture our students engaged in athletics, football, and other competitive and recreational activities that build teamwork, discipline, and physical fitness, values firmly rooted in the school's vision and objectives.",
    images: ['sports-1.jpg', 'sports-2.jpg', 'sports-3.jpg', 'sports-4.jpg', 'sports-5.jpg'],
  },
  {
    title: 'Teacher & Student Interaction',
    icon: Smile,
    desc: 'Beyond the classroom, our teachers form genuine bonds with their students built on mutual respect and care. This gallery highlights the light-hearted, informal moments between staff and pupils that help create a warm and supportive learning environment at Nkyerepoaso M/A JHS.',
    images: ['fun-interaction-1.jpg', 'fun-interaction-2.jpg'],
  },
  {
    title: 'Staff Interaction',
    icon: Users,
    desc: 'Behind every successful pupil is a dedicated team of educators working closely together. These photographs reflect the collaborative spirit among our teaching staff as they plan, coordinate, and support one another in delivering quality education to the children of Nkyerepoaso.',
    images: ['teacher-interaction-1.jpg', 'teacher-interaction-2.jpg', 'teacher-interaction-3.jpg'],
  },
  {
    title: 'Community Engagement',
    icon: HeartHandshake,
    desc: "Nkyerepoaso M/A JHS does not stand alone; it is deeply woven into the fabric of its surrounding community. This section documents the school's ongoing partnership with the chief and elders of the town, alongside well-wishers whose continued generosity and support have been instrumental to the school's growth since its founding in 1968.",
    images: ['community-1.jpg', 'community-2.jpg', 'community-3.jpg', 'community-4.jpg'],
  },
  {
    title: 'The School Building',
    icon: Building2,
    desc: 'A glimpse at the physical premises of Nkyerepoaso M/A JHS, the very grounds where generations of pupils have received their basic education since 1968. As part of our ongoing fundraising efforts, we hope to renovate and modernize these facilities to better serve future generations of students.',
    images: ['school-building-1.jpg'],
  },
  {
    title: 'BECE Excellence',
    icon: Award,
    desc: "Nkyerepoaso M/A JHS takes great pride in the outstanding academic achievement of its candidates in the most recent Basic Education Certificate Examination (BECE). Featured here are our best-performing students, including the overall best candidate, who achieved an impressive aggregate of 09, whose hard work, discipline, and dedication stand as a shining example of the excellence our school strives to nurture in every pupil. Their success reflects not only their own commitment to learning but also the tireless efforts of our teaching staff and the unwavering support of parents and the wider community.",
    images: ['best-student-male.jpg', 'best-student-female.jpg'],
  },
]

function PhotoCard({ src, alt, onClick }) {
  return (
    <button onClick={onClick} className="bg-white p-2 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left">
      <img src={src} alt={alt} loading="lazy" className="w-full aspect-square object-cover rounded-lg" />
    </button>
  )
}

function Gallery() {
  const [active, setActive] = useState(null)

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
        {categories.map((cat, catIndex) => (
          <section key={cat.title}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <cat.icon className="text-primary" size={20} />
              </div>
              <h2 className="text-xl font-bold text-primary">{cat.title}</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-3xl">{cat.desc}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {cat.images.map((img, imgIndex) => (
                <PhotoCard
                  key={img}
                  src={`/gallery/${img}`}
                  alt={cat.title}
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