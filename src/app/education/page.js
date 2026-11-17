import Link from "next/link";
import { LuArrowRight, LuDownload, LuAward } from "react-icons/lu";
import PageHero from "@/app/components/PageHero";
import Section from "@/app/components/Section";
import { Reveal, Stagger, StaggerItem, AnimatedBar } from "@/app/components/motion";
import { glass, pill, wrap } from "@/app/components/ui";
import { SITE, EDUCATION, CERTIFICATIONS, ACHIEVEMENTS, LEARNING } from "@/app/data/site";

export const metadata = {
  title: "Education",
  description: "Education, certifications, competitions and what Tousif is learning right now.",
};

export default function EducationPage() {
  return (
    <>
      <PageHero
        title="Education"
        description="My academic background, certifications and the competitions that shaped how I learn."
      >
        <a href={SITE.resume} download className={pill}>
          <LuDownload size={18} aria-hidden /> Download résumé
        </a>
      </PageHero>

      <div className={`${wrap} space-y-24 pb-8`}>
        <Section title="Academic background">
          <Stagger as="ol" className="relative space-y-8 border-l border-violet-500/30 pl-8" stagger={0.2}>
            {EDUCATION.map((e) => (
              <StaggerItem as="li" key={e.title} from={{ x: -32, y: 0 }} className="relative">
                <span aria-hidden className="absolute -left-9.75 top-7 size-3 rounded-full border-2 border-[#6d4aff] bg-[#070720]" />
                <div className={`${glass} p-7`}>
                  <p className="text-sm text-[#a99bff]">{e.period}</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">{e.title}</h3>
                  <p className="text-[#b9b6e6]">{e.place}</p>
                  <p className="mt-3 max-w-2xl leading-relaxed text-[#b9b6e6]">{e.note}</p>
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-[#b9b6e6] marker:text-[#6d4aff]">
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        <Section title="Certifications" subtitle="Courses and credentials I've completed.">
          <Stagger as="ul" className="grid gap-5 md:grid-cols-3">
            {CERTIFICATIONS.map((c, i) => (
              <StaggerItem as="li" key={i} className={`${glass} flex gap-4 p-6`}>
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#6d4aff]/20 text-[#a99bff]">
                  <LuAward size={22} aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{c.title}</h3>
                  <p className="text-sm text-[#b9b6e6]">{c.issuer}</p>
                  <p className="mt-1 text-sm text-[#8f8bc4]">{c.year}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        <Section title="Competitions & achievements">
          <Stagger as="ul" className="grid gap-5 md:grid-cols-2">
            {ACHIEVEMENTS.map(({ icon: Icon, title, text, year }, i) => (
              <StaggerItem as="li" key={i} className={`${glass} p-7 transition duration-300 hover:border-[#6d4aff]`}>
                <div className="mb-4 flex items-center justify-between text-[#a99bff]">
                  <Icon size={26} aria-hidden />
                  <span className="text-sm">{year}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-[#b9b6e6]">{text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        <Section title="Learning right now" subtitle="Self-assessed progress on what I'm currently studying.">
          <Reveal className={`${glass} space-y-6 p-7`}>
            {LEARNING.map((l) => (
              <div key={l.label}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-[#ecebff]">{l.label}</span>
                  <span className="text-[#b9b6e6]">{l.pct}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/6">
                  <AnimatedBar pct={l.pct} className="h-full rounded-full bg-linear-to-r from-[#6d4aff] to-[#a99bff]" />
                </div>
              </div>
            ))}
          </Reveal>
        </Section>

        <Reveal as="section" className={`${glass} flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-10`}>
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">See what I&apos;ve built</h2>
            <p className="mt-2 text-[#b9b6e6]">Learning is better with real projects.</p>
          </div>
          <Link href="/projects" className={pill}>
            View projects <LuArrowRight size={18} aria-hidden />
          </Link>
        </Reveal>
      </div>
    </>
  );
}