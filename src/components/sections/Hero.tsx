import React from 'react';
import { ArrowDown, ArrowUpRight, FileDown, MapPin, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Reveal } from '../ui/Reveal';
import { profileData } from '../../data/profile';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-violet/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-accent-mint/5 rounded-full blur-[160px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={0.05}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-elevated/90 border border-surface-border text-accent-violet font-mono text-xs tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
                <span>{profileData.tagline}</span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h1 className="text-hero-headline font-display font-bold text-content-primary tracking-tight">
                RESEARCHING TRUSTWORTHY AI<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-content-primary via-accent-violet to-accent-mint">
                  & DOCUMENT REASONING.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-content-secondary text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl font-sans">
                Computer Science graduate from <strong className="text-white font-medium">UET Mardan</strong> (CGPA 3.41/4.00, twice recipient of the <strong className="text-accent-mint font-medium">Dean's Award Certificate of Appreciation</strong>). Building retrieval-augmented systems and investigating how AI can reason reliably over complex, evolving institutional documents.
              </p>
            </Reveal>

            {/* Academic Credential Badges */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
                <span className="px-3 py-1 rounded-full bg-surface-elevated border border-surface-border text-white">
                  BS Computer Science (2022–2026)
                </span>
                <span className="px-3 py-1 rounded-full bg-accent-violet/15 border border-accent-violet/40 text-accent-violet font-semibold">
                  CGPA 3.41 / 4.00
                </span>
                <span className="px-3 py-1 rounded-full bg-accent-mint/15 border border-accent-mint/40 text-accent-mint font-semibold">
                  2× Dean's Award
                </span>
              </div>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.35}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  size="lg"
                  variant="primary"
                  href="#research"
                  icon={<Sparkles className="w-4 h-4 text-accent-mint" />}
                >
                  Explore Research & UniGuideBot
                </Button>

                <Button
                  size="lg"
                  variant="secondary"
                  href="#projects"
                  icon={<ArrowDown className="w-4 h-4" />}
                >
                  View All Projects
                </Button>
              </div>
            </Reveal>

            {/* Quick Links & Metadata */}
            <Reveal delay={0.45}>
              <div className="pt-6 border-t border-surface-border/60 flex flex-wrap items-center gap-6 font-mono text-xs text-content-secondary">
                <div className="flex items-center gap-2 text-content-secondary">
                  <MapPin className="w-3.5 h-3.5 text-accent-violet" />
                  <span>Pakistan (Mardan / Charsadda)</span>
                </div>

                <div className="h-3 w-[1px] bg-surface-border hidden sm:block" />

                <div className="flex items-center gap-4">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-accent-violet" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>

                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-accent-mint" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>

                  <a
                    href={profileData.cvPdf}
                    download="Essa-Raza-CV.pdf"
                    className="flex items-center gap-1.5 text-accent-violet hover:underline"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Hero Portrait Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal delay={0.2} direction="right" className="w-full max-w-md">
              <div className="relative group">
                {/* Decorative background framing */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-accent-violet/20 via-transparent to-accent-mint/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-accent-violet/50 rounded-tr-xl pointer-events-none" />
                <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-accent-mint/50 rounded-bl-xl pointer-events-none" />

                {/* Portrait Card */}
                <div className="relative rounded-2xl bg-surface-elevated border border-surface-border p-3 overflow-hidden shadow-2xl">
                  {/* Subtle inner grid accent */}
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-dark-400">
                    <img
                      src="/images/essa-raza-portrait.webp"
                      alt="Essa Raza — Full-Stack Developer & AI Researcher"
                      className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="eager"
                      onError={(e) => {
                        // Fallback to avatar if portrait webp fails
                        (e.target as HTMLImageElement).src = '/images/avatar.png';
                      }}
                    />

                    {/* Gradient overlays for cinematic lighting */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-400 via-transparent to-transparent opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-violet/10 via-transparent to-accent-mint/10 mix-blend-overlay pointer-events-none" />

                    {/* Tech details chip overlay at the bottom */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-dark-400/90 backdrop-blur-md border border-surface-border/80">
                      <div className="flex items-center justify-between font-mono text-[11px] text-content-secondary mb-1">
                        <span className="text-white font-medium">Essa Raza</span>
                        <Badge variant="violet" size="sm">BS CS 2026</Badge>
                      </div>
                      <div className="text-[11px] font-mono text-content-muted flex items-center justify-between">
                        <span>AI Systems & RAG Research</span>
                        <span className="text-accent-mint flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-mint"></span>
                          UET Mardan
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Technical Stat Chip */}
                <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-surface-elevated/95 backdrop-blur-md border border-accent-violet/40 p-3 rounded-xl shadow-xl flex items-center gap-3 font-mono">
                  <div className="w-8 h-8 rounded-lg bg-accent-violet/15 flex items-center justify-center text-accent-violet font-bold text-xs">
                    RAG
                  </div>
                  <div>
                    <div className="text-[10px] text-content-muted uppercase">49-Query Benchmark</div>
                    <div className="text-xs font-semibold text-content-primary">0.9262 Context Recall</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 pt-8 flex items-center justify-between border-t border-surface-border/40 text-xs font-mono text-content-muted">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
            <span>SCROLL TO EXPLORE ARCHITECTURE & CODE</span>
          </div>
          <div className="flex items-center gap-2">
            <span>[2026] PORTFOLIO v2.0</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
