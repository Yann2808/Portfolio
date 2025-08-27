import React, { useState } from 'react';
import { Mail, MapPin, Send, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white animate-slide-up">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="animate-fade-in animate-delay-200">
            <h3 className="text-xl font-semibold mb-6 dark:text-white">Contact Information</h3>
            
            <div className="space-y-4 mb-8">

            <div className="flex items-center transform transition-transform duration-300 hover:translate-x-2">
                <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <a href="https://www.linkedin.com/in/yann-salako/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  Yann SALAKO
                </a>
              </div>

              <div className="flex items-center transform transition-transform duration-300 hover:translate-x-2">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <a href="mailto:yannsalako27@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300" target='_blank'>
                  yannsalako27@gmail.com
                </a>
              </div>
              
              <div className="flex items-center transform transition-transform duration-300 hover:translate-x-2">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-gray-600 dark:text-gray-300">35000 Rennes, France</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Availability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Disponible pour la réalisation de vos projets.
              </p>
            </div>
          </div>

          <div className="animate-fade-in animate-delay-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Adresse électronique
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Dites moi en quoi et comment je peux vous apporter mon aide
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;