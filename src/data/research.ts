import type { ResearchInterest } from '../types/portfolio';

export const researchInterests: ResearchInterest[] = [
  {
    title: "Trustworthy RAG & Citation Grounding",
    shortDesc: "Eliminating hallucination through verifiable citation boundaries and strict attribution constraints.",
    context: "Ensuring every generated response links directly to an exact document span.",
    keyQuestion: "How can retrieval architectures programmatically verify that answers strictly entail from retrieved evidence?"
  },
  {
    title: "Multimodal Document & Table Understanding",
    shortDesc: "Extracting structured semantics from scanned administrative PDFs, multi-column layouts, and nested fee tables.",
    context: "Preserving spatial table geometry where standard linear text chunking fails.",
    keyQuestion: "Can visual-language models preserve spatial geometry and tabular hierarchies in complex administrative documents?"
  },
  {
    title: "Agentic Retrieval & Self-Correction",
    shortDesc: "Multi-step reasoning loops that detect retrieval ambiguity and iteratively formulate precise sub-queries.",
    context: "Connecting policy rules across multiple amendments through iterative agent reasoning.",
    keyQuestion: "How can autonomous agent loops formulate search hypotheses and self-critique intermediate findings?"
  },
  {
    title: "Dynamic Knowledge Bases & Temporal Reasoning",
    shortDesc: "Managing conflicting rules in institutional corpora that evolve across academic sessions.",
    context: "Preventing outdated circulars from contaminating current policy responses.",
    keyQuestion: "How can vector representations inherently account for temporal validity and superseding documents?"
  }
];

export const proposedResearch = {
  title: "Self-Verifying Agentic RAG for Trustworthy Reasoning over Dynamic Knowledge Bases",
  focus: "Proposed Master's Research Direction // Open Doors Scholarship Candidate",
  problemStatement: "Current RAG systems fail when deployed on institutional knowledge bases characterized by scanned PDF layouts, multi-column tables, and evolving historical policies. My proposed research investigates autonomous verification mechanisms, structure-aware ingestion, and temporal reasoning to guarantee factual, citation-backed answers.",
  methodologySteps: [
    {
      step: "01 // Ingestion",
      title: "Structure-Aware Document Parsing",
      desc: "Investigating layout-aware models and visual embeddings for complex multi-column pages and tables.",
      status: "Proposed Investigation"
    },
    {
      step: "02 // Retrieval",
      title: "Hybrid Search & Neural Rerank",
      desc: "Combining lexical BM25 matching with dense embeddings and CrossEncoder token-level interaction reranking.",
      status: "Implemented in Prototype"
    },
    {
      step: "03 // Reasoning",
      title: "Agentic Query Decomposition",
      desc: "Investigating multi-step query decomposition to break compound policy questions into atomic checks.",
      status: "Future Research Scope"
    },
    {
      step: "04 // Verification",
      title: "Self-Critique & Contradiction Detection",
      desc: "Scoring output entailment against retrieved citation spans and detecting temporal conflicts before rendering.",
      status: "Proposed Investigation"
    },
    {
      step: "05 // Synthesis",
      title: "Calibrated Evidence-Attributed Output",
      desc: "Generating verifiable answers with direct page anchors, accompanied by calibrated abstention when evidence is insufficient.",
      status: "Proposed Focus"
    }
  ],
  longTermQuote: "I want to develop AI systems that do more than generate fluent text. I want to investigate how they can understand complex documents, identify supporting evidence, recognize uncertainty, and respond reliably when information changes."
};

export const targetUniversities = [
  {
    name: "HSE University (Higher School of Economics)",
    focus: "Faculty of Computer Science // Machine Learning & Data Science",
    city: "Moscow"
  },
  {
    name: "ITMO University",
    focus: "School of Translational Information Technologies // Applied AI",
    city: "St. Petersburg"
  },
  {
    name: "MIPT (Moscow Institute of Physics and Technology)",
    focus: "Phystech School of Applied Mathematics and Informatics (FAMI)",
    city: "Dolgoprudny"
  },
  {
    name: "Innopolis University",
    focus: "Institute of Artificial Intelligence // Data Science & Robotics",
    city: "Innopolis"
  }
];

export const careerAspirations = [
  {
    stage: "01 // CURRENT",
    title: "Engineering & Applied Systems",
    timeline: "BS CS Graduate Phase",
    focus: "Full-Stack & Intelligent Retrieval",
    description: "Building production web applications at ITNEXUS, writing performant APIs, and evaluating neural RAG pipelines."
  },
  {
    stage: "02 // NEXT",
    title: "Master's Research in Russia",
    timeline: "Open Doors Track (2026+)",
    focus: "MSc in Computer Science / Artificial Intelligence",
    description: "Targeting postgraduate studies via the Open Doors International Olympiad to investigate document understanding, verifiable reasoning, and temporal retrieval."
  },
  {
    stage: "03 // FUTURE",
    title: "Trustworthy AI Research",
    timeline: "Research & Industry Career",
    focus: "AI Research & Systems Engineer",
    description: "Designing verifiable, hallucination-resistant AI systems that solve high-stakes information problems in academic, scientific, and enterprise domains."
  }
];
