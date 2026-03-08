import { Recycle } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Recycle className="w-8 h-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">EcoWaste</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#booking"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Book Now
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          <a
            href="tel:+233551325839"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            Call Now
          </a>
        </div>
      </nav>
    </header>
  );
}
