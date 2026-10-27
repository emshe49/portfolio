import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Badge } from '../ui/Badge';
import { experienceData } from '../../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-surface-border bg-dark-400 relative">
      <Container>
        <Reveal>
          <SectionHeading
            label="EXPERIENCE"
            title="WORK HISTORY & ROLES"
            description="Professional software development experience across live production codebases and engineering teams."
          />
        </Reveal>

        <div className="relative border-l border-surface-border ml-3 sm:ml-6 space-y-10">
          {experienceData.map((item, index) => {
            const isCurrent = item.endDate === 'Present';

            return (
              <Reveal key={item.id} delay={0.08 * index}>
                <div className="relative pl-6 sm:pl-10 group">
                  {/* Timeline Node Dot */}
                  <div
                    className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      isCurrent
                        ? 'bg-accent-mint border-dark-400 shadow-glow-mint'
                        : 'bg-surface-elevated border-surface-border group-hover:border-accent-violet'
                    }`}
                  >
                    {isCurrent && (
                      <span className="absolute -inset-1 rounded-full bg-accent-mint/30 animate-ping pointer-events-none" />
                    )}
                  </div>

                  {/* Experience Card */}
                  <div className="p-6 sm:p-7 rounded-2xl bg-surface-elevated border border-surface-border hover:border-accent-violet/40 transition-all shadow-lg space-y-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-surface-border/60">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-display font-bold text-lg sm:text-xl text-white">
                            {item.role}
                          </span>
                          <Badge variant={item.type === 'Employment' ? 'violet' : item.type === 'Internship' ? 'mint' : 'muted'}>
                            {item.type}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-xs text-accent-violet font-semibold">
                          <Briefcase className="w-3.5 h-3.5" />
                          <span>{item.company}</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end font-mono text-xs text-content-muted">
                        <div className="flex items-center gap-1.5 text-content-primary">
                          <Calendar className="w-3.5 h-3.5 text-accent-mint" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-content-muted mt-0.5">
                          <MapPin className="w-3 h-3" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-content-secondary text-sm leading-relaxed font-sans">
                      {item.description}
                    </p>

                    {/* Specific Outcomes */}
                    <ul className="space-y-1.5 text-xs sm:text-sm font-sans text-content-secondary">
                      {item.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-mint shrink-0 mt-2" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded bg-dark-400 border border-surface-border/70 text-[11px] font-mono text-content-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
