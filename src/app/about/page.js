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
        <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
          <Link href="/contact" className={`${pill} justify-center`}>
            Work with me <LuArrowRight size={18} aria-hidden />
          </Link>
          <a
            href={SITE.resume}
            download="Tousif-Resume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[#b9b6e6] transition hover:text-white"
          >
            <LuDownload size={18} aria-hidden /> Download resume
          </a>
        </div>
      </PageHero>

      {/* wrap should be: mx-auto w-full max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 */}
      <div className={`${wrap} space-y-16 pb-8 sm:space-y-20 lg:space-y-24 2xl:space-y-32`}>
        {/* Story */}
        <section
          className="grid items-start gap-8 md:gap-10 lg:grid-cols-[0.8fr_1.2fr] 2xl:gap-16"
          aria-label="My story"
        >
          <Reveal
            direction="left"
            className="mx-auto w-full max-w-[280px] sm:max-w-sm lg:max-w-105 lg:sticky lg:top-28 2xl:max-w-lg"
          >
            <div className="relative">
              <div aria-hidden className="absolute -inset-4 -z-10 rounded-4xl bg-[#6d4aff]/30 blur-3xl" />
              <Image
                src={profileImage}
                alt="Portrait of Tousif"
                placeholder="blur"
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 384px, 33vw"
                className="aspect-4/5 w-full rounded-3xl border border-violet-500/40 object-cover shadow-[0_0_60px_rgba(109,74,255,0.35)]"
              />
            </div>
          </Reveal>

          <Reveal direction="right">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl 2xl:text-5xl">
              Hi, I&apos;m Tousif
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-[#b9b6e6] sm:mt-6 sm:space-y-5 sm:text-lg 2xl:text-xl">
              {STORY.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <dl className={`${glass} mt-8 grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:gap-6 sm:p-6`}>
              {FACTS.map((f) => (
                <div key={f.label} className="min-w-0">
                  <dt className="text-sm text-[#8f8bc4]">{f.label}</dt>
                  <dd className="mt-1 break-words font-medium text-white">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        <Section title="What I can do for you" subtitle="Three ways I help people and teams get online and stay there.">
          <Stagger as="ul" className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:gap-8">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <StaggerItem
                as="li"
                key={title}
                className={`${glass} p-5 transition duration-300 hover:-translate-y-1 hover:border-[#6d4aff] sm:p-7 md:last:col-span-2 lg:last:col-span-1`}
              >
                <span className="mb-4 grid size-11 place-items-center rounded-xl bg-[#6d4aff]/20 text-[#a99bff] sm:mb-5 sm:size-12">
                  <Icon size={24} aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-white sm:text-xl 2xl:text-2xl">{title}</h3>
                <p className="mt-2 leading-relaxed text-[#b9b6e6] 2xl:text-lg">{desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        <Section title="Skills & tools" subtitle="The stack I use day to day.">
          <Stagger as="ul" className="grid gap-4 sm:gap-5 md:grid-cols-2 2xl:grid-cols-3 2xl:gap-8">
            {SKILLS.map(({ icon: Icon, title, tags }) => (
              <StaggerItem as="li" key={title} className={`${glass} p-5 sm:p-6`}>
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
  <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 2xl:gap-20">
    {/* Column 1: Timeline (second on mobile, first on desktop) */}
    <Stagger
      as="ol"
      className="relative order-2 space-y-7 border-l border-violet-500/30 pl-6 sm:space-y-8 sm:pl-8 lg:order-1"
      stagger={0.15}
    >
      {JOURNEY.map((j) => (
        <StaggerItem as="li" key={j.title} from={{ x: -32, y: 0 }} className="relative">
          <span
            aria-hidden
            className="absolute -left-7.75 top-1.5 size-3 rounded-full border-2 border-[#6d4aff] bg-[#070720] sm:-left-9.75"
          />
          <p className="text-sm text-[#a99bff]">{j.period}</p>
          <h3 className="text-base font-semibold text-white sm:text-lg 2xl:text-xl">{j.title}</h3>
          <p className="mt-1 max-w-xl text-[#b9b6e6] 2xl:max-w-2xl 2xl:text-lg">{j.text}</p>
        </StaggerItem>
      ))}
    </Stagger>

    {/* Column 2: Image (first on mobile, second on desktop) */}
    <Reveal
      direction="right"
      className="order-1 mx-auto w-full max-w-[280px] sm:max-w-sm lg:sticky lg:top-28 lg:order-2 lg:max-w-none"
    >
      <div className="relative">
        <div aria-hidden className="absolute -inset-4 -z-10 rounded-4xl bg-[#6d4aff]/30 blur-3xl" />
        <Image
         src="/image.png"
         alt="Tousif at work"
         width={800}
         height={1000}
         sizes="(max-width: 640px) 280px, (max-width: 1024px) 384px, 40vw"
         className="aspect-4/5 w-full rounded-3xl border border-violet-500/40 object-cover shadow-[0_0_60px_rgba(109,74,255,0.35)] sm:aspect-square lg:aspect-4/5"/>
      </div>
    </Reveal>
  </div>
</Section>

        <Section title="How I work">
          <Stagger
            as="ul"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 2xl:gap-8"
          >
            {PRINCIPLES.map(({ icon: Icon, title, text }) => (
              <StaggerItem as="li" key={title} className={`${glass} p-5 sm:p-6`}>
                <Icon size={24} className="mb-4 text-[#a99bff]" aria-hidden />
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#b9b6e6] 2xl:text-base">{text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        <Section title="Outside of work">
          <Stagger as="ul" className="flex flex-wrap gap-2.5 sm:gap-3" stagger={0.07}>
            {INTERESTS.map(({ icon: Icon, label }) => (
              <StaggerItem
                as="li"
                key={label}
                from={{ scale: 0.7, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-white/4 px-4 py-2 text-sm text-[#ecebff] sm:px-5 sm:py-2.5 sm:text-base 2xl:text-lg"
              >
                <Icon size={18} className="text-[#a99bff]" aria-hidden /> {label}
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        <Reveal
          as="section"
          className={`${glass} flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-10 2xl:p-14`}
        >
          <div>
            <h2 className="text-xl font-semibold text-white sm:text-2xl lg:text-3xl 2xl:text-4xl">
              Let&apos;s build something together
            </h2>
            <p className="mt-2 text-[#b9b6e6] 2xl:text-lg">
              Tell me about your idea and I&apos;ll reply within a day.
            </p>
          </div>
          <Link href="/contact" className={`${pill} w-full justify-center sm:w-auto`}>
            Get in touch <LuArrowRight size={18} aria-hidden />
          </Link>
        </Reveal>
      </div>
    </>
  );
}