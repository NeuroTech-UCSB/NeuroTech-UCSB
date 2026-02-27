import Link from "next/link";
import Image from "next/image";
import NeuralBackground from "./components/neural-background";
import FadeIn from "./components/fade-in";

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* White background */}
      <div className="absolute inset-0 bg-white" />

      {/* Decorative grid */}
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

      {/* Neural network particle background */}
      <NeuralBackground />

      {/* Floating glow orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[128px]"
        style={{ backgroundColor: "var(--primary)", opacity: 0.08, animation: "float-1 18s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-[128px]"
        style={{ backgroundColor: "var(--primary-dark)", opacity: 0.06, animation: "float-2 22s ease-in-out infinite" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-12 md:py-0 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Left — text */}
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

        {/* Right — logo (hidden on small screens to avoid clutter) */}
        <FadeIn delay={400} className="hidden sm:flex flex-1 items-center justify-end">
          <Image src="/neurotech-ucsb.png" alt="NeuroTech @ UCSB Logo" width={320} height={320} className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain" />
        </FadeIn>
      </div>
    </section>
  );
}
