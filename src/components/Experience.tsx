import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    position: 'Data Developer Intern',
    company: 'AS PHARM GROUP',
    period: 'April 2025 - July 2025',
    location: 'Paris, France',
    description: 'Developing data-driven solutions for HR management in a SaaS environment.',
    technologies: ['PostgreSQL', 'SQL', 'Laravel', 'Real-time Dashboards', 'Data Modeling'],
    achievements: [
      'Engineered real-time RH dashboards to visualize key employee metrics',
      'Optimized SQL ingestion pipelines for high-volume data processing',
      'Modeled complex business domains using UML/Merise in a DDD approach',
      'Contributed to the full-stack development of the core SaaS platform'
    ]
  },
  {
    position: 'BI & Data Engineering Intern',
    company: 'AVRIL SERVICES',
    location: 'Saint-Gérand-Croixanvec, France',
    period: 'April 2024 - July 2024',
    description: 'Ensuring high availability of data warehouses and deploying Business Intelligence solutions.',
    technologies: ['SAP BO', 'Power BI', 'SQL Server', 'Oracle Database', 'Data Warehousing'],
    achievements: [
      'Maintained and optimized data warehouses to ensure high availability and reliability',
      'Deployed SAP Business Objects (BO) solutions for enterprise reporting',
      'Designed interactive Power BI dashboards for business decision-making',
      'Managed Proof of Concepts (PoC) for new data initiatives'
    ]
  },
  {
    position: 'Web Developer- Internship',
    company: 'Restaurant Chez Jean Bon',
    location: '35000 Rennes, French',
    period: 'April 2024 - June 2024',
    description: 'Internship for Bachelor degree\'s validation',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Angular', 'UML', 'MySQL', 'Git', 'Github'],
    achievements: [
      'Backend development in a team with Spring Boot',
      'Autonomous management of authentication implementation with Spring Security',
      'Rapid adaptation to Angular for interface redesign',
      'Identification and correction of critical bugs'
    ]
  },
  {
    position: 'Web Developer - CDD',
    company: 'TEC SARL',
    period: 'September 2022 - May 2023',
    location: 'Cotonou, Benin',
    description: 'Fixed-term contract executed before my departure for France',
    technologies: ['PHP', 'Laravel', 'VueJS', 'Docker', 'Cassandra', 'Git', 'Github'],
    achievements: [
      'Development and deployment of a web application in Laravel/Vue.js as part of a team',
      'Business domain modeling with UML/Merise in a DDD approach',
      'Integration and testing of a payment gateway under time constraints',
      'Optimization of databases by refactoring SQL queries'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">Professional Journey</h2>

        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-[-48px] w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2 last:bottom-0"></div>

              <div className={`md:flex items-center justify-between gap-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>

                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-slate-950 z-10 transition-transform hover:scale-150 duration-300 shadow-md"></div>

                {/* Date Side */}
                <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 font-medium text-sm">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                </div>

                {/* Content Side */}
                <div className="md:w-1/2 relative bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-indigo-50/50 dark:to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                  <div className="relative z-10">
                    {/* Mobile Date */}
                    <div className="md:hidden flex items-center gap-2 text-sm text-slate-500 mb-4">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.position}</h3>
                    <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-4">{exp.company}</h4>

                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-6">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mb-6">{exp.description}</p>

                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-xs font-medium border border-slate-100 dark:border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;