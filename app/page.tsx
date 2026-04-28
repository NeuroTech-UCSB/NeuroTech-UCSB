import Link from "next/link";
import Image from "next/image";
import NeuralBackground from "./components/neural-background";
import FadeIn from "./components/fade-in";

const pillars = [
  {
    letter: "B",
    title: "Build",
    body: "Hands-on BMI projects with real hardware, real signals, and real demos — every quarter.",
  },
  {
    letter: "M",
    title: "Mentor",
    body: "Project leads, alumni, and partner labs guide members from first soldering iron to first poster.",
  },
  {
    letter: "I",
    title: "Impact",
    body: "Workshops, publications, and the CNTC conference push neurotech beyond the lab.",
  },
];

const featuredProjects = [
  {
    name: "BCI Robotic Arm",
    summary: "Brain-controlled robotic arm using EEG signals — closed-loop pipeline from headset to actuation.",
    href: "/projects/neuroarm",
  },
  {
    name: "PsyCopter",
    summary: "Translating neural signals into flight commands for drone control.",
    href: "/projects/psycopter",
  },
  {
    name: "Wetware Computing",
    summary: "Living neural cultures used as a substrate for processing information.",
    href: "/projects/wetware",
  },
];

export default function Home() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
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
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: "var(--primary)", opacity: 0.08, animation: "float-1 18s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-[128px]"
          style={{ backgroundColor: "var(--primary-dark)", opacity: 0.06, animation: "float-2 22s ease-in-out infinite" }}
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-12 md:py-0 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 text-left">
            <FadeIn delay={200}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight tracking-tight uppercase text-primary-dark">
                NEUROTECH<br />
                <span className="text-primary">@</span> UCSB
              </h1>
            </FadeIn>
            <FadeIn delay={500}>
              <p className="text-base md:text-xl mb-8 md:mb-10 leading-relaxed max-w-lg" style={{ color: "rgba(12, 60, 110, 0.65)" }}>
                Bridging neuroscience and engineering. We design, build, and experiment with brain-computer interfaces and neurotechnology.
              </p>
            </FadeIn>
            <FadeIn delay={800}>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/apply"
                  className="px-8 py-3.5 rounded-full font-semibold text-sm uppercase bg-primary text-white hover:bg-primary-dark hover:scale-105 transition-all duration-200"
                >
                  JOIN US
                </Link>
                <Link
                  href="/about"
                  className="border border-primary text-primary px-8 py-3.5 rounded-full font-semibold text-sm uppercase hover:bg-primary hover:text-white transition-all duration-200"
                >
                  LEARN MORE
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={400} className="hidden sm:flex flex-1 items-center justify-end">
            <Image src="/neurotech-ucsb.png" alt="NeuroTech @ UCSB Logo" width={320} height={320} className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain" />
          </FadeIn>
        </div>
      </section>

      {/* Mission strip */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <FadeIn>
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">Our motto</p>
                <h2 className="mt-2 text-4xl font-bold uppercase tracking-tight text-primary-dark md:text-6xl">
                  B.<span className="text-primary">M</span>.I
                </h2>
                <p className="mt-2 text-base font-semibold uppercase tracking-[0.18em] text-primary md:text-lg">
                  Build · Mentor · Impact
                </p>
              </div>
              <p className="text-lg leading-relaxed text-primary-dark md:text-xl">
                Empowering students to explore the intersection of neuroscience, engineering, and computer science
                through hands-on projects, research, and outreach. We design innovative brain–machine interfaces, build
                technical skills, and advance neurotechnology for societal impact.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* B.M.I. pillars */}
      <section className="relative overflow-hidden bg-[#f7fbff]">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(12,60,110,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(12,60,110,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">What we do</p>
              <h2 className="mt-2 text-3xl font-bold uppercase tracking-tight text-primary-dark md:text-4xl">
                Three things, in order.
              </h2>
              <p className="mt-4 text-base leading-relaxed md:text-lg" style={{ color: "rgba(12, 60, 110, 0.72)" }}>
                Every quarter we ship something we built, teach what we learned, and bring more of campus along with us.
              </p>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pillars.map((pillar, idx) => (
              <FadeIn key={pillar.letter} delay={150 + idx * 100}>
                <article className="h-full rounded-3xl border border-primary/10 bg-white p-7 shadow-xl shadow-primary/5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-white">
                    {pillar.letter}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-primary-dark">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(12, 60, 110, 0.72)" }}>
                    {pillar.body}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <FadeIn>
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">Recent work</p>
                <h2 className="mt-2 text-3xl font-bold uppercase tracking-tight text-primary-dark md:text-4xl">
                  Featured projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="hidden rounded-full border border-primary/30 px-5 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white sm:inline-flex"
              >
                See all projects
              </Link>
            </div>
          </FadeIn>

          <div className="grid gap-4 md:grid-cols-3">
            {featuredProjects.map((project, idx) => (
              <FadeIn key={project.name} delay={150 + idx * 100}>
                <Link
                  href={project.href}
                  className="group block h-full rounded-3xl border border-primary/10 bg-white p-7 shadow-xl shadow-primary/5 transition hover:-translate-y-1 hover:border-primary/30"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary/70">Project</p>
                  <h3 className="mt-2 text-xl font-bold text-primary-dark group-hover:text-primary">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(12, 60, 110, 0.72)" }}>
                    {project.summary}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                    Explore <span aria-hidden>→</span>
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Link
              href="/projects"
              className="inline-flex rounded-full border border-primary/30 px-5 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              See all projects
            </Link>
          </div>
        </div>
      </section>

      {/* Get involved CTA */}
      <section className="relative overflow-hidden bg-primary-dark">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute -top-24 -right-20 h-96 w-96 rounded-full blur-[128px]"
          style={{ backgroundColor: "var(--accent)", opacity: 0.18, animation: "float-1 20s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-20 -left-24 h-80 w-80 rounded-full blur-[128px]"
          style={{ backgroundColor: "var(--primary)", opacity: 0.4, animation: "float-2 24s ease-in-out infinite" }}
        />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <FadeIn>
            <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Get involved</p>
                <h2 className="mt-2 text-3xl font-bold uppercase tracking-tight text-white md:text-5xl">
                  Bring your curiosity.<br />Leave with a portfolio.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                  Members come from every major — neuroscience, ECE, CS, ME, art, psychology. What matters is that you
                  want to build. We recruit each quarter across project teams, publications, and the conference.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/apply"
                  className="rounded-full bg-accent px-6 py-3 text-center text-sm font-bold uppercase text-primary-dark transition hover:scale-105"
                >
                  Apply to join
                </Link>
                <Link
                  href="/about"
                  className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold uppercase text-white transition hover:bg-white/10"
                >
                  Read more about us
                </Link>
                <Link
                  href="https://www.instagram.com/neurotech.ucsb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold uppercase text-white transition hover:bg-white/10"
                >
                  @neurotech.ucsb
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
