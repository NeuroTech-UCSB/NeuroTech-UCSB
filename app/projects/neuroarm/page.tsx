import Link from "next/link";
import NeuralBackground from "../../components/neural-background";
import FadeIn from "../../components/fade-in";

const updates = [
  {
    date: "Mar 9, 2026",
    title: "System Stability Achieved",
    detail:
      "Completed the first closed-loop pipeline (EEG → Processing → Classification → Arduino → Actuation). Recorded initial latency and verified basic threshold-based control with one action.",
  },
  {
    date: "Mar 16, 2026",
    title: "Control States Defined",
    detail:
      "Established 2–3 control states such as relax, focus, and blink. Implemented stable feature extraction and classification with multiple latency measurements under 400ms.",
  },
  {
    date: "Mar 30, 2026",
    title: "Experiment Data Collected",
    detail:
      "Collected 5–8 subject recordings, generated initial accuracy and latency statistics, documented failure cases, and drafted results and limitations sections.",
  },
];

const milestones = [
  {
    week: "Week 1",
    title: "System Stability",
    timeframe: "Mar 3 – Mar 9",
    detail:
      "Establish a minimally functional closed-loop system with stable EEG acquisition, basic band power computation, one threshold-based action, Arduino command execution, and first latency measurement.",
  },
  {
    week: "Week 2",
    title: "Control Definition",
    timeframe: "Mar 10 – Mar 16",
    detail:
      "Define and stabilize 2–3 control states with fixed feature extraction, stable classification logic, and continuous 5-minute runtime.",
  },
  {
    week: "Week 3",
    title: "Closed-Loop Reliability",
    timeframe: "Mar 17 – Mar 23",
    detail:
      "Improve reliability across multiple test sessions, document artifacts, confirm interface alignment, and reduce latency below 300ms.",
  },
  {
    week: "Week 4",
    title: "Experiment & Data Collection",
    timeframe: "Mar 24 – Mar 30",
    detail:
      "Collect structured recordings, compute accuracy and latency statistics, document failures, and begin drafting paper results and limitations.",
  },
  {
    week: "Week 5",
    title: "Final Integration & Paper Polish",
    timeframe: "Mar 31 – Apr 5",
    detail:
      "Finalize the full manuscript draft, architecture diagram, latency visualization, risk reflection, final demo testing, and experiment analysis/writeup.",
  },
];

const team = [
  {
    role: "Project Manager",
    lead: "@Alana Raymond",
    responsibility:
      "Coordinates schedule, risks, and stakeholder communication. Keeps the project on track and runs weekly syncs.",
  },
  {
    role: "Design Lead",
    lead: "@Gautam Pilapakam",
    responsibility:
      "Defines demo use cases, UI and feedback flow, ergonomics, and participant experience.",
  },
  {
    role: "Engineering Lead",
    lead: "@Jake Forteza",
    responsibility:
      "Owns system architecture, software and hardware integration, CI, and code reviews.",
  },
  {
    role: "ML / Signal Processing Lead",
    lead: "@Logan Mann, @Thomas Xu, @Adrian",
    responsibility:
      "Handles preprocessing pipeline, feature extraction, baseline models, and evaluation.",
  },
  {
    role: "Hardware Lead",
    lead: "@Johan Centeno",
    responsibility:
      "Manages EEG hardware setup, robotic control safety, procurement, and emergency-stop interlocks.",
  },
  {
    role: "Intern Coordinator",
    lead: "@Ruiyang Cen Ruiyang/Lena Cen",
    responsibility:
      "Supports onboarding, weekly intern check-ins, task assignment, and progress tracking.",
  },
];

const relatedLinks = [
  {
    label: "Project Resources",
    type: "Docs",
    items: [
      {
        name: "Project Plan",
        href: "https://docs.google.com/document/d/1MlhHtL7yIsi-iCLiOZgodcWphj-EQ5dZPGJcsrhW0dU/edit",
      },
      {
        name: "GitHub Repository",
        href: "https://github.com/NeuroTech-UCSB/RoboticArm",
      },
      {
        name: "Slack Task Tracker",
        href: "https://app.slack.com/lists/T073X26R1/F0AB9L5N7FB",
      },
    ],
  },
  {
    label: "Learning Resources",
    type: "Research",
    items: [
      {
        name: "The Neurotech Primer",
        href: "https://neurotechx.com/primer/",
      },
      {
        name: "OpenBCI Examples",
        href: "https://docs.openbci.com/Examples/ExamplesLanding/",
      },
      {
        name: "EEGLAB Preprocessing Guide",
        href: "https://eeglab.org/tutorials/05_Preprocess/Filtering.html",
      },
    ],
  },
  {
    label: "System Assets",
    type: "Data",
    items: [
      { name: "EEG Recordings", href: "#" },
      { name: "Latency Tracker", href: "#" },
      { name: "Signal Tracker", href: "#" },
    ],
  },
  {
    label: "Implementation",
    type: "Code",
    items: [
      {
        name: "Robotic Arm Repository",
        href: "https://github.com/NeuroTech-UCSB/RoboticArm",
      },
      { name: "Decision Logic Pipeline", href: "#" },
      { name: "Arduino Control Layer", href: "#" },
    ],
  },
];

export default function Project1() {
  return (
    <main className="min-h-screen bg-[#f7fbff]">
      <section className="relative overflow-hidden">
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
          style={{
            backgroundColor: "var(--primary)",
            opacity: 0.08,
            animation: "float-1 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-20 -right-24 h-80 w-80 rounded-full blur-[120px]"
          style={{
            backgroundColor: "var(--accent)",
            opacity: 0.16,
            animation: "float-2 20s ease-in-out infinite",
          }}
        />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-16 pt-28 md:px-10">
          <FadeIn>
            <section className="relative rounded-3xl border border-primary/10 bg-white/90 p-7 shadow-xl shadow-primary/5 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
                Project 01
              </p>
              <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                In Progress
              </div>
              <h1 className="mt-3 text-4xl font-bold uppercase tracking-tight text-primary-dark md:text-6xl">
                BCI Robotic Arm
              </h1>
              <p
                className="mt-5 max-w-4xl text-base leading-relaxed md:text-lg"
                style={{ color: "rgba(12, 60, 110, 0.72)" }}
              >
                This project involves a brain-controlled robotic arm using an
                EEG headset to read brain signals, enabling users to perform
                actions such as grasping and releasing objects through thought.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary/80">
                  BCI
                </span>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary/80">
                  EEG
                </span>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary/80">
                  Robotics
                </span>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary/80">
                  Signal Processing
                </span>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <Link
                  href="https://docs.google.com/document/d/1MlhHtL7yIsi-iCLiOZgodcWphj-EQ5dZPGJcsrhW0dU/edit"
                  className="rounded-2xl border border-primary/10 bg-primary/5 p-4 transition hover:border-primary/30"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
                    Planning
                  </p>
                  <p className="mt-1 text-sm font-semibold text-primary-dark">
                    Project Plan
                  </p>
                </Link>
                <Link
                  href="https://github.com/NeuroTech-UCSB/RoboticArm"
                  className="rounded-2xl border border-primary/10 bg-primary/5 p-4 transition hover:border-primary/30"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
                    Codebase
                  </p>
                  <p className="mt-1 text-sm font-semibold text-primary-dark">
                    GitHub Repository
                  </p>
                </Link>
                <Link
                  href="https://app.slack.com/lists/T073X26R1/F0AB9L5N7FB"
                  className="rounded-2xl border border-primary/10 bg-primary/5 p-4 transition hover:border-primary/30"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
                    Tracking
                  </p>
                  <p className="mt-1 text-sm font-semibold text-primary-dark">
                    Task Tracker
                  </p>
                </Link>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={150}>
            <section className="rounded-3xl border border-primary/10 bg-white/90 p-7 shadow-xl shadow-primary/5 md:p-9">
              <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">
                Description
              </h2>
              <div
                className="mt-4 space-y-4 text-base leading-relaxed md:text-lg"
                style={{ color: "rgba(12, 60, 110, 0.72)" }}
              >
                <p>
                  This project builds a brain-computer interface system that
                  allows a user to control a robotic arm using EEG signals.
                  Brain activity is captured through an EEG headset, processed in
                  real time, and translated into commands that drive physical
                  actuation such as grasping and releasing objects.
                </p>
                <p>
                  The system integrates EEG acquisition, preprocessing, feature
                  extraction, classification, and hardware control into a single
                  closed-loop pipeline. The emphasis is on reliable real-time
                  performance, low latency, reproducible control states, and
                  stable weekly integration across the full stack.
                </p>

                <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">
                  Goals
                </h2>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Establish device interconnection.</li>
                  <li>Implement signal processing.</li>
                  <li>Train commands to execute small movements.</li>
                </ul>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={200}>
            <section className="rounded-3xl border border-primary/10 bg-white/90 p-7 shadow-xl shadow-primary/5 md:p-9">
              <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">
                Full Pipeline
              </h2>
              <div
                className="mt-4 text-base leading-relaxed md:text-lg"
                style={{ color: "rgba(12, 60, 110, 0.72)" }}
              >
                <p>
                  Headset → Emotiv BCI → OSC (message sender) → Python
                  (decision logic) → Arduino → Robotic Arm
                </p>
              </div>
            </section>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-10">
        <FadeIn delay={250}>
          <section className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="rounded-3xl border border-primary/10 bg-white/90 p-6 shadow-xl shadow-primary/5 md:p-8">
              <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">
                Updates
              </h2>
              <ul className="mt-5 space-y-3">
                {updates.map((update, index) => (
                  <li
                    key={`${update.date}-${index}`}
                    className="rounded-2xl border border-primary/10 bg-white p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
                      {update.date}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-primary-dark">
                      {update.title}
                    </h3>
                    <p
                      className="mt-2 text-sm leading-relaxed"
                      style={{ color: "rgba(12, 60, 110, 0.72)" }}
                    >
                      {update.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </article>

            <aside className="rounded-3xl border border-primary/10 bg-white/90 p-6 shadow-xl shadow-primary/5 md:p-8">
              <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">
                Related Links
              </h2>
              <ul className="mt-5 space-y-3">
                {relatedLinks.map((item) => (
                  <li key={item.label}>
                    <div className="rounded-xl border border-primary/15 bg-white px-4 py-3">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
                          {item.type}
                        </p>
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                          {item.items.length}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-semibold text-primary-dark">
                        {item.label}
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {item.items.map((entry) => (
                          <li key={entry.name}>
                            <Link
                              href={entry.href}
                              className="text-xs font-medium text-primary/75 underline-offset-2 transition hover:text-primary hover:underline"
                            >
                              {entry.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-primary/10 bg-primary/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
                  Quick Notes
                </p>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "rgba(12, 60, 110, 0.72)" }}
                >
                  Core principle: include at least one full integration test
                  every week. Integration cadence matters more than model
                  sophistication.
                </p>
              </div>
            </aside>
          </section>
        </FadeIn>

        <FadeIn delay={300}>
          <section className="mt-4 rounded-3xl border border-primary/10 bg-white/90 p-6 shadow-xl shadow-primary/5 md:p-8">
            <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">
              Weekly Objectives
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {milestones.map((item) => (
                <article
                  key={item.week}
                  className="rounded-2xl border border-primary/10 bg-white p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
                    {item.week} • {item.timeframe}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-primary-dark">
                    {item.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "rgba(12, 60, 110, 0.72)" }}
                  >
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={350}>
          <section className="mt-4 rounded-3xl border border-primary/10 bg-white/90 p-6 shadow-xl shadow-primary/5 md:p-8">
            <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">
              Team
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {team.map((member) => (
                <article
                  key={member.role}
                  className="rounded-2xl border border-primary/10 bg-white p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
                    {member.role}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-primary-dark">
                    {member.lead}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "rgba(12, 60, 110, 0.72)" }}
                  >
                    {member.responsibility}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </FadeIn>
      </section>
    </main>
  );
}