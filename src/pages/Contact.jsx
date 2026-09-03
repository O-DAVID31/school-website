import { useState } from 'react'
import { MapPin, Mail, Phone } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const contacts = [
  { label: 'Location', value: 'Nkyerepoaso, Juaben Municipality, Ashanti Region', icon: MapPin, href: null },
  { label: 'Email', value: 'Nkyerepoasomajhs@ges.gov.gh', icon: Mail, href: 'mailto:Nkyerepoasomajhs@ges.gov.gh' },
  { label: 'Headteacher', value: '0247869806', icon: Phone, href: 'tel:0247869806' },
  { label: 'Assistant Headteacher', value: '0240138617', icon: Phone, href: 'tel:0240138617' },
  { label: 'SMC Chairman', value: '0544687405', icon: Phone, href: 'tel:0544687405' },
]

function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/mdeoggly', {
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
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you" />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-primary mb-5">Get in Touch</h2>
            <div className="space-y-4">
              {contacts.map((c) => (
                <div key={c.label} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <c.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-gray-800 font-medium hover:text-secondary">{c.value}</a>
                    ) : (
                      <p className="text-gray-800 font-medium">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <iframe
              title="School Location"
              className="w-full h-full min-h-[280px] border-0"
              src="https://www.google.com/maps?q=6.768198,-1.3576153&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8 max-w-2xl">
          <h2 className="text-xl font-bold text-primary mb-1">Send Us Feedback</h2>
          <p className="text-gray-500 text-sm mb-6">We read every message and appreciate your feedback.</p>

          {status === 'success' ? (
            <p className="text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
              Thank you! Your message has been sent.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Your Name</label>
                <input type="text" name="name" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary" />
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Your Email</label>
                <input type="email" name="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary" />
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Message</label>
                <textarea name="message" rows="4" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 disabled:opacity-50 w-fit"
              >
                {status === 'sending' ? 'Sending...' : 'Submit'}
              </button>
              {status === 'error' && (
                <p className="text-red-600 text-sm">Something went wrong — please try again.</p>
              )}
            </form>
          )}
        </section>
      </div>
    </div>
  )
}

export default Contact