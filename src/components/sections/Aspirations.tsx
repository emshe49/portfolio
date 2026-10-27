import React from 'react';
import { ArrowRight, Compass, Rocket, BookOpenCheck, BrainCircuit } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { careerAspirations } from '../../data/research';

export const Aspirations: React.FC = () => {
  const getStageIcon = (index: number) => {
    switch (index) {
      case 0: return <Rocket className="w-5 h-5 text-accent-violet" />;
      case 1: return <BookOpenCheck className="w-5 h-5 text-accent-mint" />;
      case 2: return <BrainCircuit className="w-5 h-5 text-accent-violet" />;
      default: return <Compass className="w-5 h-5 text-accent-violet" />;
    }
  };

  return (
    <section id="aspirations" className="py-24 border-t border-surface-border bg-dark-300 relative">
      <Container>
        <Reveal>
          <SectionHeading
            label="ROADMAP"
            title="CAREER TRAJECTORY & ASPIRATIONS"
            description="Connecting full-stack product engineering with graduate research in artificial intelligence."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {careerAspirations.map((item, index) => (
            <Reveal key={item.stage} delay={0.1 * index}>
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-elevated border border-surface-border hover:border-accent-violet/40 transition-all h-full flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  {/* Top stage marker */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-accent-mint font-semibold uppercase tracking-wider">
                      {item.stage}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-surface border border-surface-border flex items-center justify-center group-hover:border-accent-violet/50 transition-colors">
                      {getStageIcon(index)}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-accent-violet transition-colors">
                      {item.title}
                    </h3>
                    <div className="font-mono text-xs text-accent-violet mt-0.5">
                      {item.focus}
                    </div>
                  </div>

                  <p className="text-content-secondary text-sm font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-border/60 flex items-center justify-between font-mono text-xs text-content-muted">
                  <span>{item.timeline}</span>
                  <ArrowRight className="w-4 h-4 text-accent-mint opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
