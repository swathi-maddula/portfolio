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
    skills: ['Python', 'SQL', 'Basic Java'],
  },
  {
    title: 'Web Technologies',
    icon: Monitor,
    color: 'from-purple-500 to-pink-600',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Flask'],
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'from-pink-500 to-orange-500',
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    title: 'Developer Tools',
    icon: Brain,
    color: 'from-green-500 to-emerald-600',
    skills: ['Git', 'GitHub'],
  },
  {
    title: 'Core Concepts',
    icon: GraduationCap,
    color: 'from-blue-500 to-cyan-600',
    skills: ['Object-Oriented Programming', 'Data Structures & Algorithms'],
  },
];

const education = [
  {
    degree: 'B.Tech in Computer Science and Data Science',
    institution: 'Swarnandhra College of Engineering and Technology, Narsapur',
    duration: '2023 - 2027',
    location: 'Andhra Pradesh, India',
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
  { value: '100', label: 'LeetCode Problems Solved' },
  { value: '1+', label: 'Hackathons Participated' },
];

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
            className="text-center mb-20"
          >
            <h1 className="mt-2 text-4xl md:text-5xl font-bold mb-3 leading-tight">
              <span className="text-gradient">Maddula Swathi Ganga Mani Ratnam</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-3">
              Software Developer | Data Science Student | AI/ML Enthusiast
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Andhra Pradesh, India</span>
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
                I am a final-year B.Tech Computer Science (Data Science) student passionate about Artificial Intelligence, Machine Learning, Data Analytics, and Software Development.
              </p>
              <p>
                I have hands-on experience in building machine learning models, analyzing datasets, and developing full-stack applications through academic projects and internships. My experience as a Chegg Subject Matter Expert in Statistics & Probability strengthened my analytical and problem-solving abilities.
              </p>
              <p>
                I am actively seeking opportunities in Data Science, AI/ML, and Software Development where I can apply my technical skills, learn from industry professionals, and contribute to impactful solutions.
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
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 rounded-full text-sm border border-white/10 bg-white/5 text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
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
