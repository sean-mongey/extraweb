'use client';

import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'react-feather';
import { Link } from '@/src/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const footerLinks = [
  { key: 'home', href: '/' },
  { key: 'revamping', href: '/revamping' },
  { key: 'pilot', href: '/pilot' },
  { key: 'about', href: '/about' },
];

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/images/wilk-logo.jpg"
                alt="Logo"
                width={180}
                height={60}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400">
              {t('description')}
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.map(link => (
                <li key={link.key}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t('contact')}</h3>
            <p className="text-gray-400 flex items-start">
              <MapPin className="mr-2 mt-1 flex-shrink-0" size={16} /> 
              <span>Teichstraße 14<br/>79539 Lörrach<br/>Germany</span>
            </p>
            <p className="text-gray-400 flex items-center mt-2">
              <Phone className="mr-2 flex-shrink-0" size={16} /> 
              <a href="tel:+4976214221644" className="hover:text-white transition-colors">
                +49 7621 42216-44
              </a>
            </p>
            <p className="text-gray-400 flex items-center mt-2">
              <Mail className="mr-2 flex-shrink-0" size={16} /> 
              <a href="mailto:info@wilk-graphite.com" className="hover:text-white transition-colors">
                info@wilk-graphite.com
              </a>
            </p>
            <p className="text-gray-400 mt-2">
              <a href="https://www.wilk-graphite.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                www.wilk-graphite.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t('newsletter')}</h3>
            <p className="text-gray-400 mb-4">
              {t('newsletterDescription')}
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                className="px-4 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none w-full text-gray-900 mb-2 sm:mb-0"
              />
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md hover:bg-blue-700 transition-all whitespace-nowrap"
              >
                {t('subscribe')}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>{t('copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}

