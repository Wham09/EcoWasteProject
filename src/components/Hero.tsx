import { Recycle } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-teal-800 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Recycle className="w-16 h-16" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Waste Management Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-50 max-w-3xl mx-auto">
            Reliable, eco-friendly waste collection for homes and businesses.
            Schedule your pickup today and contribute to a cleaner environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg"
            >
              Book Collection Now
            </a>
            <a
              href="#services"
              className="bg-green-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-900 transition-colors border-2 border-white"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <img
            src="https://images.pexels.com/photos/6219357/pexels-photo-6219357.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Waste collection truck"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Modern Fleet</h3>
          <p className="text-green-50">State-of-the-art waste collection vehicles</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <img
            src="https://images.pexels.com/photos/128421/pexels-photo-128421.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Recycling bins"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
          <p className="text-green-50">Committed to sustainable waste management</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <img
            src="https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Waste sorting"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Professional Team</h3>
          <p className="text-green-50">Trained staff for efficient service</p>
        </div>
      </div>
    </div>
  );
}
