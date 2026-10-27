import type { ResearchInterest } from '../types/portfolio';

export const researchInterests: ResearchInterest[] = [
  {
    title: "Trustworthy RAG & Citation Grounding",
    shortDesc: "Eliminating hallucination through verifiable citation boundaries and attribution scoring.",
    context: "Ensuring every generated response links directly to an exact document span.",
    keyQuestion: "How can retrieval architectures programmatically verify that answers strictly entail from retrieved evidence?"
  },
  {
    title: "Multimodal Document & Table Understanding",
    shortDesc: "Extracting structured semantics from scanned PDFs, nested tables, and circulars.",
    context: "Preserving spatial table layouts where standard linear text chunking fails.",
    keyQuestion: "Can visual-language models preserve spatial geometry and tabular hierarchies in complex PDFs?"
  },
  {
    title: "Agentic Retrieval & Self-Correction",
    shortDesc: "Multi-step reasoning agents that detect retrieval ambiguity and refine sub-queries.",
    context: "Chaining policy rules across multiple amendments through iterative agent loops.",
    keyQuestion: "How can autonomous agent loops formulate search hypotheses and self-critique intermediate findings?"
  },
  {
    title: "Dynamic Knowledge Bases & Temporal Reasoning",
    shortDesc: "Managing conflicting rules in knowledge corpora that evolve across semesters.",
    context: "Preventing outdated circulars from contaminating current policy responses.",
    keyQuestion: "How can vector representations inherently account for temporal validity and superseding documents?"
  }
];

export const proposedResearch = {
  title: "Self-Verifying Agentic RAG over Dynamic Knowledge Bases",
  focus: "Proposed Research Focus // Russian Open Doors Scholarship & Postgraduate Studies",
  problemStatement: "Current RAG systems fail when deployed on institutional knowledge bases characterized by scanned PDF layouts and changing historical rules. My research investigates autonomous verification mechanisms to guarantee factual, citation-backed answers.",
  methodologySteps: [
    {
      step: "01 // Ingestion",
      title: "Visual-Semantic Chunking",
      desc: "Parsing multi-column pages and tables using layout-aware visual embeddings."
    },
    {
      step: "02 // Retrieval",
      title: "Hybrid Search & Rerank",
      desc: "Combining BM25 keyword matching with dense Pinecone vector embeddings and CrossEncoder reranking."
    },
    {
      step: "03 // Reasoning",
      title: "Query Decomposition",
      desc: "Deconstructing complex questions into verifiable atomic sub-queries across documents."
    },
    {
      step: "04 // Verification",
      title: "Self-Critique & Attribution",
      desc: "Scoring output faithfulness against retrieved citations before rendering answers."
    },
    {
      step: "05 // Synthesis",
      title: "Evidence-Attributed Output",
      desc: "Producing concise answers with direct page anchors and explicit confidence flags."
    }
  ],
  longTermQuote: "I want to develop AI systems that do more than generate fluent text. I want to investigate how they can understand complex documents, identify supporting evidence, recognize uncertainty, and respond reliably when information changes."
};

export const careerAspirations = [
  {
    stage: "01 // NOW",
    title: "Build and Ship",
    timeline: "Current Phase",
    focus: "MERN Stack & Scalable Systems",
    description: "Building production web applications at ITNEXUS, writing performant APIs, and contributing to reliable cloud architectures."
  },
  {
    stage: "02 // NEXT",
    title: "Study and Investigate",
    timeline: "Postgraduate Phase",
    focus: "MSc in Artificial Intelligence",
    description: "Pursuing graduate research via the Russian Open Doors Scholarship to master neural retrieval, multimodal learning, and automated reasoning."
  },
  {
    stage: "03 // LONG TERM",
    title: "Build Trustworthy AI",
    timeline: "Research & Industry Career",
    focus: "Applied AI Research Engineer",
    description: "Designing verifiable, hallucination-resistant AI systems that solve high-stakes information problems in academic and enterprise domains."
  }
];
