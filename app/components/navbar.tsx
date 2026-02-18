import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <Link href="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link href="/about" className="text-white hover:text-gray-300 ml-4">
          About
        </Link>
        <Link href="/projects" className="text-white hover:text-gray-300 ml-4">
          Projects
        </Link>
        <Link href="/publications" className="text-white hover:text-gray-300 ml-4">
          Publications
        </Link>
        <Link href="/conference" className="text-white hover:text-gray-300 ml-4">
          Conference
        </Link>
        <Link href="/apply" className="text-white hover:text-gray-300 ml-4">
          Apply
        </Link>
      </div>
    </nav>
  );
}