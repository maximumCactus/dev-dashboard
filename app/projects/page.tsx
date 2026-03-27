import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/app/_data/projects";
import ProjectsView from "./_components/ProjectsView";

export const metadata: Metadata = {
  title: "Projects — MaximumCactus",
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-1 flex-col p-8 gap-4">
      <div className="flex items-center justify-between">
        <h1 className="font-handwriting text-3xl font-bold">Projects</h1>
        <Link
          href="/"
          className="text-xs font-mono uppercase tracking-widest text-foreground/50 hover:text-foreground transition-colors"
        >
          ← back
        </Link>
      </div>
      <ProjectsView projects={projects} />
    </main>
  );
}
