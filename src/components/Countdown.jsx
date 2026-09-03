import { useState, useEffect } from 'react'

const EVENT_DATE = new Date('2026-09-24T09:00:00')

function getTimeLeft() {
  const total = EVENT_DATE - new Date()
  if (total <= 0) return null
  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  }
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  if (!timeLeft) {
    return <p className="text-primary font-semibold">The big day is here!</p>
  }

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <div className="flex justify-center gap-3">
      {units.map((u) => (
        <div key={u.label} className="bg-white rounded-lg px-3 py-2 min-w-[64px] shadow-sm">
          <p className="text-xl font-bold text-primary">{String(u.value).padStart(2, '0')}</p>
          <p className="text-[10px] text-gray-500 uppercase tracking-wide">{u.label}</p>
        </div>
      ))}
    </div>
  )
}

export default Countdown