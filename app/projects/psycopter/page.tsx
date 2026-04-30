import Link from "next/link";
import NeuralBackground from "../../components/neural-background";
import FadeIn from "../../components/fade-in";

const description =
  "PsyCopter is a custom multirotor that flies on intent. EEG decoded by a classifier on a companion computer becomes high-level commands routed to an Ardupilot flight controller — with manual RC override always armed for safety. The goal is hands-free flight: the user commands the drone to waypoints or position holds using neural activity, not their hands.";

const githubUrl = "https://github.com/NeuroTech-UCSB";

const pipeline = [
  {
    step: "01",
    title: "EEG Acquisition",
    detail: "OpenBCI headset streams EEG over SPI or serial.",
  },
  {
    step: "02",
    title: "Signal Processing",
    detail: "Classifier (DNN / LDA) on a laptop or Jetson decodes intent in real time.",
  },
  {
    step: "03",
    title: "Intent → Command",
    detail: "Mapped to MAVLink instructions or synthesized RC channels.",
  },
  {
    step: "04",
    title: "Flight Execution",
    detail: "Ardupilot on the SpeedyBee F405 stabilizes and navigates; RC fallback armed.",
  },
];

const techStack = [
  { name: "SpeedyBee F405 V4", role: "Ardupilot flight controller" },
  { name: "Ardupilot + MAVLink", role: "Autonomy & telemetry" },
  { name: "ExpressLRS (ELRS)", role: "Long-range RC link" },
  { name: "Jetson / Raspberry Pi", role: "Companion computer + MAVLink router" },
];

const team = [
  "Vihan Jayaraman",
  "Huy Nguyen",
  "Priyansh Nath",
  "Steven Moreno",
  "Diego Linn",
  "Arjun Debnath",
  "Stanton Nowinski",
  "Karolina Huang",
];

export default function PsyCopter() {
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

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pb-20 pt-28 md:px-10">
        {/* HERO + DESCRIPTION */}
        <FadeIn>
          <section className="rounded-3xl border border-primary/10 bg-white/95 p-7 shadow-xl shadow-primary/5 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">Project 02</p>
              <div className="flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                In Progress
              </div>
            </div>

            <h1 className="mt-3 text-4xl font-bold uppercase tracking-tight text-primary-dark md:text-6xl">
              PsyCopter
            </h1>
            <p className="mt-2 text-lg font-semibold tracking-tight text-primary md:text-xl">
              EEG-Driven Drone Control
            </p>
            <p className="mt-5 text-base leading-relaxed md:text-lg" style={{ color: "rgba(12, 60, 110, 0.74)" }}>
              {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["EEG", "BCI", "Drone Autonomy", "Ardupilot"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary/80"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-7">
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-primary-dark"
              >
                GitHub Repository <span aria-hidden>↗</span>
              </Link>
            </div>
          </section>
        </FadeIn>

        {/* PIPELINE */}
        <FadeIn delay={150}>
          <section className="rounded-3xl border border-primary/10 bg-white/95 p-7 shadow-xl shadow-primary/5 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">How it works</p>
            <h2 className="mt-2 text-2xl font-bold text-primary-dark md:text-3xl">Pipeline</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {pipeline.map((p) => (
                <article key={p.step} className="rounded-2xl border border-primary/10 bg-white p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      {p.step}
                    </span>
                    <h3 className="text-base font-bold text-primary-dark">{p.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(12, 60, 110, 0.74)" }}>
                    {p.detail}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* TECH STACK */}
        <FadeIn delay={250}>
          <section className="rounded-3xl border border-primary/10 bg-white/95 p-7 shadow-xl shadow-primary/5 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">What we built on</p>
            <h2 className="mt-2 text-2xl font-bold text-primary-dark md:text-3xl">Tech Stack</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {techStack.map((t) => (
                <div key={t.name} className="rounded-2xl border border-primary/10 bg-primary/5 p-5">
                  <p className="text-sm font-bold text-primary-dark">{t.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.1em] text-primary/70">{t.role}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* TEAM */}
        <FadeIn delay={350}>
          <section className="rounded-3xl border border-primary/10 bg-white/95 p-7 shadow-xl shadow-primary/5 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">The People</p>
            <h2 className="mt-2 text-2xl font-bold text-primary-dark md:text-3xl">Team</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {team.map((name) => (
                <div key={name} className="rounded-2xl border border-primary/10 bg-white p-5">
                  <p className="text-base font-bold text-primary-dark">{name}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      </div>
    </main>
  );
}
