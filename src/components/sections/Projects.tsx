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
            title="FEATURED WORK & SYSTEMS ENGINEERING"
            description="Intelligent retrieval systems, production web applications, and containerized cloud pipelines."
          />
        </Reveal>

        {/* Research Linkage Banner */}
        <Reveal delay={0.08}>
          <div className="p-4 sm:p-5 rounded-xl bg-surface-elevated border border-accent-violet/30 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse shrink-0" />
              <span className="text-content-secondary font-sans">
                Reviewing for the Open Doors Scholarship? Explore the detailed <strong className="text-white">UniGuideBot Case Study &amp; Evaluation</strong> in the dedicated research section.
              </span>
            </div>
            <a
              href="#research"
              className="text-accent-mint hover:underline font-semibold shrink-0 flex items-center gap-1"
            >
              <span>Jump to Research Section</span>
              <span>&rarr;</span>
            </a>
          </div>
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
