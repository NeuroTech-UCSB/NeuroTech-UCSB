import Link from "next/link";
import NeuralBackground from "../../components/neural-background";
import FadeIn from "../../components/fade-in";

const updates = [
  {
    date: "Month DD, YYYY",
    title: "Update Title _____",
    detail: "Insert update details here: _____",
  },
  {
    date: "Month DD, YYYY",
    title: "Update Title _____",
    detail: "Insert update details here: _____",
  },
  {
    date: "Month DD, YYYY",
    title: "Update Title _____",
    detail: "Insert update details here: _____",
  },
];

const relatedLinks = [
  {
    label: "Documentation",
    type: "Docs",
    items: [
      { name: "Documentation Placeholder 1", href: "#" },
      { name: "Documentation Placeholder 2", href: "#" },
      { name: "Documentation Placeholder 3", href: "#" },
    ],
  },
  {
    label: "Research Notes",
    type: "Research",
    items: [
      { name: "Notes Placeholder 1", href: "#" },
      { name: "Notes Placeholder 2", href: "#" },
      { name: "Notes Placeholder 3", href: "#" },
    ],
  },
  {
    label: "Data Sources",
    type: "Data",
    items: [
      { name: "Source Placeholder 1", href: "#" },
      { name: "Source Placeholder 2", href: "#" },
      { name: "Source Placeholder 3", href: "#" },
    ],
  },
  {
    label: "Repository",
    type: "Code",
    items: [
      { name: "Repo Placeholder 1", href: "#" },
      { name: "Repo Placeholder 2", href: "#" },
      { name: "Repo Placeholder 3", href: "#" },
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
          style={{ backgroundColor: "var(--primary)", opacity: 0.08, animation: "float-1 18s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-20 -right-24 h-80 w-80 rounded-full blur-[120px]"
          style={{ backgroundColor: "var(--accent)", opacity: 0.16, animation: "float-2 20s ease-in-out infinite" }}
        />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-16 pt-28 md:px-10">
          <FadeIn>
            <section className="rounded-3xl border border-primary/10 bg-white/90 p-7 shadow-xl shadow-primary/5 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">Project 01</p>
              <h1 className="mt-3 text-4xl font-bold uppercase tracking-tight text-primary-dark md:text-6xl">
                Project Name _____
              </h1>
              <p className="mt-5 max-w-4xl text-base leading-relaxed md:text-lg" style={{ color: "rgba(12, 60, 110, 0.72)" }}>
                Hero summary placeholder: insert a concise one-paragraph overview of this project and its main objective
                here: _____.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary/80">
                  tag1
                </span>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary/80">
                  tag2
                </span>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary/80">
                  tag3
                </span>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={150}>
            <section className="rounded-3xl border border-primary/10 bg-white/90 p-7 shadow-xl shadow-primary/5 md:p-9">
              <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">Description</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed md:text-lg" style={{ color: "rgba(12, 60, 110, 0.72)" }}>
                <p>Insert project description paragraph 1 here: _____.</p>
                <p>Insert project description paragraph 2 here: _____.</p>
              <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">Purpose</h2>
                <p>Insert purpose paragraph here: _____.</p>
              </div>
            </section>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-10">
        <FadeIn delay={250}>
          <section className="mt-16 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="rounded-3xl border border-primary/10 bg-white/90 p-6 shadow-xl shadow-primary/5 md:p-8">
              <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">Updates</h2>
              <ul className="mt-5 space-y-3">
                {updates.map((update, index) => (
                  <li key={`${update.date}-${index}`} className="rounded-2xl border border-primary/10 bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">{update.date}</p>
                    <h3 className="mt-1 text-lg font-bold text-primary-dark">{update.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(12, 60, 110, 0.72)" }}>
                      {update.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </article>

            <aside className="rounded-3xl border border-primary/10 bg-white/90 p-6 shadow-xl shadow-primary/5 md:p-8">
              <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">Related Links</h2>
              <ul className="mt-5 space-y-3">
                {relatedLinks.map((item) => (
                  <li key={item.label}>
                    <div className="rounded-xl border border-primary/15 bg-white px-4 py-3">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">{item.type}</p>
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                          {item.items.length}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-semibold text-primary-dark">{item.label}</p>
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
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">Quick Notes</p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(12, 60, 110, 0.72)" }}>
                  Optional note placeholder for contributor instructions, source attribution reminders, or data access
                  policy: _____.
                </p>
              </div>
            </aside>
          </section>
        </FadeIn>
      </section>
    </main>
  );
}
