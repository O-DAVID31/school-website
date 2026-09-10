import { useState } from 'react'
import { GraduationCap, Newspaper, BookOpen, Globe } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Countdown from '../components/Countdown'
import EventQRCode from '../components/EventQRCode'
import MomoSupportButton from '../components/MomoSupportButton'

const educationLinks = [
  { name: 'Ghana Education Service (GES)', url: 'https://ges.gov.gh/category/latest/', desc: 'Official news and announcements from GES', icon: GraduationCap },
  { name: 'GhanaWeb Education', url: 'https://www.ghanaweb.com/GhanaHomePage/NewsArchive/dossier.php?ID=25', desc: 'Latest BECE, WASSCE, and school news', icon: Newspaper },
  { name: 'Graphic Online Education', url: 'https://www.graphic.com.gh/news/education.html', desc: 'WASSCE, BECE and education trends', icon: BookOpen },
  { name: 'WAEC Ghana', url: 'https://waecgh.org', desc: 'Official exams body — results and guidelines', icon: Globe },
]

function Events() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/YOUR_RSVP_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <PageHeader title="News & Events" subtitle="Stay updated with the latest from our school" />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <section className="mb-14 text-center">
          <h2 className="text-2xl font-bold text-primary mb-2">You're Invited!</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Join us as we celebrate this milestone occasion in the life of our school. The official event poster below has the full details.
          </p>
          <div className="inline-block bg-white p-3 rounded-xl shadow-md border border-gray-200 max-w-xs">
            <img src="/flyers/flyer-portrait.jpg" alt="Official event poster" className="w-full rounded-lg" />
          </div>
        </section>

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
              <h3 className="font-semibold text-gray-800">School Launches Fundraising Drive for Renovation</h3>
              <p className="text-gray-600 text-sm mt-1">
                As part of the Maiden Speech & Prize Giving Day on 24th September, the school is launching a fundraising drive to renovate its facilities and provide modern educational resources for students.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-primary mb-4">Upcoming Event</h2>
          <div className="bg-secondary/10 border border-secondary rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
              <div>
                <h3 className="font-bold text-primary text-2xl mb-2">
                  Maiden Speech & Prize Giving Day and Fundraising Launch
                </h3>
                <p className="italic text-gray-700 mb-6">
                  "Honouring Our Legacy, Celebrating Excellence, and Building the Future."
                </p>
                <Countdown />
              </div>
              <a href="/flyers/flyer-landscape.jpg" target="_blank" rel="noopener noreferrer" className="block bg-white p-2 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition">
                <img src="/flyers/flyer-landscape.jpg" alt="Event invitation card" className="w-full rounded-lg" />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-2 text-gray-700 mb-4">
              <p><span className="font-semibold">Date:</span> Thursday, 24th September 2026</p>
              <p><span className="font-semibold">Time:</span> 9:00 AM Prompt</p>
              <p><span className="font-semibold">Venue:</span> Nkyerepoaso M/A JHS School Premises</p>
              <p><span className="font-semibold">Circuit:</span> Ofoase Circuit – Juaben Municipal Education Directorate</p>
            </div>
            <p className="text-gray-700 mb-4">
              This special event marks the school's 58th Anniversary and officially launches celebrations leading to its 60th Anniversary in 2028 (1968–2028). The day will celebrate outstanding students, teachers, and staff, recognise long service and community support, and launch a fundraising drive to renovate the school and provide modern educational resources.
            </p>
            <h4 className="font-semibold text-primary mb-2">Event Highlights</h4>
            <ul className="text-gray-700 space-y-1 mb-4">
              <li>Academic Awards</li>
              <li>Teacher Recognition</li>
              <li>Citation of Honour</li>
              <li>Old Students Recognition</li>
              <li>Project Presentations</li>
              <li>Fundraising Launch</li>
              <li>Official 60th Anniversary Launch</li>
            </ul>
            <h4 className="font-semibold text-primary mb-2">Key Contacts (RSVP)</h4>
            <ul className="text-gray-700 space-y-1 mb-4">
              <li>Headteacher: 0247869806</li>
              <li>Planning Committee Chairman: 0247945255</li>
              <li>School Rep: 0546025323</li>
              <li>SMC Chairman: 0544687405</li>
            </ul>
            <p className="italic text-primary font-semibold text-center border-t border-secondary pt-4">
              "Together we honour the past, reward excellence, and build the future."
            </p>
          </div>
        </section>

        <section id="rsvp" className="mb-14 scroll-mt-24">
          <h2 className="text-2xl font-bold text-primary mb-2">RSVP & Support the Event</h2>
          <p className="text-gray-600 text-sm mb-6">
            Let us know you're coming, or pledge your support for the fundraising drive.
          </p>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              {status === 'success' ? (
                <p className="text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
                  Thank you! Your RSVP has been received.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 grid gap-4">
                  <input type="text" name="name" placeholder="Full Name" required className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary" />
                  <input type="tel" name="phone" placeholder="Phone Number" required className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary" />
                  <input type="number" name="attendees" min="1" placeholder="Number Attending (optional)" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary" />
                  <select name="attendingAs" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary">
                    <option value="Individual">Attending as: Individual / Parent / Community Member</option>
                    <option value="Old Student">Attending as: Old Student (Alumnus)</option>
                    <option value="Donor">Attending as: Donor / Sponsor</option>
                  </select>
                  <select name="supportType" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary">
                    <option value="Just attending">Just attending</option>
                    <option value="Financial contribution">I'd like to make a financial contribution</option>
                    <option value="Materials or resources">I'd like to donate materials or resources</option>
                    <option value="Volunteering time">I'd like to volunteer my time</option>
                  </select>
                  <textarea name="message" rows="3" placeholder="Additional message (optional)" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"></textarea>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Sending...' : 'Submit RSVP'}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-600 text-sm">Something went wrong — please try again.</p>
                  )}
                </form>
              )}

              <div className="mt-4">
                <MomoSupportButton number="0247869806" recipientName="Headteacher, Mrs. Eunice Dankwah" />
              </div>
            </div>

            <EventQRCode
              url="https://nkyerepoaso-jhs.netlify.app/events#rsvp"
              label="Scan to RSVP from your phone"
            />
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