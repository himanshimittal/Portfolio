import React from 'react';
import { GraduationCap, Briefcase, Code } from 'lucide-react';

const Education = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['C++', 'Java'],
    },
    {
      category: 'Web Technologies',
      items: ['HTML', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'RESTful APIs', 'AWS (EC2, S3)'],
    },
    {
      category: 'Databases',
      items: ['MongoDB', 'MySQL'],
    },
    {
      category: 'Tools',
      items: ['Postman', 'Git', 'GitHub'],
    },
    {
      category: 'Operating Systems',
      items: ['Windows', 'Linux'],
    },
    {
      category: 'Soft Skills',
      items: ['Organized', 'Time Management', 'Team Collaboration', 'Flexibility', 'Adaptability'],
    },
  ];

  return (
    <section id="education" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Education & Skills</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-800 ml-2">Education</h3>
              </div>
              <div className="border-l-2 border-blue-600 pl-4">
                <h4 className="text-lg font-semibold text-gray-800">B.E. in Computer Science</h4>
                <p className="text-gray-600">Chitkara University</p>
                <p className="text-gray-500 text-sm">2022 - Present</p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>• CGPA: 8.38 (Till Present)</li>
                  <li>• Full Stack Development</li>
                  <li>• Data Structures & Algorithms</li>
                  <li>• Cloud Computing</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-800 ml-2">Work Experience</h3>
              </div>
              <div className="border-l-2 border-blue-600 pl-4">
                <p className="text-gray-600">Web Development Intern at Innovixion Tech (1 month)</p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>• Built applications using HTML, CSS, JavaScript, and React</li>
                  <li>• Strengthened frontend skills and teamwork</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <Code className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800 ml-2">Skills</h3>
            </div>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="border-l-2 border-blue-600 pl-4 py-2">
                  <h4 className="text-lg font-semibold text-gray-800">{skill.category}</h4>
                  <p className="text-gray-600">{skill.items.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
