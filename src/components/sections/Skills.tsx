import React from 'react';
import { Cpu, Terminal, Layers, Server, Database, Cloud } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { skillCategories } from '../../data/skills';

export const Skills: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case '01': return <Cpu className="w-4 h-4 text-accent-violet" />;
      case '02': return <Terminal className="w-4 h-4 text-accent-mint" />;
      case '03': return <Layers className="w-4 h-4 text-accent-violet" />;
      case '04': return <Server className="w-4 h-4 text-accent-mint" />;
      case '05': return <Database className="w-4 h-4 text-accent-violet" />;
      case '06': return <Cloud className="w-4 h-4 text-accent-mint" />;
      default: return <Terminal className="w-4 h-4 text-accent-violet" />;
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-surface-border bg-dark-300 relative">
      <Container>
        <Reveal>
          <SectionHeading
            label="TOOLKIT"
            title="TECHNICAL SKILLS & PROFICIENCIES"
            description="Core technologies, frameworks, and engineering tools I leverage for production software and AI systems."
          />
        </Reveal>

        {/* Categories Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, index) => (
            <Reveal key={group.identifier} delay={0.06 * index}>
              <div className="p-6 rounded-2xl bg-surface-elevated border border-surface-border hover:border-accent-violet/40 transition-all h-full flex flex-col group">
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-surface-border/60">
                  <div className="w-9 h-9 rounded-xl bg-surface border border-surface-border flex items-center justify-center shrink-0">
                    {getCategoryIcon(group.identifier)}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-base text-content-primary group-hover:text-white transition-colors">
                      {group.title}
                    </h3>
                    <p className="text-content-muted text-xs font-sans line-clamp-1">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Clean Skill Pills */}
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 rounded-lg bg-dark-400/90 border border-surface-border/80 text-xs font-mono text-content-secondary hover:text-white hover:border-accent-violet/40 hover:bg-surface-elevated transition-all"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
