'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://github.com/862006-swathi', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/swathi-maddula', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:swathimaddula55@gmail.com', icon: Mail, label: 'Email' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20"
              >
                <Code2 className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-lg font-bold tracking-tight group-hover:scale-105 transition-transform">
                <span className="text-gradient">Swathi</span>
                <span className="text-gradient">-Portfolio</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative group',
                    pathname === link.href
                      ? 'text-cyan-400'
                      : 'text-muted-foreground hover:text-white hover:bg-white/5'
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-cyan-500/10 rounded-lg border border-cyan-500/20 shadow-lg shadow-cyan-500/10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 rounded-full" />
                  <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 rounded-lg glass flex items-center justify-center text-white"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden pt-20"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-background/95 backdrop-blur-xl border-l border-white/10 p-6 pt-24"
            >
              <div className="space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200',
                        pathname === link.href
                          ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                          : 'text-muted-foreground hover:text-white hover:bg-white/5'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-muted-foreground mb-3 px-4">Connect</p>
                <div className="flex gap-3 px-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-cyan-400 transition-colors"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
