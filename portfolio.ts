import emoji from "react-easy-emoji";
import {
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Manoj Kumar ",
  title: "Hi all, I'm Manoj",
  description: `I’m a passionate Frontend Developer skilled in React, Next.js, Redux Toolkit, and modern UI libraries like Tailwind CSS and MUI. I specialize in building fast, scalable, and responsive web applications with clean architecture. I love crafting smooth user experiences and turning complex ideas into functional products. Always driven to learn and grow through hands-on development.

`,
  resumeLink: "https://drive.google.com/file/d/1vrW1PlMkefk4EfPH3shCAgCVgk0X9--a/view?usp=drive_link",
};

export const openSource = {
  githubUserName: "mk3638432",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:mk3638432@gmail.com",

  linkedin: "https://www.linkedin.com/in/manoj-kumar-2805b2262/",
  github: "https://github.com/mk3638432",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "I build fast, responsive, and scalable web applications using React, Next.js, and Redux Toolkit.",
  data: [
    {
      title: "Frontend Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // You can use a relevant Lottie file
      skills: [
        emoji("⚡ Developing responsive Single-Page Applications (SPA) using React.js"),
        emoji("⚡ Building fast, SEO-friendly static and dynamic sites with Next.js"),
        emoji("⚡ Managing state efficiently with Redux Toolkit"),
        emoji("⚡ Creating modern UI using Tailwind CSS and MUI"),
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },

        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Tailwind-css",
          iconifyTag: "vscode-icons:file-type-tailwind",
        },
        {
          skillName: "TypeScript",
          iconifyTag: "vscode-icons:file-type-typescript",
        },
        {
          skillName: "CSS",
          iconifyTag: "vscode-icons:file-type-css",
        },
        {
          skillName: "SCSS",
          iconifyTag: "vscode-icons:file-type-scss",
        },
        {
          skillName: "Babel",
          iconifyTag: "vscode-icons:file-type-babel",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend Development",
    progressPercentage: "90",
  },
  {
    Stack: "State Management (Redux Toolkit)",
    progressPercentage: "85",
  },
  {
    Stack: "UI Design (Tailwind CSS, MUI)",
    progressPercentage: "80",
  },
  {
    Stack: "Backend Basics (API Integration, Firebase)",
    progressPercentage: "70",
  },
  {
    Stack: "Programming (JavaScript, ES6+)",
    progressPercentage: "95",
  },
];

export const experience: ExperienceType[] = [
  {
    id: 1,
    companyName: "Avija Digital",
    period: "Nov 2023 - May 2025 · 1 yr 7 mos",
    position: "Frontend Web Developer",
    location: "Delhi, India",
    skills: [
      "React JS",
      "JavaScript",
      "HTML",
      "Redux",
      "Git",
      "Next.js",
      "TypeScript",
      "CSS",
      "jQuery",
      "GitHub",
      "Material UI",
      "Ant Design",
      "Tailwind CSS",
      "Figma",
      "REST API",
    ],
    logo: "/ttLogo.png",
  },
  {
    id: 2,
    companyName: "ICETEA MEDIA",
    period: "Nov 2022 - Oct 2023 · 1 yr 7 mos",
    position: "Frontend Web Developer",
    location: "HSR Layout, Bangalore, India",
    skills: [
      "React JS",
      "JavaScript",
      "HTML",
      "Redux",
      "Git",
      "Next.js",
      "TypeScript",
      "CSS",
      "GitHub",
      "Material UI",
      "Ant Design",
      "Tailwind CSS",
      "Figma",
      "REST API",
    ],
    logo: "/ttLogo.png", // Add correct logo path if available
  },
];

export const projects: ProjectType[] = [
  {
    link: "https://thriving-druid-986036.netlify.app/",
    img: "/img/auction-journal.png",
    name: "Auction Journal",
    desc: "Created Complete Auction Journal Website Using React JS and Node JS Integrated Material-UI  components, including Dialogues, Table Pagination, Styled components, Accordion, Snackbar notifications, and more, to create a cohesive and visually appealing user interface, enhancing user interaction and experience in the Auction Journal project ",
  },
  {
    link: "https://kreo.in/",
    img: "/img/kreo.png",

    name: "KREO",
    desc: "Developed a dynamic web application using Next.js and React , ensuring cutting-edge features and optimal performance.  Maintained comprehensive documentation and adhered to ESLint and Next.js-specific configurations to ensure code quality and facilitate collaborative development.",
  },

  {
    link: "https://pdf-generator-iota-six.vercel.app/",
    img: "/img/pdf-generator.png",

    name: "PDF Generator",
    desc: "PDF Invoice Generator is a responsive web application built using React, Bootstrap, jsPDF, html2canvas, and FileSaver that allows users to dynamically add invoice items, input billing details, calculate totals with tax and discount rates, and export professional-looking invoices as downloadable PDF files with a single click.",
  },
  {
    link: "https://evently-ge233kmzp-mk3638432.vercel.app/",
    img: "/img/evently.png",

    name: "Evently",
    desc: "Developed and launched Evently, a modern and user-centric event creation and management platform that enables users to effortlessly create, customize, and publish events. The platform supports features like dynamic form handling, real-time updates, attendee management, and responsive design optimized for both desktop and mobile devices.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Manoj Kumar",
  description: greetings.description,
  author: "Manoj Kumar",
  // image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  // url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: ["Manoj", "Manoj Kumar ", "Portfolio", "Manoj Portfolio ", "Manoj Kumar  Portfolio"],
};
