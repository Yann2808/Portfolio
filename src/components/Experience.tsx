import React from 'react';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    position: 'Business Analyst - Alternance',
    company: 'AVRIL SERVICES',
    location: '56920 Saint-Gérand-Croixanvec',
    period: 'Septembre 2024 - Novembre 2024',
    description: 'Working on various web development projects using modern technologies.',
    technologies: ['SAP Business Object BI4', 'Power BI', 'Power Apps', 'SQL Server', 'Oracle Database'],
    achievements: [
      'Analyse et maintien des entrepôts de données pour garantir leur fiabilité',
      'Conception et déploiement de tableaux de bord PowerBI en collaboration avec les équipes métier',
      'Gestion en équipe du développement et de la validation de Proof Of Concept (PoC)',
      'Priorisation et résolution des incidents techniques en support aux utilisateurs'
    ]
  },
  {
    position: 'Développeur Web - Stage',
    company: 'Restaurant Chez Jean Bon',
    location: '35000 Rennes',
    period: 'Avril 2024 - Juin 2024',
    description: 'Stage de validation de ma Licence 3 MIAGE',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Angular', 'UML', 'MySQL', 'Git', 'Github'],
    achievements: [
      'Développement du Backend en équipe avec Spring Boot',
      'Gestion autonome de l’implémentation de l’authentification avec Spring Security',
      'Adaptation rapide à Angular pour la refonte d’une interface',
      'Identification et correction de bugs critiques'
    ]
  },
  {
    position: 'Développeur Web - CDD',
    company: 'TEC SARL',
    period: 'Septembre 2022 - Mai 2023',
    location: 'Cotonou, Bénin',
    description: 'Contrat à Durée Déterminée exécuté avant mon envol pour la France',
    technologies: ['PHP', 'Laravel', 'VueJS', 'Docker', 'Cassandra', 'Git', 'Github'],
    achievements: [
      'Développement et déploiement d\'une application web en Laravel/Vue.js en équipe',
      'Modélisation des domaines métier avec UML/Merise dans une approche DDD',
      'Intégration et test d’une passerelle de paiement sous contraintes de temps',
      'Optimisation des bases de données en refactorisant les requêtes SQL'
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