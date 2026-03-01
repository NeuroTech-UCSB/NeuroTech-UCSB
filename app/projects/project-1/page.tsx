import Image from "next/image";
import React from "react";

const GlassCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={[
      "relative rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl",
      "shadow-[0_0_60px_rgba(59,130,246,0.18)]",
      "p-6 md:p-10 overflow-hidden",
      className,
    ].join(" ")}
  >
    <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
    {children}
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-5 flex items-center gap-3">
    <span className="h-8 w-[3px] rounded-full bg-gradient-to-b from-blue-400 to-indigo-300" />
    <h2 className="text-xl md:text-2xl font-semibold">
      {children}
    </h2>
  </div>
);

type UpdateStatus = "done" | "in_progress" | "blocked";

const STATUS_STYLES: Record<UpdateStatus, string> = {
  done: "bg-emerald-400/15 text-emerald-200 border-emerald-400/20",
  in_progress: "bg-blue-400/15 text-blue-200 border-blue-400/20",
  blocked: "bg-rose-400/15 text-rose-200 border-rose-400/20",
};

const StatusPill = ({ status }: { status: UpdateStatus }) => {
  const label =
    status === "done"
      ? "Done"
      : status === "in_progress"
        ? "In progress"
        : "Blocked";
  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium",
        STATUS_STYLES[status],
      ].join(" ")}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
      {label}
    </span>
  );
};

type Update = {
  id: string;
  title: string;
  owner: string;
  date: string;
  status: UpdateStatus;
  summary: string;
  highlights?: string[];
  blockers?: string[];
  next?: string[];
};

const UpdateCard = ({ u }: { u: Update }) => (
  <div className="group relative rounded-3xl border border-white/10 bg-white/[0.05] p-6 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(600px_circle_at_30%_10%,rgba(59,130,246,0.12),transparent_55%)]" />
    <div className="relative">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-white/90">
            {u.title}
          </h3>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/55">
            <span>{u.owner}</span>
            <span className="text-white/35">•</span>
            <span>{u.date}</span>
          </div>
        </div>
        <StatusPill status={u.status} />
      </div>

      <p className="mt-4 text-white/75">{u.summary}</p>

      {u.highlights?.length || u.blockers?.length || u.next?.length ? (
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {u.highlights?.length ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs font-semibold text-white/60">
                Highlights
              </div>
              <ul className="mt-2 space-y-2 text-sm text-white/80">
                {u.highlights.map((x, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300/80" />
                    <span className="min-w-0">{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {u.blockers?.length ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs font-semibold text-white/60">
                Blockers
              </div>
              <ul className="mt-2 space-y-2 text-sm text-white/80">
                {u.blockers.map((x, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-300/80" />
                    <span className="min-w-0">{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {u.next?.length ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs font-semibold text-white/60">
                Next
              </div>
              <ul className="mt-2 space-y-2 text-sm text-white/80">
                {u.next.map((x, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300/80" />
                    <span className="min-w-0">{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  </div>
);

const updates: Update[] = [
  {
    id: "u1",
    title: "Workstream / Feature area (placeholder)",
    owner: "Owner / Team (placeholder)",
    date: "MM DD, YYYY",
    status: "in_progress",
    summary:
      "1–2 sentence recap of what changed since the last meeting and why it matters.",
    highlights: [
      "Key outcome or deliverable completed",
      "Metric, milestone, or improvement (optional)",
    ],
    blockers: ["Dependency, decision, or resource needed (optional)"],
    next: ["Next action item", "Next action item (optional)"],
  },
  {
    id: "u2",
    title: "Another update title (placeholder)",
    owner: "Owner / Team (placeholder)",
    date: "MM DD, YYYY",
    status: "done",
    summary:
      "Short summary of progress, decisions made, or results achieved since last meeting.",
    highlights: ["What was finished", "What was validated (optional)"],
    next: ["Follow-up task or handoff"],
  },
  {
    id: "u3",
    title: "Blocked item / open risk (placeholder)",
    owner: "Owner / Team (placeholder)",
    date: "MM DD, YYYY",
    status: "blocked",
    summary:
      "Explain what's stuck at a high level and the impact if it remains unresolved.",
    blockers: ["What is blocking progress", "Who/what is needed to unblock"],
    next: ["Decision needed", "Proposed next step to unblock"],
  },
];

export default function NeuroTechProjectPage() {
  return (
    <div className="relative min-h-screen bg-[#0B0F2A] text-white font-sans overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_30%,rgba(99,102,241,0.16),transparent_55%),linear-gradient(135deg,#0B0F2A_0%,#121B4D_45%,#1E2A78_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="relative h-[74vh] min-h-[560px]">
          <Image // placeholder image, replace with more related image
            src="/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
            alt="hero"
            fill
            priority
            className="object-cover scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F2A]/40 via-[#0B0F2A]/85 to-[#0B0F2A]" />
          <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_50%_30%,rgba(59,130,246,0.18),transparent_60%)]" />

          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto w-full max-w-6xl px-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-100">
                  <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.8)]" />
                  Neurotech • BCI • Robotics
                </div>

                <h1 className="mt-6 text-5xl md:text-7xl font-bold">
                  <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                    EEG-Controlled Drone
                  </span>
                </h1>

                <p className="mt-5 text-lg md:text-xl text-blue-100/90">
                  Brief description of project. Replace this with a
                  one/two-liner overview of the project
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Real-time inference",
                    "Low-latency pipeline",
                    "Signal denoising",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto -mt-10 max-w-6xl px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-28 pt-16 space-y-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <GlassCard>
              <SectionTitle>Description</SectionTitle>
              <p className="text-white/80 text-base md:text-lg">
                Add a concise overview of the project. i.e. what it is, who it's
                for, what problem it solves.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm text-white/60">Tech stack</div>
                  <div className="mt-1 font-semibold">
                    List tools / frameworks
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm text-white/60">Demo / repo</div>
                  <div className="mt-1 font-semibold">Link label or status</div>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="md:col-span-5">
            <GlassCard className="h-full">
              <SectionTitle>Purpose</SectionTitle>
              <p className="text-white/80 text-base md:text-lg">
                Explain the goal of the project and what success looks like in
                one paragraph.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm text-white/60">Focus</div>
                  <div className="mt-1 font-semibold">Primary objective</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm text-white/60">Constraint</div>
                  <div className="mt-1 font-semibold">
                    Key limitation / challenge
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm text-white/60">Outcome</div>
                  <div className="mt-1 font-semibold">
                    Expected result / deliverable
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        <section className="pt-4">
          <div className="mb-5">
            <div className="flex items-center gap-3">
              <span className="h-8 w-[3px] rounded-full bg-gradient-to-b from-blue-400 to-indigo-300" />
              <h2 className="text-xl md:text-2xl font-semibold">
                Updates from last meeting
              </h2>
            </div>
            <p className="mt-2 text-sm md:text-base text-white/60">
              Status, summary, blockers, and next steps. Replace placeholders
              with meeting notes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {updates.map((u) => (
              <UpdateCard key={u.id} u={u} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
