import React from 'react';
import {
  Users,
  Award,
  Target,
  Heart,
  CheckCircle,
  Calendar,
  Trophy
} from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Quality First',
      description: 'We never compromise on quality. Every project meets our highest standards.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Client Focused',
      description: 'Your satisfaction is our priority. We listen, understand, and deliver.'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Excellence',
      description: 'Striving for excellence in every aspect of our construction services.'
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: 'Integrity',
      description: 'Honest, transparent, and ethical in all our business practices.'
    }
  ];

  const milestones = [
    { year: '2004', event: 'BuildPro Construction founded' },
    { year: '2008', event: 'Expanded to commercial projects' },
    { year: '2012', event: 'Reached 500 completed projects' },
    { year: '2018', event: 'Won Construction Excellence Award' },
    { year: '2024', event: 'Celebrating 20 years of service' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Amman Construction</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Two decades of building excellence, one project at a time.
              Your trusted partner in construction since 2025.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2025, Amman Construction was launched with a clear mission: to deliver exceptional construction services that go beyond expectations. With a strong foundation in craftsmanship, innovation, and integrity, we set out to redefine what clients can expect from a modern construction partner.
                </p>
                <p>
                  While we're a newly established company, our team brings together years of combined experience across residential, commercial, and renovation projects. Every structure we build is a testament to our commitment to quality, precision, and client satisfaction.
                </p>
                <p>
                  From day one, we’ve focused on building more than just buildings — we’re building trust, relationships, and a lasting impact in the communities we serve. As we grow, our dedication remains the same: <strong className="text-blue-600">Your Dream. Our Foundation.</strong>
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white hover:-translate-y-2 hover:scale-105 transform cursor-pointer">
              <h3 className="text-2xl font-bold mb-8 border-b-2 border-gray-200 pb-3 group-hover:text-white transition">
                Quick Facts
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-white group-hover:bg-gradient-to-r group-hover:from-green-200 group-hover:to-blue-300 flex items-center justify-center transition">
                    <Calendar className="h-5 w-5 text-green-500 group-hover:text-white transition" />
                  </div>
                  <span className="text-gray-800 group-hover:text-white transition font-medium">
                    Established in 2025
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-white group-hover:bg-gradient-to-r group-hover:from-green-200 group-hover:to-blue-300 flex items-center justify-center transition">
                    <Trophy className="h-5 w-5 text-green-500 group-hover:text-white transition" />
                  </div>
                  <span className="text-gray-800 group-hover:text-white transition font-medium">
                    1000+ Projects Completed
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-white group-hover:bg-gradient-to-r group-hover:from-green-200 group-hover:to-blue-300 flex items-center justify-center transition">
                    <Users className="h-5 w-5 text-green-500 group-hover:text-white transition" />
                  </div>
                  <span className="text-gray-800 group-hover:text-white transition font-medium">
                    50+ Professional Staff
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-white group-hover:bg-gradient-to-r group-hover:from-green-200 group-hover:to-blue-300 flex items-center justify-center transition">
                    <Award className="h-5 w-5 text-green-500 group-hover:text-white transition" />
                  </div>
                  <span className="text-gray-800 group-hover:text-white transition font-medium">
                    Multiple Industry Awards
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center transition-all duration-300 transform hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white hover:-translate-y-2 hover:scale-105 cursor-pointer"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white transition">
                  {value.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white transition">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our 20-year history
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-600"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                    }`}>
                    <div className="bg-gray-50 p-6 rounded-lg shadow">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <div className="text-gray-700">{milestone.event}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Amman Construction?</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Experience the difference of working with construction professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Licensed and insured professionals',
              'Transparent pricing with no hidden costs',
              'On-time project completion guarantee',
              'Quality materials and craftsmanship',
              'Comprehensive warranty on all work',
              'Dedicated project managers',
              'Eco-friendly construction practices',
              '24/7 customer support'
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;