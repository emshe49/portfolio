import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import type { Project } from '../../types/portfolio';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  const isDeployed = Boolean(project.liveUrl);

  return (
    <div
      className={`rounded-2xl bg-surface-elevated/95 border border-surface-border hover:border-accent-violet/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-lg hover:shadow-glow-violet/10 ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="p-6 sm:p-7 space-y-4">
        {/* Header Row */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge variant={project.category === 'AI & RAG' ? 'mint' : 'violet'} size="sm">
                {project.category}
              </Badge>
              {isDeployed ? (
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-accent-mint font-medium px-2 py-0.5 rounded bg-accent-mint/10 border border-accent-mint/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-mint animate-pulse" />
                  Live Deployed
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-content-muted px-2 py-0.5 rounded bg-dark-400 border border-surface-border">
                  Repository
                </span>
              )}
            </div>

            <h3 className="font-display font-bold text-xl sm:text-2xl text-content-primary group-hover:text-white transition-colors tracking-tight">
              {project.title}
            </h3>
            <p className="font-mono text-xs text-accent-violet mt-0.5">
              {project.subtitle}
            </p>
          </div>

          {/* Quick Action Icon Links */}
          <div className="flex items-center gap-2 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-surface border border-surface-border hover:border-accent-violet/60 hover:text-white transition-colors flex items-center justify-center text-content-secondary"
                aria-label={`${project.title} GitHub Source`}
                title="View Source on GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {isDeployed && project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-surface border border-surface-border hover:border-accent-mint/60 hover:text-accent-mint transition-colors flex items-center justify-center text-content-secondary"
                aria-label={`${project.title} Live Demo`}
                title="Open Live Deployment"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description: ONLY rendered for non-deployed projects */}
        {!isDeployed && project.description && (
          <p className="text-content-secondary text-sm leading-relaxed font-sans pt-1">
            {project.description}
          </p>
        )}
      </div>

      {/* Footer: Tech Stack & Direct Action Buttons */}
      <div className="p-6 sm:p-7 pt-0 space-y-4">
        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-surface-border/60">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded bg-dark-400 border border-surface-border/70 text-[11px] font-mono text-content-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          {isDeployed && project.liveUrl && (
            <Button
              size="sm"
              variant="mint"
              href={project.liveUrl}
              external
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              className="text-xs font-semibold"
            >
              Live Demo
            </Button>
          )}

          {project.githubUrl && (
            <Button
              size="sm"
              variant="secondary"
              href={project.githubUrl}
              external
              icon={<GithubIcon className="w-3.5 h-3.5" />}
              className="text-xs"
            >
              GitHub Source
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
