import { ProfileData } from "@/types";

export const profileData: ProfileData = {
  name: "Salman Siddiq Shovo",
  initials: "SS",
  role: "Frontend Developer",
  badge: "Available for Opportunities",
  tagline: "Crafting modern, accessible, and high-performance web applications with clean code and thoughtful design.",
  bio: [
    "I am a passionate junior frontend developer and Computer Science & Engineering student at Daffodil International University.",
    "I focus on creating fluid user experiences using React, Next.js, TypeScript, and modern styling solutions like Tailwind CSS.",
    "Driven by continuous learning, I love transforming complex ideas into elegant, maintainable digital products."
  ],
  university: "B.Sc. in CSE, Daffodil International University",
  location: "Dhaka, Bangladesh",
  languages: ["Bangla", "English"],
  email: "salmansiddikshovo@gmail.com",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/me.jpg",
  githubUsername: "salmansiddikshovo",
  stats: [
    { label: "Years Learning", value: "3+", icon: "clock" },
    { label: "GitHub Repositories", value: "20+", icon: "code" },
    { label: "Commit Consistency", value: "Daily", icon: "activity" },
    { label: "Focus & Dedication", value: "100%", icon: "award" }
  ],
  socialLinks: [
    {
      platform: "github",
      name: "GitHub",
      url: "https://github.com/salmansiddikshovo",
      ariaLabel: "Visit Salman Siddiq Shovo on GitHub"
    },
    {
      platform: "linkedin",
      name: "LinkedIn",
      url: "https://linkedin.com/in/salman-shovo-a307912a1",
      ariaLabel: "Connect with Salman Siddiq Shovo on LinkedIn"
    },
    {
      platform: "facebook",
      name: "Facebook",
      url: "https://facebook.com/salmansiddik.shovo",
      ariaLabel: "Follow Salman Siddiq Shovo on Facebook"
    },
    {
      platform: "instagram",
      name: "Instagram",
      url: "https://instagram.com/salman_siddik_shovo_official",
      ariaLabel: "Follow Salman Siddiq Shovo on Instagram"
    }
  ],
  education: [
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "Daffodil International University",
      year: "2021 – Present",
      gpa: "In Progress",
      details: "Focusing on software engineering principles, algorithms, data structures, and web technologies."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Milestone College",
      year: "2020",
      gpa: "GPA 4.87 / 5.00",
      details: "Science Group. Rigorous foundation in mathematics, physics, and computer studies."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Sristy Academic College",
      year: "2018",
      gpa: "GPA 4.61 / 5.00",
      details: "Science Group with strong academic achievement in sciences and mathematics."
    }
  ],
  // Empty array as per PRD: renders nothing when the list is empty, so no blank heading appears
  experience: [],
  skillCategories: [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript (ES6+)", level: 88 },
        { name: "TypeScript", level: 82 },
        { name: "React.js", level: 88 },
        { name: "Next.js (App Router)", level: 82 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      category: "Data Fetching & State",
      skills: [
        { name: "TanStack Query", level: 80 },
        { name: "Axios", level: 88 },
        { name: "Context API", level: 85 },
        { name: "REST APIs", level: 86 }
      ]
    },
    {
      category: "Tools & Workflow",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 86 },
        { name: "VS Code", level: 90 },
        { name: "npm / Bun", level: 85 },
        { name: "Figma (UI Implementation)", level: 80 }
      ]
    }
  ]
};
