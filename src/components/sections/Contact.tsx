import React, { useState } from 'react';
import { MapPin, FileDown, Copy, Check, MessageSquare, Send, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import confetti from 'canvas-confetti';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Reveal } from '../ui/Reveal';
import { profileData } from '../../data/profile';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#8B7CFF', '#55D6C2', '#F4F3FF']
      });
    } catch {
      // Confetti is a delightful progressive enhancement
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-surface-border bg-dark-400 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-violet/10 rounded-full blur-[160px] pointer-events-none" />

      <Container>
        <Reveal>
          <SectionHeading
            label="CONTACT"
            title="GET IN TOUCH"
            description="Open to software engineering roles, postgraduate opportunities, and AI research inquiries."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={0.1}>
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-elevated border border-surface-border space-y-6">
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                    Start a Conversation
                  </h3>
                  <p className="text-content-secondary text-sm leading-relaxed font-sans">
                    Whether you are an engineering recruiter looking for a disciplined MERN stack developer, an academic supervisor discussing potential postgraduate research, or a collaborator on RAG systems, my inbox is open.
                  </p>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    size="md"
                    variant="primary"
                    href={`mailto:${profileData.email}`}
                    icon={<Send className="w-4 h-4" />}
                  >
                    Send Direct Email
                  </Button>

                  <Button
                    size="md"
                    variant="secondary"
                    href={`https://wa.me/923189764318`}
                    external
                    icon={<MessageSquare className="w-4 h-4 text-accent-mint" />}
                  >
                    WhatsApp Chat
                  </Button>
                </div>

                {/* Direct Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-surface-border/60">
                  {/* Email Box */}
                  <div className="p-3.5 rounded-xl bg-dark-400 border border-surface-border font-mono text-xs flex items-center justify-between">
                    <div className="space-y-0.5 overflow-hidden">
                      <div className="text-[10px] text-content-muted uppercase">Verified Email</div>
                      <a href={`mailto:${profileData.email}`} className="text-content-primary hover:text-accent-violet transition-colors truncate block">
                        {profileData.email}
                      </a>
                    </div>
                    <button
                      onClick={() => copyToClipboard(profileData.email, 'email')}
                      className="p-2 rounded-lg bg-surface border border-surface-border hover:border-accent-violet text-content-secondary hover:text-white transition-colors"
                      title="Copy email to clipboard"
                      aria-label="Copy email"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-accent-mint" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Phone Box */}
                  <div className="p-3.5 rounded-xl bg-dark-400 border border-surface-border font-mono text-xs flex items-center justify-between">
                    <div className="space-y-0.5 overflow-hidden">
                      <div className="text-[10px] text-content-muted uppercase">Phone / WhatsApp</div>
                      <a href={`tel:${profileData.phone}`} className="text-content-primary hover:text-accent-mint transition-colors truncate block">
                        {profileData.phone}
                      </a>
                    </div>
                    <button
                      onClick={() => copyToClipboard(profileData.phone, 'phone')}
                      className="p-2 rounded-lg bg-surface border border-surface-border hover:border-accent-mint text-content-secondary hover:text-white transition-colors"
                      title="Copy phone to clipboard"
                      aria-label="Copy phone"
                    >
                      {copiedPhone ? <Check className="w-3.5 h-3.5 text-accent-mint" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Profiles & Location row */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-content-muted">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-accent-violet" />
                    <span>Location: Mardan / Charsadda, Pakistan</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={profileData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-content-secondary hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>github.com/emshe49</span>
                    </a>
                    <a
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-content-secondary hover:text-white transition-colors"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5 text-accent-mint" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: CV Download & Verification Hub */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.15}>
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-surface-elevated to-dark-300 border border-surface-border shadow-xl space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-accent-violet font-semibold">
                      DOCUMENT DOWNLOAD
                    </span>
                    <Badge variant="mint" size="sm">Verified PDF</Badge>
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                    Curriculum Vitae
                  </h3>
                  <p className="text-content-secondary text-sm font-sans leading-relaxed">
                    Download my complete, verified CV detailing technical skills, full-stack projects, production internships, and academic coursework.
                  </p>
                </div>

                {/* Document Meta Box */}
                <div className="p-4 rounded-xl bg-dark-400 border border-surface-border/80 font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between text-content-secondary">
                    <span>File Name:</span>
                    <span className="text-white font-medium">Essa-Raza-CV.pdf</span>
                  </div>
                  <div className="flex items-center justify-between text-content-secondary">
                    <span>Document Type:</span>
                    <span className="text-accent-mint">PDF (Vector Format)</span>
                  </div>
                  <div className="flex items-center justify-between text-content-secondary">
                    <span>Target Roles:</span>
                    <span className="text-white">Software Engineer / AI Scholar</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    size="lg"
                    variant="primary"
                    href={profileData.cvPdf}
                    download="Essa-Raza-CV.pdf"
                    onClick={triggerConfetti}
                    external
                    icon={<FileDown className="w-4 h-4" />}
                    className="w-full justify-center text-sm"
                  >
                    Download Essa-Raza-CV.pdf
                  </Button>

                  <div className="flex items-center justify-center gap-1.5 font-mono text-[11px] text-content-muted">
                    <Sparkles className="w-3 h-3 text-accent-violet" />
                    <span>Updated for 2026 Opportunities & Russian Open Doors</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};
