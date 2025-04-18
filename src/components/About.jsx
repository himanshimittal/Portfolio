import React from 'react';
import { MapPin, Bookmark, Code, School } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              I'm a dedicated and ambitious Computer Science student from Chitkara University with a deep-rooted 
              passion for technology and innovation. Coming from Nabha, a small town in Punjab, I believe in the 
              power of perseverance and learning through every challenge.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              With a strong foundation in programming languages like C++, Java, and Python, I strive to merge my 
              technical skills with creativity to develop scalable and user-centric applications.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-2">
                <MapPin className="text-blue-600 w-5 h-5" />
                <span className="text-gray-700">Nabha, Punjab</span>
              </div>
              <div className="flex items-center space-x-2">
                <School className="text-blue-600 w-5 h-5" />
                <span className="text-gray-700">Computer Science</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="text-blue-600 w-5 h-5" />
                <span className="text-gray-700">Full Stack Dev</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bookmark className="text-blue-600 w-5 h-5" />
                <span className="text-gray-700">Open to Work</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Current Focus</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-600">Mastering full-stack development</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-600">System design principles</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-600">Preparing for top tech companies</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-600">Contributing to open source</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;