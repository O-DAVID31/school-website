import { GraduationCap, Newspaper, BookOpen, Globe } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Countdown from '../components/Countdown'

const educationLinks = [
  { name: 'Ghana Education Service (GES)', url: 'https://ges.gov.gh/category/latest/', desc: 'Official news and announcements from GES', icon: GraduationCap },
  { name: 'GhanaWeb Education', url: 'https://www.ghanaweb.com/GhanaHomePage/NewsArchive/dossier.php?ID=25', desc: 'Latest BECE, WASSCE, and school news', icon: Newspaper },
  { name: 'Graphic Online Education', url: 'https://www.graphic.com.gh/news/education.html', desc: 'WASSCE, BECE and education trends', icon: BookOpen },
  { name: 'WAEC Ghana', url: 'https://waecgh.org', desc: 'Official exams body — results and guidelines', icon: Globe },
]

function Events() {
  return (
    <div>
      <PageHeader title="News & Events" subtitle="Stay updated with the latest from our school" />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Latest News</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-primary">
              <h3 className="font-semibold text-gray-800">School Celebrates Strong BECE Results</h3>
              <p className="text-gray-600 text-sm mt-1">
                Nkyerepoaso M/A JHS recently achieved strong academic results in the BECE, and the school is now raising funds to sustain and build on this progress.
              </p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-primary">
              <h3 className="font-semibold text-gray-800">Replace with another Basic Education or SHS news headline</h3>
              <p className="text-gray-600 text-sm mt-1">Add a short summary of the news item here.</p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-primary mb-4">Upcoming Event</h2>
          <div className="bg-secondary/10 border border-secondary rounded-lg p-8">
            <h3 className="font-bold text-primary text-2xl mb-2">
              Maiden Speech & Prize Giving Day and Fundraising Launch
            </h3>
            <p className="italic text-gray-700 mb-6">
              "Honouring Our Legacy, Celebrating Excellence, and Building the Future."
            </p>

            <Countdown />

            <div className="grid sm:grid-cols-2 gap-2 text-gray-700 mt-6 mb-4">
              <p><span className="font-semibold">Date:</span> Thursday, 24th September 2026</p>
              <p><span className="font-semibold">Time:</span> 9:00 AM Prompt</p>
              <p><span className="font-semibold">Venue:</span> Nkyerepoaso M/A JHS School Premises</p>
              <p><span className="font-semibold">Circuit:</span> Ofoase Circuit – Juaben Municipal Education Directorate</p>
            </div>
            <p className="text-gray-700 mb-4">
              This special event marks the school's 58th Anniversary and officially launches celebrations leading to its 60th Anniversary in 2028 (1968–2028). The day will celebrate outstanding students, teachers, and staff, recognise long service and community support, and launch a fundraising drive to renovate the school and provide modern educational resources.
            </p>
            <h4 className="font-semibold text-primary mb-2">Key Contacts (RSVP)</h4>
            <ul className="text-gray-700 space-y-1">
              <li>Headteacher: 0247869806</li>
              <li>Planning Committee Chairman: 0247945255</li>
              <li>School Rep: 0546025323</li>
              <li>SMC Chairman: 0544687405</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mb-2">Education News & Resources</h2>
          <p className="text-gray-600 text-sm mb-6">
            Stay current with basic education, BECE, and SHS news from these trusted sources.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {educationLinks.map((item) => (
              <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-secondary transition">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Events