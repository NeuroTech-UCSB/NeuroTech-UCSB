import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="flex items-center justify-between h-20 px-8">
        {/* Left: Brand (Home Button) */}
        <Link
          href="/"
          className="text-white text-xl font-semibold tracking-wide hover:text-gray-300 transition-colors duration-200"
        >
          Neurotech @ UCSB
        </Link>

        {/* Right: Navigation */}
        <div className="flex items-center gap-10 text-lg font-medium">
          <Link
            href="/about"
            className="text-gray-200 hover:text-white transition-colors duration-200"
          >
            About
          </Link>

          {/* Projects Dropdown */}
          <div className="relative group">
            <Link
              href="/projects"
              className="text-gray-200 hover:text-white transition-colors duration-200"
            >
              Projects
            </Link>

            {/* hover buffer wrapper (prevents flicker / losing hover) */}
            <div className="absolute left-0 top-full hidden group-hover:block z-50 pt-2">
              <div className="bg-gray-700 min-w-[200px] rounded-md shadow-lg overflow-hidden">
                <Link
                  href="/projects/project-1"
                  className="block px-5 py-3 text-gray-200 hover:bg-gray-600 transition"
                >
                  EEG-Controlled Drone
                </Link>
                <Link
                  href="/projects/project-2"
                  className="block px-5 py-3 text-gray-200 hover:bg-gray-600 transition"
                >
                  Brain-Controlled Robotic Arm
                </Link>
                <Link
                  href="/projects/project-3"
                  className="block px-5 py-3 text-gray-200 hover:bg-gray-600 transition"
                >
                  fNIRS Sensor
                </Link>
                <Link
                  href="/projects/project-4"
                  className="block px-5 py-3 text-gray-200 hover:bg-gray-600 transition"
                >
                  NeuroColor
                </Link>
                <Link
                  href="/projects/project-5"
                  className="block px-5 py-3 text-gray-200 hover:bg-gray-600 transition"
                >
                  Music Genre Detection
                </Link>
              </div>
            </div>
          </div>

          {/* Publications Dropdown */}
          <div className="relative group">
            <Link
              href="/publications"
              className="text-gray-200 hover:text-white transition-colors duration-200"
            >
              Publications
            </Link>

            <div className="absolute left-0 top-full hidden group-hover:block z-50 pt-2">
              <div className="bg-gray-700 min-w-[220px] rounded-md shadow-lg overflow-hidden">
                <Link
                  href="/publications/medium-blog"
                  className="block px-5 py-3 text-gray-200 hover:bg-gray-600 transition"
                >
                  Medium Blog
                </Link>
                <Link
                  href="/publications/weekly-newsletter"
                  className="block px-5 py-3 text-gray-200 hover:bg-gray-600 transition"
                >
                  Weekly Newsletter
                </Link>
                <Link
                  href="/publications/podcast"
                  className="block px-5 py-3 text-gray-200 hover:bg-gray-600 transition"
                >
                  Podcast
                </Link>
              </div>
            </div>
          </div>

          {/* Conference Dropdown */}
          <div className="relative group">
          <Link
            href="/conference"
            className="text-gray-200 hover:text-white transition-colors duration-200"
          >
            Conference
          </Link>

          {/* hover buffer wrapper + keep-open-on-hover */}
          <div className="absolute left-0 top-full hidden group-hover:block hover:block z-50 pt-2">
            <div className="bg-gray-700 min-w-[200px] rounded-md shadow-lg overflow-hidden">
              <a
                href="http://cntc-2026.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-5 py-3 text-gray-200 hover:bg-gray-600 transition"
              >
                CNTC (2026)
              </a>
            </div>
          </div>
        </div>

          {/* Apply */}
          <Link
            href="/apply"
            className="text-gray-200 hover:text-white transition-colors duration-200"
          >
            Apply
          </Link>
        </div>
      </div>
    </nav>
  );
}