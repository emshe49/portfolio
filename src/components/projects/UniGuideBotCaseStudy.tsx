import React, { useState } from 'react';
import { ArrowRight, Bot, Cpu, Database, FileText, Filter, GitFork, Layers, ShieldCheck, Sparkles, TrendingUp, AlertTriangle } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const UniGuideBotCaseStudy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'evaluation' | 'challenges' | 'research'>('architecture');

  const evalMetrics = [
    { label: "Faithfulness", value: "91.3%", desc: "Grounded strictly in retrieved text", delta: "+23.1% vs Baseline" },
    { label: "Context Recall", value: "92.6%", desc: "Retrieved all necessary clauses", delta: "+21.2% vs Baseline" },
    { label: "Context Precision", value: "90.3%", desc: "Signal-to-noise ratio in chunks", delta: "+18.9% vs Baseline" },
    { label: "Answer Relevancy", value: "89.9%", desc: "Direct semantic query alignment", delta: "+15.4% vs Baseline" },
    { label: "Correctness", value: "90.3%", desc: "Agreement with official UET rules", delta: "+22.0% vs Baseline" },
  ];

  return (
    <div className="rounded-2xl bg-surface-elevated border border-surface-border overflow-hidden shadow-2xl mb-16">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-accent-violet/20 via-surface-elevated to-accent-mint/15 p-6 sm:p-8 border-b border-surface-border">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-3">
            <span className="w-11 h-11 rounded-xl bg-accent-violet/20 border border-accent-violet/40 flex items-center justify-center text-accent-violet shrink-0 shadow-glow-violet/20">
              <Bot className="w-6 h-6" />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="font-mono text-xs uppercase tracking-wider text-accent-violet font-semibold">
                  FLAGSHIP RESEARCH PROJECT // OPEN DOORS CANDIDATE PORTFOLIO
                </span>
                <Badge variant="mint" size="sm">92.6% Context Recall</Badge>
                <Badge variant="violet" size="sm">UET Mardan FYP</Badge>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white tracking-tight">
                UniGuideBot: AI-Powered Academic Policy Assistant
              </h3>
            </div>
          </div>

          <Button
            size="sm"
            variant="outline"
            href="https://github.com/emshe49/fyp-chatbot"
            external
            icon={<GitFork className="w-3.5 h-3.5" />}
          >
            GitHub Repository
          </Button>
        </div>

        <p className="text-content-secondary text-sm sm:text-base leading-relaxed max-w-4xl">
          An evidence-grounded Retrieval-Augmented Generation (RAG) assistant developed as a Final Year Project at UET Mardan. Engineered to extract verified admissions rules, departmental quotas, and fee schedules from institutional prospectuses without hallucination.
        </p>

        {/* Minimal Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-surface-border/60">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`font-mono text-xs px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'architecture'
                ? 'bg-accent-violet text-dark-900 font-semibold shadow-glow-violet'
                : 'text-content-secondary hover:text-white hover:bg-white/5'
            }`}
          >
            01 // System Architecture
          </button>
          <button
            onClick={() => setActiveTab('evaluation')}
            className={`font-mono text-xs px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'evaluation'
                ? 'bg-accent-violet text-dark-900 font-semibold shadow-glow-violet'
                : 'text-content-secondary hover:text-white hover:bg-white/5'
            }`}
          >
            02 // 49-Query Benchmark & Baseline
          </button>
          <button
            onClick={() => setActiveTab('challenges')}
            className={`font-mono text-xs px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'challenges'
                ? 'bg-accent-violet text-dark-900 font-semibold shadow-glow-violet'
                : 'text-content-secondary hover:text-white hover:bg-white/5'
            }`}
          >
            03 // The Document Problem
          </button>
          <button
            onClick={() => setActiveTab('research')}
            className={`font-mono text-xs px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'research'
                ? 'bg-accent-violet text-dark-900 font-semibold shadow-glow-violet'
                : 'text-content-secondary hover:text-white hover:bg-white/5'
            }`}
          >
            04 // Open Doors Research Continuity
          </button>
        </div>
      </div>

      {/* Tab Content Body */}
      <div className="p-6 sm:p-8">
        {/* Tab 1: Architecture */}
        {activeTab === 'architecture' && (
          <div className="space-y-6">
            <div className="p-4 sm:p-6 rounded-xl bg-dark-400 border border-surface-border overflow-x-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-3 min-w-[700px]">
                <div className="flex-1 p-3 rounded-lg bg-surface-elevated border border-surface-border text-center">
                  <FileText className="w-4 h-4 text-accent-violet mx-auto mb-1.5" />
                  <div className="font-mono text-xs text-white font-semibold">1. Parsing</div>
                  <div className="text-[10px] text-content-muted">PDF Text & Table Extraction</div>
                </div>

                <ArrowRight className="w-3.5 h-3.5 text-content-muted hidden md:block" />

                <div className="flex-1 p-3 rounded-lg bg-surface-elevated border border-surface-border text-center">
                  <Layers className="w-4 h-4 text-accent-violet mx-auto mb-1.5" />
                  <div className="font-mono text-xs text-white font-semibold">2. Dense Vectors</div>
                  <div className="text-[10px] text-content-muted">all-MiniLM-L6-v2</div>
                </div>

                <ArrowRight className="w-3.5 h-3.5 text-content-muted hidden md:block" />

                <div className="flex-1 p-3 rounded-lg bg-surface-elevated border border-surface-border text-center">
                  <Database className="w-4 h-4 text-accent-violet mx-auto mb-1.5" />
                  <div className="font-mono text-xs text-white font-semibold">3. Candidate Recall</div>
                  <div className="text-[10px] text-content-muted">Pinecone Index (Top-15)</div>
                </div>

                <ArrowRight className="w-3.5 h-3.5 text-content-muted hidden md:block" />

                <div className="flex-1 p-3 rounded-lg bg-surface-elevated border border-accent-mint/50 text-center shadow-glow-mint">
                  <Filter className="w-4 h-4 text-accent-mint mx-auto mb-1.5" />
                  <div className="font-mono text-xs text-accent-mint font-semibold">4. Neural Reranking</div>
                  <div className="text-[10px] text-content-muted">CrossEncoder (Top-3)</div>
                </div>

                <ArrowRight className="w-3.5 h-3.5 text-content-muted hidden md:block" />

                <div className="flex-1 p-3 rounded-lg bg-surface-elevated border border-surface-border text-center">
                  <Cpu className="w-4 h-4 text-accent-violet mx-auto mb-1.5" />
                  <div className="font-mono text-xs text-white font-semibold">5. Inference</div>
                  <div className="text-[10px] text-content-muted">Groq Llama-3 API</div>
                </div>

                <ArrowRight className="w-3.5 h-3.5 text-content-muted hidden md:block" />

                <div className="flex-1 p-3 rounded-lg bg-surface-elevated border border-surface-border text-center">
                  <ShieldCheck className="w-4 h-4 text-accent-mint mx-auto mb-1.5" />
                  <div className="font-mono text-xs text-white font-semibold">6. Verification</div>
                  <div className="text-[10px] text-content-muted">Citation Entailment Check</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-dark-400 border border-surface-border space-y-1.5">
                <span className="text-accent-violet font-semibold flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  TWO-STAGE NEURAL PIPELINE RATIONALE
                </span>
                <p className="text-content-secondary font-sans leading-relaxed text-xs">
                  Bi-encoder dense retrieval operates fast in high-dimensional vector space but lacks cross-attention between question tokens and document clauses. By routing top-15 candidates through a CrossEncoder, full token-level interaction scores refine the context down to the 3 most precise chunks, improving precision by 18.9%.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-dark-400 border border-surface-border space-y-1.5">
                <span className="text-accent-mint font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  CITATION CONSTRAINTS & ZERO-SPECULATION GUARDRAILS
                </span>
                <p className="text-content-secondary font-sans leading-relaxed text-xs">
                  Academic policies have strict legal implications for applicants. When policy clauses are absent from retrieved context chunks, the model refuses speculation through calibrated negative prompts and directs the user to the appropriate departmental registrar.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Evaluation & Baseline */}
        {activeTab === 'evaluation' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {evalMetrics.map((m) => (
                <div key={m.label} className="p-4 rounded-xl bg-dark-400 border border-surface-border text-center font-mono">
                  <div className="text-2xl sm:text-3xl font-display font-bold text-accent-violet mb-1 tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-xs text-white font-semibold mb-0.5">
                    {m.label}
                  </div>
                  <div className="text-[10px] text-content-muted mb-1.5">
                    {m.desc}
                  </div>
                  <span className="inline-block px-1.5 py-0.5 rounded bg-accent-mint/15 text-accent-mint text-[9px] font-semibold">
                    {m.delta}
                  </span>
                </div>
              ))}
            </div>

            {/* Scientific Comparison Table */}
            <div className="p-4 sm:p-5 rounded-xl bg-dark-400 border border-surface-border overflow-x-auto">
              <div className="font-mono text-xs uppercase tracking-wider text-accent-mint font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Benchmark Comparison // 49 Institutional Policy Queries</span>
              </div>

              <table className="w-full text-left font-mono text-xs min-w-[550px]">
                <thead>
                  <tr className="border-b border-surface-border text-content-muted">
                    <th className="pb-2 font-medium">Metric / Dimension</th>
                    <th className="pb-2 font-medium">Naive Vanilla RAG</th>
                    <th className="pb-2 font-medium text-accent-mint">UniGuideBot (Proposed)</th>
                    <th className="pb-2 font-medium text-right">Scientific Gain</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border/60 text-content-secondary font-sans">
                  <tr>
                    <td className="py-2.5 font-mono text-white text-xs">Context Recall</td>
                    <td className="py-2.5 font-mono text-content-muted">71.4%</td>
                    <td className="py-2.5 font-mono text-accent-mint font-semibold">92.6%</td>
                    <td className="py-2.5 font-mono text-right text-accent-mint">+21.2%</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-mono text-white text-xs">Faithfulness Score</td>
                    <td className="py-2.5 font-mono text-content-muted">68.2%</td>
                    <td className="py-2.5 font-mono text-accent-mint font-semibold">91.3%</td>
                    <td className="py-2.5 font-mono text-right text-accent-mint">+23.1%</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-mono text-white text-xs">Hallucination Frequency</td>
                    <td className="py-2.5 font-mono text-red-400">High (~31.8%)</td>
                    <td className="py-2.5 font-mono text-accent-mint font-semibold">Minimal (&lt;8.7%)</td>
                    <td className="py-2.5 font-mono text-right text-accent-mint">-72.6% error reduction</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-mono text-white text-xs">Table & Fee Extraction</td>
                    <td className="py-2.5 font-mono text-content-muted">Torn Chunks / Failed</td>
                    <td className="py-2.5 font-mono text-accent-mint font-semibold">Structured Context Preservation</td>
                    <td className="py-2.5 font-mono text-right text-accent-mint">Verified Accuracy</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs font-mono text-content-muted">
              Benchmark evaluated using RAGAS-inspired automated scoring grounded against official UET Mardan admission committee guidelines and 49 representative student inquiry cases.
            </p>
          </div>
        )}

        {/* Tab 3: Challenges */}
        {activeTab === 'challenges' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 sm:p-5 rounded-xl bg-dark-400 border border-surface-border space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-accent-violet/15 flex items-center justify-center text-accent-violet">
                <FileText className="w-4 h-4" />
              </div>
              <h5 className="font-display font-semibold text-white text-sm">Scanned Images in PDFs</h5>
              <p className="text-content-secondary text-xs leading-relaxed font-sans">
                Administrative notices in public universities are frequently scanned image circulars without selectable text layers. Standard PyPDF extractors return empty tokens, causing retrieval silence unless fallback OCR engines are introduced.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-dark-400 border border-surface-border space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-accent-mint/15 flex items-center justify-center text-accent-mint">
                <Layers className="w-4 h-4" />
              </div>
              <h5 className="font-display font-semibold text-white text-sm">Tabular Fee Slicing</h5>
              <p className="text-content-secondary text-xs leading-relaxed font-sans">
                Fixed character/token chunking indiscriminately cuts across rows in fee structures. A single chunk may retain fee amounts while separating the department header, causing semantic vector collapse.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-dark-400 border border-surface-border space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-400/15 flex items-center justify-center text-amber-400">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <h5 className="font-display font-semibold text-white text-sm">Temporal Inconsistencies</h5>
              <p className="text-content-secondary text-xs leading-relaxed font-sans">
                Annual amendments conflict with historical rules. Standard vector similarity often retrieves older, superseded circulars because their keyword overlap is higher than the newly published amendment.
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: Open Doors Research Continuity */}
        {activeTab === 'research' && (
          <div className="p-5 sm:p-6 rounded-xl bg-dark-400 border border-accent-violet/40 space-y-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-accent-mint font-semibold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Research Proposal Linkage // Russian Open Doors Scholarship</span>
            </div>

            <p className="text-content-secondary text-sm font-sans leading-relaxed">
              UniGuideBot served as the empirical foundation for my research proposal in the <strong className="text-white font-medium">Computer & Data Science / Applied Mathematics and AI track</strong> of the Open Doors Russian Scholarship Project.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-content-primary font-sans text-xs">
              <div className="p-3.5 rounded-lg bg-surface-elevated border border-surface-border space-y-1">
                <span className="font-mono text-accent-violet font-semibold text-[11px] block">
                  1. Multimodal Document Intelligence
                </span>
                <p className="text-content-secondary text-xs">
                  Transitioning from linear OCR text parsing to visual document foundation models that retain 2D geometric and tabular structure.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-surface-elevated border border-surface-border space-y-1">
                <span className="font-mono text-accent-mint font-semibold text-[11px] block">
                  2. Self-Verifying Agentic RAG
                </span>
                <p className="text-content-secondary text-xs">
                  Developing autonomous query-decomposition loops with temporal graph memory to resolve contradictory policies over time.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-content-muted text-[11px] border-t border-surface-border/60">
              <span>Targeting MSc/PhD Research at HSE, ITMO, MIPT, Skoltech, Innopolis</span>
              <span className="text-accent-mint font-medium">Ready for Academic Review</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
