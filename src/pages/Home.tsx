import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Users,
  Calendar,
  Trophy,
  Building2,
  Wrench,
  HardHat
} from 'lucide-react';
import TypingText from '../components/TypingText';
const currentYear = new Date().getFullYear();
const Home: React.FC = () => {
  const features = [
    {
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      title: 'Commercial Construction',
      description: 'Large-scale commercial projects delivered on time and within budget.'
    },
    {
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      title: 'Renovation & Remodeling',
      description: 'Transform your existing spaces with our expert renovation services.'
    },
    {
      icon: <HardHat className="h-8 w-8 text-blue-600" />,
      title: 'Project Management',
      description: 'Comprehensive project management from planning to completion.'
    }
  ];

  const stats = [
    { icon: <Users className="h-8 w-8 text-white" />, number: '500+', label: 'Happy Clients' },
    { icon: <Calendar className="h-8 w-8 text-white" />, number: '20+', label: 'Years Experience' },
    { icon: <Trophy className="h-8 w-8 text-white" />, number: '1000+', label: 'Projects Completed' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <TypingText text="Your Dream. Our Foundation." speed={100} pause={2000} />
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Professional construction services in {currentYear}.<br />
              Quality craftsmanship, timely delivery, and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/projects"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Amman Construction?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional construction services with unmatched quality and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 hover:bg-blue-100 transition duration-300 cursor-pointer transform"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From residential homes to commercial buildings, we handle projects of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              'Residential Construction',
              'Commercial Buildings',
              'Renovation & Remodeling',
              'Project Management',
              'Consulting Services',
              'Maintenance & Repairs'
            ].map((service, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-white hover:shadow-md transition duration-300"
              >
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>


          <div className="text-center">
            <Link
              to="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let's bring your construction vision to life.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Contact Us Today</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;