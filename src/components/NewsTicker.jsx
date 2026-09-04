import { Radio } from 'lucide-react'

const tickerItems = [
  'School Celebrates Strong BECE Results — recently achieved strong academic results in the BECE',
  'Fundraising Drive Launched — help us renovate the school and provide modern educational resources',
  'Maiden Speech & Prize Giving Day — Thursday, 24th September 2026, 9:00 AM at the School Premises',
]

function NewsTicker() {
  return (
    <div className="bg-primary border-b border-white/10 overflow-hidden flex items-center">
      <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .ticker-track {
          animation: ticker-scroll 30s linear infinite;
        }
      `}</style>
      <div className="bg-secondary text-primary font-bold text-xs px-4 py-2.5 shrink-0 z-10 flex items-center gap-2">
        <Radio size={14} className="animate-pulse" />
        LATEST NEWS
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="ticker-track inline-flex whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="text-white text-sm mx-8 py-2.5">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsTicker