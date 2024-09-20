import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import zapeir_ss from "@/public/zapier.png"
import ecom from "@/public/merns.png"
import exchange from "@/public/exchange.png"
import imageecom from "@/public/nextjs-ecom.png"
import imagepaytm from "@/public/paytm-clone.png"
import imagefood from "@/public/food-using-react.png"
import imagegym from "@/public/gym-app-react.png"
import imagemedium from "@/public/medium.png"
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BSc IT",
    location: "Mahendra Pratap Sharada Prasad Singh College, Mumbai University",
    description: "Completed a Bachelor of Science in Information Technology from Mumbai University, gaining foundational knowledge in IT and software development.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "MCA",
    location: "LATE BHAUSAHEB HIRAY S.S. Trust’s Institute of Computer Application, Mumbai University",
    description: "Completed a Master of Computer Applications from Mumbai University, focusing on advanced programming, database management, and software engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Full Stack Developer",
    location: "Fusion Web Dynamics, Mumbai",
    description: "Currently working as a Full Stack Developer, focusing on the MERN stack and Next.js. Responsibilities include developing and maintaining web applications, optimizing performance, and integrating features.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2023 – Present",
  },
] as const;

export const projectsData = [
  {
    title: "Zapier-like Platform",
    description:
      "An automation platform using Next.js and Apache Kafka for integrating services and automating workflows.",
    tags: ["Next.js", "Apache Kafka", "TypeScript", "Prisma", "Tailwind"],
    imageUrl: zapeir_ss,
    repository: "https://github.com/abressiddique/zapier-project.git",
  },
  {
    title: "E-commerce Website",
    description:
      "A MERN stack e-commerce site with a custom admin section for product and order management.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Redux", "Tailwind"],
    imageUrl: ecom,
    repository: "https://github.com/abressiddique/ecommerce-merns.git",
  },
  {
    title: "Next.js E-commerce App",
    description:
      "A feature-rich Next.js e-commerce application featuring product listings, user authentication, shopping cart functionality, and an admin dashboard. .",
    tags: ["Next.js", "Tailwind CSS", "Zustand", "TypeScript"],
    imageUrl: imageecom, // Replace with the actual image variable
    repository: "https://github.com/abressiddique/ecommerce-next-js.git",
  },
  {
    title: "Comprehensive Trading Platform",
    description:
      "A trading platform for real-time trading and market data visualization, with frontend and backend components.",
    tags: ["Next.js", "Redis", "TypeScript", "Prisma", "Tailwind"],
    imageUrl: exchange,
    repository: "https://github.com/abressiddique/EXCHANGE-FULL-STACK.git",
  },
  {
    title: "Paytm Clone",
    description:
      "A comprehensive platform that integrates payment processing, bank webhooks, and merchant and user applications using Next.js, Express.js, and TypeScript.",
    tags: ["Next.js", "Express.js", "TypeScript", "Recoil", "Tailwind CSS"],
    imageUrl: imagepaytm, // Replace with the actual image variable
    repository: "https://github.com/abressiddique/paytm_clone.git",
  },
  {
    title: "Medium Clone",
    description:
      "A full-stack blogging platform that mimics Medium's functionality, featuring a backend service using Hono and Prisma, and a frontend built with React and Vite, allowing users to create and read articles.",
    tags: ["Next.js", "Prisma", "Tailwind", "TypeScript", "Cloudflare Workers"],
    imageUrl: imagemedium, // Replace with the actual image variable
    repository: "https://github.com/abressiddique/medium-clone.git",
  },
  {
  title: "Food App using React",
  description: "A recipe app built with React, allowing users to browse, search, and save their favorite recipes, as well as add items to their cart.",
  tags: ["React", "Tailwind", "Node.js"],
  imageUrl: imagefood, // Replace with the actual image variable
  repository: "https://github.com/abressiddique/food-app.git",
},
  {
    title: "Swoley Fit",
    description: "Swoley Fit is a modern fitness app built with React and Vite. It allows users to track workouts, routines, and nutrition while utilizing Tailwind CSS for styling and ESLint for code quality.",
    tags: ["React", "Vite", "Tailwind CSS", "Node.js", "MongoDB"],
    imageUrl: imagegym, // Replace with the actual image variable
    repository: "https://github.com/abressiddique/gym-website.git",
  }
] as const;



export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Data Structures & Algorithms (DSA)",
  "MongoDB",
  "Express.js",
  "React.js",
  "Redux",
  "Node.js",
  "Next.js",
  "State Management (Recoil, Context API)",
  "Custom Hooks",
  "NextAuth Authentication",
  "SSR",
  "SSG",
  "Responsive Design with Tailwind CSS",
  "TypeScript",
  "Prisma ORM (PostgreSQL)",
  "REST APIs",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Apache Kafka",
  "Express.js",
  "Webhooks",
  "Middleware",
  "Global Error Handling",
  "JWT",
  "Axios",
  "Serverless Functions",
  "Auth Using Cookies",
  "Singleton Pattern",
  "Horizontal Scaling",
  "Vertical Scaling",
  "CAP Theorem",
  "Docker",
  "Postman"
] as const;

