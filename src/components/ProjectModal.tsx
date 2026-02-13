import React from 'react';
import { X, Github, ExternalLink, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        image: string;
        description: string;
        technologies: string[];
        links: { github: string; live: string };
        details?: {
            problem: string;
            solution: string;
            impact: string;
            stack: { name: string; icon?: any }[];
        };
    } | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in duration-300 scrollbar-hide">

                {/* Header Image */}
                <div className="relative h-48 sm:h-64 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10" />
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-6 left-6 sm:left-10 z-20">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">{project.title}</h2>
                        <div className="flex gap-2 flex-wrap">
                            {project.technologies.slice(0, 3).map(tech => (
                                <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-medium text-white">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-10 space-y-8">

                    {/* The Problem */}
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                            <span className="w-8 h-1 bg-red-500 rounded-full"></span>
                            The Challenge
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                            {project.details?.problem || "Description of the business problem goes here."}
                        </p>
                    </section>

                    {/* The Solution */}
                    <section className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                            <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
                            The Solution
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            {project.details?.solution || "Technical approach and architecture details."}
                        </p>

                        {project.details?.stack && (
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {project.details.stack.map((item) => (
                                    <div key={item.name} className="flex flex-col items-center justify-center p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200 text-center">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>

                    {/* The Impact */}
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                            <span className="w-8 h-1 bg-teal-500 rounded-full"></span>
                            Business Impact
                        </h3>
                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-medium">
                                {project.details?.impact || "Quantifiable results achieved."}
                            </p>
                        </div>
                    </section>

                    {/* Footer Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-100 dark:border-slate-800 mt-8">
                        {project.links.github && (
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                                <Github className="w-5 h-5" />
                                View Codebase
                            </a>
                        )}
                        {project.links.live && (
                            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <ExternalLink className="w-5 h-5" />
                                Live Demo
                            </a>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
