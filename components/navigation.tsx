'use client';

import { useState } from 'react';
import { Link } from '@/src/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { LanguageSwitcher } from '@/components/ui/language-switcher';

const navLinks = [
  { key: 'home', href: '/' },
  { key: 'revamping', href: '/revamping' },
  { key: 'pilot', href: '/pilot' },
  { key: 'about', href: '/about' },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('nav');

  return (
    <nav className="bg-gray-100 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src="/images/wilk-logo.jpg"
                alt="Logo"
                width={180}
                height={60}
                className="h-10 sm:h-14 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.key}
                href={link.href}
                className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:text-gray-900 hover:bg-gray-200 transition-all duration-200"
              >
                {t(link.key)}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-800 hover:text-gray-900 p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map(link => (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-800 px-4 py-2 rounded-md text-base font-medium hover:text-gray-900 hover:bg-gray-200 transition-all duration-200"
                >
                  {t(link.key)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

