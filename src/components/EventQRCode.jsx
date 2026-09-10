import { useRef } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

function EventQRCode({ url, label }) {
  const wrapRef = useRef(null)

  function handleDownload() {
    const canvas = wrapRef.current?.querySelector('canvas')
    if (!canvas) return
    const link = document.createElement('a')
    link.download = 'rsvp-qr-code.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 text-center">
      <div ref={wrapRef} className="inline-block p-3">
        <QRCodeCanvas value={url} size={180} bgColor="#ffffff" fgColor="#1F3B4D" level="M" />
      </div>
      <p className="text-sm text-gray-600 mt-4">{label}</p>
      <button onClick={handleDownload} className="mt-3 text-sm text-primary font-semibold hover:text-secondary underline">
        Download QR Code
      </button>
    </div>
  )
}

export default EventQRCode