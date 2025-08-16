import { Calendar } from 'lucide-react';

const experiences = [
  {
    position: 'Web Developer - Internship',
    company: 'SAS AS PHARM GROUP',
    period: 'May 2025 - July 2025',
    location: 'Paris, French',
    description: 'Internship for my master degree\'s validation',
    technologies: ['PHP', 'Laravel', 'VueJS', 'FilamentPHP', 'PostGreSQL', 'Git', 'Github', 'Laravel Cloud'],
    achievements: [
      'Development and deployment of a web application in Laravel/Vue.js as part of a team',
      'Business domain modeling with UML/Merise in a DDD approach',
      'Integration and testing of a payment gateway under time constraints',
      'Optimization of databases by refactoring SQL queries'
    ]
  },
  {
    position: 'Business Analyst - Apprenticeship',
    company: 'AVRIL SERVICES',
    location: '56920 Saint-Gérand-Croixanvec, French',
    period: 'September 2024 - November 2024',
    description: 'Manage data warehouses, design PowerBI dashboards, make PoC.',
    technologies: ['SAP Business Object BI4', 'Power BI', 'Power Apps', 'SQL Server', 'Oracle Database', 'DBeaver'],
    achievements: [
      'Analysis and maintenance of data warehouses to guarantee their reliability',
      'Design and deployment of PowerBI dashboards in collaboration with business teams',
      'Team management of Proof Of Concept (PoC) development and validation',
      'Prioritization and resolution of technical incidents in support of users'
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
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={exp.company} 
              className={`relative pl-8 pb-12 ${
                index !== experiences.length - 1 ? 'border-l-2 border-gray-200 dark:border-gray-700' : ''
              }`}
            >
              <div className="absolute left-[-8px] top-0 w-4 h-4 bg-blue-600 rounded-full" />
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-xl font-semibold dark:text-white">{exp.position}</h3>
                  <span className="text-gray-600 dark:text-gray-400">@ {exp.company}</span>
                  <span className="text-gray-600 dark:text-gray-400">{exp.location}</span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium mb-2 dark:text-white">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2 dark:text-white">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
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