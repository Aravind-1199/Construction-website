import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ExternalLink } from 'lucide-react';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <div className="p-8 text-center">Project ID missing</div>;

  const project = projects.find(p => p.id === parseInt(id));
  if (!project) return <div className="p-8 text-center">Project not found</div>;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {`${project.description} Located in ${project.location}, this project is categorized as ${project.category}. Completed in ${project.completed} for client ${project.client}.`}
        </p>
      </section>

      {/* Project Image */}
      <div className="max-w-4xl mx-auto p-8">
        <img
          src={project.image}
          alt={project.title}
          className="mb-6 w-full h-80 object-cover rounded shadow-lg"
        />

        <Link
          to="/projects"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-green-600 hover:to-blue-700 transition-colors duration-200"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
