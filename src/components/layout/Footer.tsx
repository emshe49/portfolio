import React from 'react';
import { Mail, ArrowUp, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { Container } from './Container';
import { ThemeToggle } from '../ui/ThemeToggle';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-surface-border bg-dark-300 relative overflow-hidden py-16">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent-violet/40 to-transparent" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-surface-border/60">
          {/* Brand & bio column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-surface-border flex items-center justify-center font-mono font-bold text-xs text-content-primary">
                ER
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-content-primary">
                ESSA RAZA
              </span>
            </div>
            <p className="text-content-secondary text-sm leading-relaxed max-w-sm">
              Computer Science graduate & MERN stack engineer focused on scalable web applications and trustworthy retrieval-augmented generation.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-mint/10 border border-accent-mint/30 text-accent-mint font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
              <span>Available for Software Roles & Research</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-content-primary font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 font-mono text-xs text-content-secondary">
              <li><a href="#about" className="hover:text-accent-violet transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-accent-violet transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-accent-violet transition-colors">Toolkit</a></li>
              <li><a href="#experience" className="hover:text-accent-violet transition-colors">Experience</a></li>
              <li><a href="#education" className="hover:text-accent-violet transition-colors">Education</a></li>
              <li><a href="#contact" className="hover:text-accent-violet transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Socials & Location */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-content-primary font-semibold">
              Connect & Verify
            </h4>
            <div className="flex flex-col gap-2 font-mono text-xs text-content-secondary">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-accent-violet" />
                <span>github.com/emshe49</span>
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-accent-mint" />
                <span>linkedin.com/in/essa-raza-ba4b62243</span>
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-accent-violet" />
                <span>{profileData.email}</span>
              </a>
            </div>
            <div className="pt-2 text-xs font-mono text-content-muted">
              Location: Mardan / Charsadda, Pakistan
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-content-muted">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-accent-violet" />
            <span>Designed & Engineered by Essa Raza · React + Vite + TypeScript</span>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-content-primary transition-colors focus:outline-none"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
