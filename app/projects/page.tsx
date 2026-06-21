'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Database,
  Sparkles,
  BarChart3,
  Globe,
  Server,
  Eye,
  Github,
  ExternalLink,
  Filter,
  Code,
  Layers,
  Search,
} from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const allProjects = [
  {
    id: 'student-performance-prediction-system',
    title: 'Student Performance Prediction System',
    description: 'Advanced machine learning system that predicts student academic performance using historical data. Features comprehensive data preprocessing pipelines, multiple ML algorithms comparison, and an interactive dashboard for visualizing predictions and accuracy metrics.',
    longDescription: 'Built a complete end-to-end machine learning pipeline for predicting student academic outcomes. The system processes academic history, attendance records, and demographic data to forecast performance metrics. Implemented ensemble methods combining Random Forest, Gradient Boosting, and Neural Networks for improved accuracy.',
    tags: ['Python', 'Scikit-Learn', 'Pandas', 'Machine Learning', 'Data Preprocessing'],
    category: 'AI/ML',
    gradient: 'from-cyan-500 to-blue-600',
    icon: Brain,
    features: [
      'Multi-algorithm prediction comparison',
      'Data preprocessing and feature engineering',
      'Interactive prediction dashboard',
      'Accuracy metrics visualization',
      'Model performance analysis',
    ],
    metrics: { accuracy: '94%', users: '500+', predictions: '10K+' },
    status: 'completed',
  },
  {
    id: 'sales-data-analytics-dashboard',
    title: 'Sales Data Analytics Dashboard',
    description: 'Comprehensive business intelligence dashboard providing real-time insights into sales performance, revenue analytics, KPI tracking, and trend forecasting with interactive visualizations.',
    longDescription: 'Developed a full-featured analytics platform that transforms raw sales data into actionable business insights. Integrated multiple data sources and created automated reporting pipelines for real-time KPI monitoring and predictive analytics.',
    tags: ['Power BI', 'Python', 'SQL', 'Data Analytics', 'Visualization'],
    category: 'Data Science',
    gradient: 'from-purple-500 to-pink-600',
    icon: Database,
    features: [
      'Real-time revenue tracking',
      'Interactive KPI dashboards',
      'Trend forecasting',
      'Custom report generation',
      'Multi-source data integration',
    ],
    metrics: { reports: '50+', insights: '1000+', accuracy: '95%' },
    status: 'completed',
  },
  {
    id: 'ai-career-copilot',
    title: 'AI Career Copilot',
    description: 'Intelligent career guidance system powered by NLP and machine learning. Provides resume analysis, skill gap identification, and personalized career roadmap recommendations.',
    longDescription: 'Created an AI-powered career assistant that analyzes user profiles, identifies skill gaps, and provides tailored career development paths. Uses NLP for resume parsing and ML for personalized recommendations based on market trends.',
    tags: ['Python', 'NLP', 'OpenAI', 'Machine Learning', 'FastAPI'],
    category: 'AI/ML',
    gradient: 'from-pink-500 to-orange-500',
    icon: Sparkles,
    features: [
      'AI-powered resume analysis',
      'Skill gap identification',
      'Personalized career roadmaps',
      'Market trend analysis',
      'Learning recommendations',
    ],
    metrics: { users: '1000+', accuracy: '92%', roadmaps: '500+' },
    status: 'completed',
  },
  {
    id: 'weather-forecasting-model',
    title: 'Weather Forecasting Model',
    description: 'Time-series forecasting model for weather prediction using advanced deep learning techniques with data from multiple meteorological sources.',
    longDescription: 'Developed a sophisticated weather prediction system using LSTM neural networks for time-series forecasting. Integrated multiple weather APIs and historical data to improve prediction accuracy.',
    tags: ['Python', 'TensorFlow', 'LSTM', 'Time Series', 'Deep Learning'],
    category: 'AI/ML',
    gradient: 'from-blue-500 to-cyan-500',
    icon: Layers,
    features: [
      'Multi-day forecasting',
      'Historical data analysis',
      'Model accuracy tracking',
      'Weather visualization',
      'API integration',
    ],
    metrics: { accuracy: '89%', locations: '50+', forecasts: '1000+' },
    status: 'completed',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with product management, shopping cart, user authentication, payment integration, and admin dashboard.',
    longDescription: 'Built a complete e-commerce platform from scratch with modern technologies. Features include real-time inventory management, secure payment processing, and comprehensive admin analytics.',
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    category: 'Development',
    gradient: 'from-green-500 to-emerald-600',
    icon: Globe,
    features: [
      'Product catalog management',
      'Shopping cart functionality',
      'Secure checkout process',
      'Admin analytics dashboard',
      'User authentication',
    ],
    metrics: { products: '1000+', orders: '500+', users: '200+' },
    status: 'completed',
  },
  {
    id: 'real-time-chat-application',
    title: 'Real-time Chat Application',
    description: 'Scalable real-time messaging platform with WebSocket integration, user presence indicators, and message history.',
    longDescription: 'Developed a real-time chat application supporting private and group messaging. Implemented WebSocket for instant communication and Redis for message caching.',
    tags: ['React', 'Socket.io', 'Node.js', 'Redis', 'MongoDB'],
    category: 'Development',
    gradient: 'from-orange-500 to-red-500',
    icon: Server,
    features: [
      'Real-time messaging',
      'Group chat support',
      'Message history',
      'User presence indicators',
      'File sharing',
    ],
    metrics: { messages: '10K+', users: '100+', latency: '<50ms' },
    status: 'completed',
  },
  {
    id: 'sentiment-analysis-tool',
    title: 'Sentiment Analysis Tool',
    description: 'NLP-powered sentiment analysis application for social media and customer feedback with real-time visualization.',
    longDescription: 'Built a sentiment analysis tool that processes text data from social media and customer feedback. Uses transformer models for accurate sentiment classification with confidence scores.',
    tags: ['Python', 'NLP', 'Transformers', 'Streamlit', 'Plotly'],
    category: 'AI/ML',
    gradient: 'from-violet-500 to-purple-600',
    icon: BarChart3,
    features: [
      'Multi-language support',
      'Real-time analysis',
      'Sentiment visualization',
      'Batch processing',
      'API endpoints',
    ],
    metrics: { accuracy: '91%', processed: '50K+', languages: '10+' },
    status: 'completed',
  },
];

const categories = ['All', 'AI/ML', 'Data Science', 'Development'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
              A collection of projects showcasing my expertise in software development,
              data science, and AI/ML engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col md:flex-row gap-4 mb-12"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl glass bg-transparent text-white placeholder-muted-foreground border border-white/10 focus:border-cyan-500/50 focus:outline-none transition-colors"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'glass text-muted-foreground hover:text-white border border-white/10 hover:border-cyan-500/30'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    {category}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group glass-card overflow-hidden cursor-pointer"
                >
                  <div
                    className={`h-48 bg-gradient-to-br ${project.gradient} p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}
                  >
                    <div className="absolute inset-0 opacity-20 grid-pattern" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-white/20"
                      >
                        <project.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <span className="px-3 py-1 rounded-full text-xs bg-white/20 backdrop-blur-sm text-white">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl group-hover:scale-150 transition-transform duration-500" />
                  </div>

                  <div className="p-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.1 }}
                          className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted-foreground border border-white/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all cursor-default"
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted-foreground border border-white/10">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center group-hover:scale-105 transition-transform">
                          <p className="text-sm font-semibold text-white">{value}</p>
                          <p className="text-xs text-muted-foreground capitalize">{key}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Link href={`/projects#${project.id}`} className="flex-1">
                        <motion.button
                          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(34, 211, 238, 0.3)' }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm bg-gradient-to-r from-cyan-500/10 to-blue-600/10 text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                        >
                          <Eye className="w-4 h-4" />
                          View
                        </motion.button>
                      </Link>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm glass text-muted-foreground hover:text-white hover:border-white/30 transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm glass text-muted-foreground hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Code className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-xl text-muted-foreground">No projects found</p>
              <p className="text-sm text-muted-foreground mt-2">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
