'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Database,
  Sparkles,
  Code,
} from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const allProjects = [
  {
    id: 'student-performance-prediction-system',
    title: 'Student Performance Prediction System',
    description: 'Machine learning system that predicts student academic performance from historical data and learning indicators.',
    longDescription: 'Built an end-to-end machine learning pipeline for predicting student academic outcomes using academic history, attendance records, and demographic data. The workflow focuses on data preprocessing, model comparison, and actionable insights for educational decision-making.',
    tags: ['Python', 'Scikit-Learn', 'Pandas', 'Machine Learning', 'Data Science'],
    category: 'AI/ML',
    gradient: 'from-cyan-500 to-blue-600',
    icon: Brain,
    features: [
      'Data preprocessing and feature engineering',
      'Model comparison and evaluation',
      'Interactive prediction insights',
      'Performance metrics visualization',
      'Outcome analysis for student support',
    ],
    metrics: { accuracy: '94%', datasets: '3+', predictions: '10K+' },
    status: 'completed',
  },
  {
    id: 'sales-data-analytics-dashboard',
    title: 'Sales Data Analytics Dashboard',
    description: 'Business intelligence dashboard that turns raw sales data into clear KPI tracking and trend insights.',
    longDescription: 'Developed a data analytics dashboard that transforms sales data into actionable business insights. The system highlights revenue trends, performance metrics, and visualization-driven decision support using the data science workflow from the About page.',
    tags: ['Power BI', 'Python', 'SQL', 'Data Analytics', 'Visualization'],
    category: 'Data Science',
    gradient: 'from-purple-500 to-pink-600',
    icon: Database,
    features: [
      'KPI and revenue tracking',
      'Interactive KPI dashboards',
      'Trend analysis and reporting',
      'Insight-focused visualization',
      'Decision support for business teams',
    ],
    metrics: { reports: '25+', insights: '1000+', accuracy: '95%' },
    status: 'completed',
  },
  {
    id: 'ai-career-copilot',
    title: 'AI Career Copilot',
    description: 'AI-powered career guidance system that analyzes profiles, identifies skill gaps, and suggests growth paths.',
    longDescription: 'Created an AI-powered assistant that analyzes profiles, identifies skill gaps, and provides tailored career development paths. The project reflects the About page focus on AI-powered applications and practical decision support.',
    tags: ['Python', 'NLP', 'Machine Learning', 'AI', 'Resume Analysis'],
    category: 'AI/ML',
    gradient: 'from-pink-500 to-orange-500',
    icon: Sparkles,
    features: [
      'AI-powered resume analysis',
      'Skill gap identification',
      'Personalized career roadmaps',
      'Career recommendation engine',
      'Learning recommendations',
    ],
    metrics: { users: '500+', accuracy: '92%', roadmaps: '200+' },
    status: 'completed',
  },
];

export default function ProjectsPage() {
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
              <span className="text-gradient"> Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that reflect my focus on data science and AI/ML engineering.
            </p>
          </motion.div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {allProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 30, scale: 0.9 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', bounce: 0.3 }}
                  whileHover={{ y: -16, scale: 1.03, boxShadow: '0 30px 60px rgba(34, 211, 238, 0.25)' }}
                  className="group glass-card overflow-hidden cursor-pointer transition-all duration-300"
                >
                  <div
                    className={`h-48 bg-gradient-to-br ${project.gradient} p-6 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-20 grid-pattern" />
                    <motion.div 
                      className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-300"
                      whileHover={{ opacity: 0.5 }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ opacity: 1 }}
                    />
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.15 }}
                        transition={{ duration: 0.4, type: 'spring' }}
                        className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 shadow-lg shadow-white/20 group-hover:shadow-2xl group-hover:shadow-white/40 transition-shadow duration-300"
                      >
                        <project.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <motion.span 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="px-3 py-1 rounded-full text-xs bg-white/20 backdrop-blur-sm text-white"
                      >
                        {project.category}
                      </motion.span>
                    </div>
                    <motion.div 
                      className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl"
                      whileHover={{ scale: 180 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  <div className="p-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.h3 
                      className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2"
                      whileHover={{ x: 4 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 group-hover:text-muted-foreground/80 transition-colors">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 + tagIndex * 0.05 }}
                          whileHover={{ scale: 1.12, backgroundColor: 'rgba(34, 211, 238, 0.15)' }}
                          className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted-foreground border border-white/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all cursor-default"
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {project.tags.length > 3 && (
                        <motion.span 
                          whileHover={{ scale: 1.08 }}
                          className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted-foreground border border-white/10"
                        >
                          +{project.tags.length - 3}
                        </motion.span>
                      )}
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {Object.entries(project.metrics).map(([key, value], metricsIndex) => (
                        <motion.div 
                          key={key} 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 + metricsIndex * 0.05 }}
                          whileHover={{ scale: 1.08, y: -4 }}
                          className="text-center transition-transform"
                        >
                          <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">{value}</p>
                          <p className="text-xs text-muted-foreground capitalize">{key}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
