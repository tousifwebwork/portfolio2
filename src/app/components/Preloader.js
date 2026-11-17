"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LuCode } from "react-icons/lu";

/**
 * Intro curtain. Because it lives in the root layout it mounts once per full page load,
 * so it plays on first visit, refresh and hard reload, but not on in-app navigation.
 */
export default function Preloader() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), reduce ? 0 : 1300);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          className="preloader fixed inset-0 z-200 flex flex-col items-center justify-center gap-6 bg-[#070720]"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden
        >
          <motion.div
            className="flex items-center gap-3 text-4xl font-bold text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <LuCode size={40} className="text-[#6d4aff]" />
            Tousif.
          </motion.div>
          <div className="h-0.5 w-44 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-linear-to-r from-[#6d4aff] to-[#a99bff]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}