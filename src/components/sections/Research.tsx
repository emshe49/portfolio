import React from 'react';
import { Sparkles, BrainCircuit, School, MapPin } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { RAGWorkflow } from '../research/RAGWorkflow';
import { UniGuideBotCaseStudy } from '../projects/UniGuideBotCaseStudy';
import { researchInterests, targetUniversities } from '../../data/research';

export const Research: React.FC = () => {
  return (
    <section id="research" className="py-24 border-t border-surface-border bg-dark-400 relative">
      <Container>
        <Reveal>
          <SectionHeading
            label="RESEARCH & INVESTIGATION"
            title="TRUSTWORTHY AI & DOCUMENT REASONING"
            description="Empirical retrieval systems, observed document failure modes, and proposed Master's research for the Open Doors International Olympiad."
          />
        </Reveal>

        {/* Narrative Motivation Block */}
        <Reveal delay={0.08}>
          <div className="p-6 sm:p-7 rounded-2xl bg-surface-elevated border border-surface-border mb-12 space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-violet uppercase tracking-wider font-semibold">
              <BrainCircuit className="w-4 h-4" />
              <span>Academic Purpose & Open Doors Scholarship Focus</span>
            </div>
            <p className="text-content-secondary font-sans text-sm sm:text-base leading-relaxed">
              My engineering work on <strong className="text-white">UniGuideBot</strong> at UET Mardan exposed the fundamental vulnerabilities of standard retrieval-augmented pipelines: complex multi-column layouts, OCR failures on scanned circulars, tabular fragmentation, and conflicting historical amendments. This directly motivates my proposed Master's research—targeting the <strong className="text-accent-mint font-medium">Open Doors International Olympiad Scholarship</strong> to investigate self-verifying, citation-grounded language models capable of reasoning over dynamic, structured knowledge bases.
            </p>
          </div>
        </Reveal>

        {/* Flagship Research Case Study: UniGuideBot */}
        <Reveal delay={0.12}>
          <div className="mb-14">
            <UniGuideBotCaseStudy />
          </div>
        </Reveal>

        {/* Research Themes Grid */}
        <div className="mb-14">
          <Reveal delay={0.15}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-accent-violet font-semibold block">
                  Core Research Questions
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                  Investigative Themes & Theoretical Interests
                </h3>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {researchInterests.map((interest, i) => (
              <Reveal key={interest.title} delay={0.06 * i}>
                <div className="p-6 rounded-2xl bg-surface-elevated border border-surface-border hover:border-accent-violet/40 transition-all h-full flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-accent-violet">
                        Theme 0{i + 1}
                      </span>
                      <Sparkles className="w-3.5 h-3.5 text-accent-mint" />
                    </div>

                    <h4 className="font-display font-bold text-base sm:text-lg text-white mb-2">
                      {interest.title}
                    </h4>

                    <p className="text-content-secondary text-xs sm:text-sm font-sans leading-relaxed">
                      {interest.shortDesc}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-dark-400 border border-surface-border/60 text-xs font-mono">
                    <span className="text-accent-mint font-medium block mb-1">Key Research Question:</span>
                    <p className="text-content-muted font-sans italic text-xs">
                      "{interest.keyQuestion}"
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Proposed Research Protocol */}
        <Reveal delay={0.18}>
          <div className="mb-14">
            <RAGWorkflow />
          </div>
        </Reveal>

        {/* Target Universities & Institutional Fit */}
        <Reveal delay={0.22}>
          <div className="p-6 sm:p-7 rounded-2xl bg-surface-elevated border border-surface-border space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-mint uppercase tracking-wider font-semibold">
              <School className="w-4 h-4" />
              <span>Target Russian Universities // Open Doors Subject Track</span>
            </div>

            <p className="text-content-secondary text-sm font-sans leading-relaxed">
              Applying through the <strong className="text-white">Computer &amp; Data Science</strong> and <strong className="text-white">Applied Mathematics and Artificial Intelligence</strong> tracks of the Open Doors International Olympiad. Prepared to contribute to graduate research groups at leading institutions:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              {targetUniversities.map((uni) => (
                <div key={uni.name} className="p-4 rounded-xl bg-dark-400 border border-surface-border/80 space-y-1.5 font-mono">
                  <div className="text-xs text-white font-semibold flex items-center justify-between">
                    <span>{uni.name}</span>
                  </div>
                  <div className="text-[11px] text-accent-violet font-medium">
                    {uni.focus}
                  </div>
                  <div className="text-[10px] text-content-muted flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-accent-mint" />
                    <span>{uni.city}, Russia</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-content-muted font-mono pt-1">
              Note: Institutional preferences are open across these university tracks; formal laboratory and supervisor assignments are determined through the Open Doors competition and admissions process.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
