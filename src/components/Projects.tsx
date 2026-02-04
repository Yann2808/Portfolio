import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    "title": "Electric Mobility Big Data Analysis",
    "image": "/img/electric_mobility.jpeg",
    "description": "Processed and analyzed massive datasets related to electric vehicle usage. The goal was to derive insights on charging patterns and optimize infrastructure planning.",
    "responsibilities": "Engineered the data processing pipeline using Spark SQL and Delta Lake, focusing on performance optimization and data quality.",
    "technologies": [
      "Apache Spark",
      "PySpark",
      "Delta Lake",
      "Databricks",
      "SQL"
    ],
    "challenges": "Handling large volumes of raw data efficiently. Optimized the ingestion and transformation queries, resulting in a significant reduction in processing time.",
    "links": {
      "github": "https://github.com/Yann2808/electric-mobility-data",
      "live": ""
    },
    "results": "Achieved a 60% reduction in processing time through Spark SQL optimizations and effective use of Delta Lake features."
  },
  {
    title: 'ShopNow Analytics Platform',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    description: 'An advanced analytics platform for a mock e-commerce system. Designed to track user behavior and sales trends.',
    responsibilities: 'Implemented the orchestration layer and containerized the entire data stack for reproducibility and scalability.',
    technologies: ['Docker', 'Prefect', 'PostgreSQL', 'Python', 'Pandas'],
    challenges: 'Ensuring reliable workflow execution and environment consistency.',
    links: {
      github: 'https://github.com/Yann2808/shopnow-analytics',
      live: ''
    },
    results: 'Built a fully containerized environment with Docker and orchestrated complex workflows with Prefect, ensuring 99.9% pipeline reliability.'
  },
  {
    title: 'Financial Performance Pilot',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000',
    description: 'A data integration project aimed at consolidating financial data from multiple sources for improved reporting accuracy.',
    responsibilities: 'Designed and implemented ETL processes using Talend to standardize financial data flows.',
    technologies: ['Talend', 'MySQL', 'Data Warehousing', 'ETL'],
    challenges: 'Dealing with inconsistent data formats and manual entry errors in the source systems.',
    links: {
      github: '',
      live: ''
    },
    results: 'Automated data ingestion using Talend, drastically reducing manual entry errors and improving financial reporting speed.'
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