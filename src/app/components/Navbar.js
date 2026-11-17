"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <motion.header
        id="top"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
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
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="nav-menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-1 md:hidden"
          >
            {open ? <LuX size={28} /> : <LuMenu size={28} />}
          </button>
        </nav>
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