import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuDownload } from "react-icons/lu";
import profileImage from "../profile.webp";
import PageHero from "@/app/components/PageHero";
import Section from "@/app/components/Section";
import { Reveal, Stagger, StaggerItem } from "@/app/components/motion";
import { glass, pill, chip, wrap } from "@/app/components/ui";
import { SITE, STORY, FACTS, SERVICES, SKILLS, JOURNEY, PRINCIPLES, INTERESTS } from "@/app/data/site";

export const metadata = {
  title: "About",
  description: "Get to know Tousif: a creative designer and full-stack developer focused on web, cloud and design.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About me"
        description="A designer and developer who turns rough ideas into fast, clear and well-made products."
      >
        <Link href="/contact" className={pill}>
          Work with me <LuArrowRight size={18} aria-hidden />
        </Link>
        <a href={SITE.resume} download className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[#b9b6e6] transition hover:text-white">
          <LuDownload size={18} aria-hidden /> Download résumé
        </a>
      </PageHero>

      <div className={`${wrap} space-y-24 pb-8`}>
        {/* Story */}
        <section className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]" aria-label="My story">
          <Reveal direction="left" className="mx-auto w-full max-w-105 lg:sticky lg:top-28">
            <div className="relative">
              <div aria-hidden className="absolute -inset-4 -z-10 rounded-4xl bg-[#6d4aff]/30 blur-3xl" />
              <Image
                src={profileImage}
                alt="Portrait of Tousif"
                placeholder="blur"
                sizes="(max-width: 1024px) 420px, 33vw"
                className="aspect-4/5 w-full rounded-3xl border border-violet-500/40 object-cover shadow-[0_0_60px_rgba(109,74,255,0.35)]"
              />
            </div>
          </Reveal>

          <Reveal direction="right">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Hi, I&apos;m Tousif</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-[#b9b6e6]">
              {STORY.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <dl className={`${glass} mt-8 grid gap-6 p-6 sm:grid-cols-2`}>
              {FACTS.map((f) => (
                <div key={f.label}>
                  <dt className="text-sm text-[#8f8bc4]">{f.label}</dt>
                  <dd className="mt-1 font-medium text-white">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        <Section title="What I can do for you" subtitle="Three ways I help people and teams get online and stay there.">
          <Stagger as="ul" className="grid gap-5 md:grid-cols-3">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <StaggerItem as="li" key={title} className={`${glass} p-7 transition duration-300 hover:-translate-y-1 hover:border-[#6d4aff]`}>
                <span className="mb-5 grid size-12 place-items-center rounded-xl bg-[#6d4aff]/20 text-[#a99bff]">
                  <Icon size={24} aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 leading-relaxed text-[#b9b6e6]">{desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        <Section title="Skills & tools" subtitle="The stack I use day to day.">
          <Stagger as="ul" className="grid gap-5 sm:grid-cols-2">
            {SKILLS.map(({ icon: Icon, title, tags }) => (
              <StaggerItem as="li" key={title} className={`${glass} p-6`}>
                <div className="mb-4 flex items-center gap-3 text-[#a99bff]">
                  <Icon size={22} aria-hidden />
                  <h3 className="font-semibold text-white">{title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <li key={t} className={chip}>{t}</li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        <Section title="My journey" subtitle="How I got here, one step at a time.">
          <Stagger as="ol" className="relative space-y-8 border-l border-violet-500/30 pl-8" stagger={0.15}>
            {JOURNEY.map((j) => (
              <StaggerItem as="li" key={j.title} from={{ x: -32, y: 0 }} className="relative">
                <span aria-hidden className="absolute -left-9.75 top-1.5 size-3 rounded-full border-2 border-[#6d4aff] bg-[#070720]" />
                <p className="text-sm text-[#a99bff]">{j.period}</p>
                <h3 className="text-lg font-semibold text-white">{j.title}</h3>
                <p className="mt-1 max-w-xl text-[#b9b6e6]">{j.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        <Section title="How I work">
          <Stagger as="ul" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map(({ icon: Icon, title, text }) => (
              <StaggerItem as="li" key={title} className={`${glass} p-6`}>
                <Icon size={24} className="mb-4 text-[#a99bff]" aria-hidden />
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#b9b6e6]">{text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        <Section title="Outside of work">
          <Stagger as="ul" className="flex flex-wrap gap-3" stagger={0.07}>
            {INTERESTS.map(({ icon: Icon, label }) => (
              <StaggerItem
                as="li"
                key={label}
                from={{ scale: 0.7, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-white/4 px-5 py-2.5 text-[#ecebff]"
              >
                <Icon size={18} className="text-[#a99bff]" aria-hidden /> {label}
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        <Reveal as="section" className={`${glass} flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-10`}>
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Let&apos;s build something together</h2>
            <p className="mt-2 text-[#b9b6e6]">Tell me about your idea and I&apos;ll reply within a day.</p>
          </div>
          <Link href="/contact" className={pill}>
            Get in touch <LuArrowRight size={18} aria-hidden />
          </Link>
        </Reveal>
      </div>
    </>
  );
}