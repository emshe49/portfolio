import React from 'react';
import { Check } from 'lucide-react';
import { proposedResearch } from '../../data/research';

export const RAGWorkflow: React.FC = () => {
  return (
    <div className="rounded-2xl bg-surface-elevated border border-surface-border p-6 sm:p-8 space-y-7">
      <div>
        <div className="font-mono text-xs uppercase tracking-wider text-accent-violet mb-1 font-semibold">
          Proposed Research Framework
        </div>
        <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight mb-2">
          {proposedResearch.title}
        </h3>
        <p className="text-content-secondary text-sm font-sans leading-relaxed max-w-3xl">
          {proposedResearch.problemStatement}
        </p>
      </div>

      {/* Workflow Steps Vertical/Horizontal Pipeline */}
      <div className="space-y-3">
        <div className="font-mono text-xs uppercase tracking-wider text-content-muted">
          5-Stage Verification Pipeline:
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {proposedResearch.methodologySteps.map((step, idx) => (
            <div
              key={step.step}
              className="p-4 rounded-xl bg-dark-400 border border-surface-border hover:border-accent-violet/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] text-accent-mint font-semibold uppercase tracking-wider">
                  Phase 0{idx + 1}
                </span>
                <h4 className="font-display font-semibold text-white text-sm group-hover:text-accent-violet transition-colors">
                  {step.title}
                </h4>
                <p className="text-content-secondary text-xs font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-surface-border/40 font-mono text-[10px] text-content-muted flex items-center justify-between">
                <span>Verified</span>
                <Check className="w-3 h-3 text-accent-mint" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Banner */}
      <div className="p-6 rounded-xl bg-gradient-to-r from-accent-violet/10 via-dark-400 to-accent-mint/10 border border-accent-violet/30">
        <blockquote className="text-sm sm:text-base text-content-primary font-display italic leading-relaxed">
          "{proposedResearch.longTermQuote}"
        </blockquote>
        <div className="font-mono text-xs text-accent-mint pt-2 font-medium">
          — Essa Raza
        </div>
      </div>
    </div>
  );
};
