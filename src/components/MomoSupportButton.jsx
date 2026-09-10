import { useState } from 'react'
import { Smartphone, X, Copy, Check, PhoneCall } from 'lucide-react'

function MomoSupportButton({ number, recipientName }) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  function copyNumber() {
    navigator.clipboard.writeText(number)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90"
      >
        <Smartphone size={18} />
        Support via Mobile Money
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4" onClick={() => setOpen(false)}>
          <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-xl p-6 max-w-sm w-full relative">
            <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600" aria-label="Close">
              <X size={22} />
            </button>
            <h3 className="font-bold text-primary text-lg mb-1">Send via Mobile Money</h3>
            <p className="text-sm text-gray-500 mb-4">Dial *170# or open your MoMo app, then send to:</p>
            <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 mb-3">
              <span className="font-bold text-primary text-lg">{number}</span>
              <button onClick={copyNumber} className="text-primary hover:text-secondary flex items-center gap-1 text-sm">
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            <a href="tel:*170%23" className="flex items-center justify-center gap-2 border border-primary text-primary font-semibold px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition mb-3">
              <PhoneCall size={16} />
              Dial *170# Now
            </a>
            <p className="text-xs text-gray-400 mb-3">Works best on Android/MTN — opens the dialer, but you'll still enter the number, amount, and PIN yourself.</p>

            <p className="text-sm text-gray-600 mb-1">Recipient: {recipientName}</p>
            <p className="text-xs text-gray-500 mt-2">Please add "School Donation" as the reference/note when sending.</p>
          </div>
        </div>
      )}
    </>
  )
}

export default MomoSupportButton