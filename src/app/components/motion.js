"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useInView, animate } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];
const OFFSET = 56;
const DIRS = {
  up: { y: OFFSET },
  down: { y: -OFFSET },
  left: { x: -OFFSET },
  right: { x: OFFSET },
  none: {},
};

/**
 * Slides + fades an element in when it enters the viewport.
 * once=false (default): it also slides back out when you scroll away, then replays.
 * once=true: plays a single time.
 * onMount: plays on every page load / refresh / route visit instead of on scroll.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  once = false,
  amount = 0.15,
  onMount = false,
  as = "div",
  className,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  const hidden = { opacity: 0, ...(reduce ? {} : DIRS[direction]) };
  const shown = { opacity: 1, x: 0, y: 0 };
  const trigger = onMount ? { animate: shown } : { whileInView: shown, viewport: { once, amount } };

  return (
    <Tag
      className={className}
      initial={hidden}
      {...trigger}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Parent that staggers its <StaggerItem> children. */
export function Stagger({
  children,
  stagger = 0.09,
  delay = 0,
  once = false,
  amount = 0.15,
  onMount = false,
  as = "div",
  className,
  ...rest
}) {
  const Tag = motion[as];
  const variants = { hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } };
  const trigger = onMount ? { animate: "show" } : { whileInView: "show", viewport: { once, amount } };

  return (
    <Tag className={className} variants={variants} initial="hidden" {...trigger} {...rest}>
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, from = { y: 28 }, duration = 0.6, as = "div", className, ...rest }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  const variants = {
    hidden: { opacity: 0, ...(reduce ? {} : from) },
    show: { opacity: 1, x: 0, y: 0, scale: 1, scaleX: 1, transition: { duration, ease: EASE } },
  };
  return (
    <Tag className={className} variants={variants} {...rest}>
      {children}
    </Tag>
  );
}

/** Headline line that rises out of a mask. Plays on every load. */
export function MaskLine({ children, delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-[0.04em]">
      <motion.span
        className="block"
        initial={{ y: reduce ? 0 : "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Progress bar that fills when scrolled into view. */
export function AnimatedBar({ pct, className }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ width: reduce ? `${pct}%` : 0 }}
      whileInView={{ width: `${pct}%` }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 1.1, ease: EASE }}
    />
  );
}

/** Number that counts up the first time it is visible. */
export function CountUp({ to, suffix = "", duration = 1.4, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) return setN(to);
    const c = animate(0, to, { duration, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, reduce, to, duration]);

  return (
    <span ref={ref} className={className}>
      {n}
      {suffix}
    </span>
  );
}