import { Reveal, MaskLine } from "@/app/components/motion";
import { wrap } from "@/app/components/ui";

export default function PageHero({ title, description, children }) {
  return (
    <header className="relative overflow-hidden pb-14 pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-25 mask-[radial-gradient(circle_at_70%_20%,#000,transparent_70%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(130,110,255,.35) 1px,transparent 1px),linear-gradient(90deg,rgba(130,110,255,.35) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className={wrap}>
        <h1 className="text-[clamp(3.5rem,9vw,7.5rem)] uppercase leading-[0.95] text-[#a99bff] [font-family:var(--font-display),Impact,sans-serif]">
          <MaskLine delay={0.45}>{title}</MaskLine>
        </h1>
        <Reveal as="p" onMount delay={0.7} className="mt-5 max-w-2xl text-lg leading-relaxed text-[#b9b6e6] sm:text-xl">
          {description}
        </Reveal>
        {children && (
          <Reveal onMount delay={0.85} className="mt-8 flex flex-wrap gap-4">
            {children}
          </Reveal>
        )}
      </div>
    </header>
  );
}