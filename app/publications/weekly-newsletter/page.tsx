"use client";

import { useState } from "react";
import NeuralBackground from "../../components/neural-background";
import FadeIn from "../../components/fade-in";

type Newsletter = {
  id: string;
  date: string;
  publishedOn: string;
  title: string;
  excerpt: string;
  body: { heading?: string; paragraphs?: string[]; eventDetails?: { date: string; time: string; location: string }; bullets?: string[] }[];
  signoff: string;
};

const newsletters: Newsletter[] = [
  {
    id: "2026-04-27",
    date: "April 27, 2026",
    publishedOn: "2026-04-27",
    title: "Sunset Beach Walk + CNTC Recap Coming Soon",
    excerpt:
      "Join us Monday, April 27th for our first beach walk at the regular general meeting time. Plus, project teams are heading to the California NeuroTech Conference at UC Berkeley.",
    body: [
      {
        paragraphs: [
          "Hello all! Join us this Monday, April 27th for our very first beach walk at the same time as our general meetings. We will meet by the front entrance of the library and take a relaxing sunset stroll & recharge during midterms.",
        ],
        eventDetails: {
          date: "Monday, April 27th",
          time: "6 – 7 PM",
          location: "Front entrance of the UCSB Library",
        },
      },
      {
        heading: "California NeuroTech Conference (CNTC)",
        paragraphs: [
          "This Sunday, some of our project teams are attending this year's California NeuroTech Conference (CNTC) at UC Berkeley from 9:00 AM – 6:00 PM. It is a statewide collaboration between neurotech clubs at UCSB, UC Berkeley, UCLA, USC, UCSC, UC Davis, and UCSD. Stay tuned for a recap!",
        ],
      },
    ],
    signoff: "NeuroTech @ UCSB",
  },
  {
    id: "2026-04-13",
    date: "April 13, 2026",
    publishedOn: "2026-04-13",
    title: "Spring Quarter Kickoff + Brain Awareness Day",
    excerpt:
      "General meetings are every Monday 6 – 7 PM in Phelps 1160. Join us at Brain Awareness Day on April 13th in the UCSB Corwin Pavilion.",
    body: [
      {
        paragraphs: [
          "Hello everyone! We hope you have had a restful spring break and weeks 1-2. This quarter, our general meetings will be every Monday from 6 – 7 PM, in Phelps 1160.",
        ],
        eventDetails: {
          date: "Every Monday",
          time: "6 – 7 PM",
          location: "Phelps 1160",
        },
      },
      {
        heading: "Brain Awareness Day at UCSB",
        paragraphs: [
          "We will also be participating in Brain Awareness Day here at UCSB, with several other student organizations and labs. Join us on Monday, April 13th to learn about neuroscience in the UCSB Corwin Pavilion from 11:00 AM to 3:00 PM. Brain Awareness Week is held globally every March to foster public enthusiasm and support for brain science with creative activities that illustrate the wonders and importance of neuroscience.",
        ],
        eventDetails: {
          date: "Monday, April 13th",
          time: "11 AM – 3 PM",
          location: "UCSB Corwin Pavilion",
        },
      },
      {
        heading: "Participating groups",
        paragraphs: [
          "Student organizations: NeuroUCSB, NeuroTech, Impulse, Brainiac, SEA, Psi Chi, SkiTrek, and more to come.",
          "Labs: Dr. Szumlinski's Lab, Dr. Janusonis's Lab, Dr. Keiflin's Lab, Dr. Beyeler's Lab, Dr. Alexander's Lab.",
          "Departments: Mental Health Peers and Gauchos for Recovery.",
        ],
      },
    ],
    signoff: "NeuroTech @ UCSB Team",
  },
];

export default function WeeklyNewsletter() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = newsletters.find((n) => n.id === activeId) ?? null;

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

      <section className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-20 pt-28 md:px-10">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">Publications</p>
            <h1 className="text-4xl font-bold uppercase tracking-tight text-primary-dark md:text-6xl">Weekly Newsletter</h1>
            <p className="mt-5 text-base leading-relaxed md:text-lg" style={{ color: "rgba(12, 60, 110, 0.68)" }}>
              Updates from NeuroTech @ UCSB — meetings, events, project highlights, and what's
              happening across the wider neurotech community at UCSB and beyond.
            </p>
          </div>
        </FadeIn>

        {active ? (
          <FadeIn>
            <article className="rounded-3xl border border-primary/10 bg-white/95 p-6 shadow-xl shadow-primary/5 md:p-10">
              <button
                type="button"
                onClick={() => setActiveId(null)}
                className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-dark"
              >
                <span aria-hidden>←</span> Back to all newsletters
              </button>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">{active.date}</p>
              <h2 className="mt-2 text-3xl font-bold text-primary-dark md:text-4xl">{active.title}</h2>

              <div className="mt-8 space-y-8">
                {active.body.map((section, idx) => (
                  <div key={idx}>
                    {section.heading && (
                      <h3 className="text-xl font-bold text-primary-dark md:text-2xl">{section.heading}</h3>
                    )}
                    {section.paragraphs?.map((p, pi) => (
                      <p
                        key={pi}
                        className={`text-base leading-relaxed md:text-lg ${section.heading || pi > 0 ? "mt-3" : ""}`}
                        style={{ color: "rgba(12, 60, 110, 0.78)" }}
                      >
                        {p}
                      </p>
                    ))}
                    {section.eventDetails && (
                      <div className="mt-5 grid gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-5 sm:grid-cols-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary/70">Date</p>
                          <p className="mt-1 text-sm font-semibold text-primary-dark">{section.eventDetails.date}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary/70">Time</p>
                          <p className="mt-1 text-sm font-semibold text-primary-dark">{section.eventDetails.time}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary/70">Location</p>
                          <p className="mt-1 text-sm font-semibold text-primary-dark">{section.eventDetails.location}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-10 border-t border-primary/10 pt-6 text-sm" style={{ color: "rgba(12, 60, 110, 0.7)" }}>
                Best,<br />
                <span className="font-semibold text-primary-dark">{active.signoff}</span>
              </p>
            </article>
          </FadeIn>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {newsletters.map((n, idx) => (
              <FadeIn key={n.id} delay={150 + idx * 100}>
                <button
                  type="button"
                  onClick={() => setActiveId(n.id)}
                  className="group block h-full w-full rounded-3xl border border-primary/10 bg-white/95 p-7 text-left shadow-xl shadow-primary/5 transition hover:-translate-y-1 hover:border-primary/30"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">{n.date}</p>
                  <h3 className="mt-2 text-xl font-bold text-primary-dark group-hover:text-primary md:text-2xl">
                    {n.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed md:text-base" style={{ color: "rgba(12, 60, 110, 0.72)" }}>
                    {n.excerpt}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                    Read newsletter <span aria-hidden>→</span>
                  </p>
                </button>
              </FadeIn>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
