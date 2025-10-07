// src/pages/Projects.tsx
import React, { useState } from 'react';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, Project } from '../data/projects';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Commercial', 'Residential', 'Renovation', 'Industrial'];

  const filteredProjects: Project[] = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing our commitment to excellence through successful construction projects across various sectors.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${activeFilter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="space-y-2 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Completed {project.completed}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{project.client}</span>
                    </div>
                  </div>

                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-green-600 hover:to-blue-700 transition-colors duration-200"
                  >
                    <span>View Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Project Statistics</h2>
            <p className="text-xl text-blue-200">Numbers that speak to our experience and success</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50M+</div>
              <div className="text-blue-200">Square Feet Built</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Next Project</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to join our portfolio of successful projects? Let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              Get Free Quote
            </a>
            <a
              href="/services"
              className="border-2 border-green-500 text-green-500 px-8 py-3 rounded-lg font-semibold transition-all duration-200 
             hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 hover:text-white"
            >
              Our Services
            </a>

          </div>
        </div>
      </section>






    </div>
  );
};

export default Projects;
