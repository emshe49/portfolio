import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle, FileText } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { educationData, certificationsData } from '../../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 border-t border-surface-border bg-dark-300 relative">
      <Container>
        <Reveal>
          <SectionHeading
            label="EDUCATION"
            title="ACADEMIC BACKGROUND & CERTIFICATIONS"
            description="Formal Computer Science degree complemented by hands-on engineering specializations."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Academic Degrees (Left Column) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent-violet flex items-center gap-2 mb-2 font-semibold">
              <GraduationCap className="w-4 h-4" />
              <span>Degrees</span>
            </h3>

            {educationData.map((edu, idx) => (
              <Reveal key={edu.id} delay={0.1 * idx}>
                <div className="p-6 sm:p-7 rounded-2xl bg-surface-elevated border border-surface-border hover:border-accent-violet/30 transition-all space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-surface-border/60">
                    <div>
                      <h4 className="font-display font-bold text-lg sm:text-xl text-white">
                        {edu.degree}
                      </h4>
                      <div className="font-mono text-xs text-accent-mint font-medium mt-0.5">
                        {edu.institution}
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end font-mono text-xs text-content-muted">
                      <div className="flex items-center gap-1.5 text-content-primary">
                        <Calendar className="w-3.5 h-3.5 text-accent-violet" />
                        <span>{edu.period}</span>
                      </div>
                      {edu.cgpa && (
                        <div className="mt-1 px-2.5 py-0.5 rounded bg-accent-violet/15 text-accent-violet font-semibold text-xs border border-accent-violet/30">
                          CGPA: {edu.cgpa}
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-content-secondary text-sm leading-relaxed font-sans">
                    {edu.description}
                  </p>

                  <ul className="space-y-1.5 text-xs font-sans text-content-secondary">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-accent-mint shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Certifications (Right Column) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent-mint flex items-center gap-2 mb-2 font-semibold">
              <Award className="w-4 h-4" />
              <span>Certifications</span>
            </h3>

            <div className="space-y-4">
              {certificationsData.map((cert, index) => (
                <Reveal key={cert.title} delay={0.12 + 0.08 * index}>
                  <div className="p-5 rounded-xl bg-surface-elevated border border-surface-border hover:border-accent-mint/40 transition-all space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-display font-semibold text-white text-base">
                        {cert.title}
                      </h4>
                      <Badge variant="outline" size="sm">{cert.date}</Badge>
                    </div>

                    <div className="text-xs font-mono text-accent-violet">
                      {cert.issuer}
                    </div>

                    <div className="text-xs text-content-muted font-sans">
                      {cert.skills}
                    </div>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={0.35}>
                <div className="p-5 rounded-xl bg-dark-400 border border-surface-border flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono text-content-primary font-semibold">Official Academic Records</div>
                    <div className="text-[11px] text-content-muted">BS CS Degree Transcripts & Verified Profile</div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    href="/documents/Essa-Raza-CV.pdf"
                    download="Essa-Raza-CV.pdf"
                    icon={<FileText className="w-3.5 h-3.5" />}
                  >
                    View CV
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
