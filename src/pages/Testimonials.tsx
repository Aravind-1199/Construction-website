import React from 'react';
import { Star, Quote, Building2, Home, Wrench } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Robert Johnson',
      company: 'TechCorp Industries',
      project: 'Modern Office Complex',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      testimonial: 'BuildPro exceeded our expectations in every way. Their attention to detail and commitment to quality is unmatched. Our new office complex was completed on time and within budget.',
      icon: <Building2 className="h-8 w-8 text-blue-600" />
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      company: 'Private Homeowner',
      project: 'Custom Family Home',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      testimonial: 'Working with BuildPro was a dream come true. They listened to our vision and brought it to life beautifully. The craftsmanship and attention to detail in our custom home is exceptional.',
      icon: <Home className="h-8 w-8 text-blue-600" />
    },
    {
      id: 3,
      name: 'David Chen',
      company: 'Retail Partners LLC',
      project: 'Shopping Center Renovation',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      testimonial: 'The renovation of our shopping center was handled professionally from start to finish. BuildPro managed to keep the center operational during construction, which was crucial for our business.',
      icon: <Wrench className="h-8 w-8 text-blue-600" />
    },
    {
      id: 4,
      name: 'Jennifer Williams',
      company: 'Williams Manufacturing',
      project: 'Industrial Facility',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300',
      testimonial: 'BuildPro delivered our manufacturing facility ahead of schedule without compromising quality. Their project management skills and communication throughout the process were outstanding.',
      icon: <Building2 className="h-8 w-8 text-blue-600" />
    },
    {
      id: 5,
      name: 'Michael Thompson',
      company: 'Private Homeowner',
      project: 'Home Addition',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      testimonial: 'Our home addition project was completed flawlessly. The team was respectful, clean, and professional. The new space seamlessly integrates with our existing home.',
      icon: <Home className="h-8 w-8 text-blue-600" />
    },
    {
      id: 6,
      name: 'Sarah Davis',
      company: 'Metro Housing',
      project: 'Apartment Complex',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=300',
      testimonial: 'BuildPro constructed our 120-unit apartment complex with incredible efficiency and quality. Their commitment to sustainable building practices aligned perfectly with our values.',
      icon: <Building2 className="h-8 w-8 text-blue-600" />
    }
  ];

  const stats = [
    { number: '98%', label: 'Client Satisfaction Rate' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '95%', label: 'Projects On Time' },
    { number: '100%', label: 'Would Recommend' }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with BuildPro.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from real clients who have experienced the BuildPro difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <Quote className="h-8 w-8 text-blue-600 opacity-50" />
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.project}</p>
                  </div>
                  <div className="flex-shrink-0">
                    {testimonial.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear directly from our clients about their experience working with BuildPro.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Robert Johnson - TechCorp Industries</p>
                  <p className="text-sm text-gray-500">Modern Office Complex Project</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Maria Rodriguez - Homeowner</p>
                  <p className="text-sm text-gray-500">Custom Family Home Project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Satisfied Clients</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Experience the BuildPro difference for yourself. Contact us today to start your construction project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Free Quote
            </a>
            <a
              href="/projects"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;