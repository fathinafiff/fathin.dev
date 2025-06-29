import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Fathin Afif",
  initials: "FA",
  url: "https://fathin.dev",
  location: "Aceh, Indonesia",
  locationLink: "https://www.google.com/maps/place/Aceh",
  description:
    "a guy in 20’s, building apps. chasing freedom. now also very active on X.",
  summary:
    "At the mid of 2025, I quit my job then go to work as a freelancer and start building and scaling my own Product. In the past, [I pursued a degree in Engineering](/#education)",
  avatarUrl: "/me.png",
  skills: [
    // Languages
    "Python",
    "TypeScript",
    "JavaScript",

    // Backend & APIs
    "FastAPI",
    "Flask",
    "OpenAI API",

    // Frontend & UI
    "React",
    "Next.js",
    "Tailwind CSS",
    "ShadCN/UI",
    "MagicUI",

    // AI & ML
    "TensorFlow",
    "LangChain",

    // Database & DevOps
    "Supabase",
    "MongoDB",
    "PostgreSQL",
    "Docker",

    // Tools & Productivity
    "Cloudflare",
    "AWS",
    "Vercel",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "fathin@nightcoders.com",
    tel: "+6285372603154",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/fathinafiff",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fathinafiff/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/fathinafiff_",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@fathinafiff",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:fathin@nightcoders.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Nightcoders",
      href: "https://nightcoders.id",
      badges: ["Current"],
      location: "Remote",
      title: "Founder",
      logoUrl: "/nightcoders.png",
      start: "2024",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Fastwork",
      href: "https://upwork.com",
      badges: ["Current"],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/fastwork.png",
      start: "2024",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Fastwork",
      href: "https://fastwork.id",
      badges: ["Current"],
      location: "Remote",
      title: "AI Engineer",
      logoUrl: "/fastwork.png",
      start: "2024",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Sejasa.com - Recommend Group",
      href: "https://sejasa.com",
      badges: [],
      location: "Remote",
      title: "Data Analyst",
      logoUrl: "/sejasa.png",
      start: "2023",
      end: "2025",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "University Of Syiah Kuala",
      href: "https://usk.ac.id",
      degree: "Bachelor's Degree of Engineering",
      logoUrl: "/usk.svg",
      start: "2018",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Creacon",
      href: "https://creacon.id",
      // dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "A modern web app for Creacon, showcasing digital creative services, project portfolio, and a contact system with Strapi CMS backend.",
      technologies: ["Next.Js", "Typescript", "Strapi", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://creacon.id",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/creacon.svg",
    },
    {
      title: "MyDr-Detection",
      href: "https://mydrdetection.com/",
      active: true,
      description:
        "A modern web app for Creacon, showcasing digital creative services, project portfolio, and a contact system with Strapi CMS backend.",
      technologies: [
        "Next.Js",
        "Typescript",
        "TailwindCSS",
        "Python",
        "OpenAI API",
        "FastApi",
      ],
      links: [
        {
          type: "Website",
          href: "https://mydrdetection.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mydrdetection.webp",
    },
    {
      title: "GEN-Z EYEWEAR",
      href: "https://www.genzlens.com/",
      // dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "GEN-Z EYEWEAR is a next-gen eyewear brand and web platform that caters to the bold, expressive style of Gen Z. the site provides PD (Pupillary Distance) measurement tools, helping users find the perfect fit for prescription or fashion glasses — all from the comfort of their devices.",
      technologies: ["Wix.com", "FastAPI", "Tensorflow"],
      links: [
        {
          type: "Website",
          href: "https://www.genzlens.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      video: "/genzlens.mp4",
    },
    {
      title: "Latihan Soal",
      href: "https://latihansoal.fun/",
      active: true,
      description:
        "LatihanSoal.fun offers a wide range of practice questions and mock exams for individuals preparing to enter public institutions or become civil servants. Designed to help users improve accuracy, speed, and confidence, our platform supports success in competitive government job tests.",
      technologies: ["Next.Js", "Typescript", "Supabase", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://latihansoal.fun/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/latihansoal.png",
    },
  ],
  building: [
    {
      title: "Copi - Notes & Tasks",
      description:
        "Copi is a minimal note-taking and task management app that helps you stay organized without distractions. Add tasks with reminders, capture quick notes, and categorize everything using shared labels - all in one clean, unified interface.",
      image: "/copi.jpg",
      links: [
        {
          title: "Website",
          href: "https://getcopi.app",
          icon: <Icons.globe className="h-4 w-4" />,
        },
      ],
    },
  ],
} as const;
