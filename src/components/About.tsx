import { Download, CheckCircle } from 'lucide-react';

const About = () => {
  const skills: { category: string; items: string[] }[] = [
    {
      category: 'Languages',
      items: ['Java', 'PHP', 'JavaScript/TypeScript', 'Python', 'C', 'C#/.NET','C++']
    },
    {
      category: 'Frontend',
      items: ['Angular', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Sass', 'Astro']
    },
    {
      category: 'Backend',
      items: ['Spring Boot', 'Laravel', 'Symfony', 'Code Igniter', 'REST API design and consumption']
    },
    {
      category: 'Mobile',
      items: ['Kotlin', 'XML', 'Progressive Web Application - PWA', 'Gradle', 'Swift (iOS)']
    },
    {
      category: 'Database',
      items: ['MySQL', 'SQLite', 'PostgreSQL', 'MongoDB', 'Neo4j', 'Airtable']
    },
    {
      category: 'DevOps',
      items: ['Git', 'GitHub/GitLab', 'Docker', 'Kubernetes', 'Jenkins', 'Github Actions', 'SonarQube', 'AWS', 'Azure', 'Google Cloud Platform (GCP)', 'CI/CD']
    },
    {
      category: 'Methodologies and Project Management',
      items: ['Agile (Scrum)', 'Jira', 'Confluence', 'UML', 'MERISE', 'Technical communication', 'Multi-squad environment']
    },
    {
      category: 'Languages',
      items: ['French (native)', 'English B2 (Oral + written in a professional context']
    },
  ];

  const softSkills = [
    'Problem Solving',
    'Strong Communication',
    'Team Leadership',
    'Agile Methodologies',
    'Project Management',
    'Self-reliance'
  ];

  const benefits = [
    "Efficient and structured development following best practices",
    "Seamless integration with your tools and workflows",
    "Transparent and responsive collaboration",
    "Adaptability to changes and new technologies"
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Profile</h3>
            <p>
              As a back-end-oriented software developer, I design robust, scalable solutions tailored to business needs.
              With experience of distributed architectures and a wide range of technologies, I work mainly on the back-end side, 
              while remaining at ease with the front-end and mobile when necessary.
            </p>
            <p>
              I've worked with several languages and frameworks like Java (Spring Boot), PHP (Laravel, Symfony, CodeIgniter), manipulated 
              various database systems (PostgreSQL, MySQL, MongoDB, Neo4j), and designed robust and secure REST APIs for high-performance, maintainable applications.
            </p>

            <h4 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">What I propose ?</h4>
            <p>
              Whether developing a web application, upgrading an existing infrastructure or integrating new technologies, 
              I bring a rigorous, technical and results-oriented approach.
            </p>
            <p>
              I also work with freelancers and small businesses to create showcase sites or set up professional 
              solutions (hosting, e-mail addresses, performance), with simple, clear, made-to-measure offers.
            </p>

            <h4 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Why should you work with us ?</h4>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-lg">
                  <CheckCircle className="text-green-500" size={24} />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6">
              📩 <strong>Need tech support ?</strong> Let's talk about your project !
            </p>

            <div className="mt-8">
              <a
                href="public/pdf/CV_Yann_SALAKO.pdf"
                className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow"
              >
                <Download className="w-5 h-5 mr-2" />
                Download my CV
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='border-t border-gray-200 dark:border-gray-700 pt-8'></div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;