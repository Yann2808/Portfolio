import { Github, Linkedin, Terminal, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 py-12 border-t border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-600 rounded-lg">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              Yann.dev
            </span>
          </div>

          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} Yann Salako. Built with React & Tailwind.
          </p>

          <div className="flex space-x-6">
            <a
              href="https://github.com/Yann2808"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/yann-salako"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/YannSoftDevWrld"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;