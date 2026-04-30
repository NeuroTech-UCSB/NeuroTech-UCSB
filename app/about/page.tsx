import Link from "next/link";
import NeuralBackground from "../components/neural-background";
import FadeIn from "../components/fade-in";

const pillars = [
  {
    letter: "B",
    title: "Build",
    body:
      "Hands-on BMI projects with real hardware, real signals, and real demos. Members ship closed-loop systems — EEG headsets, robotic arms, drones, optical sensors, and living neural cultures — every quarter.",
  },
  {
    letter: "M",
    title: "Mentor",
    body:
      "Connect students with UCSB labs, industry partners, and alumni. Project leads coach interns, the podcast and newsletter capture what we learn, and members leave with portfolios that open doors.",
  },
  {
    letter: "I",
    title: "Impact",
    body:
      "Translate neurotech into workshops, demos, and the CNTC conference for our campus and local schools. We want neurotechnology to feel reachable — not gated behind a graduate program.",
  },
];

const whyWeExist = [
  {
    title: "Close the gap",
    body:
      "There was no hub at UCSB where neuroscience, engineering, and CS actually build together. We built one.",
  },
  {
    title: "Learn by doing",
    body:
      "Classes teach theory; we wanted hands-on BMI projects with real hardware, real signals, and real demos.",
  },
  {
    title: "Community & mentors",
    body:
      "Connect students with labs, industry, and alumni for guidance, gear, and internships.",
  },
  {
    title: "Career runway",
    body:
      "Give members a portfolio — repos, posters, competitions — that opens doors after graduation.",
  },
  {
    title: "Impact & outreach",
    body:
      "Translate neurotech into workshops and demos that inspire our campus and local schools.",
  },
];

const projectTracks = [
  {
    name: "BCI Robotic Arm",
    href: "/projects/neuroarm",
    summary: "EEG-driven robotic arm. Brain signals → real-time classification → grasping and releasing objects.",
  },
  {
    name: "PsyCopter",
    href: "/projects/psycopter",
    summary: "Brain waves to drone control. Translates user intent from neural signals into flight commands.",
  },
  {
    name: "Mini fNIRS",
    href: "/projects/mini-fnirs",
    summary: "Custom functional near-infrared spectroscopy sensor that tracks blood-oxygen changes in the brain.",
  },
];

export default function About() {
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

      <section className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 pb-24 pt-28 md:px-10">
        {/* Hero */}
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">About the Club</p>
            <h1 className="text-4xl font-bold uppercase tracking-tight text-primary-dark md:text-6xl">
              NeuroTech <span className="text-primary">@</span> UCSB
            </h1>
            <p className="mt-5 text-base leading-relaxed md:text-lg" style={{ color: "rgba(12, 60, 110, 0.68)" }}>
              The campus hub where neuroscience, engineering, and computer science actually build together. We design,
              prototype, and ship brain–machine interfaces, then teach what we learn.
            </p>
            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent/10 px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark">Our motto</span>
              <span className="text-sm font-bold text-primary-dark">B.M.I — Build, Mentor, Impact</span>
            </div>
          </div>
        </FadeIn>

        {/* Mission */}
        <FadeIn delay={150}>
          <section className="rounded-3xl border border-primary/10 bg-white/90 p-7 shadow-xl shadow-primary/5 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">Mission</p>
            <p className="mt-4 text-xl leading-relaxed text-primary-dark md:text-2xl">
              Empowering students to explore the intersection of neuroscience, engineering, and computer science through
              hands-on projects, research, and outreach. We foster collaboration to design innovative brain–machine
              interfaces, build technical skills, and advance neurotechnology for societal impact.
            </p>
          </section>
        </FadeIn>

        {/* B.M.I pillars */}
        <FadeIn delay={250}>
          <section>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">How we work</p>
                <h2 className="mt-1 text-2xl font-bold text-primary-dark md:text-3xl">Build · Mentor · Impact</h2>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {pillars.map((pillar) => (
                <article
                  key={pillar.letter}
                  className="rounded-3xl border border-primary/10 bg-white/90 p-6 shadow-xl shadow-primary/5 md:p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-white">
                    {pillar.letter}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-primary-dark">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(12, 60, 110, 0.72)" }}>
                    {pillar.body}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Why we exist */}
        <FadeIn delay={350}>
          <section className="rounded-3xl border border-primary/10 bg-white/85 p-7 shadow-xl shadow-primary/5 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">Why we exist</p>
            <h2 className="mt-1 text-2xl font-bold text-primary-dark md:text-3xl">Five reasons we started this club</h2>
            <ol className="mt-7 grid gap-4 md:grid-cols-2">
              {whyWeExist.map((reason, index) => (
                <li
                  key={reason.title}
                  className="rounded-2xl border border-primary/10 bg-white p-5"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-bold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-primary-dark">{reason.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(12, 60, 110, 0.72)" }}>
                        {reason.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </FadeIn>

        {/* Parent org context */}
        <FadeIn delay={400}>
          <section className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="rounded-3xl border border-primary/10 bg-white/90 p-6 shadow-xl shadow-primary/5 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">Part of a broader network</p>
              <h2 className="mt-1 text-2xl font-bold text-primary-dark md:text-3xl">
                A{" "}
                <a
                  href="https://neurotechx.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
                >
                  NeuroTechX
                </a>{" "}
                chapter
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(12, 60, 110, 0.72)" }}>
                <a
                  href="https://neurotechx.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
                >
                  NeuroTechX
                </a>{" "}
                is a non-profit organization whose mission is to advance neurotechnology by providing key
                resources and learning opportunities, and by leading local and worldwide technological initiatives. Our
                UCSB chapter carries that forward with an emphasis on community, education, and professional development.
              </p>
            </article>
            <aside className="rounded-3xl border border-primary/10 bg-primary p-6 text-white shadow-xl shadow-primary/10 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Our emphasis</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                  <span><span className="font-semibold">Community</span> — a place to belong while you build.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                  <span><span className="font-semibold">Education</span> — workshops, podcast, blog, newsletter.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                  <span><span className="font-semibold">Professional development</span> — portfolios, posters, internships.</span>
                </li>
              </ul>
            </aside>
          </section>
        </FadeIn>

        {/* Project tracks */}
        <FadeIn delay={500}>
          <section>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">What we&apos;re building</p>
                <h2 className="mt-1 text-2xl font-bold text-primary-dark md:text-3xl">Project tracks</h2>
              </div>
              <Link
                href="/projects"
                className="hidden rounded-full border border-primary/30 px-5 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white sm:inline-flex"
              >
                View all
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {projectTracks.map((project) => (
                <Link
                  key={project.name}
                  href={project.href}
                  className="group rounded-3xl border border-primary/10 bg-white/90 p-6 shadow-xl shadow-primary/5 transition hover:-translate-y-1 hover:border-primary/30"
                >
                  <h3 className="text-lg font-bold text-primary-dark group-hover:text-primary">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(12, 60, 110, 0.72)" }}>
                    {project.summary}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                    Explore <span aria-hidden>→</span>
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={600}>
          <section className="overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-xl shadow-primary/20 md:p-12">
            <div className="grid items-center gap-6 md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Get involved</p>
                <h2 className="mt-2 text-3xl font-bold uppercase tracking-tight md:text-4xl">
                  Bring your curiosity. Leave with a portfolio.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                  We recruit each quarter across project teams, publications, and the conference. Members come from
                  every major — what matters is that you want to build.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link
                  href="/apply"
                  className="rounded-full bg-accent px-6 py-3 text-center text-sm font-bold uppercase text-primary-dark transition hover:scale-105"
                >
                  Apply to join
                </Link>
                <Link
                  href="https://www.instagram.com/neurotech.ucsb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold uppercase text-white transition hover:bg-white/10"
                >
                  Follow on Instagram
                </Link>
                <Link
                  href="mailto:neurotech@ucsb.edu"
                  className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold uppercase text-white transition hover:bg-white/10"
                >
                  neurotech@ucsb.edu
                </Link>
              </div>
            </div>
          </section>
        </FadeIn>
      </section>
    </main>
  );
}
