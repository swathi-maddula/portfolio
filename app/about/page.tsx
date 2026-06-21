'use client';

import { motion } from 'framer-motion';
import {
  GraduationCap,
  Brain,
  Code,
  Database,
  Monitor,
  Award,
  BookOpen,
  Calendar,
  MapPin,
} from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'from-cyan-500 to-blue-600',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Java', level: 85 },
      { name: 'C++', level: 75 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
    ],
  },
  {
    title: 'Data Science',
    icon: Database,
    color: 'from-purple-500 to-pink-600',
    skills: [
      { name: 'Pandas', level: 92 },
      { name: 'NumPy', level: 90 },
      { name: 'Matplotlib', level: 88 },
      { name: 'Seaborn', level: 85 },
      { name: 'Power BI', level: 82 },
      { name: 'SQL', level: 88 },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-pink-500 to-orange-500',
    skills: [
      { name: 'Scikit-Learn', level: 90 },
      { name: 'TensorFlow', level: 85 },
      { name: 'PyTorch', level: 80 },
      { name: 'NLP', level: 82 },
      { name: 'Deep Learning', level: 85 },
      { name: 'Computer Vision', level: 78 },
    ],
  },
  {
    title: 'Development',
    icon: Monitor,
    color: 'from-green-500 to-emerald-600',
    skills: [
      { name: 'React', level: 88 },
      { name: 'Next.js', level: 85 },
      { name: 'Node.js', level: 82 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'REST APIs', level: 88 },
    ],
  },
];

const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'University of Technology',
    duration: '2021 - 2025',
    location: 'India',
    status: 'Final Year',
    gpa: '8.5 CGPA',
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Machine Learning',
      'Artificial Intelligence',
      'Computer Networks',
      'Software Engineering',
    ],
  },
];

const achievements = [
  { value: '500+', label: 'LeetCode Problems Solved' },
  { value: '10+', label: 'Open Source Contributions' },
  { value: '5', label: 'Hackathons Participated' },
  { value: '3', label: 'Research Papers' },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ x: 5 }}
      className="mb-4 group cursor-pointer"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-muted-foreground group-hover:text-white transition-colors duration-300">{name}</span>
        <motion.span
          whileHover={{ scale: 1.2 }}
          className="text-xs text-cyan-400 group-hover:text-white transition-colors duration-300"
        >{level}%</motion.span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden group-hover:h-3 transition-all duration-300">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          whileHover={{ boxShadow: '0 0 15px rgba(34, 211, 238, 0.5)' }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300"
        />
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: 'spring', bounce: 0.5 }}
              className="w-32 h-32 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 p-1"
            >
              <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                <span className="text-5xl font-bold text-gradient">SM</span>
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Maddula Swathi</span>
              <span className="text-gradient"> Ganga Mani Ratnam</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Software Developer | Data Scientist | AI/ML Engineer
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>India</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">About Me</h2>
            <div className="text-muted-foreground space-y-4 leading-relaxed">
              <p>
                I am a passionate B.Tech Final Year student with a strong interest in Software Development,
                Artificial Intelligence, Machine Learning, and Data Science. I enjoy solving real-world
                problems through technology and building intelligent systems that create meaningful impact.
              </p>
              <p>
                My expertise includes full-stack development, data analytics, machine learning model
                development, and AI-powered applications. I continuously learn emerging technologies and
                strive to create innovative solutions that bridge the gap between data and decision-making.
              </p>
              <p>
                I am currently seeking internship and full-time opportunities where I can contribute my
                skills and grow as a professional in the tech industry.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 text-center"
              >
                <span className="text-3xl md:text-4xl font-bold text-gradient">
                  {achievement.value}
                </span>
                <p className="text-sm text-muted-foreground mt-2">{achievement.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              <span className="text-white">Technical</span>
              <span className="text-gradient"> Skills</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                    >
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={skillIndex * 0.05}
                    />
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              <span className="text-white">Education</span>
            </h2>

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.01, boxShadow: '0 20px 40px rgba(34, 211, 238, 0.1)' }}
                className="glass-card p-6 md:p-8 group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow"
                  >
                    <GraduationCap className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">{edu.degree}</h3>
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                      >
                        {edu.status}
                      </motion.span>
                    </div>
                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                        <Calendar className="w-4 h-4" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-1 group-hover:text-yellow-400 transition-colors">
                        <Award className="w-4 h-4" />
                        {edu.gpa}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Key Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 text-xs rounded-lg bg-white/5 text-muted-foreground border border-white/10"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
