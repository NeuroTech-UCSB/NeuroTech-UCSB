import NeuralBackground from "../../components/neural-background";
import FadeIn from "../../components/fade-in";

export default function Podcast() {
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

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-6 px-6 py-28 text-center md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/80">Publications</p>
        </FadeIn>
        <FadeIn delay={150}>
          <h1 className="text-5xl font-bold uppercase tracking-tight text-primary-dark md:text-7xl">
            Podcast
          </h1>
        </FadeIn>
        <FadeIn delay={300}>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark">
            <span className="h-2 w-2 rounded-full bg-accent" /> Coming soon
          </span>
        </FadeIn>
        <FadeIn delay={450}>
          <p className="max-w-xl text-base leading-relaxed md:text-lg" style={{ color: "rgba(12, 60, 110, 0.7)" }}>
            We&apos;re almost ready with the content. Conversations with researchers, project leads,
            and members of the neurotech community will be live here soon.
          </p>
        </FadeIn>
      </section>
    </main>
  );
}
