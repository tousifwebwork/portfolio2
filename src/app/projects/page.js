import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import PageHero from "@/app/components/PageHero";
import ProjectsGrid from "@/app/components/ProjectsGrid";
import { Reveal } from "@/app/components/motion";
import { glass, pill, wrap } from "@/app/components/ui";
import { PROJECTS } from "@/app/data/site";

export const metadata = {
  title: "Projects",
  description: "A selection of web, cloud and design projects built by Tousif.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Projects"
        description="Things I've built while learning, competing and working with clients. Filter by type to explore."
      />
      <div className={`${wrap} space-y-24 pb-8`}>
        <ProjectsGrid projects={PROJECTS} />

        <Reveal as="section" className={`${glass} flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-10`}>
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Have something in mind?</h2>
            <p className="mt-2 text-[#b9b6e6]">I&apos;m taking on new projects. Tell me about yours.</p>
          </div>
          <Link href="/contact" className={pill}>
            Start a project <LuArrowRight size={18} aria-hidden />
          </Link>
        </Reveal>
      </div>
    </>
  );
}