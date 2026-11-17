import Link from "next/link";
import { Reveal } from "@/app/components/motion";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { LuCode, LuMail, LuMapPin, LuArrowUp } from "react-icons/lu";

// TODO: replace the placeholder URLs / contact details with your own
const SOCIALS = [
  { label: "GitHub", href: "https://github.com/your-username", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-username", icon: FaLinkedinIn },
  { label: "LeetCode", href: "https://leetcode.com/u/your-username", icon: SiLeetcode },
  { label: "X (Twitter)", href: "https://x.com/your-username", icon: FaXTwitter },
  { label: "Instagram", href: "https://instagram.com/your-username", icon: FaInstagram },
];

const EXPLORE = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = ["Web Development", "Cloud Solutions", "IT Training", "UI / UX Design"];

const linkClass = "text-[#b9b6e6] transition hover:text-white";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-violet-500/30 bg-[#05051a]">
      {/* top glow line */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-linear-to-rrom-transparent via-[#6d4aff] to-transparent"
      />

      <Reveal once className="mx-auto max-w-350 px-5 py-14 sm:px-8 lg:px-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 text-2xl font-bold text-white">
              <LuCode size={28} className="text-[#6d4aff]" aria-hidden />
              Tousif.
            </Link>
            <p className="mt-4 max-w-sm leading-relaxed text-[#b9b6e6]">
              Creative designer and full-stack developer building fast, clean and reliable web
              experiences. IT Solutions. Simplified.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid size-10 place-items-center rounded-full border border-violet-500/30 bg-white/4 text-[#a99bff] transition hover:-translate-y-0.5 hover:border-[#6d4aff] hover:bg-[#6d4aff]/20 hover:text-white"
                  >
                    <Icon size={17} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h2 className="mb-4 font-semibold text-white">Explore</h2>
            <ul className="space-y-3">
              {EXPLORE.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h2 className="mb-4 font-semibold text-white">Services</h2>
            <ul className="space-y-3 text-[#b9b6e6]">
              {SERVICES.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-4 font-semibold text-white">Get in touch</h2>
            <ul className="space-y-3 text-[#b9b6e6]">
              <li className="flex items-center gap-3">
                <LuMail size={18} className="shrink-0 text-[#a99bff]" aria-hidden />
                <a href="mailto:hello@yourdomain.com" className={linkClass}>
                  hello@yourdomain.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <LuMapPin size={18} className="shrink-0 text-[#a99bff]" aria-hidden />
                Your City, India
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-full border-2 border-[#6d4aff] px-6 py-2.5 font-medium transition hover:bg-[#6d4aff]/20 hover:shadow-[0_0_24px_rgba(109,74,255,0.5)]"
            >
              Start a project
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-violet-500/20 pt-6 text-sm text-[#8f8bc4] sm:flex-row">
          <p>&copy; 2026 Tousif. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
          <a href="#" className="inline-flex items-center gap-2 transition hover:text-white">
            Back to top <LuArrowUp size={16} aria-hidden />
          </a>
        </div>
      </Reveal>
    </footer>
  );
}