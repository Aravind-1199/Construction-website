import React from 'react';
import { 
  Building2, 
  Home, 
  Wrench, 
  PaintBucket,
  Hammer,
  Shield,
  Clock,
  DollarSign
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Building2 className="h-12 w-12 text-blue-600" />,
      title: 'Commercial Construction',
      description: 'Complete commercial building solutions from planning to completion.',
      features: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Industrial Facilities']
    },
    {
      icon: <Home className="h-12 w-12 text-blue-600" />,
      title: 'Residential Construction',
      description: 'Custom homes and residential projects built to your specifications.',
      features: ['Custom Homes', 'Multi-family Units', 'Additions', 'New Developments']
    },
    {
      icon: <Wrench className="h-12 w-12 text-blue-600" />,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with our expert renovation services.',
      features: ['Kitchen Remodeling', 'Bathroom Updates', 'Basement Finishing', 'Room Additions']
    },
    {
      icon: <PaintBucket className="h-12 w-12 text-blue-600" />,
      title: 'Interior & Exterior Finishing',
      description: 'Professional finishing services to complete your construction project.',
      features: ['Painting & Staining', 'Flooring Installation', 'Tile Work', 'Trim & Molding']
    },
    {
      icon: <Hammer className="h-12 w-12 text-blue-600" />,
      title: 'Project Management',
      description: 'Comprehensive project management from start to finish.',
      features: ['Planning & Design', 'Permit Assistance', 'Timeline Management', 'Quality Control']
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: 'Maintenance & Repairs',
      description: 'Ongoing maintenance and repair services for your property.',
      features: ['Preventive Maintenance', 'Emergency Repairs', 'Structural Repairs', 'Weatherproofing']
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: 'On-Time Delivery',
      description: 'We respect your schedule and deliver projects on time, every time.'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-600" />,
      title: 'Competitive Pricing',
      description: 'Fair, transparent pricing with detailed estimates and no hidden costs.'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Quality Guarantee',
      description: 'All our work comes with comprehensive warranties for your peace of mind.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive construction services tailored to meet your specific needs and exceed your expectations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to ensure your project success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Initial meeting to understand your vision and requirements.'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Detailed planning, design, and project timeline development.'
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Professional construction with regular progress updates.'
              },
              {
                step: '04',
                title: 'Completion',
                description: 'Final inspection, cleanup, and project handover.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the BuildPro difference in every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your construction needs and receive a free, detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Free Quote
            </a>
            <a
              href="tel:555-123-4567"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;