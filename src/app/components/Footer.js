import Link from "next/link";
import { Reveal } from "@/app/components/motion";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { LuCode, LuMail, LuMapPin, LuArrowUp } from "react-icons/lu";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/tousifwebwork", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohammad-tousif-dev/", icon: FaLinkedinIn },
  { label: "LeetCode", href: "https://leetcode.com/u/tousifwebwork/", icon: SiLeetcode },
  { label: "X (Twitter)", href: "https://x.com/rocking_tousif", icon: FaXTwitter },
  { label: "Instagram", href: "https://www.instagram.com/tousif_attari_/", icon: FaInstagram },
];

const EXPLORE = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = ["Web Development", "Cloud Solutions", "IT Training", "UI / UX Design"];

const linkClass =
  "inline-block text-[#b9b6e6] transition hover:translate-x-0.5 hover:text-white focus-visible:text-white focus-visible:outline-none";

const headingClass =
  "mb-4 text-sm font-semibold uppercase tracking-wider text-white sm:text-base";

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-violet-500/30 bg-[#05051a] sm:mt-24">
      {/* top glow line */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#6d4aff] to-transparent"
      />
      {/* soft ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(109,74,255,0.14),transparent)]"
      />

      <Reveal once
        className="relative mx-auto w-full max-w-350 px-4 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16 2xl:max-w-440">
        <div className="grid gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-12 lg:grid-cols-[1.5fr_1.4fr_1.2fr] lg:gap-x-16">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl"
            >
              <LuCode size={28} className="text-[#6d4aff]" aria-hidden />
              Tousif.
            </Link>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-[#b9b6e6] sm:text-base md:mx-0">
              Creative designer and full-stack developer building fast, clean and reliable web
              experiences. IT Solutions. Simplified.
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid size-10 place-items-center rounded-full border border-violet-500/30 bg-white/4 text-[#a99bff] transition hover:-translate-y-0.5 hover:border-[#6d4aff] hover:bg-[#6d4aff]/20 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6d4aff] sm:size-11"
                  >
                    <Icon size={17} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore + Services: always two columns side by side (mobile too) */}
          <div className="grid grid-cols-2 gap-6 sm:gap-10 max-sm:ml-10 ">
            <nav aria-label="Footer">
              <h2 className={headingClass}>Explore</h2>
              <ul className="space-y-3 text-sm sm:text-base">
                {EXPLORE.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className={headingClass}>Services</h2>
              <ul className="space-y-3 text-sm text-[#b9b6e6] sm:text-base">
                {SERVICES.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className={headingClass}>Get in touch</h2>
            <ul className="space-y-3 text-sm text-[#b9b6e6] sm:text-base">
              <li className="flex items-center gap-3">
                <LuMail size={18} className="shrink-0 text-[#a99bff]" aria-hidden />
                <a href="mailto:tousifwebwork@gmail.com" className={`${linkClass} break-all`}>
                  tousifwebwork@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <LuMapPin size={18} className="shrink-0 text-[#a99bff]" aria-hidden />
                Ponda, Goa, India
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full border-2 border-[#6d4aff] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#6d4aff]/20 hover:shadow-[0_0_24px_rgba(109,74,255,0.5)] sm:w-auto sm:text-base"
            >
              Start a project
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-violet-500/20 pt-6 text-center text-xs text-[#8f8bc4] sm:mt-12 sm:text-sm md:flex-row md:text-left">
          <p>&copy; 2026 Tousif. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            Back to top <LuArrowUp size={16} aria-hidden />
          </a>
        </div>
      </Reveal>
    </footer>
  );
}