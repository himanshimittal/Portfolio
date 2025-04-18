import React from 'react';
import { Code2, Database, Terminal, GitBranch, Server, Layout } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['C++', 'Java', 'JavaScript'],
    },
    {
      title: 'Web Development',
      icon: <Layout className="w-6 h-6" />,
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML/CSS'],
    },
    {
      title: 'Tools & Technologies',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['Git', 'Postman', 'JWT', 'REST APIs', 'Linux'],
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: ['MongoDB', 'MySQL'],
    },
    {
      title: 'Version Control',
      icon: <GitBranch className="w-6 h-6" />,
      skills: ['Git', 'GitHub'],
    },
    {
      title: 'Backend & Cloud',
      icon: <Server className="w-6 h-6" />,
      skills: ['Spring Boot', 'AWS Basics', 'Node.js'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-gray-600">
            A comprehensive toolkit built through continuous learning and practical application
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 ml-3">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;