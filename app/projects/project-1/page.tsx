import Image from "next/image";
import React from "react";

export default function NeuroTechProjectPage() {
  return (
    <div className="min-h-screen bg-[#0B0F2A] text-white font-sans">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F2A] via-[#121B4D] to-[#1E2A78] opacity-90 -z-10" />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <Image // placeholder image, replace with more related image
          src="/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
          alt="hero"
          fill
          className="object-cover blur-xs"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F2A]/90 via-[#121B4D]/80 to-[#1E2A78]/80" />

        <div className="relative z-10 px-6">
          <h1 className="text-[72px] md:text-[90px] font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
            EEG-Controlled Drone
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-[24px] text-blue-200">
            Brief description of project.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 space-y-28 pb-32">
        {/* Main Sections */}
      </main>
    </div>
  );
}
