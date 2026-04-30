import Link from "next/link";
import NeuralBackground from "../../components/neural-background";
import FadeIn from "../../components/fade-in";

const description =
  "NeuroArm turns intention into motion. Using a non-invasive EEG headset and a 3D-printed 4-DOF arm, users train a small set of mental commands — and the system recognizes their brain activity in real time, translating it into deliberate joint movements. The goal is an accessible, low-cost BCI toolkit that demonstrates real-time robotic control.";

const githubUrl = "https://github.com/NeuroTech-UCSB/RoboticArm";

const pipeline = [
  {
    step: "01",
    title: "EEG Acquisition",
    detail: "Emotiv Insight 2.0 captures EEG via the Cortex API.",
  },
  {
    step: "02",
    title: "Signal Processing",
    detail: "Python pipeline decodes mental commands into control signals.",
  },
  {
    step: "03",
    title: "Robotic Actuation",
    detail: "Commands are sent to Arduino driving four micro-servos.",
  },
  {
    step: "04",
    title: "Evaluation",
    detail: "Success rate, learning curves, and human-in-the-loop study.",
  },
];

const techStack = [
  { name: "Emotiv Insight 2.0", role: "5-channel EEG headset" },
  { name: "Emotiv Cortex API", role: "Mental command stream" },
  { name: "Python + pySerial", role: "Decoding & PC ↔ Arduino bridge" },
  { name: "Arduino + Micro-Servos", role: "4-DOF actuation" },
];

const team = [
  { role: "Engineering Lead", lead: "Spike Rao" },
  { role: "Project Manager", lead: "Alana Raymond" },
  { role: "Design Lead", lead: "Gautam Pilapakam" },
  { role: "ML / Signal Processing", lead: "Logan Mann, Thomas Xu, Adrian" },
  { role: "Hardware Lead", lead: "Johan Centeno" },
  { role: "Intern Coordinator", lead: "Ruiyang / Lena Cen" },
];

export default function NeuroArm() {
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">Project 01</p>
              <div className="flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                In Progress
              </div>
            </div>

            <h1 className="mt-3 text-4xl font-bold uppercase tracking-tight text-primary-dark md:text-6xl">
              BCI Robotic Arm
            </h1>
            <p className="mt-2 text-lg font-semibold tracking-tight text-primary md:text-xl">
              An Accessible Brain–Computer Interface Toolkit
            </p>
            <p className="mt-5 text-base leading-relaxed md:text-lg" style={{ color: "rgba(12, 60, 110, 0.74)" }}>
              {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["BCI", "EEG", "Robotics", "Signal Processing"].map((chip) => (
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
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {team.map((member) => (
                <div key={member.role} className="rounded-2xl border border-primary/10 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">{member.role}</p>
                  <p className="mt-1 text-base font-bold text-primary-dark">{member.lead}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      </div>
    </main>
  );
}
