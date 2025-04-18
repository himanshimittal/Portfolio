import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import himanshiImage from '../himanshi.jpeg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 animate-fadeIn">
            Hi, I'm <span className="text-blue-600">Himanshi Mittal</span>
          </h1>

          <div className="relative overflow-hidden h-12">
            <p className="text-xl md:text-2xl text-gray-600 font-medium animate-slideUp">
              Software Engineer
            </p>
          </div>

          <p className="text-gray-600 max-w-lg animate-fadeIn">
            Bridging logic with creativity to build impactful digital solutions.
            Passionate about creating elegant, efficient code that solves real-world problems.
          </p>

          <div className="flex space-x-4 justify-center md:justify-start animate-fadeIn">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="bg-white text-blue-600 border border-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-all"
            >
              View Projects
            </a>
          </div>

          <div className="flex space-x-4 justify-center md:justify-start pt-6 animate-fadeIn">
            <a href="https://github.com/himanshimittal" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/himanshi-mittal-/" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:himanshi1657@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end animate-fadeIn z-10">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img
              src={himanshiImage}  // Dynamically imported image
              alt="Himanshi Mittal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-blue-600 transition-colors animate-bounce">
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;