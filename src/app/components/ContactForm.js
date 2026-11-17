"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuSend, LuCheck } from "react-icons/lu";
import { glass, input } from "@/app/components/ui";

const EMPTY = { name: "", email: "", subject: "", message: "", company: "" }; // company = honeypot
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [serverError, setServerError] = useState("");

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

  function validate() {
    const e = {};
    if (values.name.trim().length < 2) e.name = "Please enter your name.";
    if (!EMAIL.test(values.email.trim())) e.email = "Please enter a valid email address.";
    if (values.message.trim().length < 10) e.message = "Please write at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev) {
    ev.preventDefault();
    if (status === "sending" || !validate()) return;
    setStatus("sending");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      setStatus("success");
      setValues(EMPTY);
    } catch (err) {
      setServerError(err.message);
      setStatus("error");
    }
  }

  const fieldError = (k) =>
    errors[k] && (
      <p id={`${k}-error`} className="mt-1.5 text-sm text-rose-300">
        {errors[k]}
      </p>
    );

  return (
    <div className={`${glass} p-6 sm:p-8`}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex min-h-105 flex-col items-center justify-center text-center"
            role="status"
          >
            <span className="mb-5 grid size-16 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
              <LuCheck size={32} aria-hidden />
            </span>
            <h2 className="text-2xl font-semibold text-white">Message sent</h2>
            <p className="mt-2 max-w-sm text-[#b9b6e6]">Thanks for reaching out. I&apos;ll reply within 24 hours.</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 text-[#a99bff] transition hover:text-white"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-[#b9b6e6]">Name</label>
                <input id="name" name="name" autoComplete="name" value={values.name} onChange={set("name")}
                  aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined}
                  placeholder="Your name" className={input} />
                {fieldError("name")}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-[#b9b6e6]">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={set("email")}
                  aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined}
                  placeholder="you@example.com" className={input} />
                {fieldError("email")}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm text-[#b9b6e6]">Subject <span className="text-[#8f8bc4]">(optional)</span></label>
              <input id="subject" name="subject" value={values.subject} onChange={set("subject")}
                placeholder="What is this about?" className={input} />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-[#b9b6e6]">Message</label>
              <textarea id="message" name="message" rows={6} value={values.message} onChange={set("message")}
                aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined}
                placeholder="Tell me about your project, timeline and goals." className={`${input} resize-y`} />
              {fieldError("message")}
            </div>

            {/* Honeypot: hidden from people, tempting for bots */}
            <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" tabIndex={-1} autoComplete="off" value={values.company} onChange={set("company")} />
            </div>

            <div aria-live="polite">
              {status === "error" && (
                <p className="rounded-lg border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
                  {serverError}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2.5 rounded-full bg-[#6d4aff] px-8 py-3.5 font-medium text-white transition hover:bg-[#7d5cff] hover:shadow-[0_0_28px_rgba(109,74,255,0.6)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
              <LuSend size={18} aria-hidden />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}