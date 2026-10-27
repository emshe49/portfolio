import type { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: "uniguidebot",
    title: "UniGuideBot",
    subtitle: "AI Academic Policy Assistant (RAG Pipeline)",
    category: "AI & RAG",
    description: "Final Year Project at UET Mardan: an evidence-grounded Retrieval-Augmented Generation (RAG) assistant using Pinecone vector search and CrossEncoder neural reranking to answer policy and admission queries from official university prospectuses without hallucination.",
    problem: "Vanilla LLMs hallucinate deadlines and misquote quota rules when parsing complex, multi-column university prospectuses.",
    solution: "Designed a two-stage neural retrieval pipeline with CrossEncoder reranking and strict citation constraints.",
    features: [
      "Two-stage neural retrieval with Pinecone and CrossEncoder reranking",
      "Strict negative constraints: refuses speculation when evidence is absent",
      "Admin portal for indexing and vectorizing new notices",
      "Curated 49-query benchmark evaluation (UET_Mardan_Eval_Dataset)"
    ],
    role: "Lead Researcher & Developer (BS CS FYP, UET Mardan)",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "Pinecone Vector DB",
      "CrossEncoder",
      "Groq Llama-3",
      "MongoDB"
    ],
    image: "/images/projects/uniguidebot.svg",
    githubUrl: "https://github.com/emshe49/fyp-chatbot",
    featured: true
  },
  {
    id: "citizen-portal-devops",
    title: "Citizen Portal & DevOps Pipeline",
    subtitle: "Containerized Microservices & Kubernetes Deployment",
    category: "DevOps & Cloud",
    description: "A civic grievance reporting application containerized into modular microservices with multi-stage Docker builds, automated with Kubernetes manifests, and provisioned with Terraform infrastructure-as-code.",
    problem: "Monolithic public systems crash during sudden spikes in announcements due to tightly coupled services.",
    solution: "Decoupled into multi-stage Docker containers orchestrated with Kubernetes pods and health probes.",
    features: [
      "Multi-stage Docker builds reducing image sizes by over 60%",
      "Kubernetes deployment and service manifests with health checks",
      "Infrastructure automation scripts using Terraform"
    ],
    role: "DevOps Engineer",
    technologies: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Terraform",
      "Linux",
      "Node.js",
      "CI/CD"
    ],
    image: "/images/projects/devops.svg",
    githubUrl: "https://github.com/emshe49/citizenPortal-desc",
    featured: false
  },
  {
    id: "tree-management",
    title: "Tree Management System",
    subtitle: "Plantation Registry & Ecological Dashboard",
    category: "Full-Stack",
    description: "Web platform for recording tree plantation drives, survival tracking, and field inspection audits.",
    problem: "Decentralized manual registries prevented survival rate tracking across afforestation campaigns.",
    solution: "Centralized MERN dashboard with role-based access control (RBAC).",
    features: ["Role-Based Access Control", "Survival rate progress charts", "Filterable species directory"],
    role: "Full-Stack Developer",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "RBAC",
      "Data Visualization"
    ],
    image: "/images/projects/treemanagement.svg",
    liveUrl: "https://tree-project-frontend.vercel.app/",
    githubUrl: "https://github.com/emshe49/Final-Year-Project",
    featured: false
  },
  {
    id: "ecom-website",
    title: "E-Commerce Web Suite",
    subtitle: "Modern Storefront & State-Synchronized Cart",
    category: "Full-Stack",
    description: "Type-safe e-commerce web application featuring dynamic catalog filtering and optimistic cart updates.",
    problem: "State drift between client shopping carts and asynchronous backend inventory mutations.",
    solution: "Engineered strict TypeScript contracts with optimistic UI updates.",
    features: ["100% TypeScript type safety", "Optimistic cart synchronization", "Faceted product filtering"],
    role: "Full-Stack Developer",
    technologies: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    image: "/images/projects/ecommerce.svg",
    liveUrl: "https://ecom-website-client.vercel.app/",
    githubUrl: "https://github.com/emshe49/ecom_website",
    featured: false
  },
  {
    id: "facts-are-facts",
    title: "Facts Are Facts",
    subtitle: "Multimedia Podcast & Video Streaming Platform",
    category: "Full-Stack",
    description: "Production podcast and video streaming platform with chapter navigation and low-latency playback.",
    problem: "Direct server video uploads caused buffering and high bandwidth bills.",
    solution: "Shifted media delivery to YouTube API streaming while retaining custom MongoDB metadata.",
    features: ["YouTube streaming integration", "Dynamic chapter timestamps", "Custom domain with automated SSL"],
    role: "Full-Stack Engineer",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "YouTube API",
      "Cloudflare DNS"
    ],
    image: "/images/projects/factsarefacts.svg",
    liveUrl: "https://www.factsarefacts.live/",
    githubUrl: "https://github.com/emshe49/podcast-website",
    featured: false
  },
  {
    id: "blog-cms",
    title: "Editorial CMS & Blog",
    subtitle: "Markdown Publishing Engine with JWT Auth",
    category: "Full-Stack",
    description: "Lightweight technical publishing platform with markdown parsing and code syntax highlighting.",
    problem: "Heavy legacy CMS platforms inject bloated scripts and degrade reading performance.",
    solution: "Built a lightweight, typography-first publishing engine in Express and MongoDB.",
    features: ["Markdown parsing with syntax highlighting", "JWT-secured admin dashboard", "Instant tag search"],
    role: "Full-Stack Developer",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Auth",
      "Markdown Parser"
    ],
    image: "/images/projects/blogcms.svg",
    liveUrl: "https://cms-project-plum-five.vercel.app/",
    githubUrl: "https://github.com/emshe49/blog-app",
    featured: false
  }
];
