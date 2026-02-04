import { Download, CheckCircle } from 'lucide-react';

const About = () => {
  const skills: { category: string; items: string[] }[] = [
    {
      category: 'Data Engineering & Big Data',
      items: ['Databricks (Certified)', 'Spark (PySpark)', 'Snowflake', 'Talend', 'Delta Lake', 'SQL']
    },
    {
      category: 'Software & Infrastructure',
      items: ['Python', 'Docker', 'Git', 'Prefect', 'CI/CD', 'Bash', 'Terraform']
    },
    {
      category: 'Modeling & BI',
      items: ['Star Schema', 'Medallion Architecture', 'Power BI', 'Metabase', 'Data Modeling', 'SAP BO']
    },
    {
      category: 'Languages',
      items: ['French (Native)', 'English (B2 - Professional Working Proficiency)']
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
            <blockquote className="border-l-4 border-blue-600 pl-4 italic my-6 text-gray-600 dark:text-gray-400">
              "What is meant for me recharges me; what is not consumes me."
            </blockquote>
            <p className="mb-4">
              I am a Data Engineer with a strong background in software development. My journey began in Full Stack Web Development (JavaScript/React),
              where I learned the importance of clean code, modular architecture, and user-centric design.
            </p>
            <p>
              Today, I leverage that "Developer DNA" to build robust, industrial-grade data pipelines.
              I don't just write scripts; I engineer scalable ETL processes, optimize Spark jobs, and design resilient data architectures
              that drive business intelligence.
            </p>
            <p>
              I've worked with several languages and frameworks like Java (Spring Boot), PHP (Laravel, Symfony, CodeIgniter), manipulated
              various database systems (PostgreSQL, MySQL, MongoDB, Neo4j), and designed robust and secure REST APIs for high-performance, maintainable applications.
            </p>

            <h4 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">My Approach</h4>
            <p>
              Whether it's optimizing a Big Data processing workflow on Databricks or orchestrating complex dependencies with Prefect,
              I bring a rigorous software engineering mindset to the data world.
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
                href="/pdf/CV_Yann_SALAKO.pdf"
                download="CV_Yann_SALAKO.pdf"
                className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow"
                aria-label="Télécharger le CV de Yann Salako au format PDF"
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