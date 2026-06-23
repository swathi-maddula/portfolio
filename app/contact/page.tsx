'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  User,
  AtSign,
  FileText,
} from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/swathi-maddula',
    icon: Github,
    color: 'hover:bg-gray-600',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/swathi-maddula',
    icon: Linkedin,
    color: 'hover:bg-blue-600',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Get in</span>
              <span className="text-gradient"> Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities, interesting projects,
              or just having a conversation about technology.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="glass-card p-6">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  Contact Information
                </h2>

                <div className="space-y-4">
                  <motion.a
                    href="mailto:swathimaddula55@gmail.com"
                    whileHover={{ x: 10, scale: 1.02, boxShadow: '0 10px 30px rgba(34, 211, 238, 0.15)' }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 p-4 rounded-xl glass hover:border-cyan-500/50 transition-all group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20"
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                        swathimaddula55@gmail.com
                      </p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+919398982047"
                    whileHover={{ x: 10, scale: 1.02, boxShadow: '0 10px 30px rgba(168, 85, 247, 0.15)' }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 p-4 rounded-xl glass hover:border-purple-500/50 transition-all group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/20"
                    >
                      <Phone className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="text-white group-hover:text-purple-400 transition-colors duration-300">
                        +91 93989 82047
                      </p>
                    </div>
                  </motion.a>

                  <motion.div
                    whileHover={{ x: 10, scale: 1.02, boxShadow: '0 10px 30px rgba(236, 72, 153, 0.15)' }}
                    className="flex items-center gap-4 p-4 rounded-xl glass group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center shadow-lg shadow-pink-500/20"
                    >
                      <MapPin className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-white group-hover:text-pink-400 transition-colors duration-300">India</p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-8">
                  <h3 className="text-sm font-medium text-muted-foreground mb-4">Connect on Social</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -5, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-white transition-all ${social.color}`}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Open To</h3>
                <div className="space-y-3">
                  {['Full-time Positions', 'Internship Opportunities', 'Freelance Projects',].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="glass-card p-6 md:p-8">
                <h2 className="text-xl font-semibold text-white mb-6">Send a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full pl-12 pr-4 py-3 rounded-xl glass bg-transparent text-white placeholder-muted-foreground/50 border border-white/10 focus:border-cyan-500/50 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full pl-12 pr-4 py-3 rounded-xl glass bg-transparent text-white placeholder-muted-foreground/50 border border-white/10 focus:border-cyan-500/50 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl glass bg-transparent text-white border border-white/10 focus:border-cyan-500/50 focus:outline-none transition-colors appearance-none"
                      >
                        <option value="" className="bg-background">Select a subject</option>
                        <option value="job" className="bg-background">Job Opportunity</option>
                        <option value="internship" className="bg-background">Internship Inquiry</option>
                        <option value="project" className="bg-background">Project Collaboration</option>
                        <option value="other" className="bg-background">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your opportunity or project..."
                      className="w-full px-4 py-3 rounded-xl glass bg-transparent text-white placeholder-muted-foreground/50 border border-white/10 focus:border-cyan-500/50 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400"
                    >
                      <AlertCircle className="w-5 h-5" />
                      <span>Something went wrong. Please try again.</span>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-medium text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
