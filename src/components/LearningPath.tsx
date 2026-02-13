import { Award, BookOpen, ExternalLink, Calendar } from 'lucide-react';

const LearningPath = () => {
    const certifications = [
        {
            title: "Databricks Certified Data Engineer Associate",
            issuer: "Databricks Academy",
            date: "Jan 17, 2026",
            skills: ["Data Modeling Strategies", "Delta Lake", "Optimizations"],
            link: "https://credentials.databricks.com/",
            type: "Certification",
            color: "bg-red-500"
        },
        {
            title: "AWS Certified Cloud Practitioner",
            issuer: "AWS Training & Certification",
            date: "Feb 09, 2026",
            skills: ["Cloud Governance", "Security", "Global Infrastructure"],
            link: "",
            type: "Certification",
            color: "bg-orange-500"
        },
        {
            title: "Introduction to Amazon DynamoDB",
            issuer: "AWS Training & Certification",
            date: "Feb 09, 2026",
            skills: ["NoSQL Design", "Access Patterns", "Single Table Design"],
            link: "",
            type: "Course",
            color: "bg-blue-600"
        }
    ];

    return (
        <section id="learning" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-100 dark:bg-slate-900/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Continuous Learning</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Cloud & Data Certifications</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="group relative bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Award className="w-24 h-24 text-slate-900 dark:text-white" />
                            </div>

                            <div className="relative z-10">
                                <div className={`w-12 h-12 ${cert.color}/10 rounded-xl flex items-center justify-center mb-6`}>
                                    {cert.type === 'Certification' ? (
                                        <Award className={`w-6 h-6 ${cert.color.replace('bg-', 'text-')}`} />
                                    ) : (
                                        <BookOpen className={`w-6 h-6 ${cert.color.replace('bg-', 'text-')}`} />
                                    )}
                                </div>

                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">{cert.issuer}</span>
                                    <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> {cert.date}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {cert.title}
                                </h3>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {cert.skills.map(skill => (
                                        <span key={skill} className="px-2 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-xs text-slate-600 dark:text-slate-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {cert.link && (
                                    <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:underline">
                                            Verify Credential <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearningPath;
