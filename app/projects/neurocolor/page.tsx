import Link from "next/link";
import NeuralBackground from "../../components/neural-background";
import FadeIn from "../../components/fade-in";

const updates = [
  {
    date: "Week 1 — Jan 12",
    title: "Project Introduction and Research",
    detail:
      "Introduced the NeuroColor project, reviewed relevant BCI, EEG, and VEP/SSVEP literature, and established the initial research direction for the system.",
  },
  {
    date: "Week 2 — Jan 19",
    title: "Finalize Product Guidelines",
    detail:
      "Defined the project’s product guidelines, including the intended user interaction flow, interface expectations, and overall system requirements.",
  },
  {
    date: "Week 3 — Jan 26",
    title: "Create Training Data",
    detail:
      "Began building the dataset needed for classification by collecting and organizing training data from controlled EEG sessions.",
  },
  {
    date: "Week 4 — Feb 2",
    title: "Preprocessing Pipeline",
    detail:
      "Developed the EEG preprocessing pipeline to clean and prepare raw signals for feature extraction and classification.",
  },
  {
    date: "Week 5 — Feb 9",
    title: "Implement SSVEP Baseline Classifier",
    detail:
      "Implemented an SSVEP-based baseline classifier to establish an initial benchmark for color-selection prediction.",
  },
  {
    date: "Week 6 — Feb 16",
    title: "Continued System Development",
    detail:
      "Continued improving the data pipeline, classification workflow, and project infrastructure in preparation for model training.",
  },
  {
    date: "Week 7 — Feb 23",
    title: "Train a Light Model with Collected Data",
    detail:
      "Trained a lightweight model using the collected EEG data to evaluate practical classification performance with low computational overhead.",
  },
  {
    date: "Week 8 — Mar 2",
    title: "Pipeline Refinement",
    detail:
      "Refined the preprocessing and classification pipeline based on early training results and system testing.",
  },
  {
    date: "Week 9 — Mar 9",
    title: "Develop Front-End UI",
    detail:
      "Built the front-end coloring interface to support interactive color selection and region filling driven by classifier output.",
  },
  {
    date: "Week 10 — Mar 16",
    title: "Front-End and System Iteration",
    detail:
      "Improved the interface and overall system flow to support smoother integration with the EEG and classification pipeline.",
  },
  {
    date: "Week 11 — Mar 23",
    title: "Integration of EEG and Classifier",
    detail:
      "Integrated EEG acquisition with the classification module to create a functional end-to-end BCI pipeline.",
  },
  {
    date: "Week 12 — Mar 30",
    title: "Integration Refinement",
    detail:
      "Stabilized and refined the integrated system to improve reliability, latency, and usability before real-time testing.",
  },
  {
    date: "Week 13 — Apr 6",
    title: "Test and Debug Real-Time Integration",
    detail:
      "Tested the real-time system and debugged issues related to signal flow, prediction timing, and interface responsiveness.",
  },
  {
    date: "Week 14 — Apr 13",
    title: "Final System Polishing",
    detail:
      "Polished the integrated experience, resolved remaining issues, and prepared the project for final presentation and delivery.",
  },
  {
    date: "Week 15 — Apr 20",
    title: "Finish Documentation",
    detail:
      "Completed documentation covering the project background, technical pipeline, implementation details, and team workflow.",
  },
  {
    date: "BR41N.IO Hackathon",
    title: "Competition Phase",
    detail:
      "Prepared the full NeuroColor system for live demonstration and competition at the BR41N.IO Hackathon.",
  },
];

const milestones = [
  {
    phase: "Phase 1",
    title: "Data Collection",
    detail:
      "Collect high-quality EEG data associated with visually evoked potentials using a repeatable and controlled experimental setup.",
  },
  {
    phase: "Phase 2",
    title: "Signal Processing & Classification",
    detail:
      "Extract features from EEG recordings and evaluate classifiers that can reliably infer intended color choice with low latency.",
  },
  {
    phase: "Phase 3",
    title: "Interactive System Integration",
    detail:
      "Embed the BCI pipeline into a digital coloring application that demonstrates intuitive, real-time brain-driven control.",
  },
];

const team = [
  {
    role: "Project Manager",
    lead: "Tishya Chauhan",
    responsibility:
      "Oversees project coordination, planning, communication, and progress across the technical workflow.",
  },
  {
    role: "Data Acquisition Intern",
    lead: "Navya Vijay",
    responsibility:
      "Supports EEG experiment setup, subject data collection, and protocol consistency.",
  },
  {
    role: "Data Acquisition Intern",
    lead: "Anusha Diyyala",
    responsibility:
      "Supports EEG experiment setup, subject data collection, and protocol consistency.",
  },
  {
    role: "Data Acquisition Intern",
    lead: "Hannah Keil",
    responsibility:
      "Supports EEG experiment setup, subject data collection, and protocol consistency.",
  },
  {
    role: "Data Acquisition Intern",
    lead: "Irvin Acosta",
    responsibility:
      "Supports EEG experiment setup, subject data collection, and protocol consistency.",
  },
  {
    role: "Signal Classification Intern",
    lead: "Evelyn Xu",
    responsibility:
      "Works on EEG preprocessing, feature extraction, and classifier evaluation for color prediction.",
  },
  {
    role: "Signal Classification Intern",
    lead: "Tyler Le",
    responsibility:
      "Works on EEG preprocessing, feature extraction, and classifier evaluation for color prediction.",
  },
  {
    role: "Signal Classification Intern",
    lead: "Andres Avelar",
    responsibility:
      "Works on EEG preprocessing, feature extraction, and classifier evaluation for color prediction.",
  },
];

const relatedLinks = [
  {
    label: "Project Resources",
    type: "Docs",
    items: [
      {
        name: "Task Tracker",
        href: "https://app.slack.com/lists/T073X26R1/F0A9H8VPC7R",
      },
      {
        name: "Google Drive",
        href: "#",
      },
    ],
  },
  {
    label: "Core Topics",
    type: "Research",
    items: [
      {
        name: "Visually Evoked Potentials (VEPs)",
        href: "#",
      },
      {
        name: "EEG Signal Processing",
        href: "#",
      },
      {
        name: "BCI Color Selection Pipeline",
        href: "#",
      },
    ],
  },
  {
    label: "System Assets",
    type: "Data",
    items: [
      { name: "EEG Recordings", href: "#" },
      { name: "Processed Feature Sets", href: "#" },
      { name: "Classifier Evaluation Results", href: "#" },
    ],
  },
  {
    label: "Implementation",
    type: "Code",
    items: [
      { name: "Coloring Interface", href: "#" },
      { name: "EEG Processing Pipeline", href: "#" },
      { name: "Classification Module", href: "#" },
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
                Project 02
              </p>
              <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                In Progress
              </div>
              <h1 className="mt-3 text-4xl font-bold uppercase tracking-tight text-primary-dark md:text-6xl">
                NeuroColor
              </h1>
              <p
                className="mt-5 max-w-4xl text-base leading-relaxed md:text-lg"
                style={{ color: "rgba(12, 60, 110, 0.72)" }}
              >
                NeuroColor is an interdisciplinary brain-computer interface
                project that blends neuroscience, signal processing, and machine
                learning to create an interactive, creative user experience.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary/80">
                  BCI
                </span>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary/80">
                  EEG
                </span>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary/80">
                  VEP
                </span>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary/80">
                  Machine Learning
                </span>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary/80">
                  Interactive Art
                </span>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <Link
                  href="https://app.slack.com/lists/T073X26R1/F0A9H8VPC7R"
                  className="rounded-2xl border border-primary/10 bg-primary/5 p-4 transition hover:border-primary/30"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
                    Tracking
                  </p>
                  <p className="mt-1 text-sm font-semibold text-primary-dark">
                    Task Tracker
                  </p>
                </Link>
                <Link
                  href="#"
                  className="rounded-2xl border border-primary/10 bg-primary/5 p-4 transition hover:border-primary/30"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
                    Resources
                  </p>
                  <p className="mt-1 text-sm font-semibold text-primary-dark">
                    Google Drive
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
                  NeuroColor is a digital coloring book that uses brain signals
                  captured via an EEG headset to infer a user’s visual attention
                  and intent. By leveraging visually evoked potentials, the
                  system identifies which color a user is focusing on and
                  automatically fills a selected region of the page with that
                  color.
                </p>
                <p>
                  The project combines EEG data acquisition, signal
                  preprocessing, and machine-learning-based classification to
                  enable hands-free, brain-driven interaction with digital art.
                  Its focus is both technical and experiential: building a
                  reliable BCI pipeline while creating an intuitive and creative
                  real-time interface for users.
                </p>

                <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">
                  Goals
                </h2>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Collect high-quality EEG data associated with visually
                    evoked potentials using a controlled experimental protocol.
                  </li>
                  <li>
                    Develop and evaluate a classifier capable of reliably
                    mapping EEG features to color selection with low latency.
                  </li>
                  <li>
                    Integrate the BCI pipeline into an interactive coloring
                    interface that demonstrates intuitive, real-time
                    brain-driven control.
                  </li>
                </ul>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={200}>
            <section className="rounded-3xl border border-primary/10 bg-white/90 p-7 shadow-xl shadow-primary/5 md:p-9">
              <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">
                Technical Approach
              </h2>
              <div
                className="mt-4 space-y-4 text-base leading-relaxed md:text-lg"
                style={{ color: "rgba(12, 60, 110, 0.72)" }}
              >
                <p>
                  The system captures EEG signals while the user visually
                  attends to color stimuli. These signals are preprocessed and
                  transformed into features that a classifier uses to infer the
                  intended color choice.
                </p>
                <p>
                  Once a color is predicted, the interface applies that color to
                  the selected region of the digital coloring page, creating a
                  closed-loop interaction between neural activity and creative
                  output.
                </p>
              </div>
            </section>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl pt-8 px-6 pb-16 md:px-10">
        <FadeIn delay={250}>
          <section className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="rounded-3xl border border-primary/10 bg-white/90 p-6 shadow-xl shadow-primary/5 md:p-8 lg:h-[56rem] lg:flex lg:flex-col">
              <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">
                Updates
              </h2>
              <ul className="mt-5 space-y-3 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:pr-2">
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
                  Core pipeline: EEG acquisition → preprocessing → feature
                  extraction → classification → interface update. The project
                  balances signal reliability, low-latency prediction, and
                  intuitive creative interaction.
                </p>
              </div>
            </aside>
          </section>
        </FadeIn>

        <FadeIn delay={300}>
          <section className="mt-4 rounded-3xl border border-primary/10 bg-white/90 p-6 shadow-xl shadow-primary/5 md:p-8">
            <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">
              Development Milestones
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {milestones.map((item) => (
                <article
                  key={item.phase}
                  className="rounded-2xl border border-primary/10 bg-white p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
                    {item.phase}
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
              {team.map((member, index) => (
                <article
                  key={`${member.role}-${member.lead}-${index}`}
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
