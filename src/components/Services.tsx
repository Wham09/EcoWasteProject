import { Trash2, RefreshCw, Leaf, AlertTriangle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Trash2,
      title: 'General Waste',
      description: 'Regular household and commercial waste collection on your schedule.',
      image: 'https://images.pexels.com/photos/3181031/pexels-photo-3181031.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: RefreshCw,
      title: 'Recyclable Materials',
      description: 'Proper collection and processing of recyclable materials.',
      image: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Leaf,
      title: 'Organic Waste',
      description: 'Composting services for organic and green waste materials.',
      image: 'https://images.pexels.com/photos/4505171/pexels-photo-4505171.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: AlertTriangle,
      title: 'Hazardous Waste',
      description: 'Safe handling and disposal of hazardous materials.',
      image: 'https://images.pexels.com/photos/2768961/pexels-photo-2768961.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive waste management solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-green-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-green-100">Available for bookings</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-green-100">Eco-friendly disposal</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Fast</div>
              <p className="text-green-100">Same-day service available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
