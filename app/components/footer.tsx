import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--dark-bg)] border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white/50 text-sm">
          &copy; {new Date().getFullYear()} NeuroTech @ UCSB
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="https://www.instagram.com/neurotech.ucsb/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-[var(--accent)] transition-colors text-sm"
          >
            Instagram
          </Link>
          <Link
            href="mailto:neurotech@ucsb.edu"
            className="text-white/50 hover:text-[var(--accent)] transition-colors text-sm"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
