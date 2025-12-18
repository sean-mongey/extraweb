'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/src/i18n/routing';
import { locales, localeNames, localeFlags } from '@/src/i18n/config';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, right: 0 });
  const isNavigatingRef = useRef(false);
  const pendingLocaleRef = useRef<string | null>(null);

  const switchLocale = (newLocale: string) => {
    if (isNavigatingRef.current || newLocale === locale || newLocale === pendingLocaleRef.current) {
      return;
    }

    setIsOpen(false);
    isNavigatingRef.current = true;
    pendingLocaleRef.current = newLocale;
    setIsNavigating(true);

    let targetPath = pathname || '/';
    
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      for (const loc of locales) {
        if (currentPath.startsWith(`/${loc}/`)) {
          targetPath = currentPath.substring(`/${loc}`.length);
          break;
        } else if (currentPath === `/${loc}`) {
          targetPath = '/';
          break;
        }
      }
    }
    
    if (!targetPath || targetPath === '') {
      targetPath = '/';
    }
    if (!targetPath.startsWith('/')) {
      targetPath = `/${targetPath}`;
    }

    const newPath = targetPath === '/' 
      ? `/${newLocale}` 
      : `/${newLocale}${targetPath}`;
    
    if (typeof window !== 'undefined') {
      window.location.href = newPath;
    } else {
      try {
        router.replace(targetPath, { locale: newLocale });
      } catch (error) {
        console.error('Error switching locale:', error);
        isNavigatingRef.current = false;
        pendingLocaleRef.current = null;
        setIsNavigating(false);
      }
    }
  };

  useEffect(() => {
    isNavigatingRef.current = false;
    pendingLocaleRef.current = null;
    setIsNavigating(false);
    setIsOpen(false);
  }, [locale]);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        containerRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="relative" ref={containerRef}>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (!isNavigatingRef.current) {
              setIsOpen(!isOpen);
            }
          }}
          disabled={isNavigating}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-gray-200 border border-transparent transition-all duration-200 disabled:opacity-50"
          type="button"
        >
          <Image
            src={localeFlags[locale as keyof typeof localeFlags]}
            alt={localeNames[locale as keyof typeof localeNames]}
            width={20}
            height={15}
            className="object-cover rounded-sm border border-gray-200"
            unoptimized
          />
        </button>
      </div>

      {isOpen && !isNavigating && (
        <div
          ref={dropdownRef}
          className="fixed w-48 bg-white rounded-md shadow-lg z-[9999] border border-gray-200"
          style={{
            top: `${dropdownPosition.top}px`,
            right: `${dropdownPosition.right}px`,
          }}
        >
          <div className="py-1">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  switchLocale(loc);
                }}
                disabled={isNavigating || locale === loc || isNavigatingRef.current}
                className={`flex items-center gap-3 w-full text-left px-4 py-2 text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                  locale === loc
                    ? 'bg-gray-100 text-gray-800 font-medium cursor-default'
                    : isNavigating || isNavigatingRef.current
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-50 cursor-pointer'
                }`}
                type="button"
              >
                <Image
                  src={localeFlags[loc]}
                  alt={localeNames[loc]}
                  width={20}
                  height={15}
                  className="object-cover rounded-sm border border-gray-200"
                  unoptimized
                />
                <span className="flex-1">{localeNames[loc]}</span>
                {locale === loc && (
                  <span className="text-gray-600">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

