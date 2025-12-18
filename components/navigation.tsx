'use client';

import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Rev', href: '/rev' },
  { name: 'Pilot', href: '/pilot' },
  { name: 'About Us', href: '/about' },
];

export function Navigation() {
  return (
    <nav className="bg-gray-100 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              ExtraWeb
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:text-gray-900 hover:bg-gray-200 transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-800 hover:text-gray-900">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

