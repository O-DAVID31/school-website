import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20">
      <p className="text-6xl font-bold text-primary mb-4">404</p>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Sorry, the page you're looking for doesn't exist or may have been moved.
      </p>
      <Link to="/" className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 flex items-center gap-2">
        <Home size={18} />
        Back to Homepage
      </Link>
    </div>
  )
}

export default NotFound