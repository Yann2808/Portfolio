import React from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-900 dark:text-white">
            Yann Salako
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projects</a>
            <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Experience</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a>
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <a href="https://github.com/Yann2808" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/in/yann-salako/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
            <div className="flex flex-col space-y-4 p-4">
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projects</a>
              <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Experience</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a>
              
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <a href="https://github.com/Yann2808" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
                </a>
                <a href="https://www.linkedin.com/in/yann-salako/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;