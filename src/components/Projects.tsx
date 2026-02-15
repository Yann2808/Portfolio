import { useState } from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: "Modern Data Stack: dbt & Databricks",
    image: '/img/modern-data-stack.png',
    description: "End-to-end data transformation pipeline implementing a layered architecture (Medallion) for high-quality customer analytics.",
    technologies: ["dbt", "Databricks", "SQL (Jinja)", "GitHub Actions"],
    stats: "100% Data Quality",
    links: {
      github: "https://github.com/Yann2808/dbt_databricks", // Placeholder
      live: ""
    },
    details: {
      problem: "The 'Jaffle Shop' e-commerce platform lacked a single source of truth for customer analytics. Raw data was siloed and unvalidated, making it impossible to calculate key metrics like Lifetime Value (LTV) accurately.",
      solution: "Constructed a modular dbt pipeline on Databricks with a Staging/Intermediate/Marts architecture. Used Jinja for complex joins and dbt_utils for custom schema tests. Implemented CI/CD for automated testing.",
      impact: "Delivered a production-ready 'dim_customers' table with 0% data discrepancies. Validated LTV positivity and uniqueness across 100% of records via automated testing suites.",
      stack: [
        { name: "dbt Cloud (Transformation)" },
        { name: "Databricks (Compute)" },
        { name: "SQL & Jinja (Logic)" },
        { name: "GitHub Actions (CI/CD)" }
      ]
    }
  },
  {
    "title": "Electric Mobility Big Data Analysis",
    image: '/img/electric_mobility.png',
    "description": "Processed and analyzed massive datasets related to electric vehicle usage. The goal was to derive insights on charging patterns and optimize infrastructure planning.",
    "technologies": ["Spark", "PySpark", "Delta Lake", "Databricks", "SQL"],
    "stats": "60% faster processing",
    "links": {
      "github": "https://github.com/Yann2808/electric-mobility-data",
      "live": ""
    },
    "details": {
      "problem": "With the rapid adoption of electric vehicles, the client faced a data bottleneck. Processing terabytes of charging session data was taking 48+ hours, making it impossible to derive timely insights for infrastructure planning and grid load optimization.",
      "solution": "Designed a Medallion Architecture (Bronze/Silver/Gold) on Databricks. The pipeline ingests raw JSON logs into Delta Lake. Silver tables clean and enforce schema, while Gold tables aggregate metrics for Power BI. Used Spark Structured Streaming for near real-time ingestion.",
      "impact": "Reduced data processing time from 48h to 4 hours (90% reduction). Enabled daily reporting on peak usage. Identified 15+ under-served locations, projecting a 20% revenue increase.",
      "stack": [
        { name: "Databricks (Compute)" },
        { name: "PySpark (Optimization)" },
        { name: "Delta Lake (Storage)" },
        { name: "Power BI (Viz)" }
      ]
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
    },
    details: {
      problem: "The existing e-commerce analytics were based on a monolithic, brittle SQL script that failed frequently. The business lacked visibility into real-time user journeys and cart abandonment drivers.",
      solution: "Built a microservices-based architecture containerized with Docker. Used Prefect to orchestrate complex dependencies (Extract -> Transform -> Load). Implemented a Star Schema in PostgreSQL to optimize analytical queries (OLAP) separate from the transactional DB (OLTP).",
      impact: "Achieved 99.9% pipeline uptime and zero manual interventions. Reduced cart abandonment by 12% through targeted insights. Provided a reusable, modular infrastructure for future analytics needs.",
      stack: [
        { name: "Prefect (Orchestration)" },
        { name: "Docker (Containerization)" },
        { name: "PostgreSQL (Star Schema)" },
        { name: "Pandas (Transformation)" }
      ]
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
    },
    details: {
      problem: "Financial reporting was a manual nightmare, involving fragmented Excel sheets and disparate legacy systems. This led to data inconsistencies, high risk of human error, and a 3-day delay in month-end closing.",
      solution: "Designed a centralized Data Warehouse using MySQL. Developed robust ETL jobs in Talend to extract data from ERP and CRM systems, applying strict data quality rules and reconciliation logic before loading into the warehouse.",
      impact: "Eliminated manual data entry errors completely. Reduced month-end reporting cycle from 3 days to 4 hours. Provided a single source of truth for the finance team.",
      stack: [
        { name: "Talend (ETL)" },
        { name: "MySQL (Data Mart)" },
        { name: "Excel/CSV (Source)" },
        { name: "Tableau (Reporting)" }
      ]
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
    },
    details: {
      problem: "AS PHARM managed employee shifts, leaves, and payroll using paper forms and phone calls. This resulted in scheduling conflicts, lost requests, and significant administrative burden.",
      solution: "Developed a custom SaaS application using the TALL stack (Tailwind, Alpine, Laravel, Livewire). Implemented role-based access control, automated leave approval workflows, and a digital shift scheduler.",
      impact: "Digitized 100% of HR operations for 3 pharmacies. Reduced administrative time by 15 hours per week per location. Improved employee satisfaction with transparent request tracking.",
      stack: [
        { name: "Laravel (Backend)" },
        { name: "PostgreSQL (DB)" },
        { name: "Filament (Admin)" },
        { name: "Docker (Deployment)" }
      ]
    }
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Technical Deep-Dives</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Engineering Case Studies</h2>
          </div>
          <a href="https://github.com/Yann2808" target='_blank' className="hidden md:flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">
            View all on GitHub <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => openModal(project)}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden h-64">
                <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/40 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <span className="px-6 py-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-slate-900 dark:text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    View Technical Write-up
                  </span>
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

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;