import type { SkillCategory } from '../types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    title: "AI & Information Retrieval",
    identifier: "01",
    description: "Core focus for research and engineering: building grounded, verifiable intelligence pipelines.",
    skills: [
      { name: "Retrieval-Augmented Generation (RAG)", level: "Proficient", category: "AI" },
      { name: "Vector Search & Embeddings", level: "Proficient", category: "AI" },
      { name: "Pinecone Vector DB", level: "Proficient", category: "AI" },
      { name: "CrossEncoder Reranking", level: "Proficient", category: "AI" },
      { name: "LangChain / LangGraph", level: "Working", category: "AI" },
      { name: "LLM API Orchestration (Groq, OpenAI)", level: "Proficient", category: "AI" },
      { name: "Prompt Engineering & Guardrails", level: "Proficient", category: "AI" },
      { name: "ChromaDB", level: "Working", category: "AI" }
    ]
  },
  {
    title: "Languages & Core",
    identifier: "02",
    description: "Programming paradigms, typed abstractions, and algorithmic data structures.",
    skills: [
      { name: "JavaScript (ES6+)", level: "Advanced", category: "Languages" },
      { name: "TypeScript", level: "Proficient", category: "Languages" },
      { name: "Python", level: "Proficient", category: "Languages" },
      { name: "Java", level: "Working", category: "Languages" },
      { name: "SQL", level: "Proficient", category: "Languages" },
      { name: "C++", level: "Working", category: "Languages" }
    ]
  },
  {
    title: "Frontend Engineering",
    identifier: "03",
    description: "Building responsive, accessible, high-performance user interfaces.",
    skills: [
      { name: "React.js", level: "Advanced", category: "Frontend" },
      { name: "Next.js", level: "Working", category: "Frontend" },
      { name: "Tailwind CSS", level: "Advanced", category: "Frontend" },
      { name: "HTML5 & Semantic Web", level: "Advanced", category: "Frontend" },
      { name: "CSS3 & Modern Motion", level: "Advanced", category: "Frontend" },
      { name: "Bootstrap", level: "Proficient", category: "Frontend" },
      { name: "Responsive Architecture", level: "Advanced", category: "Frontend" }
    ]
  },
  {
    title: "Backend & Systems",
    identifier: "04",
    description: "Architecting modular microservices, REST APIs, and asynchronous workers.",
    skills: [
      { name: "Node.js", level: "Proficient", category: "Backend" },
      { name: "Express.js", level: "Proficient", category: "Backend" },
      { name: "FastAPI", level: "Proficient", category: "Backend" },
      { name: "RESTful API Design", level: "Advanced", category: "Backend" },
      { name: "Authentication (JWT, Sessions)", level: "Proficient", category: "Backend" },
      { name: "PHP & CodeIgniter", level: "Working", category: "Backend" }
    ]
  },
  {
    title: "Databases & Storage",
    identifier: "05",
    description: "Data modeling, indexing, relational normalization, and document schemas.",
    skills: [
      { name: "MongoDB & Mongoose", level: "Advanced", category: "Databases" },
      { name: "MySQL", level: "Proficient", category: "Databases" },
      { name: "PostgreSQL", level: "Working", category: "Databases" },
      { name: "Redis Caching", level: "Working", category: "Databases" }
    ]
  },
  {
    title: "DevOps & Cloud Tools",
    identifier: "06",
    description: "Deployment, orchestration, version control, and containerization.",
    skills: [
      { name: "Docker", level: "Proficient", category: "DevOps" },
      { name: "Kubernetes (K8s)", level: "Working", category: "DevOps" },
      { name: "Git & GitHub Workflows", level: "Advanced", category: "DevOps" },
      { name: "AWS Cloud Fundamentals", level: "Working", category: "DevOps" },
      { name: "CI/CD Pipelines", level: "Working", category: "DevOps" },
      { name: "Vercel & Cloud Deployments", level: "Advanced", category: "DevOps" }
    ]
  }
];
