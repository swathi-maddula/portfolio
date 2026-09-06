'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Database,
  Cloud,
  Code,
  Calendar,
  Shield,
  Star,
} from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

type CertificationCategory = 'Development' | 'Data Science' | 'Cloud Computing';

type Certification = {
  title: string;
  issuer: string;
  year: string;
  category: CertificationCategory;
  icon: typeof Code;
  color: string;
  description: string;
  date: string;
  skills: string[];
};

const certifications: Certification[] = [
  {
    title: 'MERN Stack Internship',
    issuer: 'Smart Bridge',
    year: '2026',
    category: 'Development',
    icon: Code,
    color: 'from-green-500 to-emerald-600',
    description: 'Hands-on internship covering MongoDB, Express.js, React.js, and Node.js.',
    date: '2026',
    skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js']
  },
  {
    title: 'TATA GenAI Powered Data Analytics',
    issuer: 'Tata Group',
    year: '2026',
    category: 'Data Science',
    icon: Database,
    color: 'from-purple-500 to-pink-600',
    description: 'GenAI-powered data analytics certification focused on business insights and applied analytics.',
    date: '2026',
    skills: ['GenAI', 'Data Analytics', 'Visualization', 'Business Insights']
  },
  {
    title: 'ServiceNow Virtual Internship',
    issuer: 'ServiceNow',
    year: '2026',
    category: 'Cloud Computing',
    icon: Cloud,
    color: 'from-cyan-500 to-blue-600',
    description: 'Virtual internship focused on the ServiceNow platform, workflow automation, and enterprise tooling.',
    date: '2026',
    skills: ['ServiceNow', 'Workflow Automation', 'Platform Basics', 'Enterprise Tools']
  }
];

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">My</span>
              <span className="text-gradient"> Certifications</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications demonstrating my commitment to continuous learning
              and expertise in software development, data science, and AI/ML.
            </p>
          </motion.div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 30, scale: 0.9 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', bounce: 0.3 }}
                  whileHover={{ y: -16, scale: 1.04, boxShadow: '0 30px 60px rgba(34, 211, 238, 0.25)' }}
                  className="group relative transition-all duration-300"
                >
                  <div className="glass-card overflow-hidden h-full flex flex-col">
                    <div className={`h-32 bg-gradient-to-br ${cert.color} p-6 relative overflow-hidden`}>
                      <div className="absolute inset-0 opacity-20 grid-pattern" />
                      <motion.div 
                        className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-300"
                        whileHover={{ opacity: 0.5 }}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ opacity: 1 }}
                      />
                      <div className="relative z-10 flex items-start justify-between">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.15 }}
                          transition={{ duration: 0.6, type: 'spring' }}
                          className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-white/20 group-hover:shadow-2xl group-hover:shadow-white/40 transition-shadow duration-300"
                        >
                          <cert.icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <div className="flex items-center gap-1 group-hover:scale-110 transition-transform">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ rotate: 0, scale: 0.8 }}
                              whileInView={{ rotate: 0, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + i * 0.05 }}
                              whileHover={{ rotate: 180, scale: 1.3 }}
                            >
                              <Star key={i} className="w-3 h-3 text-yellow-300 fill-yellow-300" />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      <motion.div 
                        className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl"
                        whileHover={{ scale: 180 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>

                    <div className="p-6 flex-1 flex flex-col relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <motion.div 
                        className="flex items-center gap-2 mb-2 relative z-10"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.1 }}
                      >
                        <Shield className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs text-muted-foreground">{cert.category}</span>
                      </motion.div>

                      <motion.h3 
                        className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2 relative z-10"
                        whileHover={{ x: 4 }}
                      >
                        {cert.title}
                      </motion.h3>

                      <p className="text-sm text-muted-foreground mb-3 relative z-10 group-hover:text-muted-foreground/80 transition-colors">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground mb-4 flex-1 relative z-10">{cert.description}</p>

                      <motion.div 
                        className="flex items-center gap-4 text-xs text-muted-foreground mb-4 relative z-10"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                          <Calendar className="w-3 h-3" />
                          {cert.date}
                        </div>
                      </motion.div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(34, 211, 238, 0.15)' }}
                            className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted-foreground border border-white/10 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 cursor-default relative z-10"
                          >
                            {skill}
                          </motion.span>
                        ))}
                        {cert.skills.length > 3 && (
                          <motion.span 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.15 }}
                            whileHover={{ scale: 1.08 }}
                            className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted-foreground border border-white/10 relative z-10"
                          >
                            +{cert.skills.length - 3}
                          </motion.span>
                        )}
                      </div>

                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Continuous Learner</h2>
              <p className="text-muted-foreground">
                I&apos;m committed to continuous learning and staying updated with the latest
                technologies. Currently pursuing additional certifications in cloud architecture
                and advanced AI topics.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
