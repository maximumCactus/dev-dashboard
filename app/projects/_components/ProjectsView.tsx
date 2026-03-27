"use client";

import { useState } from "react";
import type { Project } from "@/app/_data/projects";

function StatusBadge({ status }: { status: Project["status"] }) {
  const labels: Record<Project["status"], string> = {
    idea: "idea",
    "in-progress": "in progress",
    paused: "paused",
    done: "done",
  };
  return (
    <span className="font-mono text-xs uppercase tracking-widest text-foreground/40">
      [{labels[status]}]
    </span>
  );
}

export default function ProjectsView({ projects }: { projects: Project[] }) {
  const [selectedId, setSelectedId] = useState(projects[0]?.id ?? "");
  const selected = projects.find((p) => p.id === selectedId) ?? projects[0];

  return (
    <div className="flex flex-1 flex-col border-2 border-foreground rounded-sm overflow-hidden">
      {/* header bar */}
      <div className="flex items-center justify-between border-b-2 border-foreground px-4 py-2">
        <span className="font-mono text-xs uppercase tracking-widest">
          ▼ Projects
        </span>
        {selected && (
          <span className="font-mono text-xs uppercase tracking-widest text-foreground/60 truncate ml-4">
            {selected.name}:{" "}
            <span className="normal-case">{selected.tagline}</span>
          </span>
        )}
      </div>

      {/* body */}
      <div className="flex flex-1 min-h-0">
        {/* sidebar */}
        <div className="w-48 shrink-0 border-r-2 border-foreground py-4 flex flex-col gap-1 overflow-y-auto">
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedId(p.id)}
              className={`text-left px-4 py-1.5 text-sm transition-colors w-full ${
                p.id === selectedId
                  ? "font-semibold"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {p.id === selectedId && (
                <span className="mr-1 font-mono">&gt;</span>
              )}
              {p.name}
            </button>
          ))}
        </div>

        {/* detail panel */}
        {selected && (
          <div className="flex flex-1 min-w-0 p-8 gap-8 overflow-y-auto">
            {/* placeholder image */}
            <div className="w-64 h-48 shrink-0 border-2 border-foreground/30 rounded-sm flex items-center justify-center text-foreground/20 font-mono text-xs">
              [ screenshot ]
            </div>

            {/* text */}
            <div className="flex flex-col gap-3 min-w-0">
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="font-mono text-sm font-semibold uppercase tracking-widest">
                  {selected.name}
                </h2>
                <StatusBadge status={selected.status} />
              </div>
              <p className="text-sm leading-relaxed text-foreground/80">
                {selected.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {selected.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs border border-foreground/30 px-2 py-0.5 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {selected.repoUrl && (
                <a
                  href={selected.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs underline text-foreground/60 hover:text-foreground mt-1"
                >
                  → repo
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
