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
    <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
      {children}
    </h2>
  </div>
);

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

                <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight">
                  <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                    EEG-Controlled Drone
                  </span>
                </h1>

                <p className="mt-5 text-lg md:text-xl leading-relaxed text-blue-100/90">
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
              <p className="text-white/80 leading-relaxed text-base md:text-lg">
                Add a longer description of the project here
              </p>
            </GlassCard>
          </div>

          <div className="md:col-span-5">
            <GlassCard className="h-full">
              <SectionTitle>Purpose</SectionTitle>
              <p className="text-white/80 leading-relaxed text-base md:text-lg">
                Include a short blurb about the purpose of this project
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm text-white/60">Focus</div>
                  <div className="mt-1 font-semibold">BCI Signal → Control</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm text-white/60">Constraint</div>
                  <div className="mt-1 font-semibold">Latency + Noise</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm text-white/60">Outcome</div>
                  <div className="mt-1 font-semibold">
                    Stable flight commands
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
    </div>
  );
}
