import React, { useState, useEffect } from 'react';
import { FileDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { profileData } from '../../data/profile';
import { cn } from '../../lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ['about', 'research', 'projects', 'skills', 'experience', 'education', 'contact'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Research', href: '#research', id: 'research' },
    { name: 'Work', href: '#projects', id: 'projects' },
    { name: 'Toolkit', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-dark-400/85 backdrop-blur-md border-b border-surface-border/80 py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-accent-violet rounded-lg p-1"
          aria-label="Essa Raza Portfolio Home"
        >
          <div className="w-9 h-9 rounded-lg bg-surface-elevated border border-surface-border group-hover:border-accent-violet/60 transition-colors flex items-center justify-center font-mono font-bold text-sm text-content-primary shadow-sm relative overflow-hidden">
            <span className="relative z-10 group-hover:text-accent-violet transition-colors">ER</span>
            <div className="absolute inset-0 bg-accent-violet/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-semibold text-sm sm:text-base tracking-tight text-content-primary group-hover:text-white transition-colors">
              ESSA RAZA
            </span>
            <span className="font-mono text-[10px] text-content-muted tracking-wider uppercase hidden sm:block">
              AI & Full-Stack
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface-elevated/60 border border-surface-border/60 rounded-full px-4 py-1.5 backdrop-blur-sm" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={cn(
                  "font-mono text-xs px-3 py-1.5 rounded-full transition-all duration-200",
                  isActive
                    ? "text-content-primary bg-surface-border text-white font-medium shadow-sm"
                    : "text-content-secondary hover:text-content-primary hover:bg-white/5"
                )}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-surface-elevated border border-surface-border hover:border-accent-violet/60 hover:text-white transition-colors flex items-center justify-center text-content-secondary hover:bg-white/5"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-surface-elevated border border-surface-border hover:border-accent-violet/60 hover:text-white transition-colors flex items-center justify-center text-content-secondary hover:bg-white/5"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <Button
            size="sm"
            variant="secondary"
            href={profileData.cvPdf}
            download="Essa-Raza-CV.pdf"
            external
            icon={<FileDown className="w-3.5 h-3.5 text-accent-violet" />}
            iconPosition="left"
            className="text-xs"
          >
            Download CV
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <a
            href={profileData.cvPdf}
            download="Essa-Raza-CV.pdf"
            className="p-2 rounded-lg bg-surface-elevated border border-surface-border text-accent-violet hover:bg-white/5"
            aria-label="Download CV"
          >
            <FileDown className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-surface-elevated border border-surface-border text-content-primary hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-accent-violet"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[65px] bg-dark-300/95 backdrop-blur-xl border-b border-surface-border px-6 py-6 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between font-mono text-sm py-2.5 px-3 rounded-lg text-content-secondary hover:text-content-primary hover:bg-surface-elevated transition-colors"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
              </a>
            ))}
            <div className="pt-4 border-t border-surface-border flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-surface-elevated border border-surface-border text-content-secondary"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-surface-elevated border border-surface-border text-content-secondary"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
              <Button
                size="sm"
                variant="primary"
                href={profileData.cvPdf}
                download="Essa-Raza-CV.pdf"
                external
                icon={<FileDown className="w-3.5 h-3.5" />}
                className="w-full justify-center"
              >
                Download CV
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
