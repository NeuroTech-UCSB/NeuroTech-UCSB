"use client";

import Link from "next/link";
import { useState } from "react";
import NeuralBackground from "../components/neural-background";
import FadeIn from "../components/fade-in";

const projects = [
  {
    id: "01",
    title: "Project _____",
    status: "Status _____",
    lead: "Lead _____",
    stack: ["tag1", "tag2", "tag3"],
    summary: "Insert short project summary here: _____.",
    href: "/projects/project-1",
  },
  {
    id: "02",
    title: "Project _____",
    status: "Status _____",
    lead: "Lead _____",
    stack: ["tag1", "tag2", "tag3"],
    summary: "Insert short project summary here: _____.",
    href: "/projects/project-2",
  },
  {
    id: "03",
    title: "Project _____",
    status: "Status _____",
    lead: "Lead _____",
    stack: ["tag1", "tag2", "tag3"],
    summary: "Insert short project summary here: _____.",
    href: "/projects/project-3",
  },
  {
    id: "04",
    title: "Project _____",
    status: "Status _____",
    lead: "Lead _____",
    stack: ["tag1", "tag2", "tag3"],
    summary: "Insert short project summary here: _____.",
    href: "/projects/project-4",
  },
  {
    id: "05",
    title: "Project _____",
    status: "Status _____",
    lead: "Lead _____",
    stack: ["tag1", "tag2", "tag3"],
    summary: "Insert short project summary here: _____.",
    href: "/projects/project-5",
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const current = projects[active];
  const goPrev = () => setActive((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const goNext = () => setActive((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(12,60,110,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(12,60,110,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <NeuralBackground />

      <div
        className="absolute top-20 -left-24 h-80 w-80 rounded-full blur-[120px]"
        style={{ backgroundColor: "var(--primary)", opacity: 0.08, animation: "float-1 18s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-20 -right-24 h-80 w-80 rounded-full blur-[120px]"
        style={{ backgroundColor: "var(--accent)", opacity: 0.16, animation: "float-2 20s ease-in-out infinite" }}
      />

      <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-16 pt-28 md:px-10">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">NeuroTech Research</p>
            <h1 className="text-4xl font-bold uppercase tracking-tight text-primary-dark md:text-6xl">Projects</h1>
            <p className="mt-5 text-base leading-relaxed md:text-lg" style={{ color: "rgba(12, 60, 110, 0.68)" }}>
              Insert hero description here: _____.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <section className="rounded-3xl border border-primary/10 bg-white/85 p-6 shadow-xl shadow-primary/5 md:p-8">
            <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">Purpose</h2>
            <p className="mt-4 max-w-4xl text-base leading-relaxed md:text-lg" style={{ color: "rgba(12, 60, 110, 0.72)" }}>
              Insert purpose statement here: _____.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={350}>
          <section>
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">Current Projects</h2>
              <Link
                href="/apply"
                className="rounded-full bg-primary px-5 py-2 text-sm font-semibold uppercase text-white transition hover:bg-primary-dark"
              >
                Join a Project
              </Link>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
              <article className="rounded-3xl border border-primary/10 bg-white/90 p-6 shadow-xl shadow-primary/5 md:p-8">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.11em] text-primary">
                    Featured Project
                  </span>
                  <span className="text-sm font-semibold text-primary/70">
                    {active + 1} / {projects.length}
                  </span>
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary/70">Project {current.id}</p>
                <h3 className="mt-2 text-2xl font-bold text-primary-dark md:text-3xl">{current.title}</h3>
                <p className="mt-2 text-sm font-medium text-accent">Status: {current.status}</p>
                <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(12, 60, 110, 0.72)" }}>
                  {current.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {current.stack.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary/80"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-sm" style={{ color: "rgba(12, 60, 110, 0.72)" }}>
                  <span className="font-semibold text-primary-dark">Lead:</span> {current.lead}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="rounded-full border border-primary/30 px-5 py-2 text-sm font-semibold text-primary transition hover:bg-primary/5"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark"
                  >
                    Next Project
                  </button>
                  <Link
                    href={current.href}
                    className="rounded-full border border-primary/30 px-5 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
                  >
                    View Project
                  </Link>
                </div>
              </article>

              <aside className="rounded-3xl border border-primary/10 bg-white/90 p-5 shadow-lg shadow-primary/5">
                <h3 className="text-lg font-bold text-primary-dark">Project Directory</h3>
                <ul className="mt-4 space-y-3">
                  {projects.map((project, index) => (
                    <li key={project.id}>
                      <button
                        type="button"
                        onClick={() => setActive(index)}
                        className={`w-full rounded-xl border px-4 py-3 text-left transition ${
                          index === active
                            ? "border-primary bg-primary text-white"
                            : "border-primary/15 bg-white text-primary hover:border-primary/35 hover:bg-primary/5"
                        }`}
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.1em]">Project {project.id}</p>
                        <p className="mt-1 text-sm font-semibold">{project.title}</p>
                      </button>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </section>
        </FadeIn>
      </section>
    </main>
  );
}
