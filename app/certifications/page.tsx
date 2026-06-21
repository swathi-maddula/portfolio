'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Brain,
  Database,
  Cloud,
  Code,
  Monitor,
  Calendar,
  ExternalLink,
  Shield,
  Star,
  Filter,
} from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const certifications = [
  {
    id: 1,
    title: 'Machine Learning Specialization',
    issuer: 'Coursera - Stanford University',
    category: 'AI & Machine Learning',
    date: 'March 2024',
    credential: 'ABC123XYZ',
    icon: Brain,
    color: 'from-pink-500 to-orange-500',
    description: 'Comprehensive ML course covering supervised/unsupervised learning, neural networks, and best practices.',
    skills: ['Machine Learning', 'Neural Networks', 'Deep Learning', 'Python'],
    verifyUrl: '#',
  },
  {
    id: 2,
    title: 'Data Science Professional Certificate',
    issuer: 'IBM - Coursera',
    category: 'Data Science',
    date: 'January 2024',
    credential: 'DS2024IBM',
    icon: Database,
    color: 'from-purple-500 to-pink-600',
    description: 'Professional certification covering data analysis, visualization, and machine learning techniques.',
    skills: ['Data Analysis', 'Python', 'SQL', 'Data Visualization'],
    verifyUrl: '#',
  },
  {
    id: 3,
    title: 'Deep Learning Specialization',
    issuer: 'Coursera - DeepLearning.AI',
    category: 'AI & Machine Learning',
    date: 'November 2023',
    credential: 'DL2023AI',
    icon: Brain,
    color: 'from-cyan-500 to-blue-600',
    description: 'Advanced deep learning concepts including CNNs, RNNs, and sequence models.',
    skills: ['Deep Learning', 'CNN', 'RNN', 'TensorFlow'],
    verifyUrl: '#',
  },
  {
    id: 4,
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    category: 'Cloud Computing',
    date: 'September 2023',
    credential: 'AWS-CP-2023',
    icon: Cloud,
    color: 'from-orange-500 to-amber-500',
    description: 'Fundamental AWS cloud concepts including compute, storage, and networking.',
    skills: ['AWS', 'Cloud Computing', 'EC2', 'S3', 'Lambda'],
    verifyUrl: '#',
  },
  {
    id: 5,
    title: 'Python for Data Science',
    issuer: 'DataCamp',
    category: 'Data Science',
    date: 'July 2023',
    credential: 'PY2023DC',
    icon: Code,
    color: 'from-green-500 to-emerald-600',
    description: 'Comprehensive Python programming for data science applications.',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    verifyUrl: '#',
  },
  {
    id: 6,
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    category: 'AI & Machine Learning',
    date: 'May 2023',
    credential: 'TF2023GOOGLE',
    icon: Brain,
    color: 'from-yellow-500 to-orange-500',
    description: 'TensorFlow proficiency for building and deploying ML models.',
    skills: ['TensorFlow', 'Keras', 'Neural Networks', 'Model Deployment'],
    verifyUrl: '#',
  },
  {
    id: 7,
    title: 'SQL for Data Analysis',
    issuer: 'Udemy',
    category: 'Data Science',
    date: 'April 2023',
    credential: 'SQL2023UD',
    icon: Database,
    color: 'from-blue-500 to-cyan-500',
    description: 'Advanced SQL techniques for data extraction and analysis.',
    skills: ['SQL', 'PostgreSQL', 'Query Optimization', 'Data Analysis'],
    verifyUrl: '#',
  },
  {
    id: 8,
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    category: 'Programming',
    date: 'February 2023',
    credential: 'REACT2023UD',
    icon: Monitor,
    color: 'from-cyan-400 to-blue-500',
    description: 'Complete React development including hooks, Redux, and Next.js.',
    skills: ['React', 'Redux', 'Hooks', 'Next.js'],
    verifyUrl: '#',
  },
  {
    id: 9,
    title: 'Natural Language Processing Specialization',
    issuer: 'Coursera - DeepLearning.AI',
    category: 'AI & Machine Learning',
    date: 'December 2023',
    credential: 'NLP2023AI',
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    description: 'NLP techniques including attention models, transformers, and text processing.',
    skills: ['NLP', 'Transformers', 'BERT', 'Text Classification'],
    verifyUrl: '#',
  },
];

const categories = [
  { name: 'All', icon: Award },
  { name: 'AI & Machine Learning', icon: Brain },
  { name: 'Data Science', icon: Database },
  { name: 'Cloud Computing', icon: Cloud },
  { name: 'Programming', icon: Code },
];

export default function CertificationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredCerts = certifications.filter(
    (cert) => selectedCategory === 'All' || cert.category === selectedCategory
  );

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                    : 'glass text-muted-foreground hover:text-white border border-white/10 hover:border-cyan-500/30'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </motion.div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredCerts.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onHoverStart={() => setHoveredId(cert.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  whileHover={{ y: -12, scale: 1.02, boxShadow: '0 20px 40px rgba(34, 211, 238, 0.15)' }}
                  className="group relative"
                >
                  <div className="glass-card overflow-hidden h-full flex flex-col">
                    <div className={`h-32 bg-gradient-to-br ${cert.color} p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                      <div className="absolute inset-0 opacity-20 grid-pattern" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      <div className="relative z-10 flex items-start justify-between">
                        <motion.div
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                          className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:shadow-lg group-hover:shadow-white/20"
                        >
                          <cert.icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <div className="flex items-center gap-1 group-hover:scale-110 transition-transform">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ rotate: 0 }}
                              whileHover={{ rotate: 180, scale: 1.2 }}
                            >
                              <Star key={i} className="w-3 h-3 text-yellow-300 fill-yellow-300" />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl group-hover:scale-150 transition-transform duration-500" />
                    </div>

                    <div className="p-6 flex-1 flex flex-col relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="flex items-center gap-2 mb-2 relative z-10">
                        <Shield className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs text-muted-foreground">{cert.category}</span>
                      </div>

                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2 relative z-10">
                        {cert.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-3 relative z-10">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground mb-4 flex-1 relative z-10">{cert.description}</p>

                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 relative z-10">
                        <div className="flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                          <Calendar className="w-3 h-3" />
                          {cert.date}
                        </div>
                        <div className="text-cyan-400">ID: {cert.credential}</div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted-foreground border border-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted-foreground border border-white/10">
                            +{cert.skills.length - 3}
                          </span>
                        )}
                      </div>

                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredId === cert.id ? 1 : 0 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-2 rounded-lg glass text-sm text-cyan-400 flex items-center justify-center gap-2 border border-cyan-500/20"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Verify Credential
                      </motion.button>
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
