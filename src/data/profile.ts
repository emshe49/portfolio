import type { ProfileData } from '../types/portfolio';

export const profileData: ProfileData = {
  name: "Essa Raza",
  tagline: "FULL-STACK DEVELOPER & AI RESEARCH ENTHUSIAST",
  role: "MERN Stack Developer & Aspiring AI Researcher",
  email: "zk074909@gmail.com",
  phone: "+92 318 9764318",
  location: "Mardan / Charsadda",
  country: "Pakistan",
  github: "https://github.com/emshe49",
  linkedin: "https://www.linkedin.com/in/essa-raza-ba4b62243/",
  cvPdf: "/documents/Essa-Raza-CV.pdf",
  aboutStory: [
    "I'm a Computer Science graduate from UET Mardan and a full-stack engineer currently building production web apps at ITNEXUS. I specialize in the MERN stack, high-performance APIs, and practical AI integrations.",
    "While developing UniGuideBot, I became fascinated by the challenges of document understanding and RAG systems—specifically how to prevent hallucinations when querying complex, scanned PDFs. I'm now channeling this into postgraduate research, aiming for the Russian Open Doors Scholarship to build trustworthy, self-verifying retrieval systems."
  ],
  stats: [
    {
      value: "3.41",
      label: "BS CS CGPA",
      meta: "UET Mardan (2026)"
    },
    {
      value: "60+",
      label: "GitHub Repositories",
      meta: "Open-Source & Production"
    },
    {
      value: "92.6%",
      label: "RAG Context Recall",
      meta: "UniGuideBot Benchmark"
    },
    {
      value: "Production",
      label: "Live Deployed Apps",
      meta: "Serving Real Traffic"
    }
  ]
};
