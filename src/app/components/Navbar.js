"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { LuCode, LuArrowUpRight, LuMenu, LuX } from "react-icons/lu";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

const ctaClass =
  "inline-flex items-center gap-2 rounded-full border-2 border-[#6d4aff] px-6 py-2.5 font-medium text-[#ecebff] transition hover:bg-[#6d4aff]/20 hover:shadow-[0_0_24px_rgba(109,74,255,0.5)]";

const list = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } };
const item = { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.35 } } };

export default function Navbar() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const toggleRef = useRef(null);
  const introDone = useRef(false);

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Scroll progress bar along the bottom edge of the header
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  // Hide when scrolling down, show when scrolling up
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 12);
    setHidden(!reduce && !open && y > prev && y > 160);
  });

  // The entrance delay (waiting for the splash screen) only applies the first time
  useEffect(() => {
    const t = setTimeout(() => (introDone.current = true), 1700);
    return () => clearTimeout(t);
  }, []);

  // Close the menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Lock page scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape closes the menu and returns focus to the toggle; resizing to desktop closes it too
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => e.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <motion.header
        id="top"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: hidden ? "-100%" : 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: introDone.current ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
        onFocusCapture={() => setHidden(false)} // keyboard users always see the nav
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled || open ? "border-violet-500/30 bg-[#070720]/80 backdrop-blur-xl" : "border-transparent"
        }`}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex h-21 max-w-350 items-center justify-between gap-6 px-5 sm:px-8 lg:px-14"
        >
          <Link href="/" aria-label="Tousif home" className="flex items-center gap-3 text-[1.7rem] font-bold text-white">
            <LuCode size={32} className="text-[#6d4aff]" aria-hidden />
            <span>Tousif.</span>
          </Link>

          <ul className="hidden gap-8 md:flex lg:gap-12">
            {LINKS.map((l) => {
              const active = isActive(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative block py-2 text-base lg:text-lg ${
                      active ? "font-semibold text-[#6d4aff]" : "opacity-90 hover:text-[#a99bff]"
                    }`}
                  >
                    {l.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-[#6d4aff]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link href="/contact" className={`${ctaClass} hidden md:inline-flex`}>
            Let&apos;s Talk <LuArrowUpRight size={18} aria-hidden />
          </Link>

          <button
            ref={toggleRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={open ? "nav-menu" : undefined}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-1 md:hidden"
          >
            {open ? <LuX size={28} /> : <LuMenu size={28} />}
          </button>
        </nav>

        {/* Reading progress */}
        {!reduce && (
          <motion.span
            aria-hidden
            style={{ scaleX: progress }}
            className="absolute inset-x-0 -bottom-px h-0.5 origin-left bg-linear-to-r from-[#6d4aff] to-[#a99bff]"
          />
        )}
      </motion.header>

      {/* Mobile menu: slides in from the right and slides back out.
          Rendered outside <header> so the header's backdrop blur can't break position:fixed. */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            id="nav-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 top-21 z-40 bg-[#070720]/95 p-6 backdrop-blur-xl md:hidden"
          >
            <motion.ul variants={list} initial="hidden" animate="show" className="flex flex-col gap-1">
              {LINKS.map((l) => (
                <motion.li key={l.href} variants={item}>
                  <Link
                    href={l.href}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className={`block py-3 text-2xl ${isActive(l.href) ? "font-semibold text-[#6d4aff]" : ""}`}
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={item} className="mt-4">
                <Link href="/contact" className={ctaClass}>
                  Let&apos;s Talk <LuArrowUpRight size={18} aria-hidden />
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}