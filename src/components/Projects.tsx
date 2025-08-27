import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    "title": "Employee Management System - AS PHARM GROUP",
    "image": "/img/employee_management_dashboard.jpeg",
    "description": "Design and development of a full-featured Human Resources (HR) management tool for AS PHARM, a SaaS company for pharmacies in Francophone Africa. The project aimed to centralize and automate employee management, leave, absences, and modification history to improve operational efficiency.",
    "responsibilities": "Led the full-stack development of the application and acted as project manager, handling task planning, progress tracking, and communication with stakeholders using an Agile-inspired methodology.",
    "technologies": [
      "Laravel 11",
      "Filament PHP",
      "Livewire",
      "PostgreSQL",
      "Spatie Laravel Permission",
      "UML"
    ],
    "challenges": "Overcoming a significant technical challenge related to Livewire's re-rendering logic and the organization chart widget, which required a major code refactoring and a deep understanding of the framework's lifecycle.",
    "links": {
      "github": "https://github.com/Yann2808/employees_management",
      "live": "https://example.com"
    },
    "results": "The final tool significantly contributes to AS PHARM’s operational efficiency by centralizing scattered HR processes and positions the company for future growth."
  },
  {
    title: 'E-commerce Platform',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    description: 'A full-featured e-commerce platform with real-time inventory management and analytics dashboard.',
    responsibilities: 'Led the development of the frontend architecture and implemented the checkout process.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    challenges: 'Implemented real-time inventory synchronization across multiple warehouses while maintaining system performance.',
    links: {
      github: 'https://github.com',
      live: 'https://example.com'
    },
    results: 'Increased conversion rate by 25% and reduced cart abandonment by 30%.'
  },
  {
    title: 'Task Management System - MyMBOWARE (based on Peter Drucker System)',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000',
    description: 'A collaborative task management system with real-time updates and team analytics.',
    responsibilities: 'Designed the system architecture and implemented the real-time collaboration features.',
    technologies: ['Laravel', 'Blade', 'MySQL', 'Eloquent ORM', 'UML'],
    challenges: 'Building a scalable real-time system while maintaining data consistency across multiple users.',
    links: {
      github: 'https://github.com/Yann2808/MyMBOware',
      live: ''
    },
    results: 'Adopted by 50+ teams, resulting in a 40% increase in project completion rates.'
  },
  {
    title: 'CLI Text Editor',
    image: '/img/cli_editor.png',
    description: 'A text editor developed in three versions, progressively integrating the Command and Memento design patterns to handle actions, recording, and unlimited undo/redo functionality. \n The project showcases a clear and modular object-oriented architecture.',
    responsibilities: 'Led the development of the frontend architecture and implemented the checkout process.',
    technologies: ['Java', 'JUnit', 'Git', 'POO', 'Design patterns (Command, Memento, etc...)', 'single-layer architecture'],
    challenges: 'The main challenges were to structure the code cleanly around design patterns while ensuring consistent handling of actions, their history, and the undo/redo system without overly complicating the architecture.',
    links: {
      github: 'https://github.com/Yann2808/Editor2020',
      live: ''
    },
    results: 'The implementation successfully demonstrates a functional text editor with progressive features: basic command execution, action recording and replay, and unlimited undo/redo, all validated through comprehensive tests confirming stability and correctness.'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white animate-slide-up">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className={`bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in`}
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2 dark:text-white">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2 dark:text-white">Challenges & Solutions:</h4>
                  <p className="text-gray-600 dark:text-gray-300">{project.challenges}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2 dark:text-white">Results:</h4>
                  <p className="text-gray-600 dark:text-gray-300">{project.results}</p>
                </div>

                <div className="flex gap-4 mt-6">
                  <a 
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                  <a 
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
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