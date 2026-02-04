import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formData
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        // fallback dev: simulate success for demo if needed, but error is safer for real env
        // setSubmitStatus('success'); 
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-950 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

          {/* Info Side */}
          <div className="md:w-5/12 bg-slate-900 dark:bg-slate-800 p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-[60px] opacity-20 -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-500 rounded-full blur-[60px] opacity-20 -ml-10 -mb-10"></div>

            <h3 className="text-2xl font-bold mb-6">Let's build something great together.</h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              I'm available for a 6-month internship starting March 2026. Open to discussing Data Engineering challenges and opportunities.
            </p>

            <div className="space-y-6">
              <a href="mailto:yannsalako27@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>yannsalako27@gmail.com</span>
              </a>

              <a href="https://www.linkedin.com/in/yann-salako/" target='_blank' className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span>Yann SALAKO</span>
              </a>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Rennes, France</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-7/12 p-8 md:p-12">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Message sent successfully!
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 font-medium"
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    Send Message <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;