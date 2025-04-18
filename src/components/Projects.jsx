import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Organ Donation App',
      description: 'A MERN stack web application that streamlines organ donations by connecting donors and recipients with authentication and dashboard features.',
      image: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      features: ['Admin & User Dashboards', 'Donor Listing', 'Secure Authentication'],
      github: 'https://github.com/himanshimittal/Organ-Donation',
    },
    {
      title: 'Freelancer Skill Exchange',
      description: 'A platform for users to trade skills using a skill credit system, featuring milestone-based tracking, escrow agreements, and dispute resolution.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tech: ['MERN Stack', 'JWT', 'Tailwind CSS'],
      features: ['Skill Matching', 'Service Negotiation', 'Review System'],
      github: 'https://github.com/himanshimittal/Freelancer',
    },
    {
      title: 'DIY Project Tracker',
      description: 'A CRUD-based application to track materials, progress, and steps involved in home-based DIY projects.',
      image: 'https://images.pexels.com/photos/3637786/pexels-photo-3637786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tech: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Node.js'],
      features: ['Project Management', 'Material Tracking', 'Progress Timeline'],
      github: 'https://github.com/himanshimittal/Craft-Log',
    },
    {
      title: 'Word Scramble Game',
      description: 'A fun and interactive game where players rearrange scrambled letters to form correct words within a timer. The difficulty level can be selected, with hints provided for assistance.',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tech: ['C++', 'Algorithm', 'Game Development'],
      features: ['Multiple Difficulty Levels', 'Hints Provided', 'Timed Challenge'],
      github: 'https://github.com/himanshimittal/Word-Scramble',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-gray-600">
            A showcase of my technical expertise and problem-solving abilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    <span className="text-sm">View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
