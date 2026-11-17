import Image from "next/image";
import Link from "next/link";
import profileImage from "./profile.webp"; // keep your photo at app/profile.webp
import { SiLeetcode } from "react-icons/si";
import TypedIntro from "@/app/components/TypedIntro";
import { Reveal, Stagger, StaggerItem, AnimatedBar, CountUp } from "@/app/components/motion";
import {
  LuCode,
  LuCloud,
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
  name: "Mohammad Tousif Sunkat",
  location: "Ponda, Goa, India",
  status: "Open to internships & freelance work",
  bio: "I'm a developer and designer who enjoys turning ideas into fast, clean and reliable products. I started learning to code 5 years ago and have since built projects, competed in tech events and helped others learn IT.",
};

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
  username: "tousifwebwork",
  solved: 73,
  easy: { solved: 54, total: 122 },
  medium: { solved: 19, total: 39 },
  hard: { solved: 3, total: 44 },
  streak: 6,
  activeDays: 64,
};

const PROJECTS = [
  {
    slug: "expensemate",
    title: "ExpenseMate",
    desc: "A personal expense tracker that helps users log spending, organise it by category and see where their money goes.",
    tags: ["Next.js", "Tailwind", "MongoDB"],
    url: "https://expensmatefrontend.vercel.app",
  },
  {
    slug: "fastalfazcab",
    title: "FastAlfazCab",
    desc: "A fast, mobile-friendly website built for a client's cab service, so customers can see services and book rides easily.",
    tags: ["Next.js", "Tailwind", "Client Project"],
    url: "https://fastalfazcab.in",
  },
  {
    slug: "ai-chat-app",
    title: "AI-Powered Chat App",
    desc: "A real-time chat application with built-in AI responses, so users can talk to an assistant in a clean, simple interface.",
    tags: ["React", "Node.js", "AI API"],
    url: "https://tww-chatty.netlify.app",
  },
];

const EDUCATION = [
  {
    period: "2023 – Present",
    title: "B.E. in Information Technology",
    place: "RIT Goa",
    note: "Focused on web development, cloud computing and problem solving.",
  },
  {
    period: "2020 – 2022",
    title: "Higher Secondary (12th), Science",
    place: "M.E.F's Fatima High School",
    note: "Completed the Science stream.",
  },
];

/* Sample activity grid (12 weeks x 7 days). Replace with real data when you have it. */
const ACTIVITY = Array.from({ length: 84 }, (_, i) => (i * 37 + (i % 7) * 11) % 5);
const HEAT = ["bg-white/[0.06]", "bg-[#6d4aff]/25", "bg-[#6d4aff]/45", "bg-[#6d4aff]/70", "bg-[#a99bff]"];

const glass =
  "rounded-2xl border border-violet-500/30 bg-white/[0.04] shadow-[inset_0_0_30px_rgba(109,74,255,0.08)] backdrop-blur-md";
const pill =
  "inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-[#6d4aff] px-6 py-3 font-medium transition hover:bg-[#6d4aff]/20 hover:shadow-[0_0_24px_rgba(109,74,255,0.5)] sm:px-7";
const chip = "rounded-md bg-[#6d4aff]/15 px-2.5 py-1 text-xs text-[#cfc8ff]";

function SectionHeader({ title, href, linkLabel }) {
  return (
    <Reveal direction="left" className="mb-6 flex flex-wrap items-end justify-between gap-x-4 gap-y-2 sm:mb-8">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl min-[1800px]:text-5xl">{title}</h2>
      {href && (
        <Link href={href} className="inline-flex items-center gap-2 text-sm text-[#a99bff] transition hover:text-white sm:text-base">
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

      {/* Container: fluid padding, capped width, wider cap for big / presentation screens */}
      <div className="mx-auto max-w-350 space-y-16 px-4 pb-10 pt-24 sm:space-y-20 sm:px-8 sm:pt-28 lg:space-y-24 lg:px-14 min-[1800px]:max-w-420 min-[1800px]:space-y-32">
        {/* ================= HERO ================= */}
        <section className="grid items-center gap-10 lg:min-h-[calc(100svh-10rem)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Stagger onMount delay={1.0} stagger={0.12} className="min-w-0">
            <StaggerItem
              as="h1"
              className="h-[1.1em] whitespace-nowrap text-[clamp(2.75rem,9vw,4.5rem)] uppercase leading-none tracking-[0.01em] text-[#a99bff] sm:text-[clamp(3.25rem,7vw,5.5rem)] min-[1800px]:text-[8rem] [font-family:var(--font-display),Impact,sans-serif]"
            >
              <span className="sr-only">{PROFILE.name}: Creative Designer and Full-Stack Developer</span>
              <span aria-hidden>
                <TypedIntro />
              </span>
            </StaggerItem>

            <StaggerItem
              from={{ scaleX: 0, y: 0 }}
              className="mb-6 mt-4 h-0.5 w-full max-w-105 origin-left bg-linear-to-r from-[#6d4aff] to-transparent sm:mb-8 sm:mt-5 min-[1800px]:max-w-160"
              aria-hidden
            />

            <StaggerItem
              as="p"
              className="text-lg leading-relaxed text-[#b9b6e6] sm:text-2xl min-[1800px]:text-4xl"
            >
              Hi, I&apos;m <span className="font-semibold text-[#6d4aff]">{PROFILE.name}</span>
              <br />a Creative Designer &amp; Full-Stack Developer.
            </StaggerItem>

            <StaggerItem
              as="ul"
              className="mb-7 mt-5 space-y-2 text-sm text-[#b9b6e6] sm:mb-8 sm:mt-6 sm:text-base min-[1800px]:text-xl"
            >
              <li className="flex items-center gap-3">
                <LuMapPin size={18} className="shrink-0 text-[#a99bff]" aria-hidden /> Based in {PROFILE.location}
              </li>
              <li className="flex items-center gap-3">
                <span className="relative flex size-2.5 shrink-0">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/60 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
                </span>
                {PROFILE.status}
              </li>
            </StaggerItem>

            <StaggerItem className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link href="/projects" className={`${pill} min-[1800px]:px-10 min-[1800px]:py-4 min-[1800px]:text-xl`}>
                Explore My Work <LuArrowRight size={18} aria-hidden />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full px-4 py-3 text-[#b9b6e6] transition hover:text-white min-[1800px]:text-xl"
              >
                More about me
              </Link>
            </StaggerItem>
          </Stagger>

          <Reveal
            onMount
            delay={1.1}
            direction="up"
            duration={0.9}
            className="mx-auto w-full max-w-[300px] min-[400px]:max-w-[340px] sm:max-w-[400px] lg:ml-auto lg:mr-0 lg:max-w-[420px] min-[1400px]:max-w-[460px] min-[1800px]:max-w-[640px]"
          >
            <div className="relative">
              {/* soft glow behind */}
              <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2rem] bg-[#6d4aff]/30 blur-3xl" />

              {/* offset outline frame for depth */}
              <div
                aria-hidden
                className="absolute -bottom-2 -right-2 h-full w-full rounded-3xl border border-[#6d4aff]/50 sm:-bottom-3 sm:-right-3"
              />

              {/* photo box */}
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl border border-violet-500/40 bg-[#0d0d3a] shadow-[0_0_60px_rgba(109,74,255,0.35)]">
                <Image
                  src={profileImage}
                  alt={`Portrait of ${PROFILE.name}`}
                  fill
                  priority
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 400px, (max-width: 1800px) 460px, 640px"
                  placeholder="blur"
                  className="object-cover object-top"
                />
                <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-[#070720]/70 to-transparent" />
              </div>
            </div>
          </Reveal>
        </section>

        {/* ================= ABOUT ================= */}
        <section aria-labelledby="about-heading">
          <SectionHeader title="Who am I?" href="/about" linkLabel="Read my story" />
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_1.3fr]">
            <Reveal direction="left" className={`${glass} p-5 sm:p-7`}>
              <h3 id="about-heading" className="sr-only">Introduction</h3>
              <p className="leading-relaxed text-[#b9b6e6] min-[1800px]:text-xl">{PROFILE.bio}</p>
              <h3 className="mb-4 mt-7 font-semibold text-white sm:mt-8">What I&apos;m into</h3>
              <Stagger as="ul" className="flex flex-wrap gap-2.5 sm:gap-3" stagger={0.07}>
                {INTERESTS.map(({ icon: Icon, label }) => (
                  <StaggerItem
                    as="li"
                    key={label}
                    from={{ scale: 0.7, y: 0 }}
                    className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-white/4 px-3.5 py-2 text-sm text-[#ecebff] sm:px-4"
                  >
                    <Icon size={16} className="shrink-0 text-[#a99bff]" aria-hidden /> {label}
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>

            <Reveal direction="right">
              <h3 className="mb-4 font-semibold text-white">What I can do</h3>
              <Stagger as="ul" className="grid gap-4 sm:grid-cols-2">
                {CAPABILITIES.map(({ icon: Icon, title, tags }) => (
                  <StaggerItem as="li" key={title} className={`${glass} p-4 sm:p-5`}>
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
          <Reveal direction="up" className={`${glass} grid gap-8 p-5 sm:p-7 lg:grid-cols-[1fr_1.2fr]`}>
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <SiLeetcode size={26} className="shrink-0 text-[#ffa116]" aria-hidden />
                <h3 id="lc-heading" className="text-lg font-semibold text-white sm:text-xl">LeetCode activity</h3>
              </div>
              <p className="mt-5 text-4xl font-bold text-white sm:mt-6 sm:text-5xl">
                <CountUp to={LEETCODE.solved} />
                <span className="ml-2 text-base font-normal text-[#b9b6e6] sm:text-lg">problems solved</span>
              </p>
              <div className="mt-6 space-y-4">
                <Bar label="Easy" {...LEETCODE.easy} color="bg-emerald-400" />
                <Bar label="Medium" {...LEETCODE.medium} color="bg-amber-400" />
                <Bar label="Hard" {...LEETCODE.hard} color="bg-rose-400" />
              </div>
            </div>

            <div className="flex min-w-0 flex-col justify-between gap-6">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-xl border border-violet-500/30 bg-white/4 p-3.5 sm:p-4">
                  <LuFlame size={20} className="mb-2 text-orange-400" aria-hidden />
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    <CountUp to={LEETCODE.streak} /> days
                  </p>
                  <p className="text-xs text-[#b9b6e6] sm:text-sm">Current streak</p>
                </div>
                <div className="rounded-xl border border-violet-500/30 bg-white/4 p-3.5 sm:p-4">
                  <LuTarget size={20} className="mb-2 text-[#a99bff]" aria-hidden />
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    <CountUp to={LEETCODE.activeDays} />
                  </p>
                  <p className="text-xs text-[#b9b6e6] sm:text-sm">Active days (last 12 weeks)</p>
                </div>
              </div>

              {/* Activity grid: 12 equal columns (weeks) x 7 rows (days) */}
              <Stagger
                stagger={0.012}
                once
                role="img"
                aria-label="Activity graph for the last 12 weeks"
                className="grid grid-flow-col grid-cols-12 grid-rows-7 gap-1 sm:gap-1.5"
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
                href={`https://leetcode.com/u/${LEETCODE.username}/`}
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
          <Stagger as="ul" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.14}>
            {PROJECTS.map((p) => (
              <StaggerItem as="li" key={p.slug}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} (opens in a new tab)`}
                  className={`${glass} group flex h-full flex-col p-5 transition duration-300 hover:-translate-y-1 hover:border-[#6d4aff] sm:p-6`}
                >
                  <div
                    className="mb-5 aspect-video rounded-lg bg-linear-to-br from-[#6d4aff]/30 to-[#0d0d3a]"
                    aria-hidden
                  />
                  <h3 className="text-lg font-semibold text-white sm:text-xl">{p.title}</h3>
                  <p className="mt-2 flex-1 text-[#b9b6e6]">{p.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li key={t} className={chip}>{t}</li>
                    ))}
                  </ul>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* ================= EDUCATION ================= */}
        <section>
          <SectionHeader title="Education" href="/education" linkLabel="Full details" />
          <Stagger as="ol" className="relative space-y-6 border-l border-violet-500/30 pl-6 sm:pl-8" stagger={0.18}>
            {EDUCATION.map((e) => (
              <StaggerItem as="li" key={e.title} from={{ x: -32, y: 0 }} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[31px] top-1.5 size-3 rounded-full border-2 border-[#6d4aff] bg-[#070720] sm:-left-[39px]"
                />
                <p className="text-sm text-[#a99bff]">{e.period}</p>
                <h3 className="text-base font-semibold text-white sm:text-lg">{e.title}</h3>
                <p className="text-[#b9b6e6]">{e.place}</p>
                <p className="mt-1 text-sm text-[#8f8bc4]">{e.note}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* ================= CTA ================= */}
        <Reveal
          as="section"
          direction="up"
          className={`${glass} flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-10`}
        >
          <div>
            <h2 className="text-xl font-semibold text-white sm:text-3xl">Have a project in mind?</h2>
            <p className="mt-2 text-[#b9b6e6]">Tell me what you need and I&apos;ll get back to you within a day.</p>
          </div>
          <Link href="/contact" className={`${pill} w-full sm:w-auto`}>
            Let&apos;s Talk <LuArrowRight size={18} aria-hidden />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}