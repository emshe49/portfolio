import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { ProjectCard } from '../projects/ProjectCard';
import { projectsData } from '../../data/projects';
import type { Project } from '../../types/portfolio';

type CategoryFilter = 'All' | 'AI & RAG' | 'Full-Stack' | 'DevOps & Cloud';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<CategoryFilter>('All');

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === 'All') return true;
    return project.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-24 border-t border-surface-border bg-dark-400 relative">
      <Container>
        <Reveal>
          <SectionHeading
            label="PROJECTS"
            title="FEATURED WORK & RESEARCH PROJECTS"
            description="Production software platforms, verified AI retrieval systems, and academic engineering projects."
          />
        </Reveal>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pt-2">
          <div className="font-mono text-xs uppercase tracking-wider text-content-muted">
            Category Filter:
          </div>
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-surface-elevated border border-surface-border">
            {(['All', 'AI & RAG', 'Full-Stack', 'DevOps & Cloud'] as CategoryFilter[]).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`font-mono text-xs px-3.5 py-1.5 rounded-lg transition-all ${
                  selectedFilter === category
                    ? 'bg-accent-violet text-dark-900 font-semibold shadow-glow-violet'
                    : 'text-content-secondary hover:text-white hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project: Project, idx: number) => (
            <Reveal key={project.id} delay={0.05 * idx}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
