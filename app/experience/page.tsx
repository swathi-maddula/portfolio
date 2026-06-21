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

const experiences = [
  {
    type: 'internship',
    title: 'Software Development Intern',
    company: 'Tech Innovations Inc.',
    location: 'Remote',
    duration: 'May 2024 - July 2024',
    description: 'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to implement new features and optimize performance.',
    achievements: [
      'Built 3 new features for the main product',
      'Improved application performance by 25%',
      'Participated in code reviews and Agile ceremonies',
      'Gained experience with CI/CD pipelines',
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    status: 'completed',
  },
  {
    type: 'internship',
    title: 'Data Science Intern',
    company: 'Analytics Pro',
    location: 'Hyderabad, India',
    duration: 'Jan 2024 - Apr 2024',
    description: 'Worked on data analysis projects, building predictive models and creating insightful visualizations for business stakeholders.',
    achievements: [
      'Developed 2 ML models for customer segmentation',
      'Created automated reporting dashboards',
      'Processed and analyzed 100K+ data records',
      'Presented findings to senior management',
    ],
    technologies: ['Python', 'Pandas', 'Scikit-Learn', 'Power BI', 'SQL'],
    status: 'completed',
  },
  {
    type: 'research',
    title: 'Research Assistant',
    company: 'University Research Lab',
    location: 'India',
    duration: 'Aug 2023 - Dec 2023',
    description: 'Conducted research on machine learning applications in healthcare. Co-authored research papers and presented findings at academic conferences.',
    achievements: [
      'Co-authored 2 research papers',
      'Developed novel ML pipeline for medical imaging',
      'Presented research at 2 conferences',
      'Achieved 92% accuracy on prediction tasks',
    ],
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'NLP', 'Deep Learning'],
    status: 'completed',
  },
  {
    type: 'hackathon',
    title: 'Hackathon Winner - Smart India Hackathon',
    company: 'Ministry of Education',
    location: 'India',
    duration: 'Dec 2023',
    description: 'Led a team of 4 to develop an AI-powered solution for educational challenges. Won first place among 100+ participating teams.',
    achievements: [
      'Led team of 4 developers',
      'Built solution in 36 hours',
      'Won first place nationally',
      'Solution selected for implementation',
    ],
    technologies: ['React', 'Python', 'OpenAI API', 'MongoDB'],
    status: 'completed',
  },
];

const timelineEvents = [
  { year: '2024', events: ['Software Dev Intern', 'Data Science Intern', 'Hackathon Winner'] },
  { year: '2023', events: ['Research Assistant', 'Started B.Tech Final Year', '5 Certifications'] },
  { year: '2022', events: ['Major Projects', 'Online Courses', 'Open Source Contributions'] },
  { year: '2021', events: ['Started B.Tech', 'Learned Programming', 'First Projects'] },
];

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const typeIcons = {
    internship: Briefcase,
    research: GraduationCap,
    hackathon: Rocket,
    freelance: Users,
  };
  const Icon = typeIcons[experience.type as keyof typeof typeIcons] || Briefcase;

  const typeColors = {
    internship: 'from-cyan-500 to-blue-600',
    research: 'from-purple-500 to-pink-600',
    hackathon: 'from-orange-500 to-red-500',
    freelance: 'from-green-500 to-emerald-600',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass-card p-6 md:p-8 ml-8 md:ml-0"
    >
      <div className="flex items-start gap-4">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${typeColors[experience.type as keyof typeof typeColors] || 'from-cyan-500 to-blue-600'} flex items-center justify-center shrink-0`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <div>
              <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building className="w-4 h-4" />
                <span>{experience.company}</span>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              experience.status === 'current'
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
            }`}>
              {experience.status === 'current' ? 'Current' : 'Completed'}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {experience.duration}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {experience.location}
            </div>
          </div>

          <p className="text-muted-foreground mb-4">{experience.description}</p>

          <div className="mb-4">
            <h4 className="text-sm font-medium text-white mb-2">Key Achievements</h4>
            <ul className="space-y-1">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted-foreground border border-white/10"
              >
                {tech}
              </span>
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
                <div key={experience.title} className="relative">
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
