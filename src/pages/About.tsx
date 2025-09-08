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
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About BuildPro</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Two decades of building excellence, one project at a time. 
              Your trusted partner in construction since 2004.
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
                  Founded in 2004, BuildPro Construction began as a small family business with a big vision: 
                  to deliver exceptional construction services that exceed client expectations. What started 
                  as a residential construction company has evolved into a full-service construction firm 
                  handling projects of all sizes.
                </p>
                <p>
                  Over the years, we've built more than structures – we've built relationships. Our commitment 
                  to quality, integrity, and customer satisfaction has earned us a reputation as one of the 
                  most trusted construction companies in the region.
                </p>
                <p>
                  Today, we're proud to have completed over 1,000 projects, employed hundreds of skilled 
                  professionals, and contributed to the growth and development of our community. But our 
                  mission remains the same: building your dreams into reality.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Established in 2004</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">1000+ Projects Completed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">50+ Professional Staff</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Multiple Industry Awards</span>
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
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
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
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
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
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose BuildPro?</h2>
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