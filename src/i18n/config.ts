export const locales = ['en', 'de', 'fr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
};

// Flag image URLs from CDN (using flagcdn.com)
export const localeFlags: Record<Locale, string> = {
  en: 'https://flagcdn.com/w20/gb.png',
  de: 'https://flagcdn.com/w20/de.png',
  fr: 'https://flagcdn.com/w20/fr.png',
};

