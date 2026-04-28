import Link from "next/link";
import NeuralBackground from "../../components/neural-background";
import FadeIn from "../../components/fade-in";

const updates = [
  {
    date: "Jan 12 – Jan 20",
    title: "EEG Classifier Architecture Proposal",
    detail: "Defined online EEG classifier requirements (cross-user generalization, non-stationary adaptation). Proposed architectures (DNN, LDA) for motor imagery and gesture classification (eye, eyebrow, hand).",
  },
  {
    date: "Jan 20 – Jan 31",
    title: "Offline EEG Classification Functional",
    detail: "Implemented classifier validated on public EEG datasets. Achieved offline classification for hand gesture signals.",
  },
  {
    date: "Feb 1 – Feb 14",
    title: "Online EEG Processing Pipeline",
    detail: "Classifier successfully processes raw EEG streams in real-time. Integrated signal preprocessing + inference loop.",
  },
  {
    date: "Feb 15 – Feb 29",
    title: "Robust EEG Classification",
    detail: "Improved model robustness across users and non-stationary signals. Added adaptation handling for signal drift.",
  },
  {
    date: "Mar 1 – Mar 15",
    title: "Headset Interfacing + Data Acquisition",
    detail: "Established real-time EEG data pipeline from OpenBCI/Unicorn. Finalized communication protocols and electrode mapping.",
  },
  {
    date: "Mar 16 – Mar 30",
    title: "Drone Autopilot + Waypoint Navigation",
    detail: "Configured Ardupilot on SpeedyBee F405. Drone navigates using programmed GPS waypoints.",
  },
  {
    date: "Apr 1 – Apr 14",
    title: "Hybrid Control System (Manual + Commanded)",
    detail: "Implemented dual-receiver design (RC + MAVLink/WiFi). Enabled switching between manual and autonomous control.",
  },
  {
    date: "Apr 15 – Apr 24",
    title: "EEG → Drone Command Integration",
    detail: "Classifier outputs mapped to drone commands. Drone responds to EEG-driven waypoint instructions.",
  },
  {
    date: "Apr 25 – Apr 26",
    title: "BR4IN.io Hackathon Flight Demo",
    detail: "Full system demonstration: EEG-driven drone control with waypoint navigation under competition conditions.",
  },
];

const relatedLinks = [
  {
    label: "Documentation",
    type: "Docs",
    items: [
      { name: "Ardupilot SITL Simulation", href: "https://ardupilot.org/dev/docs/using-sitl-for-ardupilot-testing.html" },
      { name: "Ardupilot Autopilot Setup", href: "https://ardupilot.org/sub/docs/common-autopilots.html" },
      { name: "Drone Programming Guide", href: "https://dojofordrones.com/drone-programming/" },
    ],
  },
  {
    label: "Research Notes",
    type: "Research",
    items: [
      { name: "EEG Signal Processing + Classification", href: "#" },
      { name: "Non-stationary EEG Adaptation Methods", href: "#" },
      { name: "Motor Imagery & Gesture Mapping", href: "#" },
    ],
  },
  {
    label: "Data Sources",
    type: "Data",
    items: [
      { name: "Public EEG Datasets (BCI Competition)", href: "#" },
      { name: "OpenBCI Data Streams", href: "#" },
      { name: "Unicorn EEG Data Interface", href: "#" },
    ],
  },
  {
    label: "Repository",
    type: "Code",
    items: [
      { name: "Ardupilot Firmware", href: "https://firmware.ardupilot.org/" },
      { name: "MAVLink Protocol Docs", href: "https://mavlink.io/en/" },
      { name: "AM32 ESC Firmware", href: "https://github.com/AlkaMotors/AM32-MultiRotor-ESC-firmware" },
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">Project 04</p>
              <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                In Progress
              </div>
              <h1 className="mt-3 text-4xl font-bold uppercase tracking-tight text-primary-dark md:text-6xl">
                PsyCopter
              </h1>
              <p className="mt-5 max-w-4xl text-base leading-relaxed md:text-lg" style={{ color: "rgba(12, 60, 110, 0.72)" }}>
                Existing research has shown that deep neural networks can decode EEG signals, enabling users to control drones using only their brain waves. Now it's our turn to push further!
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary/80">
                  EEG
                </span>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary/80">
                  Brain-Computer Interface
                </span>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary/80">
                  Drone Autonomy
                </span>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary/80">
                  MAVLink
                </span>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary/80">
                  Machine Learning
                </span>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={150}>
            <section className="rounded-3xl border border-primary/10 bg-white/90 p-7 shadow-xl shadow-primary/5 md:p-9">
              <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">How it works:</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed md:text-lg" style={{ color: "rgba(12, 60, 110, 0.72)" }}>
                <ul>
                  <li>• Receive raw EEG data from OpenBCI headset</li>
                  <li>• Perform signal processing and model inference on laptop or Single-Board Computer (ex. Jetson Orin)</li>
                  <li>• Determine user intent from neural network and command drone to fly to waypoints or change position.</li>
                </ul>
                <p></p>
                <p></p>
                <p></p>
              <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">Goal</h2>
                <p>Let the user to command the drone to fly to preprogrammed waypoints or hold its position. They may use their voice, but not their hands.</p>
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
                  System architecture: <br/>
                  - EEG → SBC (Jetson/RPi) → MAVLink / RC → Flight Controller<br/>
                  - MAVLink used for high-level commands, RC fallback for safety<br/>
                  - Dual control system required for failover (manual override always available)<br/>
                  <br/>
                  Subteams:<br/>
                  - EEG Communication & Signal Processing: signal decoding, classifier, feature extraction<br/>
                  - Drone Software Control: MAVLink integration, Ardupilot command interface<br/>
                  - Drone Hardware & Integration: assembly, tuning, power constraints, flight testing<br/>
                  <br/>
                  Key protocols:<br/>
                  - MAVLink (telemetry + command)<br/>
                  - ExpressLRS / PWM (manual control)<br/>
                  - SPI / Serial (EEG headset interface)<br/>
                </p>
              </div>
            </aside>
          </section>
        </FadeIn>
      </section>
    </main>
  );
}
