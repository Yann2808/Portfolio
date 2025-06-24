import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Yann Salako</h3>
            <p className="text-gray-400">
              Analyste BI & Développeur Logiciel avec une forte appétence pour le Développement Backend
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">A propos</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white">Projets</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white">Experience</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Let's connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Yann2808" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/yann-salako" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://x.com/YannSoftDevWrld" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Yann Salako. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;