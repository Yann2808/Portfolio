import { Download, Cpu, Database, Cloud, Code2 } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Data Core & Analytics',
      icon: Database,
      items: [
        'Spark (PySpark)', 'Databricks', 'Snowflake',
        'ETL/ELT Pipelines', 'Airflow/Prefect',
        'Big Data (Hadoop/Hive)', 'Advanced SQL (Postgres/MySQL)',
        'Data Modeling (Star Schema)', 'Power BI / Tableau'
      ]
    },
    {
      category: 'Software Engineering',
      icon: Code2,
      items: ['Java (Spring Boot)', 'Python', 'PHP (Laravel)', 'JavaScript (Angular/Vue)', 'API Design']
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      items: ['AWS (Essentials)', 'Docker', 'CI/CD (GitHub Actions)', 'Git & Versioning', 'DynamoDB', 'Linux/Bash']
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Narrative Column */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-indigo-500"></span>
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm">About Me</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              Bridging the gap between <span className="text-gradient">Software Engineering</span> and <span className="text-gradient">Data Science</span>.
            </h2>

            <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-400 space-y-6">
              <p>
                As a Data Engineer with a strong background in software development, I don't just write scripts; I design systems. My journey began in Full Stack Web Development, where I mastered the art of clean code, modular architecture, and user-centric design.
              </p>

              {/* Hybrid Advantage Card */}
              <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 rounded-r-xl my-8">
                <h4 className="text-lg font-bold text-indigo-700 dark:text-indigo-300 mb-2">The Hybrid Advantage</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 italic">
                  "I understand the full lifecycle of data — from its creation in the application layer (Backend/Frontend) to its transformation and analysis in the Data Lake. This allows me to build pipelines that are not only efficient but also resilient and aligned with application logic."
                </p>
              </div>

              <p>
                Today, I leverage that "Developer DNA" to build robust, industrial-grade data pipelines. Whether it's optimizing a Big Data processing workflow on Databricks or orchestrating complex dependencies with Prefect, I bring a rigorous engineering mindset to the data world.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800">
              <a
                href="/pdf/CV_Yann_SALAKO.pdf"
                download="CV_Yann_SALAKO.pdf"
                className="inline-flex items-center px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300 font-medium group"
                aria-label="Download CV"
              >
                <Download className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Skills Column */}
          <div className="lg:w-1/2 w-full">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-indigo-500" />
              Technical Arsenal
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {skills.map((group, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 border border-slate-100 dark:border-slate-800 hover:border-indigo-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                      <group.icon className="w-5 h-5 text-indigo-500" />
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{group.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm rounded-md border border-slate-200 dark:border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;