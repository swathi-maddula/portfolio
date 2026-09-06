'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Code,
  Award,
  Calendar,
  MapPin,
  Building,
  ExternalLink,
  Rocket,
  Users,
} from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

type ExperienceType = 'internship' | 'research' | 'hackathon' | 'freelance';

type Experience = {
  title: string;
  type: ExperienceType;
  company: string;
  duration: string;
  location: string;
  status: 'current' | 'completed';
  description: string;
  achievements: string[];
  technologies: string[];
};

const experiences: Experience[] = [
  {
    title: 'Subject Matter Expert - Statistics & Probability',
    type: 'research',
    company: "Chegg India",
    duration: "2025 - 2026",
    location: 'Remote',
    status: 'completed',
    description:
      'Solved 100+ university-level Statistics and Probability problems for global learners while meeting strict deadlines.',
    achievements: [
      'Applied concepts including Bayesian Inference, Hypothesis Testing, Regression Analysis, and Probability Distributions.',
      'Maintained high-quality analytical solutions for global learners.',
      'Delivered consistent work under strict deadlines.'
    ],
    technologies: ['Statistics', 'Probability', 'Bayesian Inference', 'Regression Analysis']
  },
  {
    title: 'MERN Stack Intern',
    type: 'internship',
    company: "Smart Bridge",
    duration: "6months",
    location: 'Remote',
    status: 'completed',
    description:
      'Completed hands-on training in MongoDB, Express.js, React.js, and Node.js while building full-stack applications.',
    achievements: [
      'Developed full-stack web applications using modern JavaScript technologies.',
      'Worked with REST APIs, frontend development, and database integration.',
      'Gained practical experience in Git, GitHub, and collaborative development workflows.'
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs']
  }
];

const timelineEvents = [
  {
    year: '2025 - 2026',
    events: [
      'Subject Matter Expert - Statistics & Probability at Chegg India',
      'Solved 100+ university-level problems',
      'Applied Bayesian Inference, Hypothesis Testing, and Regression Analysis'
    ]
  },
  {
    year: '6 Months',
    events: [
      'MERN Stack Intern at Smart Bridge',
      'Built full-stack web applications with MongoDB, Express.js, React.js, and Node.js',
      'Worked with REST APIs, database integration, and Git/GitHub workflows'
    ]
  }
];

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const typeIcons = {
    internship: Briefcase,
    research: GraduationCap,
    hackathon: Rocket,
    freelance: Users,
  };
  const Icon = typeIcons[experience.type] || Briefcase;

  const typeColors = {
    internship: 'from-cyan-500 to-blue-600',
    research: 'from-purple-500 to-pink-600',
    hackathon: 'from-orange-500 to-red-500',
    freelance: 'from-green-500 to-emerald-600',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', bounce: 0.3 }}
      whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(34, 211, 238, 0.2)' }}
      className="glass-card p-6 md:p-8 ml-8 md:ml-0 group transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.12 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${typeColors[experience.type] || 'from-cyan-500 to-blue-600'} flex items-center justify-center shrink-0 shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <div>
              <motion.h3 
                className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ x: 4 }}
              >
                {experience.title}
              </motion.h3>
              <div className="flex items-center gap-2 text-muted-foreground group-hover:text-muted-foreground/90 transition-colors">
                <Building className="w-4 h-4" />
                <span>{experience.company}</span>
              </div>
            </div>
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              whileHover={{ scale: 1.1 }}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                experience.status === 'current'
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
              }`}
            >
              {experience.status === 'current' ? 'Current' : 'Completed'}
            </motion.span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1"
            >
              <Calendar className="w-4 h-4" />
              {experience.duration}
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1"
            >
              <MapPin className="w-4 h-4" />
              {experience.location}
            </motion.div>
          </div>

          <p className="text-muted-foreground mb-4 group-hover:text-muted-foreground/90 transition-colors">{experience.description}</p>

          <div className="mb-4">
            <h4 className="text-sm font-medium text-white mb-2">Key Achievements</h4>
            <ul className="space-y-1">
              {experience.achievements.map((achievement, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + i * 0.05 }}
                  className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-muted-foreground/90 transition-colors"
                >
                  <motion.div 
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ delay: index * 0.1 + i * 0.05 + 0.2 }}
                    className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"
                  />
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(34, 211, 238, 0.15)' }}
                className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted-foreground border border-white/10 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">My</span>
              <span className="text-gradient"> Experience</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of my professional journey, including internships, research work,
              and notable achievements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4 mb-16">
            {timelineEvents.map((year, index) => (
              <motion.div
                key={year.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="glass-card p-4 text-center"
              >
                <h3 className="text-2xl font-bold text-gradient mb-2">{year.year}</h3>
                <ul className="space-y-1">
                  {year.events.map((event, i) => (
                    <li key={i} className="text-xs text-muted-foreground">{event}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div key={`${experience.title}-${index}`} className="relative">
                  <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 -translate-x-1/2 shadow-lg shadow-cyan-500/30" />

                  <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    <div className={`${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                      <ExperienceCard experience={experience} index={index} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Looking for Opportunities</h2>
              <p className="text-muted-foreground mb-6">
                I&apos;m actively seeking internship and full-time opportunities in software development,
                data science, and AI/ML engineering. Let&apos;s connect!
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-medium text-white inline-flex items-center gap-2"
              >
                Contact Me
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
