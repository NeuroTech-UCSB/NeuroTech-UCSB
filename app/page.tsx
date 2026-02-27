import Link from "next/link";
import Image from "next/image";
import NeuralBackground from "./components/neural-background";
import FadeIn from "./components/fade-in";

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom right, var(--dark-bg), var(--primary-dark), var(--primary))" }}
      />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Neural network particle background */}
      <NeuralBackground />

      {/* Floating glow orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[128px]"
        style={{ backgroundColor: "var(--primary)", opacity: 0.3, animation: "float-1 18s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-[128px]"
        style={{ backgroundColor: "var(--accent)", opacity: 0.15, animation: "float-2 22s ease-in-out infinite" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Left — text */}
        <div className="flex-1 text-left">
          <FadeIn delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight uppercase">
              NEUROTECH<br />
              <span style={{ color: "var(--accent)" }}>@</span> UCSB
            </h1>
          </FadeIn>
          <FadeIn delay={500}>
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-lg">
              Bridging neuroscience and engineering. We design, build, and experiment with brain-computer interfaces and neurotechnology.
            </p>
          </FadeIn>
          <FadeIn delay={800}>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/apply"
                className="px-8 py-3.5 rounded-full font-semibold text-sm uppercase hover:brightness-110 hover:scale-105 transition-all duration-200"
                style={{ backgroundColor: "var(--accent)", color: "var(--dark-bg)" }}
              >
                JOIN US
              </Link>
              <Link
                href="/about"
                className="border border-white/20 text-white px-8 py-3.5 rounded-full font-semibold text-sm uppercase hover:bg-white/10 hover:border-white/40 transition-all duration-200"
              >
                LEARN MORE
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Right — logo */}
        <FadeIn delay={400} className="flex-1 flex items-center justify-center">
          <Image src="/Neurotech@ucsb-logo.png" alt="NeuroTech @ UCSB Logo" width={320} height={320} className="w-64 h-64 md:w-80 md:h-80 object-contain" />
        </FadeIn>
      </div>
    </section>
  );
}
