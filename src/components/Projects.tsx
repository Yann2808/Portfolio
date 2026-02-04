import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    "title": "Electric Mobility Big Data Analysis",
    image: '/img/electric_mobility.png',
    "description": "Processed and analyzed massive datasets related to electric vehicle usage. The goal was to derive insights on charging patterns and optimize infrastructure planning.",
    "technologies": ["Spark", "PySpark", "Delta Lake", "Databricks", "SQL"],
    "stats": "60% faster processing",
    "links": {
      "github": "https://github.com/Yann2808/electric-mobility-data",
      "live": ""
    }
  },
  {
    title: 'ShopNow Analytics Platform',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    description: 'An advanced analytics platform for a mock e-commerce system. Designed to track user behavior and sales trends.',
    technologies: ['Docker', 'Prefect', 'PostgreSQL', 'Python', 'Pandas'],
    stats: "99.9% uptime",
    links: {
      github: 'https://github.com/Yann2808/shopnow-analytics',
      live: ''
    }
  },
  {
    title: 'Financial Performance Pilot',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000',
    description: 'A data integration project aimed at consolidating financial data from multiple sources for improved reporting accuracy.',
    technologies: ['Talend', 'MySQL', 'Data Warehousing', 'ETL'],
    stats: "Zero manual errors",
    links: {
      github: '',
      live: ''
    }
  },
  {
    title: 'Employee Management SaaS',
    image: '/img/employee_management_dashboard.jpeg',
    description: 'Full-featured HR management tool for AS PHARM. Centralized employee management and automated leave requests.',
    technologies: ["Laravel", "Filament PHP", "PostgreSQL", "Livewire"],
    stats: "Used by 3 pharmacies",
    links: {
      github: "https://github.com/Yann2808/employees_management",
      live: ""
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
          </div>
          <a href="https://github.com/Yann2808" target='_blank' className="hidden md:flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">
            View all on GitHub <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-64">
                <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/40 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  <div className="flex gap-2">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener" className="p-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-full text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noopener" className="p-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-full text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold rounded-full border border-indigo-100 dark:border-indigo-800 whitespace-nowrap">
                    {project.stats}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-900 text-slate-500 text-xs font-medium">+{project.technologies.length - 4}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="https://github.com/Yann2808" target='_blank' className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
            View all on GitHub <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;