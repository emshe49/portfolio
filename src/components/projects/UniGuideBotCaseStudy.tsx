import React, { useState } from 'react';
import { ArrowRight, Bot, Cpu, Database, FileText, Filter, GitFork, Layers, ShieldCheck, Sparkles, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const UniGuideBotCaseStudy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'evaluation' | 'challenges' | 'research'>('architecture');

  const evalMetrics = [
    { label: "Faithfulness", value: "0.9126", desc: "Answers strictly entailed by retrieved context spans", tool: "LangSmith / Ragas metric" },
    { label: "Context Recall", value: "0.9262", desc: "Retrieved chunks contain all necessary policy clauses", tool: "Reference-grounded recall" },
    { label: "Context Precision", value: "0.9027", desc: "Top reranked chunks directly relevant to query", tool: "Ranked signal-to-noise ratio" },
    { label: "Answer Relevancy", value: "0.8992", desc: "Generated response directly addresses inquiry", tool: "Semantic query alignment" },
    { label: "Correctness", value: "0.9026", desc: "Factual agreement with official university prospectus", tool: "Institutional rule match" },
  ];

  return (
    <div id="uniguidebot-study" className="rounded-2xl bg-surface-elevated border border-surface-border overflow-hidden shadow-2xl mb-16">
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
                  RESEARCH-ORIENTED FINAL YEAR PROJECT // UET MARDAN
                </span>
                <Badge variant="mint" size="sm">49-Query Benchmark</Badge>
                <Badge variant="violet" size="sm">BS CS FYP</Badge>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white tracking-tight">
                UniGuideBot: AI-Powered Academic Policy Assistant
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
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
        </div>

        <p className="text-content-secondary text-sm sm:text-base leading-relaxed max-w-4xl">
          An evidence-grounded Retrieval-Augmented Generation (RAG) assistant developed as my Final Year Project at UET Mardan. Engineered to help students and staff query complex admissions criteria, quota breakdowns, and institutional policies with citation traceability.
        </p>

        {/* Accessible Tab Switcher */}
        <div role="tablist" aria-label="UniGuideBot Case Study Tabs" className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-surface-border/60">
          <button
            role="tab"
            id="tab-architecture"
            aria-controls="panel-architecture"
            aria-selected={activeTab === 'architecture'}
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
            role="tab"
            id="tab-evaluation"
            aria-controls="panel-evaluation"
            aria-selected={activeTab === 'evaluation'}
            onClick={() => setActiveTab('evaluation')}
            className={`font-mono text-xs px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'evaluation'
                ? 'bg-accent-violet text-dark-900 font-semibold shadow-glow-violet'
                : 'text-content-secondary hover:text-white hover:bg-white/5'
            }`}
          >
            02 // 49-Query Evaluation Panel
          </button>
          <button
            role="tab"
            id="tab-challenges"
            aria-controls="panel-challenges"
            aria-selected={activeTab === 'challenges'}
            onClick={() => setActiveTab('challenges')}
            className={`font-mono text-xs px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'challenges'
                ? 'bg-accent-violet text-dark-900 font-semibold shadow-glow-violet'
                : 'text-content-secondary hover:text-white hover:bg-white/5'
            }`}
          >
            03 // Observed Document Limitations
          </button>
          <button
            role="tab"
            id="tab-research"
            aria-controls="panel-research"
            aria-selected={activeTab === 'research'}
            onClick={() => setActiveTab('research')}
            className={`font-mono text-xs px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'research'
                ? 'bg-accent-violet text-dark-900 font-semibold shadow-glow-violet'
                : 'text-content-secondary hover:text-white hover:bg-white/5'
            }`}
          >
            04 // Master's Research Continuity
          </button>
        </div>
      </div>

      {/* Tab Content Body */}
      <div className="p-6 sm:p-8">
        {/* Tab 1: Architecture */}
        {activeTab === 'architecture' && (
          <div role="tabpanel" id="panel-architecture" aria-labelledby="tab-architecture" className="space-y-6">
            <div className="p-4 sm:p-6 rounded-xl bg-dark-400 border border-surface-border overflow-x-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-3 min-w-[700px]">
                <div className="flex-1 p-3 rounded-lg bg-surface-elevated border border-surface-border text-center">
                  <FileText className="w-4 h-4 text-accent-violet mx-auto mb-1.5" />
                  <div className="font-mono text-xs text-white font-semibold">1. Ingestion</div>
                  <div className="text-[10px] text-content-muted">PDF Text Chunking (PyPDF)</div>
                </div>

                <ArrowRight className="w-3.5 h-3.5 text-content-muted hidden md:block" />

                <div className="flex-1 p-3 rounded-lg bg-surface-elevated border border-surface-border text-center">
                  <Layers className="w-4 h-4 text-accent-violet mx-auto mb-1.5" />
                  <div className="font-mono text-xs text-white font-semibold">2. Dense Vectors</div>
                  <div className="text-[10px] text-content-muted">all-MiniLM-L6-v2 Embeddings</div>
                </div>

                <ArrowRight className="w-3.5 h-3.5 text-content-muted hidden md:block" />

                <div className="flex-1 p-3 rounded-lg bg-surface-elevated border border-surface-border text-center">
                  <Database className="w-4 h-4 text-accent-violet mx-auto mb-1.5" />
                  <div className="font-mono text-xs text-white font-semibold">3. Candidate Recall</div>
                  <div className="text-[10px] text-content-muted">Pinecone Vector Index (Top-15)</div>
                </div>

                <ArrowRight className="w-3.5 h-3.5 text-content-muted hidden md:block" />

                <div className="flex-1 p-3 rounded-lg bg-surface-elevated border border-accent-mint/50 text-center shadow-glow-mint">
                  <Filter className="w-4 h-4 text-accent-mint mx-auto mb-1.5" />
                  <div className="font-mono text-xs text-accent-mint font-semibold">4. Neural Reranking</div>
                  <div className="text-[10px] text-content-muted">CrossEncoder ms-marco (Top-3)</div>
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
                  <div className="font-mono text-xs text-white font-semibold">6. Grounded Answer</div>
                  <div className="text-[10px] text-content-muted">Strict Citation Attribution</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-dark-400 border border-surface-border space-y-1.5">
                <span className="text-accent-violet font-semibold flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5" />
                  TWO-STAGE NEURAL RETRIEVAL RATIONALE
                </span>
                <p className="text-content-secondary font-sans leading-relaxed text-xs">
                  Bi-encoder vector search provides fast sub-linear candidate recall over Pinecone but computes embeddings for queries and chunks independently. Routing the top-15 retrieved candidates through a CrossEncoder performs full token-to-token cross-attention, filtering out false positives and supplying the LLM with the most contextually relevant passages.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-dark-400 border border-surface-border space-y-1.5">
                <span className="text-accent-mint font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  NEGATIVE CONSTRAINTS & ABSTENTION LOGIC
                </span>
                <p className="text-content-secondary font-sans leading-relaxed text-xs">
                  Institutional policies (admission quotas, deadlines, fee brackets) carry high stakes. When retrieved context does not contain sufficient factual evidence to answer a student's query, calibrated negative prompts instruct the model to explicitly abstain and direct the applicant to official departmental channels.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-elevated border border-surface-border flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-content-muted">
              <span>Supporting Infrastructure: Express.js Admin Portal for Document Indexing &bull; MongoDB Query Logging &bull; FastAPI Backend</span>
              <span className="text-accent-mint font-medium">Implemented Architecture</span>
            </div>
          </div>
        )}

        {/* Tab 2: Evaluation Panel */}
        {activeTab === 'evaluation' && (
          <div role="tabpanel" id="panel-evaluation" aria-labelledby="tab-evaluation" className="space-y-6">
            <div>
              <div className="font-mono text-xs text-accent-violet font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Empirical Evaluation: UET_Mardan_Eval_Dataset (49 Curated Queries)</span>
              </div>
              <p className="text-content-secondary text-sm font-sans leading-relaxed">
                Reported automated evaluation scores gathered across 49 representative policy, admission, and quota questions grounded against official UET Mardan prospectuses. These metrics represent experimental results under controlled queries rather than universal production guarantees.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {evalMetrics.map((m) => (
                <div key={m.label} className="p-4 rounded-xl bg-dark-400 border border-surface-border text-center font-mono">
                  <div className="text-2xl sm:text-3xl font-display font-bold text-accent-violet mb-1 tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-xs text-white font-semibold mb-0.5">
                    {m.label}
                  </div>
                  <div className="text-[10px] text-content-muted mb-2 leading-tight">
                    {m.desc}
                  </div>
                  <span className="inline-block px-1.5 py-0.5 rounded bg-surface border border-surface-border text-[9px] text-accent-mint font-medium">
                    {m.tool}
                  </span>
                </div>
              ))}
            </div>

            {/* Scientific Details Panel */}
            <div className="p-4 sm:p-5 rounded-xl bg-dark-400 border border-surface-border space-y-3 font-mono text-xs">
              <div className="text-white font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-mint" />
                <span>Evaluation Methodology & Boundary Details</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-content-secondary font-sans">
                <div className="space-y-1.5 p-3 rounded-lg bg-surface border border-surface-border">
                  <span className="font-mono text-xs text-accent-mint font-semibold block">Dataset Composition:</span>
                  <p className="text-xs leading-relaxed">
                    Comprises 49 queries spanning departmental eligibility quotas (open merit, provincial quotas, self-finance), fee installment schedules, hostel allotment rules, and grade repeat regulations compiled from official prospectus chapters.
                  </p>
                </div>

                <div className="space-y-1.5 p-3 rounded-lg bg-surface border border-surface-border">
                  <span className="font-mono text-xs text-accent-violet font-semibold block">Evaluation Tooling:</span>
                  <p className="text-xs leading-relaxed">
                    Evaluated using LangSmith and automated Ragas-style metrics for context precision, context recall, faithfulness, and answer correctness to measure citation fidelity against ground-truth document excerpts.
                  </p>
                </div>
              </div>

              <p className="text-[11px] text-content-muted font-mono pt-1">
                Note on Baseline Claims: No controlled comparative experiments against a vanilla RAG baseline were recorded; therefore, all comparative delta figures have been omitted to maintain strict scientific integrity.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Observed Limitations */}
        {activeTab === 'challenges' && (
          <div role="tabpanel" id="panel-challenges" aria-labelledby="tab-challenges" className="space-y-6">
            <div>
              <div className="font-mono text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Observed Failure Modes & Document Engineering Bottlenecks</span>
              </div>
              <p className="text-content-secondary text-sm font-sans leading-relaxed">
                Developing UniGuideBot revealed critical technical limitations in off-the-shelf document extraction and vector search. Rather than hiding these bottlenecks, they serve as the direct empirical motivation for my proposed Master's research in document intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-dark-400 border border-surface-border space-y-3">
                <div className="w-8 h-8 rounded-lg bg-amber-400/15 flex items-center justify-center text-amber-400">
                  <FileText className="w-4 h-4" />
                </div>
                <h5 className="font-display font-semibold text-white text-sm">1. OCR Degradation on Scanned Circulars</h5>
                <p className="text-content-secondary text-xs leading-relaxed font-sans">
                  Institutional notifications in public universities often circulate as low-resolution scanned image PDFs. Experiments with Tesseract and OpenCV preprocessing struggled with noisy backgrounds and skewed text, resulting in missing tokens and retrieval silence unless clean digital originals were available.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-dark-400 border border-surface-border space-y-3">
                <div className="w-8 h-8 rounded-lg bg-amber-400/15 flex items-center justify-center text-amber-400">
                  <Layers className="w-4 h-4" />
                </div>
                <h5 className="font-display font-semibold text-white text-sm">2. Tabular Slicing in Fee Schedules</h5>
                <p className="text-content-secondary text-xs leading-relaxed font-sans">
                  Fixed-size chunking strategies indiscriminately cut across multi-column tables. A single chunk would frequently retain fee amounts while dropping department headers or semester indicators, causing semantic vector collapse. Structured table extraction remained an unresolved engineering challenge.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-dark-400 border border-surface-border space-y-3">
                <div className="w-8 h-8 rounded-lg bg-amber-400/15 flex items-center justify-center text-amber-400">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <h5 className="font-display font-semibold text-white text-sm">3. Temporal Rule Inconsistencies</h5>
                <p className="text-content-secondary text-xs leading-relaxed font-sans">
                  Annual amendments supersede older admission quotas. Standard dense vector embeddings retrieved historical circulars because their keyword overlap was high, lacking the temporal reasoning necessary to identify whether a policy document was active or superseded.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-elevated border border-accent-violet/30 flex items-center justify-between gap-4 font-mono text-xs">
              <span className="text-content-primary">
                Research Pivot: These three concrete failure modes define the problem scope of my proposed Master's thesis.
              </span>
              <button
                onClick={() => setActiveTab('research')}
                className="text-accent-mint hover:underline font-semibold shrink-0"
              >
                View Proposed Direction &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Tab 4: Master's Research Continuity */}
        {activeTab === 'research' && (
          <div role="tabpanel" id="panel-research" aria-labelledby="tab-research" className="p-5 sm:p-6 rounded-xl bg-dark-400 border border-accent-violet/40 space-y-5 font-mono text-xs">
            <div className="flex items-center gap-2 text-accent-mint font-semibold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Research Continuity // Open Doors International Olympiad Candidate</span>
            </div>

            <p className="text-content-secondary text-sm font-sans leading-relaxed">
              UniGuideBot served as my practical sandbox for information retrieval. For my Master's studies in Russia through the Open Doors Olympiad (Computer & Data Science / Applied Mathematics and AI track), I aim to extend this foundation into rigorous scientific research on verifiable language reasoning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-content-primary font-sans text-xs">
              <div className="p-4 rounded-lg bg-surface-elevated border border-surface-border space-y-2">
                <span className="font-mono text-accent-violet font-semibold text-xs block">
                  1. Structure-Aware Document Intelligence
                </span>
                <p className="text-content-secondary text-xs leading-relaxed">
                  Transitioning from naive linear text extraction to layout-aware visual document representations that understand 2D geometries, table headers, and scanned administrative artifacts.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-surface-elevated border border-surface-border space-y-2">
                <span className="font-mono text-accent-mint font-semibold text-xs block">
                  2. Self-Verifying Agentic RAG Loops
                </span>
                <p className="text-content-secondary text-xs leading-relaxed">
                  Developing autonomous query-decomposition loops with temporal graph memory to detect contradictory policies and enforce programmatic citation entailment before generation.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-surface border border-surface-border space-y-2">
              <span className="font-mono text-white font-semibold text-xs block">
                Target Russian Universities (Open Doors Track):
              </span>
              <p className="text-content-secondary text-xs font-sans">
                Seeking admission to leading institutions such as <strong className="text-white">HSE University</strong>, <strong className="text-white">ITMO University</strong>, <strong className="text-white">MIPT</strong>, and <strong className="text-white">Innopolis University</strong> to pursue graduate coursework in neural information retrieval, machine learning, and natural language processing.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
