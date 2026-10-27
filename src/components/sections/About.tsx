import React from 'react';
import { Terminal, Award, BookOpen, Layers } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { profileData } from '../../data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-surface-border bg-dark-400 relative">
      <Container>
        <Reveal>
          <SectionHeading
            label="ABOUT"
            title="BACKGROUND & FOCUS"
            description="Software engineer building full-stack applications and exploring intelligent document systems."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: First-Person Narrative & Core Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={0.1}>
              <div className="space-y-4 text-content-secondary font-sans text-base sm:text-lg leading-relaxed">
                {profileData.aboutStory.map((paragraph, index) => (
                  <p key={index} className="text-content-secondary">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* Core Values / Philosophy Grid */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-surface-elevated border border-surface-border hover:border-accent-violet/40 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-accent-violet/15 flex items-center justify-center text-accent-violet mb-3">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-semibold text-content-primary text-sm mb-1">
                    Full-Stack Delivery
                  </h4>
                  <p className="text-content-muted text-xs font-sans leading-relaxed">
                    Building responsive React interfaces, robust Express/FastAPI backends, and optimized MongoDB schemas.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface-elevated border border-surface-border hover:border-accent-mint/40 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-accent-mint/15 flex items-center justify-center text-accent-mint mb-3">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-semibold text-content-primary text-sm mb-1">
                    RAG &amp; Vector Search
                  </h4>
                  <p className="text-content-muted text-xs font-sans leading-relaxed">
                    Implementing Pinecone, neural reranking, and citation guardrails to minimize LLM hallucinations.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface-elevated border border-surface-border hover:border-accent-mint/40 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-accent-mint/15 flex items-center justify-center text-accent-mint mb-3">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-semibold text-content-primary text-sm mb-1">
                    System Architecture
                  </h4>
                  <p className="text-content-muted text-xs font-sans leading-relaxed">
                    Designing modular APIs, caching layers, containerized Docker builds, and cloud deployments.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface-elevated border border-surface-border hover:border-accent-violet/40 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-accent-violet/15 flex items-center justify-center text-accent-violet mb-3">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-semibold text-content-primary text-sm mb-1">
                    Academic Research
                  </h4>
                  <p className="text-content-muted text-xs font-sans leading-relaxed">
                    Targeting postgraduate studies and the Russian Open Doors Scholarship in document intelligence.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Secondary Real Photo & Verified Stat Cards */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.15} direction="left">
              <div className="relative rounded-2xl bg-surface-elevated border border-surface-border p-3 overflow-hidden shadow-xl">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-dark-400 relative">
                  <img
                    src="/images/essa-raza-about.webp"
                    alt="Essa Raza — Engineering and Research"
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-[1.03]"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/essa-raza-portrait.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-400 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-dark-400/85 backdrop-blur-sm border border-surface-border text-xs font-mono text-content-secondary">
                    <span>Essa Raza // UET Mardan CS Dept</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Verified Statistics Grid */}
            <div className="grid grid-cols-2 gap-3">
              {profileData.stats.map((stat, i) => (
                <Reveal key={stat.label} delay={0.2 + i * 0.08}>
                  <div className="p-4 rounded-xl bg-surface-elevated border border-surface-border hover:border-accent-violet/30 transition-all font-mono">
                    <div className="text-2xl sm:text-3xl font-display font-bold text-accent-violet mb-1 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium text-content-primary mb-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-content-muted">
                      {stat.meta}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
