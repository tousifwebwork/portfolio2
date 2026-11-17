import { LuMail, LuMapPin, LuClock, LuChevronDown } from "react-icons/lu";
import PageHero from "@/app/components/PageHero";
import Section from "@/app/components/Section";
import ContactForm from "@/app/components/ContactForm";
import { Reveal, Stagger, StaggerItem } from "@/app/components/motion";
import { glass, wrap } from "@/app/components/ui";
import { SITE, FAQ } from "@/app/data/site";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Tousif for web development, cloud solutions or IT training.",
};

const DETAILS = [
  { icon: LuMail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: LuMapPin, label: "Location", value: SITE.location },
  { icon: LuClock, label: "Response time", value: SITE.responseTime },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        description="Have a project, question or idea? Send a message and I'll get back to you."
      />

      <div className={`${wrap} space-y-24 pb-8`}>
        <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]" aria-label="Contact">
          <Reveal direction="left" className="space-y-6">
            <div className={`${glass} p-6`}>
              <p className="flex items-center gap-3 text-[#ecebff]">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/60 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
                </span>
                {SITE.status}
              </p>
            </div>

            <ul className="space-y-4">
              {DETAILS.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className={`${glass} flex items-center gap-4 p-5`}>
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#6d4aff]/20 text-[#a99bff]">
                    <Icon size={22} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm text-[#8f8bc4]">{label}</p>
                    {href ? (
                      <a href={href} className="wrap-break-word font-medium text-white transition hover:text-[#a99bff]">{value}</a>
                    ) : (
                      <p className="font-medium text-white">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className={`${glass} p-6`}>
              <h2 className="mb-4 font-semibold text-white">Find me online</h2>
              <ul className="flex flex-wrap gap-3">
                {SITE.socials.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid size-11 place-items-center rounded-full border border-violet-500/30 bg-white/4 text-[#a99bff] transition hover:-translate-y-0.5 hover:border-[#6d4aff] hover:bg-[#6d4aff]/20 hover:text-white"
                    >
                      <Icon size={18} aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="right">
            <ContactForm />
          </Reveal>
        </section>

        <Section title="Frequently asked questions">
          <Stagger as="div" className="max-w-3xl space-y-4">
            {FAQ.map((f) => (
              <StaggerItem key={f.q}>
                <details className={`${glass} group p-6 open:border-[#6d4aff]/60`}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-white [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <LuChevronDown size={20} className="shrink-0 text-[#a99bff] transition group-open:rotate-180" aria-hidden />
                  </summary>
                  <p className="mt-4 leading-relaxed text-[#b9b6e6]">{f.a}</p>
                </details>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      </div>
    </>
  );
}