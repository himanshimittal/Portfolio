import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Himanshi Mittal</h3>
            <p className="text-gray-400">Software Engineer</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/himanshimittal" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/himanshi-mittal-/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:himanshi1657@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="flex items-center justify-center md:justify-end text-gray-400">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Himanshi Mittal
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Himanshi Mittal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;