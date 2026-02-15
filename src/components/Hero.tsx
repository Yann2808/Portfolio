import { ArrowRight, Code2, Database, Server, Smartphone, ServerCog, Cloud } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] -z-10 animate-float" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="px-4 py-2 rounded-full border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium flex items-center gap-2 mx-auto w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Seeking 6-month Data Engineering Internship • March 2026
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-slide-up tracking-tight">
            <span className="block text-slate-900 dark:text-white">Yann Salako</span>
            <span className="block text-4xl md:text-5xl mt-2 text-gradient font-extrabold">
              Data Engineer with a Developer’s DNA
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in animate-delay-200">
            Expert in <strong>Data Pipelines</strong> & <strong>Medallion Architectures</strong>. <br className="hidden md:block" />
            Databricks Certified & trained in <strong>AWS Cloud & NoSQL</strong> environments.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in animate-delay-300">
            <a
              href="#projects"
              className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-medium hover:translate-y-[-2px] hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 flex items-center gap-2"
            >
              Explore Projects
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
            >
              Let's Talk
            </a>
          </div>

          <div className="relative w-full max-w-5xl mx-auto overflow-hidden animate-fade-in animate-delay-400">
            <div className="flex absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white dark:from-slate-950 to-transparent"></div>
            <div className="flex absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white dark:from-slate-950 to-transparent"></div>

            <div className="flex w-max animate-scroll hover:animation-play-state-paused">
              {/* First Set */}
              <div className="flex items-center gap-8 md:gap-16 px-4 pr-8 md:pr-16 shrink-0">
                {[
                  { name: "Spark", icon: Code2, color: "text-orange-500" },
                  { name: "Databricks", icon: Database, color: "text-red-500" },
                  { name: "Snowflake", icon: Cloud, color: "text-blue-400" },
                  { name: "Talend", icon: ServerCog, color: "text-pink-500" },
                  { name: "Python", icon: Code2, color: "text-yellow-500" },
                  { name: "Hadoop", icon: Database, color: "text-yellow-600" },
                  { name: "Hive", icon: Database, color: "text-yellow-400" },
                  { name: "Pandas", icon: Code2, color: "text-blue-600" },
                  { name: "Prefect", icon: ServerCog, color: "text-blue-500" },
                  { name: "AWS", icon: Cloud, color: "text-orange-400" },
                  { name: "Docker", icon: Server, color: "text-blue-500" },
                  { name: "PostgreSQL", icon: Database, color: "text-blue-300" },
                  { name: "SQL", icon: Database, color: "text-slate-400" },
                  { name: "Power BI", icon: Smartphone, color: "text-yellow-600" },
                  { name: "Tableau", icon: Smartphone, color: "text-blue-600" },
                  { name: "Git", icon: Code2, color: "text-red-500" },
                  { name: "Java", icon: Code2, color: "text-red-400" },
                ].map((skill, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 group min-w-[80px]">
                    <div className={`p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 group-hover:border-indigo-500/30 transition-colors shadow-sm`}>
                      <skill.icon className={`w-8 h-8 ${skill.color}`} />
                    </div>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{skill.name}</span>
                  </div>
                ))}
              </div>
              {/* Duplicate Set for Infinite Scroll */}
              <div className="flex items-center gap-8 md:gap-16 px-4 pr-8 md:pr-16 shrink-0">
                {[
                  { name: "Spark", icon: Code2, color: "text-orange-500" },
                  { name: "Databricks", icon: Database, color: "text-red-500" },
                  { name: "Snowflake", icon: Cloud, color: "text-blue-400" },
                  { name: "Talend", icon: ServerCog, color: "text-pink-500" },
                  { name: "Python", icon: Code2, color: "text-yellow-500" },
                  { name: "Hadoop", icon: Database, color: "text-yellow-600" },
                  { name: "Hive", icon: Database, color: "text-yellow-400" },
                  { name: "Pandas", icon: Code2, color: "text-blue-600" },
                  { name: "Prefect", icon: ServerCog, color: "text-blue-500" },
                  { name: "AWS", icon: Cloud, color: "text-orange-400" },
                  { name: "Docker", icon: Server, color: "text-blue-500" },
                  { name: "PostgreSQL", icon: Database, color: "text-blue-300" },
                  { name: "SQL", icon: Database, color: "text-slate-400" },
                  { name: "Power BI", icon: Smartphone, color: "text-yellow-600" },
                  { name: "Tableau", icon: Smartphone, color: "text-blue-600" },
                  { name: "Git", icon: Code2, color: "text-red-500" },
                  { name: "Java", icon: Code2, color: "text-red-400" },
                ].map((skill, index) => (
                  <div key={`dup-${index}`} className="flex flex-col items-center gap-2 group min-w-[80px]">
                    <div className={`p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 group-hover:border-indigo-500/30 transition-colors shadow-sm`}>
                      <skill.icon className={`w-8 h-8 ${skill.color}`} />
                    </div>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;