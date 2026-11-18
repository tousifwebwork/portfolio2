/* ------------------------------------------------------------------
   ALL YOUR CONTENT LIVES HERE. Replace the placeholders with real info.
------------------------------------------------------------------- */
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import {LuCode, LuCloud, LuGraduationCap, LuPalette, LuServer, LuLightbulb, LuCpu, LuBookOpen, LuGamepad2,LuZap, LuShieldCheck, LuUsers, LuSparkles, LuTrophy, LuAward } from "react-icons/lu";
import { IoIosFootball } from "react-icons/io";


export const SITE = {
  name: "Mohammad Tousif Sunkat",
  email: "tousifwebwork@gmail.com",
  location: "Ponda, Goa, India",
  status: "Open to internships & freelance work",
  responseTime: "Within 24 hours",
  resume: "/Mohammad_Tousif_Resume_.pdf", // put your PDF in /public/resume.pdf
  socials: [
    { label: "GitHub", href: "https://github.com/your-username", icon: FaGithub },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-username", icon: FaLinkedinIn },
    { label: "LeetCode", href: "https://leetcode.com/u/your-username", icon: SiLeetcode },
    { label: "X (Twitter)", href: "https://x.com/your-username", icon: FaXTwitter },
    { label: "Instagram", href: "https://instagram.com/your-username", icon: FaInstagram },
  ],
};

export const STORY = [
  "I'm a creative designer and full-stack developer who likes turning rough ideas into products that feel fast, clear and well made.",
  "I started learning to code a little over a year ago. Since then I've built projects, competed in tech events and started teaching others the IT basics I wish I'd had on day one.",
  "I care about the details people notice without knowing why: sensible layouts, quick load times and interfaces that never make you think twice.",
];

export const FACTS = [
  { label: "Based in", value: SITE.location },
  { label: "Focus", value: "Web, cloud and system design" },
  { label: "Languages", value: "English, Hindi, Konkani" },
  { label: "Currently", value: "Learning cloud architecture" },
];

export const SERVICES = [
  { icon: LuCode, title: "Web development", desc: "Responsive, fast websites and web apps built with React and Next.js, from landing pages to full products." },
  { icon: LuCloud, title: "Cloud solutions", desc: "Deployment, hosting and CI/CD setups that keep your app online, secure and easy to ship updates to." },
  { icon: LuGraduationCap, title: "IT training", desc: "Clear, hands-on sessions for students and beginners covering web basics, tools and problem solving." },
];

export const SKILLS = [
  { title: "Frontend", icon: LuCode, tags: ["JavaScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML & CSS"] },
  { title: "Backend", icon: LuServer, tags: ["Node.js", "Express", "REST APIs", "MongoDB", "PostgreSQL"] },
  { title: "Cloud & tools", icon: LuCloud, tags: ["AWS basics", "Vercel", "Docker", "Git & GitHub", "CI/CD"] },
  { title: "Design", icon: LuPalette, tags: ["Figma", "UI / UX", "Branding", "Prototyping", "Design systems"] },
];

export const JOURNEY = [
  { period: "2027 (expected)", title: "Completing IT Engineering", text: "Finishing my engineering degree in Information Technology while building real projects alongside my studies." },
  { period: "2026", title: "Worked with a cab driver client", text: "Delivered work for a real client, turning their needs into something practical they could use." },
  { period: "2026", title: "Karmaveer internship", text: "Gained hands-on industry experience, working on real tasks and learning how professional teams operate." },
  { period: "2022", title: "Completed 12th Science", text: "Finished higher secondary with a science background, which laid the foundation for my move into engineering." },
];

export const PRINCIPLES = [
  { icon: LuZap, title: "Fast by default", text: "Performance is a feature. I keep pages light and interactions instant." },
  { icon: LuShieldCheck, title: "Built to last", text: "Clean, documented code that is easy to hand over and easy to extend." },
  { icon: LuUsers, title: "Clear communication", text: "Regular updates and plain language, so you always know where things stand." },
  { icon: LuSparkles, title: "Attention to detail", text: "Spacing, motion and copy get the same care as the code behind them." },
];
import { TbMotorbike } from "react-icons/tb";

export const INTERESTS = [
  { icon: LuCpu, label: "Cloud & DevOps" },
  { icon: LuLightbulb, label: "Problem solving" },
  { icon: LuPalette, label: "UI design" },
  { icon: LuBookOpen, label: "Teaching IT" },
  { icon: LuGamepad2, label: "Gaming" },
  { icon: IoIosFootball, label: "Football" },
  { icon: TbMotorbike , label: "Riding" },
];

export const PROJECTS = [
  { slug: "project-one", title: "Project One", category: "Web", featured: true, desc: "A short summary of what it does, who it is for and the problem it solves.", tags: ["Next.js", "Tailwind", "MongoDB"], github: "https://github.com/your-username/project-one", live: "https://example.com" },
  { slug: "project-two", title: "Project Two", category: "Web", featured: true, desc: "A short summary of what it does, who it is for and the problem it solves.", tags: ["React", "Node.js", "Express"], github: "https://github.com/your-username/project-two", live: "" },
  { slug: "project-three", title: "Project Three", category: "Cloud", featured: false, desc: "A short summary of what it does, who it is for and the problem it solves.", tags: ["AWS", "Docker", "CI/CD"], github: "https://github.com/your-username/project-three", live: "" },
  { slug: "project-four", title: "Project Four", category: "Design", featured: false, desc: "A short summary of what it does, who it is for and the problem it solves.", tags: ["Figma", "UI / UX"], github: "", live: "https://example.com" },
  { slug: "project-five", title: "Project Five", category: "Web", featured: false, desc: "A short summary of what it does, who it is for and the problem it solves.", tags: ["JavaScript", "API"], github: "https://github.com/your-username/project-five", live: "" },
  { slug: "project-six", title: "Project Six", category: "Cloud", featured: false, desc: "A short summary of what it does, who it is for and the problem it solves.", tags: ["Vercel", "Serverless"], github: "https://github.com/your-username/project-six", live: "" },
];

export const EDUCATION = [
  { period: "2023 – Present", title: "Your Degree / Course", place: "Your College or University", note: "Add your focus areas, relevant modules and any grade or ranking you're proud of.", points: ["Core subject or module", "Another core subject", "Notable academic project"] },
  { period: "2021 – 2023", title: "Higher Secondary", place: "Your School", note: "Stream, board and what you enjoyed most.", points: ["Subject or stream", "Notable result or activity"] },
];

export const CERTIFICATIONS = [
  { title: "Certification name", issuer: "Issuing organisation", year: "2025" },
  { title: "Certification name", issuer: "Issuing organisation", year: "2025" },
  { title: "Certification name", issuer: "Issuing organisation", year: "2026" },
];

export const ACHIEVEMENTS = [
  { icon: LuTrophy, title: "Competition name", text: "Your result or role, and what you built.", year: "2025" },
  { icon: LuAward, title: "Competition name", text: "Your result or role, and what you built.", year: "2025" },
];

export const LEARNING = [
  { label: "Cloud architecture", pct: 55 },
  { label: "System design", pct: 40 },
  { label: "TypeScript", pct: 65 },
];

export const FAQ = [
  { q: "What kinds of projects do you take on?", a: "Websites, web apps, deployments and design work. If you're unsure whether it fits, send a message and I'll tell you honestly." },
  { q: "How long does a typical website take?", a: "A focused marketing site usually takes one to three weeks depending on content and revisions. I'll give you a timeline before we start." },
  { q: "Do you work with students and small businesses?", a: "Yes. Both are a big part of my work, including IT training sessions for beginners." },
  { q: "How do we get started?", a: "Fill in the form with a few details about your goal. I reply within a day to arrange a short call." },
];