"use client";

import Link from "next/link";
import { useState } from "react";
import NeuralBackground from "../components/neural-background";
import FadeIn from "../components/fade-in";

const projects = [
  {
    id: "01",
    title: "BCI Robotic Arm",
    status: "In Progress",
    lead: "Spike Rao",
    stack: ["BCI", "EEG", "Robotics", "Signal Processing"],
    summary:
      "Brain-controlled robotic arm using an EEG headset to read brain signals — users perform actions like grasping and releasing objects through thought.",
    href: "/projects/neuroarm",
  },
  {
    id: "02",
    title: "PsyCopter",
    status: "In Progress",
    lead: "Vihan Jayaraman",
    stack: ["BCI", "Drones", "Intent Decoding"],
    summary:
      "Translates brain waves into user intent for drone flight. Focused on stable real-time mapping from neural signals to flight commands.",
    href: "/projects/psycopter",
  },
  {
    id: "03",
    title: "NeuroColor",
    status: "In Progress",
    lead: "Tishya Chauhan",
    stack: ["EEG", "Generative", "Creative Tools"],
    summary:
      "Generates colors from neural activity — fills in palettes for a piece, or outputs colors driven by brain state.",
    href: "/projects/neurocolor",
  },
  {
    id: "04",
    title: "Mini fNIRS",
    status: "In Progress",
    lead: "John Chen",
    stack: ["fNIRS", "Hardware", "Optical Sensing"],
    summary:
      "Custom functional near-infrared spectroscopy sensor that tracks changes in blood-oxygen levels in the brain.",
    href: "/projects/mini-fnirs",
  },
  {
    id: "05",
    title: "Music Genre Classification",
    status: "In Progress",
    lead: "Yash Kumar",
    stack: ["EEG", "ML", "Classification"],
    summary:
      "Decode the genre of music a listener is hearing using only their EEG signals.",
    href: "/projects/music-genre",
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
        className="absolute top-20 -left-24 h-80 w-80 rounded-full blur-[120px] bg-blob"
        style={{ backgroundColor: "var(--primary)", opacity: 0.08, animation: "float-1 18s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-20 -right-24 h-80 w-80 rounded-full blur-[120px] bg-blob"
        style={{ backgroundColor: "var(--accent)", opacity: 0.16, animation: "float-2 20s ease-in-out infinite" }}
      />

      <section className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 pb-16 pt-28 md:px-10">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">NeuroTech Research</p>
            <h1 className="text-4xl font-bold uppercase tracking-tight text-primary-dark md:text-6xl">Projects</h1>
            <p className="mt-5 text-base leading-relaxed md:text-lg" style={{ color: "rgba(12, 60, 110, 0.68)" }}>
              Five active project tracks — from EEG-driven robotics and drones to optical brain-oxygen sensing and
              EEG-decoded music classification. Each project ships closed-loop systems with real hardware, real signals,
              and real demos.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <section className="rounded-3xl border border-primary/10 bg-white/85 p-6 shadow-xl shadow-primary/5 md:p-8">
            <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">Purpose</h2>
            <p className="mt-4 max-w-4xl text-base leading-relaxed md:text-lg" style={{ color: "rgba(12, 60, 110, 0.72)" }}>
              Projects are how members move from theory to practice. Every track pairs experienced leads with new
              members, ships an end-to-end pipeline each quarter, and produces artifacts — repos, posters, papers, and
              demos — that members carry into internships, research, and graduate study.
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
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-primary/70">
                    {active + 1} / {projects.length}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={goPrev}
                      aria-label="Previous project"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primary transition hover:bg-primary hover:text-white"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      aria-label="Next project"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primary transition hover:bg-primary hover:text-white"
                    >
                      →
                    </button>
                  </div>
                </div>

                <article className="flex flex-col rounded-3xl border border-primary/10 bg-white/90 p-6 shadow-xl shadow-primary/5 md:p-8">
                  <div className="mb-5">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.11em] text-primary">
                      Featured Project
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

                  <div className="mt-8 flex justify-end border-t border-primary/10 pt-5">
                    <Link
                      href={current.href}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-primary-dark hover:scale-[1.02]"
                    >
                      View Project <span aria-hidden>→</span>
                    </Link>
                  </div>
                </article>
              </div>

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
