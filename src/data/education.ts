import type { Education } from '../types/portfolio';

export const educationData: Education[] = [
  {
    id: "bs-cs",
    degree: "BS Computer Science",
    institution: "University of Engineering and Technology (UET) Mardan",
    period: "2022 — 2026",
    status: "Graduating 2026",
    cgpa: "3.41 / 4.00",
    description: "Specialized in Artificial Intelligence, Distributed Systems, Database Architecture, and Algorithms.",
    highlights: [
      "Final Year Project: UniGuideBot — Grounded RAG chatbot for academic document retrieval.",
      "Core Courses: Artificial Intelligence, Data Structures & Algorithms, OS, DBMS, Networks.",
      "Departmental academic standing: 3.41 CGPA across 8 semesters."
    ]
  },
  {
    id: "fsc-cs",
    degree: "FSc Pre-Engineering / Computer Science",
    institution: "New Muslim College, Charsadda",
    period: "2020 — 2022",
    status: "Completed",
    description: "Foundational education in Computer Science, Mathematics, and Analytical Physics.",
    highlights: [
      "Intermediate qualification in Computer Science and Mathematics."
    ]
  }
];

export const certificationsData = [
  {
    title: "React JS Core & Advanced Patterns",
    issuer: "Sheryians Coding School",
    skills: "React, Hooks, State Architecture, Modern Web",
    date: "2024"
  },
  {
    title: "MERN Stack Professional Certification",
    issuer: "Career Launch Pad — UET Mardan",
    skills: "MongoDB, Express, React, Node.js, REST APIs",
    date: "2025"
  },
  {
    title: "Cloud Computing & Containerization Track",
    issuer: "DESC Cloud Training Program",
    skills: "Docker, Kubernetes, AWS Basics, Linux",
    date: "2025"
  }
];
