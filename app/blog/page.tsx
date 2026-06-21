'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  Tag,
  ArrowRight,
  Search,
  Filter,
  Brain,
  Database,
  Code,
  TrendingUp,
  BookOpen,
} from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Machine Learning: A Beginner\'s Guide',
    excerpt: 'Learn the fundamentals of machine learning, from understanding algorithms to building your first model. A comprehensive guide for beginners.',
    category: 'AI & Machine Learning',
    date: 'June 15, 2024',
    readTime: '8 min',
    tags: ['Machine Learning', 'Python', 'Beginner'],
    featured: true,
    image: 'https://images.pexels.com/photo/8389443/pexels-photo-8389443.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Deep Dive into Neural Networks: Understanding the Architecture',
    excerpt: 'Explore the architecture of neural networks, from perceptrons to deep learning models. Understand layers, activations, and backpropagation.',
    category: 'AI & Machine Learning',
    date: 'May 28, 2024',
    readTime: '12 min',
    tags: ['Deep Learning', 'Neural Networks', 'AI'],
    featured: true,
  },
  {
    id: 3,
    title: 'Data Science Best Practices: From Collection to Visualization',
    excerpt: 'Master the data science workflow with best practices for data collection, cleaning, analysis, and visualization using Python.',
    category: 'Data Science',
    date: 'May 10, 2024',
    readTime: '10 min',
    tags: ['Data Science', 'Pandas', 'Visualization'],
  },
  {
    id: 4,
    title: 'Building APIs with FastAPI: A Modern Approach',
    excerpt: 'Learn how to build fast, modern APIs using FastAPI. From setup to deployment, this guide covers everything you need.',
    category: 'Software Development',
    date: 'April 22, 2024',
    readTime: '7 min',
    tags: ['Python', 'FastAPI', 'REST API'],
  },
  {
    id: 5,
    title: 'NLP Fundamentals: Processing Text Data for ML',
    excerpt: 'Understand the fundamentals of Natural Language Processing. Learn tokenization, embeddings, and text preprocessing techniques.',
    category: 'AI & Machine Learning',
    date: 'April 5, 2024',
    readTime: '9 min',
    tags: ['NLP', 'Machine Learning', 'Text Processing'],
  },
  {
    id: 6,
    title: 'Career Transition: From Student to Tech Professional',
    excerpt: 'Tips and strategies for transitioning from a university student to a professional in the tech industry. Resume tips, interview prep, and more.',
    category: 'Career Growth',
    date: 'March 20, 2024',
    readTime: '6 min',
    tags: ['Career', 'Job Search', 'Tips'],
    featured: true,
  },
  {
    id: 7,
    title: 'SQL for Data Analysis: Beyond the Basics',
    excerpt: 'Take your SQL skills to the next level with advanced queries, window functions, and optimization techniques for data analysis.',
    category: 'Data Science',
    date: 'March 8, 2024',
    readTime: '8 min',
    tags: ['SQL', 'Data Analysis', 'Database'],
  },
  {
    id: 8,
    title: 'React Performance Optimization: Tips and Tricks',
    excerpt: 'Learn how to optimize your React applications for better performance. Covering memoization, lazy loading, and code splitting.',
    category: 'Software Development',
    date: 'February 25, 2024',
    readTime: '7 min',
    tags: ['React', 'JavaScript', 'Performance'],
  },
  {
    id: 9,
    title: 'Computer Vision: Building Image Classification Models',
    excerpt: 'Build your first image classification model using CNNs. Learn about convolution layers, pooling, and data augmentation.',
    category: 'AI & Machine Learning',
    date: 'February 12, 2024',
    readTime: '11 min',
    tags: ['Computer Vision', 'CNN', 'Deep Learning'],
  },
];

const categories = [
  { name: 'All', icon: BookOpen, count: blogPosts.length },
  { name: 'AI & Machine Learning', icon: Brain, count: blogPosts.filter(p => p.category === 'AI & Machine Learning').length },
  { name: 'Data Science', icon: Database, count: blogPosts.filter(p => p.category === 'Data Science').length },
  { name: 'Software Development', icon: Code, count: blogPosts.filter(p => p.category === 'Software Development').length },
  { name: 'Career Growth', icon: TrendingUp, count: blogPosts.filter(p => p.category === 'Career Growth').length },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

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
              <span className="text-gradient"> Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and insights on software development, data science, and AI/ML.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Featured Posts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.slice(0, 3).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -12, scale: 1.02, boxShadow: '0 20px 40px rgba(34, 211, 238, 0.15)' }}
                  className="group glass-card overflow-hidden cursor-pointer"
                >
                  <div className="h-40 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 relative group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 grid-pattern opacity-30" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute bottom-4 left-4">
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 rounded-full text-xs bg-cyan-500/20 text-cyan-400 backdrop-blur-sm border border-cyan-500/30"
                      >
                        {post.category}
                      </motion.span>
                    </div>
                  </div>
                  <div className="p-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 relative z-10">
                      <div className="flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2 line-clamp-2 relative z-10">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 relative z-10">{post.excerpt}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 mb-8"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl glass bg-transparent text-white placeholder-muted-foreground border border-white/10 focus:border-cyan-500/50 focus:outline-none transition-colors"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'glass text-muted-foreground hover:text-white border border-white/10 hover:border-cyan-500/30'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="text-xs opacity-70">({category.count})</span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -10, scale: 1.02, boxShadow: '0 20px 40px rgba(34, 211, 238, 0.15)' }}
                  className="group glass-card p-6 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="flex items-center gap-2 mb-3">
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="px-2 py-1 rounded-md text-xs bg-white/5 text-muted-foreground border border-white/10 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all"
                    >
                      {post.category}
                    </motion.span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-2 py-1 text-xs rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/40 transition-all cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ x: 8, scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-cyan-400 hover:text-white transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-xl text-muted-foreground">No articles found</p>
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
