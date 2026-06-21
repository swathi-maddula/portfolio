'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Download,
  Eye,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Sparkles,
  Brain,
  Code,
  Database,
  Award,
  Folder,
  Zap,
  ChevronRight,
  Star,
} from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const typingTexts = [
  'Software Developer',
  'Data Scientist',
  'AI/ML Engineer',
];

const stats = [
  { value: 25, suffix: '+', label: 'Projects Completed', icon: Folder },
  { value: 15, suffix: '+', label: 'Technologies Mastered', icon: Code },
  { value: 10, suffix: '+', label: 'AI/ML Models Built', icon: Brain },
  { value: 8, suffix: '+', label: 'Certifications Earned', icon: Award },
];

const featuredProjects = [
  {
    title: 'Student Performance Prediction System',
    description: 'ML-powered system that predicts student academic performance using data preprocessing pipelines and interactive dashboards.',
    tags: ['Python', 'Scikit-Learn', 'Machine Learning'],
    gradient: 'from-cyan-500 to-blue-600',
    icon: Brain,
  },
  {
    title: 'Sales Data Analytics Dashboard',
    description: 'Interactive business intelligence dashboard with revenue analytics, KPI tracking, and trend forecasting capabilities.',
    tags: ['Power BI', 'Python', 'SQL'],
    gradient: 'from-purple-500 to-pink-600',
    icon: Database,
  },
  {
    title: 'AI Career Copilot',
    description: 'AI-powered career guidance assistant with resume analysis, skill gap identification, and personalized recommendations.',
    tags: ['NLP', 'OpenAI', 'Python'],
    gradient: 'from-pink-500 to-orange-500',
    icon: Sparkles,
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {count}
      {suffix}
    </span>
  );
}

function TypewriterText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = typingTexts[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < text.length) {
            setDisplayText(text.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(text.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % typingTexts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <span className="text-gradient">
      {displayText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
}

function FloatingShape({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.2, scale: 1 }}
      transition={{ duration: 1, delay }}
      className={className}
    />
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 211, 238, 0.15) 0%, transparent 50%)`,
          }}
        />

        <div className="absolute inset-0 grid-pattern" />

        <FloatingShape
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent blur-3xl animate-float"
          delay={0}
        />
        <FloatingShape
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-3xl animate-float animation-delay-200"
          delay={0.2}
        />
        <FloatingShape
          className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-pink-500/20 to-transparent blur-3xl animate-float animation-delay-400"
          delay={0.4}
        />

        <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-cyan-500/30 rounded-xl rotate-12 animate-float opacity-30" />
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-purple-500/30 rounded-full animate-float animation-delay-400 opacity-30" />
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-pink-500/30 to-transparent rounded-lg rotate-45 animate-float animation-delay-600 opacity-30" />

        {/* Enhanced Background Graphics */}
        <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/10 to-transparent blur-3xl animate-pulse animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-pink-500/5 via-cyan-500/5 to-purple-500/5 blur-3xl animate-morph" />

        {/* Orbiting Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400/50 animate-orbit" style={{ transformOrigin: 'center 200px' }} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-400/50 animate-orbit" style={{ transformOrigin: 'center 250px', animationDuration: '25s', animationDirection: 'reverse' }} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-pink-400/50 animate-orbit" style={{ transformOrigin: 'center 150px', animationDuration: '15s' }} />
        </div>

        {/* Hexagon Grid */}
        <div className="absolute inset-0 hex-pattern opacity-40" />

        {/* Circuit Lines */}
        <div className="absolute inset-0 circuit-pattern opacity-30" />

        {/* Glowing Lines */}
        <div className="absolute top-1/3 left-0 right-0 h-px animate-glow-line" />
        <div className="absolute top-2/3 left-0 right-0 h-px animate-glow-line" style={{ animationDelay: '1.5s' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-muted-foreground">B.Tech Final Year Student</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="block text-white mb-2">Maddula Swathi Ganga Mani Ratnam</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground">
              <TypewriterText />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building intelligent solutions through software engineering, machine learning,
            and data-driven innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 211, 238, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-medium text-white overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.button>
            </Link>
            <Link href="/resume">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34, 211, 238, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-medium glass btn-glow flex items-center gap-2 text-white border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Download Resume
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl font-medium text-muted-foreground hover:text-white transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { href: 'https://github.com/862006-swathi', icon: Github, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/swathi-maddula', icon: Linkedin, label: 'LinkedIn' },
              { href: 'mailto:swathimaddula55@gmail.com', icon: Mail, label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-white/50 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 hex-pattern opacity-20" />
        <div className="max-w-7xl mx-auto relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            <span className="text-white">Quick</span>
            <span className="text-gradient"> Stats</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05, boxShadow: '0 20px 40px rgba(34, 211, 238, 0.15)' }}
                className="glass-card p-6 text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br ${
                    index % 4 === 0
                      ? 'from-cyan-500 to-blue-600'
                      : index % 4 === 1
                        ? 'from-purple-500 to-pink-600'
                        : index % 4 === 2
                          ? 'from-pink-500 to-orange-500'
                          : 'from-green-500 to-emerald-600'
                  } shadow-lg`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-white">Featured</span>
                <span className="text-gradient"> Projects</span>
              </h2>
              <p className="text-muted-foreground mt-2">A selection of my recent work</p>
            </div>
            <Link href="/projects">
              <motion.button
                whileHover={{ x: 5 }}
                className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                View All <ChevronRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02, boxShadow: '0 25px 50px rgba(34, 211, 238, 0.2)' }}
                className="group glass-card overflow-hidden cursor-pointer"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}
                >
                  <div className="absolute inset-0 opacity-20 grid-pattern" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
                      className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-white/30"
                    >
                      <project.icon className="w-7 h-7 text-white" />
                    </motion.div>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl group-hover:scale-200 transition-transform duration-700" />
                  <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-white/5 blur-xl group-hover:scale-150 transition-transform duration-500" />
                </div>
                <div className="p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-yellow-500 group-hover:scale-110 transition-transform">
                      <Star className="w-3 h-3 fill-yellow-500" />
                      <Star className="w-3 h-3 fill-yellow-500" />
                      <Star className="w-3 h-3 fill-yellow-500" />
                      <Star className="w-3 h-3 fill-yellow-500" />
                      <Star className="w-3 h-3 fill-yellow-500" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted-foreground border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className="flex gap-3">
                    <Link href={`/projects#${project.title.toLowerCase().replace(/\s/g, '-')}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        View Details
                      </motion.button>
                    </Link>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl glass text-white flex items-center gap-2 mx-auto"
              >
                View All Projects <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.01, boxShadow: '0 25px 50px rgba(34, 211, 238, 0.15)' }}
            className="glass-card p-8 md:p-12 text-center group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: 'spring', bounce: 0.3 }}
            >
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-6 group-hover:text-yellow-400 transition-colors duration-300" />
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
              Looking for a dedicated developer?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              I&apos;m currently seeking internship and full-time opportunities in software development,
              data science, and AI/ML engineering. Let&apos;s build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 211, 238, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-medium text-white flex items-center gap-2 group/btn relative overflow-hidden"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </motion.button>
              </Link>
              <Link href="/resume">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl font-medium glass text-white flex items-center gap-2 hover:border-cyan-500/50 transition-all duration-300"
                >
                  View Resume
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
