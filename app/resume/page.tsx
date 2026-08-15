'use client';

import { motion } from 'framer-motion';
import {
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Code,
  Brain,
  Database,
  GraduationCap,
  Briefcase,
  Award,
  Calendar,
  FileText,
} from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const personalInfo = {
  name: 'Maddula Swathi Ganga Mani Ratnam',
  title: 'Software Developer | Data Science Student | AI/ML Enthusiast  ',
  email: 'swathimaddula95@gmail.com',
  location: 'Andhra Pradesh, India',
  linkedin: 'https://www.linkedin.com/in/swathi-maddula',
  github: 'https://github.com/swathimaddula',
};

const education = [
  {
    degree: 'B.Tech in Computer Science and Data Science',
    institution: 'Swarnandhra College of Engineering and Technology, Narsapur',
    duration: '2023 - 2027',
    location: 'Andhra Pradesh, India',
    gpa: '8.5 CGPA',
    highlights: ['Data Structures & Algorithms', 'Machine Learning', 'Artificial Intelligence', 'Database Management Systems'],
  },
];

const experience = [
  {
    title: 'Subject Matter Expert - Statistics & Probability',
    company: 'Chegg India',
    duration: '2025 - 2026',
    highlights: [
      'Solved 100+ university-level Statistics and Probability problems for global learners.',
      'Applied Bayesian Inference, Hypothesis Testing, Regression Analysis, and Probability Distributions.',
      'Maintained high-quality analytical solutions while meeting strict deadlines.',
    ],
  },
  {
    title: 'MERN Stack Intern',
    company: 'Smart Bridge',
    duration: '6 months',
    highlights: [
      'Completed hands-on training in MongoDB, Express.js, React.js, and Node.js.',
      'Developed full-stack web applications using modern JavaScript technologies.',
      'Worked with REST APIs, frontend development, and database integration.',
    ],
  },
];

const skills = {
  'Programming Languages': ['Python', 'SQL', 'Basic Java'],
  'Web Technologies': ['HTML5', 'CSS3', 'JavaScript', 'Flask'],
  'Databases': ['PostgreSQL', 'MySQL'],
  'Developer Tools': ['Git', 'GitHub'],
  'Core Concepts': ['Object-Oriented Programming', 'Data Structures & Algorithms'],
};

const projects = [
  {
    name: 'Student Performance Prediction System',
    tech: 'Python, Scikit-Learn, Pandas',
    highlights: 'ML-powered system with 94% prediction accuracy for student outcomes.',
  },
  {
    name: 'Sales Data Analytics Dashboard',
    tech: 'Power BI, Python, SQL',
    highlights: 'Business intelligence dashboard with real-time KPI tracking.',
  },
  {
    name: 'AI Career Copilot',
    tech: 'NLP, OpenAI, Python',
    highlights: 'AI-powered career guidance with personalized recommendations.',
  },
];

const certifications = [
  'MERN Stack Internship - Smart Bridge (2026)',
  'TATA GenAI Powered Data Analytics - Tata Group (2026)',
  'ServiceNow Virtual Internship - ServiceNow (2026)',
];

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">My</span>
              <span className="text-gradient"> Resume</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              A comprehensive overview of my professional experience, skills, and qualifications.
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8">
              Includes core strengths in Python, AI/ML, data analytics, and modern web development with React, Next.js, Node.js, and SQL.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/Swathi_Maddula_Resume.pdf"
                download="Swathi_Maddula_Resume.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-medium text-white flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-xl font-medium glass text-white flex items-center gap-2 border border-white/10"
              >
                <ExternalLink className="w-5 h-5" />
                View on LinkedIn
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-8"
          >
            <div className="border-b border-white/10 pb-6 mb-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-1">{personalInfo.name}</h2>
                  <p className="text-lg text-muted-foreground">{personalInfo.title}</p>
                </div>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-cyan-400" />
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <section className="mb-8">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                <Briefcase className="w-5 h-5 text-cyan-400" />
                Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    className="pl-4 border-l-2 border-cyan-500/30"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-base font-medium text-white">{exp.title}</h4>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-sm text-cyan-400 mb-2">{exp.company}</p>
                    <ul className="space-y-1">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-cyan-400 mt-2 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                Education
              </h3>
              {education.map((edu) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="pl-4 border-l-2 border-purple-500/30"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-base font-medium text-white">{edu.degree}</h4>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-sm text-purple-400 mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">GPA: {edu.gpa}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((course) => (
                      <span
                        key={course}
                        className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted-foreground border border-white/10"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </section>

            <section className="mb-8">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                <Code className="w-5 h-5 text-cyan-400" />
                Technical Skills
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  >
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs rounded-md bg-gradient-to-r from-cyan-500/10 to-blue-600/10 text-white border border-cyan-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                <FileText className="w-5 h-5 text-cyan-400" />
                Projects
              </h3>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="pl-4 border-l-2 border-pink-500/30"
                  >
                    <h4 className="text-base font-medium text-white">{project.name}</h4>
                    <p className="text-xs text-pink-400 mb-1">{project.tech}</p>
                    <p className="text-sm text-muted-foreground">{project.highlights}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                <Award className="w-5 h-5 text-cyan-400" />
                Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg glass"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                    <span className="text-sm text-muted-foreground">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
