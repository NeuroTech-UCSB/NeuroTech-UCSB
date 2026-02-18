import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center gap-6">
        <Link href="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link href="/about" className="text-white hover:text-gray-300">
          About
        </Link>
        <div className="relative group">
          <Link href="/projects" className="text-white hover:text-gray-300">
            Projects
          </Link>
          {/* Dropdown menu */}
          <div className="absolute left-0 top-full hidden group-hover:block bg-gray-700 min-w-[180px]">
            <Link href="/projects/project-1" className="block px-4 py-2 text-white hover:bg-gray-600">
              Project 1
            </Link>
            <Link href="/projects/project-2" className="block px-4 py-2 text-white hover:bg-gray-600">
              Project 2
            </Link>
            <Link href="/projects/project-3" className="block px-4 py-2 text-white hover:bg-gray-600">
              Project 3 
            </Link>
            <Link href="/projects/project-4" className="block px-4 py-2 text-white hover:bg-gray-600">
              Project 4 
            </Link>
            <Link href="/projects/project-5" className="block px-4 py-2 text-white hover:bg-gray-600">
              Project 5
            </Link>
          </div>
        </div>
        <div className="relative group">
          <Link href="/publications" className="text-white hover:text-gray-300">
            Publications
          </Link>
          {/* Dropdown menu */}
          <div className="absolute left-0 top-full hidden group-hover:block bg-gray-700 min-w-[180px]">
            <Link href="/publications/medium-blog" className="block px-4 py-2 text-white hover:bg-gray-600">
              Medium Blog
            </Link>
            <Link href="/publications/weekly-newsletter" className="block px-4 py-2 text-white hover:bg-gray-600">
              Weekly Newsletter
            </Link>
            <Link href="/publications/podcast" className="block px-4 py-2 text-white hover:bg-gray-600">
              Podcast
            </Link>
          </div>
        </div>
        <div className="relative group">
          <Link href="/conference" className="text-white hover:text-gray-300">
            Conference
          </Link>
          {/* Dropdown menu */}
          <div className="absolute left-0 top-full hidden group-hover:block bg-gray-700 min-w-[180px]">
            <Link href="/conference/cntc" className="block px-4 py-2 text-white hover:bg-gray-600">
              CNTC
            </Link>
          </div>
        </div>
        <Link href="/apply" className="text-white hover:text-gray-300">
          Apply
        </Link>
      </div>
    </nav>
  );
}