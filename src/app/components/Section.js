import { Reveal } from "@/app/components/motion";

export default function Section({ id, title, subtitle, children }) {
  const hid = `${id || title}`.toLowerCase().replace(/\W+/g, "-") + "-heading";
  return (
    <section id={id} aria-labelledby={hid} className="scroll-mt-28">
      <Reveal direction="left" className="mb-8 max-w-2xl">
        <h2 id={hid} className="text-3xl font-semibold text-white sm:text-4xl">
          {title}
        </h2>
        {subtitle && <p className="mt-3 leading-relaxed text-[#b9b6e6]">{subtitle}</p>}
      </Reveal>
      {children}
    </section>
  );
}