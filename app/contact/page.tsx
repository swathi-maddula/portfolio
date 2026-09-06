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
                    whileHover={{ x: 12, scale: 1.04, boxShadow: '0 15px 40px rgba(34, 211, 238, 0.25)' }}
                    whileTap={{ scale: 0.96 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl glass hover:border-cyan-500/50 transition-all group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      transition={{ duration: 0.6, type: 'spring' }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-2xl transition-shadow"
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                        swathimaddula95@gmail.com
                      </p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+919398982047"
                    whileHover={{ x: 12, scale: 1.04, boxShadow: '0 15px 40px rgba(168, 85, 247, 0.25)' }}
                    whileTap={{ scale: 0.96 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4 p-4 rounded-xl glass hover:border-purple-500/50 transition-all group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      transition={{ duration: 0.6, type: 'spring' }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-2xl transition-shadow"
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
                    whileHover={{ x: 12, scale: 1.04, boxShadow: '0 15px 40px rgba(236, 72, 153, 0.25)' }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-4 p-4 rounded-xl glass group cursor-pointer transition-all"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      transition={{ duration: 0.6, type: 'spring' }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center shadow-lg shadow-pink-500/20 group-hover:shadow-2xl transition-shadow"
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
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.25, y: -8, rotate: 12, boxShadow: '0 10px 30px rgba(34, 211, 238, 0.3)' }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-300 ${social.color}`}
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
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Your Name
                      </label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-cyan-400 transition-colors duration-300" />
                        <motion.input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          whileFocus={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}
                          className="w-full pl-12 pr-4 py-3 rounded-xl glass bg-transparent text-white placeholder-muted-foreground/50 border border-white/10 focus:border-cyan-500/50 focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Email Address
                      </label>
                      <div className="relative group">
                        <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-cyan-400 transition-colors duration-300" />
                        <motion.input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          whileFocus={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}
                          className="w-full pl-12 pr-4 py-3 rounded-xl glass bg-transparent text-white placeholder-muted-foreground/50 border border-white/10 focus:border-cyan-500/50 focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Subject
                    </label>
                    <div className="relative group">
                      <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-cyan-400 transition-colors duration-300 pointer-events-none z-10" />
                      <motion.select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        whileFocus={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}
                        className="w-full pl-12 pr-4 py-3 rounded-xl glass bg-transparent text-white border border-white/10 focus:border-cyan-500/50 focus:outline-none transition-all duration-300 appearance-none"
                      >
                        <option value="" className="bg-background">Select a subject</option>
                        <option value="job" className="bg-background">Job Opportunity</option>
                        <option value="internship" className="bg-background">Internship Inquiry</option>
                        <option value="project" className="bg-background">Project Collaboration</option>
                        <option value="other" className="bg-background">Other</option>
                      </motion.select>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Message
                    </label>
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your opportunity or project..."
                      whileFocus={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}
                      className="w-full px-4 py-3 rounded-xl glass bg-transparent text-white placeholder-muted-foreground/50 border border-white/10 focus:border-cyan-500/50 focus:outline-none transition-all duration-300 resize-none"
                    />
                  </motion.div>

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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ y: -3, scale: 1.02, boxShadow: '0 20px 50px rgba(34, 211, 238, 0.3)' }}
                    whileTap={{ scale: 0.95, y: 0 }}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-medium text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <motion.span
                          whileHover={{ x: 4 }}
                          transition={{ type: 'spring', bounce: 0.5 }}
                          className="flex items-center gap-2 relative z-10"
                        >
                          <Send className="w-5 h-5" />
                          Send Message
                        </motion.span>
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
