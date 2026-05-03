import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Fathin Afif",
  initials: "FA",
  url: "https://fathin.dev",
  location: "Aceh, Indonesia",
  locationLink: "https://www.google.com/maps/place/Aceh",
  description:
    "indie founder and software engineer in my 20s. I build web and mobile products with AI at the core. shipping fast, learning in public, chasing freedom through products. very active on X.",
  summary:
    "I come from an engineering background, but I learned more by building real products than from any classroom.\n\nIn mid 2025, I quit my full time job to focus fully on freelancing and building my own products. Since then, I’ve been working on client projects while scaling SaaS products under Nightcoders.\n\nI care about:\n\n- building fast\n- keeping things simple\n- shipping software people actually use\n- no hype. no fake growth. just real work.",
  avatarUrl: "/me.png",
  skills: [
    // Languages
    "Python",
    "TypeScript",
    "JavaScript",

    // Backend & APIs
    "FastAPI",
    "Flask",
    "Supabase",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Cloudflare",
    "AWS",
    "Vercel",

    // Frontend & UI
    "React",
    "Next.js",
    "React Native",
    "Tailwind CSS",
    "shadcn/ui",
    "Magic UI",

    // AI & ML
    "OpenAI API",
    "LangChain",
    "TensorFlow",
    "RAG systems",
    "Prompt engineering",

    // Tools & Productivity
    "Git",
    "Modern deployment workflows",
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
      href: "https://nightcoders.studio",
      badges: ["Current"],
      location: "Remote",
      title: "Founder",
      logoUrl: "/nightcoders.png",
      start: "2024",
      description:
        "I run a small tech studio focused on building modern web and mobile applications with strong AI integration. I build full stack products using Next.js, React Native, TypeScript, and Python, and design and ship AI features such as RAG systems, LLM workflows, and automation. I also run and scale internal SaaS products from zero to paying users, handling product, UI, backend, infrastructure, and deployment end to end.",
    },
    {
      company: "Upwork",
      href: "https://upwork.com",
      badges: ["Current"],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/upwork.png",
      start: "2024",
      description:
        "Currently focused on positioning my profile and offerings for global client work. This phase is used to sharpen proposal writing and project scoping, practice breaking down vague ideas into clear technical plans, and learn how to package AI and LLM features for real business use cases. Now actively focusing on landing the first long term projects and collaborations.",
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
        "Worked on building and deploying AI powered features for internal and external applications. Integrated LLMs for content generation, summarization, and recommendations, built backend services in Python for scalable inference, and collaborated closely with frontend teams to ship AI features that feel simple and usable.",
    },
    {
      company: "Sejasa.com - Recommend Group",
      href: "https://sejasa.com",
      badges: [],
      location: "Remote",
      title: "AI Engineer",
      logoUrl: "/sejasa.png",
      start: "2023",
      end: "2025",
      description:
        "Led the development of an internal AI chatbot used directly by real users. Built a Retrieval Augmented Generation chatbot connected to internal APIs and WATI, handled prompt design, vector search, and conversation logic, and implemented the system end to end, including backend logic and chat UX. This significantly improved support automation and response quality.",
    },
  ],
  education: [
    {
      school: "University Of Syiah Kuala",
      href: "https://usk.ac.id",
      degree: "Bachelor's Degree of Engineering",
      logoUrl: "/usk.svg",
      // start: "2018",
      // end: "2023",
    },
  ],
  projects: [
    {
      title: "Akses Pendanaan (CBT)",
      href: "https://connect.kemenkeu.go.id",
      active: true,
      description:
        "AI-powered Concept Note Generator for Green Climate Fund (GCF) funding applications. Features multi-step form submissions, section-by-section LLM generation with RAG, inline diff editing, and PDF export.",
      technologies: [
        "React",
        "TypeScript",
        "Laravel",
        "OpenAI API",
        "vLLM",
        "RAG",
      ],
      links: [
        {
          type: "Website",
          href: "https://connect.kemenkeu.go.id",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/connect.png",
    },
    {
      title: "Tokobux",
      href: "https://tokobux.com",
      active: true,
      description:
        "Roblox Game Pass automation platform with a customer storefront, seller dashboard, and async backend. Uses webhook-driven architecture with Selenium browser automation, Redis queues, and RQ workers for scalable purchase processing.",
      technologies: [
        "Next.js",
        "FastAPI",
        "Selenium",
        "Redis",
        "Supabase",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://tokobux.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/tokobux.png",
    },
    {
      title: "Gudang Social",
      href: "https://gudang.social",
      active: true,
      description:
        "Modern social platform connecting users through posts, profiles, and realtime interactions. Includes payment integration, content automation APIs, and a follow-based personalized feed.",
      technologies: [
        "Next.js",
        "Supabase",
        "PostgreSQL",
        "Midtrans",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://gudang.social",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/gudang-social.png",
    },
    {
      title: "Khalifah",
      href: "https://bimbelkhalifah.com/",
      active: true,
      description:
        "Online tryout and education platform with test management, participant tracking, scheduling, question banks, and role-based admin dashboards for educators and students.",
      technologies: [
        "Next.js",
        "Drizzle ORM",
        "PostgreSQL",
        "Better Auth",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://bimbelkhalifah.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/bimbel-khalifah.png",
    },
    {
      title: "Laneige - Play with Wonders",
      href: "https://laneige.zanroo.id/playwithwonders",
      active: true,
      description:
        "Interactive campaign landing page for Laneige beauty brand. Features a guided form experience with animated reveals and terms overlay, built for mobile-first engagement.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://laneige.zanroo.id/playwithwonders",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/laneige-form.png",
    },
    {
      title: "Lapor Diri KBRI Riyadh",
      href: "https://kbririyadh.id/",
      active: true,
      description:
        "Self-reporting system for Indonesian citizens in Riyadh. Public multi-step form submissions, status tracking, admin dashboard with reporting, data export, and integrated blog.",
      technologies: [
        "Next.js",
        "Drizzle ORM",
        "PostgreSQL",
        "Better Auth",
        "MinIO",
      ],
      links: [
        {
          type: "Website",
          href: "https://kbririyadh.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/kbri-riyadh.png",
    },
    {
      title: "Management Patient RSJ",
      href: "#",
      active: true,
      description:
        "Healthcare patient management system for hospital settings. Manages patient records, evaluations, discharge workflows, user roles, and real-time notifications with dashboard analytics.",
      technologies: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Mongoose",
        "Tailwind CSS",
      ],
      links: [],
      image: "/images/rsj-aceh.png",
    },
    {
      title: "Zanroo",
      href: "https://zanroo.id",
      active: true,
      description:
        "Corporate web platform with public landing pages, blog, form submissions, and an admin panel for content and lead management.",
      technologies: [
        "Next.js",
        "Drizzle ORM",
        "PostgreSQL",
        "Better Auth",
        "MinIO",
      ],
      links: [
        {
          type: "Website",
          href: "https://zanroo.id",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/zanroo.png",
    },
    {
      title: "Creacon",
      href: "https://creacon.id",
      active: true,
      description:
        "Modern company website showcasing creative services, portfolio, and contact system with CMS support.",
      technologies: ["Next.js", "TypeScript", "Strapi", "Tailwind CSS"],
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
      title: "MyDr Detection",
      href: "https://mydrdetection.com/",
      active: true,
      description:
        "AI powered web application focused on medical detection workflows.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Python",
        "FastAPI",
        "OpenAI API",
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
      active: true,
      description:
        "Next generation eyewear brand website with AI based PD measurement, allowing users to find the right glasses fit remotely.",
      technologies: ["Wix", "FastAPI", "TensorFlow"],
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
      title: "LatihanSoal.fun",
      href: "https://latihansoal.fun/",
      active: true,
      description:
        "Practice and mock exam platform for public institution and civil service preparation. Designed for speed, accuracy, and high volume usage.",
      technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
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
      title: "Capy Food Journal",
      description:
        "Track calories like texting a friend. Just type what you ate. Capy finds the calories and macros instantly with trusted sources that visible in the app.",
      image: "/images/favicons/capyfoodjournal.png",
      links: [
        {
          title: "Website",
          href: "https://capyfoodjournal.nightcoders.id/",
          icon: <Icons.globe className="h-4 w-4" />,
        },
        {
          title: "Appstore",
          href: "https://apps.apple.com/us/app/capy-food-journal/id6760335215",
          icon: <Icons.apple className="h-4 w-4" />,
        },
        {
          title: "Playstore",
          href: "https://play.google.com/store/apps/details?id=com.tinapyp.capy",
          icon: <Icons.googlePlay className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "1secondclaw",
      description:
        "The Managed OpenClaw Runtime. A fast, cross-platform productivity system built with Next.js and Expo, featuring real-time sync via Convex, authentication, and in-app purchases. Designed for instant capture and seamless workflows across web and mobile.",
      image: "/images/favicons/1secondclaw.png",
      links: [
        {
          title: "Website",
          href: "https://1secondclaw.com",
          icon: <Icons.globe className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "GetMyWebRank",
      description:
        "AI powered SEO automation platform. GetMyWebRank helps founders and teams research keywords using AI, turn keywords into content ideas and clusters, generate SEO optimized articles, and manage publishing using a calendar based workflow. Built for consistency, speed, and scale. This is currently our main growth focus.",
      image: "/images/favicons/getmywebrank.png",
      links: [
        {
          title: "Website",
          href: "https://getmywebrank.com",
          icon: <Icons.globe className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "Copi - Notes & Tasks",
      description:
        "Copi is a minimal note and task management app designed to help you stay organized without distractions. Quick notes and task capture, reminders that stay calm and useful, and shared labels to organize everything in one place. Built for daily use.",
      image: "/images/favicons/copi.png",
      links: [
        {
          title: "Website",
          href: "https://getcopi.app",
          icon: <Icons.globe className="h-4 w-4" />,
        },
        {
          title: "Appstore",
          href: "https://apps.apple.com/us/app/copi-notes-tasks/id6746962033",
          icon: <Icons.apple className="h-4 w-4" />,
        },
      ],
    },
  ],
} as const;
