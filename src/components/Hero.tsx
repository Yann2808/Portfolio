import { ArrowRight, Code2, Database, Server, Smartphone, ServerCog, Cloud } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
            Yann Salako
            <span className="block text-3xl md:text-4xl text-gray-600 dark:text-gray-300 mt-2 animate-slide-up animate-delay-200">
              Data Engineer with a Developer’s DNA
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in animate-delay-300">
            Building robust, scalable data pipelines with the precision of a Software Engineer.
          </p>

          <div className="flex flex-col gap-2 mb-8 animate-fade-in animate-delay-300">
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mx-auto">
              📍 Based in Rennes, France
            </span>
            <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium mx-auto">
              🚀 Seeking a 6-month Data Engineering internship starting March 2026
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in animate-delay-400">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              View My Projects
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in animate-delay-500">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4 mx-auto animate-float">
                <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Frontend</h3>
              <p className="text-gray-600 dark:text-gray-300">JavaScript, TypeScript, Angular, VueJS, React</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg mb-4 mx-auto animate-float animate-delay-200">
                <Server className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Backend</h3>
              <p className="text-gray-600 dark:text-gray-300">Java (Spring Boot), C++, PHP (Laravel, Symfony, CodeIgniter), Python (FastAPI)</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg mb-4 mx-auto animate-float animate-delay-400">
                <Smartphone className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Mobile</h3>
              <p className="text-gray-600 dark:text-gray-300">Kotlin, XML, Gradle, Swift, Swift UI</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg mb-4 mx-auto animate-float animate-delay-400">
                <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Databases</h3>
              <p className="text-gray-600 dark:text-gray-300">MySQL, MariaDB, PostgreSQL, SQLite, MongoDB, Neo4j</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4 mx-auto animate-float animate-delay-400">
                <ServerCog className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">DevOps</h3>
              <p className="text-gray-600 dark:text-gray-300">
                CI/CD (GitHub Actions, GitLab CI, Jenkins), Docker, Kubernetes, Terraform, Helm
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4 mx-auto animate-float animate-delay-400">
                <Cloud className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Cloud</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Amazon Web Service (AWS), Google Cloud Platform (GCP), Microsoft Azure
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;