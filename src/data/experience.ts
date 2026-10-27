import type { Experience } from '../types/portfolio';

export const experienceData: Experience[] = [
  {
    id: "itnexus",
    company: "ITNEXUS",
    role: "MERN Stack Developer",
    location: "Pakistan",
    type: "Employment",
    period: "2025 — Present",
    startDate: "2025",
    endDate: "Present",
    description: "Engineering client-facing web applications and internal tools with React, Node.js, Express, and MongoDB.",
    outcomes: [
      "Architect responsive React interfaces integrated with secure, authenticated REST APIs.",
      "Design MongoDB data models and aggregation pipelines for high query efficiency.",
      "Collaborate in sprint cycles, code reviews, and production releases."
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Tailwind CSS", "Git"]
  },
  {
    id: "xenova-soft",
    company: "Xenova Soft",
    role: "Junior Web Developer (MERN)",
    location: "Islamabad, Pakistan",
    type: "Employment",
    period: "Jul 2025 — Sep 2025",
    startDate: "Jul 2025",
    endDate: "Sep 2025",
    description: "Contributed full-stack features to client web platforms in an agile development team.",
    outcomes: [
      "Built modular React components and backend routes with JWT authentication.",
      "Participated in daily standups, code reviews, and bug resolution sprints."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Git", "REST APIs"]
  },
  {
    id: "uet-launchpad",
    company: "Career Launchpad",
    role: "MERN Stack Intern",
    location: "UET Mardan",
    type: "Internship",
    period: "Apr 2025 — Jun 2025",
    startDate: "Apr 2025",
    endDate: "Jun 2025",
    description: "Hands-on full-stack development internship focused on end-to-end web architectures.",
    outcomes: [
      "Developed full-stack CRUD applications with asynchronous state management.",
      "Completed final project evaluation with high marks for code quality."
    ],
    technologies: ["JavaScript (ES6+)", "React", "Node.js", "Express", "MongoDB"]
  },
  {
    id: "desc-cloud",
    company: "DESC Program",
    role: "Cloud Computing & DevOps Trainee",
    location: "Pakistan",
    type: "Training",
    period: "2024 — 2025",
    startDate: "2024",
    endDate: "2025",
    description: "Specialized training in cloud infrastructure, containerization, and modern deployments.",
    outcomes: [
      "Built multi-stage Docker containers and basic Kubernetes manifests.",
      "Automated build and deployment workflows using CI/CD and AWS basics."
    ],
    technologies: ["Docker", "Kubernetes", "AWS Basics", "Terraform", "Linux"]
  }
];
