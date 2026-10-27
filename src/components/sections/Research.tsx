import React from 'react';
import { Sparkles, BrainCircuit } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { RAGWorkflow } from '../research/RAGWorkflow';
import { researchInterests } from '../../data/research';

export const Research: React.FC = () => {
  return (
    <section id="research" className="py-24 border-t border-surface-border bg-dark-400 relative">
      <Container>
        <Reveal>
          <SectionHeading
            label="RESEARCH"
            title="EXPLORING TRUSTWORTHY AI"
            description="Investigating hallucination prevention, citation attribution, and document reasoning for postgraduate research."
          />
        </Reveal>

        {/* Narrative Motivation Block */}
        <Reveal delay={0.08}>
          <div className="p-6 sm:p-7 rounded-2xl bg-surface-elevated border border-surface-border mb-10 space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-violet uppercase tracking-wider font-semibold">
              <BrainCircuit className="w-4 h-4" />
              <span>Research Direction & Scholarship Focus</span>
            </div>
            <p className="text-content-secondary font-sans text-sm sm:text-base leading-relaxed">
              While building <strong className="text-white">UniGuideBot</strong>, I encountered the fundamental limits of vanilla RAG: complex PDF tables, conflicting seasonal circulars, and silent hallucinations. This ignited my drive toward graduate research—targeting the <strong className="text-accent-mint font-medium">Russian Open Doors Scholarship</strong> to advance self-verifying, citation-grounded language models.
            </p>
          </div>
        </Reveal>

        {/* Research Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {researchInterests.map((interest, i) => (
            <Reveal key={interest.title} delay={0.06 * i}>
              <div className="p-6 rounded-2xl bg-surface-elevated border border-surface-border hover:border-accent-violet/40 transition-all h-full flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-accent-violet">
                      Focus 0{i + 1}
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

                <div className="p-3 rounded-xl bg-dark-400 border border-surface-border/60 text-xs font-mono">
                  <span className="text-accent-mint font-medium block mb-1">Key Research Question:</span>
                  <p className="text-content-muted font-sans italic text-xs">
                    "{interest.keyQuestion}"
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Proposed Research Protocol */}
        <Reveal delay={0.15}>
          <RAGWorkflow />
        </Reveal>
      </Container>
    </section>
  );
};
