import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300">
            Have questions? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
            <div className="bg-green-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <a
              href="tel:+233551325839"
              className="text-green-300 hover:text-green-200 transition-colors"
            >
              +233 551325839
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
            <div className="bg-green-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a
              href="mailto:jnartey058@gmail.com"
              className="text-green-300 hover:text-green-200 transition-colors break-all"
            >
              jnartey058@gmail.com
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
            <div className="bg-green-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Hours</h3>
            <p className="text-gray-300">
              Mon - Sat: 7AM - 7PM<br />
              Sunday: 8AM - 5PM
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
            <div className="bg-green-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Service Area</h3>
            <p className="text-gray-300">
              Serving all areas across Ghana
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 text-lg mb-6">
                Book your waste collection today and experience professional, reliable service.
                Our team is standing by to assist you with all your waste management needs.
              </p>
              <a
                href="#booking"
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Schedule Collection
              </a>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Waste management team"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
