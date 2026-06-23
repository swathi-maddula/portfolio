'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUp, Code2, Github, Linkedin, Mail, Heart } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
];

const resourceLinks = [
  { href: '/certifications', label: 'Certifications' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://github.com/862006-swathi', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/swathi-maddula', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:swathimaddula55@gmail.com', icon: Mail, label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-background border-t border-white/5">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                <span className="text-gradient">Swathi</span>
                <span className="text-gradient">-Portfolio</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              Building intelligent solutions through software engineering, machine learning,
              and data-driven innovation. Passionate about creating impactful technology.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <span>2026 Swathi Ganga Mani Ratnam. Built with Next.js & TypeScript </span>
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
