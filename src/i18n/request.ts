import { getRequestConfig } from 'next-intl/server';
import { routing, defaultLocale } from './routing';
import { locales } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../languages/${locale}.json`)).default,
  };
});

