import Image from "next/image";
import Link from "next/link";
import profileImage from "./profile.webp"; // keep your photo at app/profile.webp
import { SiLeetcode } from "react-icons/si";
import {
  Reveal,
  Stagger,
  StaggerItem,
  MaskLine,
  AnimatedBar,
  CountUp,
} from "@/app/components/motion";
import {
  LuCode,
  LuCloud,
  LuGraduationCap,
  LuLaptop,
  LuTrophy,
  LuRocket,
  LuArrowRight,
  LuMapPin,
  LuPalette,
  LuServer,
  LuFlame,
  LuTarget,
  LuBookOpen,
  LuCpu,
  LuGamepad2,
  LuLightbulb,
} from "react-icons/lu";

/* ------------------------------------------------------------------
   EDIT YOUR DETAILS HERE. Everything on the page reads from these.
------------------------------------------------------------------- */
const PROFILE = {
  name: "Tousif",
  location: "Your City, India", // where you stay
  status: "Open to internships & freelance work",
  bio: "I'm a developer and designer who enjoys turning ideas into fast, clean and reliable products. I started learning to code a year ago and have since built projects, competed in tech events and helped others learn IT.",
};

const STATS = [
  { icon: LuLaptop, value: 5, suffix: "+", label: "Projects" },
  { icon: LuTrophy, value: 2, suffix: "", label: "Competitions" },
  { icon: LuRocket, value: 1, suffix: "+", label: "Years Learning" },
];

const SERVICES = [
  { icon: LuCode, label: "Web Development" },
  { icon: LuCloud, label: "Cloud Solutions" },
  { icon: LuGraduationCap, label: "IT Training" },
];

const CAPABILITIES = [
  { icon: LuCode, title: "Frontend", tags: ["React", "Next.js", "Tailwind CSS", "JavaScript"] },
  { icon: LuServer, title: "Backend", tags: ["Node.js", "Express", "REST APIs", "MongoDB"] },
  { icon: LuCloud, title: "Cloud", tags: ["AWS basics", "Vercel", "Docker", "CI/CD"] },
  { icon: LuPalette, title: "Design", tags: ["Figma", "UI / UX", "Branding", "Prototyping"] },
];

const INTERESTS = [
  { icon: LuCpu, label: "Cloud & DevOps" },
  { icon: LuLightbulb, label: "Problem solving" },
  { icon: LuPalette, label: "UI design" },
  { icon: LuBookOpen, label: "Teaching IT" },
  { icon: LuGamepad2, label: "Gaming" },
];

const LEETCODE = {
  username: "your-username",
  solved: 150,
  easy: { solved: 80, total: 800 },
  medium: { solved: 60, total: 1700 },
  hard: { solved: 10, total: 750 },
  streak: 21,
  activeDays: 64,
};

const PROJECTS = [
  { slug: "project-one", title: "Project One", desc: "Short one-line summary of what it does and the problem it solves.", tags: ["Next.js", "Tailwind"] },
  { slug: "project-two", title: "Project Two", desc: "Short one-line summary of what it does and the problem it solves.", tags: ["React", "Node.js"] },
  { slug: "project-three", title: "Project Three", desc: "Short one-line summary of what it does and the problem it solves.", tags: ["MongoDB", "Express"] },
];

const EDUCATION = [
  { period: "2023 – Present", title: "Your Degree / Course", place: "Your College or University", note: "Add one line about focus areas." },
  { period: "2021 – 2023", title: "Higher Secondary", place: "Your School", note: "Add a short note." },
];

/* Sample activity grid (12 weeks x 7 days). Replace with real data when you have it. */
const ACTIVITY = Array.from({ length: 84 }, (_, i) => (i * 37 + (i % 7) * 11) % 5);
const HEAT = ["bg-white/[0.06]", "bg-[#6d4aff]/25", "bg-[#6d4aff]/45", "bg-[#6d4aff]/70", "bg-[#a99bff]"];

const glass =
  "rounded-2xl border border-violet-500/30 bg-white/[0.04] shadow-[inset_0_0_30px_rgba(109,74,255,0.08)] backdrop-blur-md";
const pill =
  "inline-flex items-center gap-2.5 rounded-full border-2 border-[#6d4aff] px-7 py-3 font-medium transition hover:bg-[#6d4aff]/20 hover:shadow-[0_0_24px_rgba(109,74,255,0.5)]";
const chip = "rounded-md bg-[#6d4aff]/15 px-2.5 py-1 text-xs text-[#cfc8ff]";

function SectionHeader({ title, href, linkLabel }) {
  return (
    <Reveal direction="left" className="mb-8 flex items-end justify-between gap-4">
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {href && (
        <Link href={href} className="inline-flex items-center gap-2 text-[#a99bff] transition hover:text-white">
          {linkLabel} <LuArrowRight size={16} aria-hidden />
        </Link>
      )}
    </Reveal>
  );
}

function Bar({ label, solved, total, color }) {
  const pct = Math.max(2, Math.round((solved / total) * 100));
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-sm">
        <span className="text-[#b9b6e6]">{label}</span>
        <span className="text-white">
          {solved} <span className="text-[#8f8bc4]">/ {total}</span>
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/6">
        <AnimatedBar pct={pct} className={`h-full rounded-full ${color}`} />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      {/* Subtle tech grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-225 opacity-25 mask-[radial-gradient(circle_at_60%_30%,#000,transparent_70%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(130,110,255,.35) 1px,transparent 1px),linear-gradient(90deg,rgba(130,110,255,.35) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="mx-auto max-w-350 space-y-24 px-5 pb-8 pt-28 sm:px-8 lg:px-14">
        {/* ================= HERO (plays on every load / refresh / visit) ================= */}
        <section className="grid items-center gap-10 md:grid-cols-2 min-[1100px]:grid-cols-[1.1fr_0.9fr_1.2fr]">
          <Stagger onMount delay={1.0} stagger={0.12}>
            <h1 className="text-[clamp(4.5rem,10vw,9.5rem)] uppercase leading-[0.88] tracking-[0.01em] text-[#a99bff] [font-family:var(--font-display),Impact,sans-serif]">
              <MaskLine delay={1.0}>Atmos</MaskLine>
              <MaskLine delay={1.15}>phere</MaskLine>
            </h1>
            <StaggerItem as="p" className="mt-5 text-[clamp(1.3rem,2.2vw,2rem)]">
              IT Solutions. <span className="text-[#6d4aff]">Simplified.</span>
            </StaggerItem>
            <StaggerItem
              from={{ scaleX: 0, y: 0 }}
              className="mb-8 mt-5 h-0.5 w-full max-w-105 origin-left bg-linear-to-r from-[#6d4aff] to-transparent"
              aria-hidden
            />
            <StaggerItem as="p" className="text-xl leading-relaxed text-[#b9b6e6] sm:text-2xl">
              Hi, I&apos;m <span className="font-semibold text-[#6d4aff]">{PROFILE.name}</span>
              <br />a Creative Designer &amp; Full-Stack Developer.
            </StaggerItem>
            <StaggerItem as="ul" className="mb-8 mt-6 space-y-2 text-[#b9b6e6]">
              <li className="flex items-center gap-3">
                <LuMapPin size={18} className="text-[#a99bff]" aria-hidden /> Based in {PROFILE.location}
              </li>
              <li className="flex items-center gap-3">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/60 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
                </span>
                {PROFILE.status}
              </li>
            </StaggerItem>
            <StaggerItem className="flex flex-wrap gap-4">
              <Link href="/projects" className={pill}>
                Explore My Work <LuArrowRight size={18} aria-hidden />
              </Link>
              <Link href="/about" className="inline-flex items-center rounded-full px-5 py-3 text-[#b9b6e6] transition hover:text-white">
                More about me
              </Link>
            </StaggerItem>
          </Stagger>

          <Reveal onMount delay={1.1} direction="up" duration={0.9} className="mx-auto w-full max-w-95 md:max-w-none">
            <div className="relative">
              <div aria-hidden className="absolute -inset-4 -z-10 rounded-4xl bg-[#6d4aff]/30 blur-3xl" />
              <Image
                src={profileImage}
                alt={`Portrait of ${PROFILE.name}`}
                priority
                sizes="(max-width: 768px) 380px, (max-width: 1100px) 50vw, 30vw"
                placeholder="blur"
                className="aspect-4/5 w-full rounded-3xl border border-violet-500/40 object-cover shadow-[0_0_60px_rgba(109,74,255,0.35)]"
              />
            </div>
          </Reveal>

          <Reveal onMount delay={1.25} direction="right" duration={0.9} className="grid gap-8 md:col-span-2 min-[1100px]:col-span-1">
            <ul className={`${glass} grid grid-cols-3 py-7`}>
              {STATS.map(({ icon: Icon, value, suffix, label }) => (
                <li
                  key={label}
                  className="flex flex-col items-center gap-1.5 text-center text-[#a99bff] not-first:border-l not-first:border-violet-500/30"
                >
                  <Icon size={34} aria-hidden />
                  <strong className="text-3xl leading-tight text-white sm:text-4xl">
                    <CountUp to={value} suffix={suffix} />
                  </strong>
                  <span className="text-sm text-[#b9b6e6] sm:text-base">{label}</span>
                </li>
              ))}
            </ul>

            <div>
              <h2 className="mb-5 flex items-center gap-4 text-2xl font-medium text-[#b9b6e6] after:h-px after:flex-1 after:bg-violet-500/30">
                My Services
              </h2>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {SERVICES.map(({ icon: Icon, label }) => (
                  <li key={label} className={`${glass} flex flex-col items-center justify-center gap-3.5 px-3 py-7 text-center text-[#a99bff]`}>
                    <Icon size={30} aria-hidden />
                    <span className="text-[#ecebff]">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* ================= ABOUT: columns slide in from opposite sides, and out again ================= */}
        <section aria-labelledby="about-heading">
          <SectionHeader title="About me" href="/about" linkLabel="Read my story" />
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
            <Reveal direction="left" className={`${glass} p-7`}>
              <h3 id="about-heading" className="sr-only">Introduction</h3>
              <p className="leading-relaxed text-[#b9b6e6]">{PROFILE.bio}</p>
              <h3 className="mb-4 mt-8 font-semibold text-white">What I&apos;m into</h3>
              <Stagger as="ul" className="flex flex-wrap gap-3" stagger={0.07}>
                {INTERESTS.map(({ icon: Icon, label }) => (
                  <StaggerItem
                    as="li"
                    key={label}
                    from={{ scale: 0.7, y: 0 }}
                    className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-white/4 px-4 py-2 text-sm text-[#ecebff]"
                  >
                    <Icon size={16} className="text-[#a99bff]" aria-hidden /> {label}
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>

            <Reveal direction="right">
              <h3 className="mb-4 font-semibold text-white">What I can do</h3>
              <Stagger as="ul" className="grid gap-4 sm:grid-cols-2">
                {CAPABILITIES.map(({ icon: Icon, title, tags }) => (
                  <StaggerItem as="li" key={title} className={`${glass} p-5`}>
                    <div className="mb-3 flex items-center gap-3 text-[#a99bff]">
                      <Icon size={22} aria-hidden />
                      <span className="font-semibold text-white">{title}</span>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {tags.map((t) => (
                        <li key={t} className={chip}>{t}</li>
                      ))}
                    </ul>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
          </div>
        </section>

        {/* ================= LEETCODE ================= */}
        <section aria-labelledby="lc-heading">
          <SectionHeader title="Problem solving" />
          <Reveal direction="up" className={`${glass} grid gap-8 p-7 lg:grid-cols-[1fr_1.2fr]`}>
            <div>
              <div className="flex items-center gap-3">
                <SiLeetcode size={26} className="text-[#ffa116]" aria-hidden />
                <h3 id="lc-heading" className="text-xl font-semibold text-white">LeetCode activity</h3>
              </div>
              <p className="mt-6 text-5xl font-bold text-white">
                <CountUp to={LEETCODE.solved} />
                <span className="ml-2 text-lg font-normal text-[#b9b6e6]">problems solved</span>
              </p>
              <div className="mt-6 space-y-4">
                <Bar label="Easy" {...LEETCODE.easy} color="bg-emerald-400" />
                <Bar label="Medium" {...LEETCODE.medium} color="bg-amber-400" />
                <Bar label="Hard" {...LEETCODE.hard} color="bg-rose-400" />
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-violet-500/30 bg-white/4 p-4">
                  <LuFlame size={20} className="mb-2 text-orange-400" aria-hidden />
                  <p className="text-2xl font-bold text-white">
                    <CountUp to={LEETCODE.streak} /> days
                  </p>
                  <p className="text-sm text-[#b9b6e6]">Current streak</p>
                </div>
                <div className="rounded-xl border border-violet-500/30 bg-white/4 p-4">
                  <LuTarget size={20} className="mb-2 text-[#a99bff]" aria-hidden />
                  <p className="text-2xl font-bold text-white">
                    <CountUp to={LEETCODE.activeDays} />
                  </p>
                  <p className="text-sm text-[#b9b6e6]">Active days (last 12 weeks)</p>
                </div>
              </div>

              {/* Activity grid: columns are weeks, rows are days */}
              <Stagger
                stagger={0.012}
                once
                role="img"
                aria-label="Activity graph for the last 12 weeks"
                className="grid grid-flow-col grid-rows-7 gap-1.5"
              >
                {ACTIVITY.map((level, i) => (
                  <StaggerItem
                    as="span"
                    key={i}
                    from={{ scale: 0.4, y: 0 }}
                    duration={0.35}
                    className={`aspect-square rounded-sm ${HEAT[level]}`}
                  />
                ))}
              </Stagger>

              <a
                href={`https://leetcode.com/u/${LEETCODE.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start text-[#a99bff] transition hover:text-white"
              >
                View LeetCode profile <LuArrowRight size={16} aria-hidden />
              </a>
            </div>
          </Reveal>
        </section>

        {/* ================= PROJECTS ================= */}
        <section>
          <SectionHeader title="Featured projects" href="/projects" linkLabel="View all projects" />
          <Stagger as="ul" className="grid gap-5 md:grid-cols-3" stagger={0.14}>
            {PROJECTS.map((p) => (
              <StaggerItem as="li" key={p.slug}>
                <Link
                  href={`/projects/${p.slug}`}
                  className={`${glass} group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-[#6d4aff]`}
                >
                  <div className="mb-5 aspect-video rounded-lg bg-linear-to-brrom-[#6d4aff]/30 to-[#0d0d3a]" aria-hidden />
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 flex-1 text-[#b9b6e6]">{p.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li key={t} className={chip}>{t}</li>
                    ))}
                  </ul>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* ================= EDUCATION ================= */}
        <section>
          <SectionHeader title="Education" href="/education" linkLabel="Full details" />
          <Stagger as="ol" className="relative space-y-6 border-l border-violet-500/30 pl-8" stagger={0.18}>
            {EDUCATION.map((e) => (
              <StaggerItem as="li" key={e.title} from={{ x: -32, y: 0 }} className="relative">
                <span aria-hidden className="absolute -left-[39px] top-1.5 size-3 rounded-full border-2 border-[#6d4aff] bg-[#070720]" />
                <p className="text-sm text-[#a99bff]">{e.period}</p>
                <h3 className="text-lg font-semibold text-white">{e.title}</h3>
                <p className="text-[#b9b6e6]">{e.place}</p>
                <p className="mt-1 text-sm text-[#8f8bc4]">{e.note}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* ================= CTA ================= */}
        <Reveal as="section" direction="up" className={`${glass} flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-10`}>
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Have a project in mind?</h2>
            <p className="mt-2 text-[#b9b6e6]">Tell me what you need and I&apos;ll get back to you within a day.</p>
          </div>
          <Link href="/contact" className={pill}>
            Let&apos;s Talk <LuArrowRight size={18} aria-hidden />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}