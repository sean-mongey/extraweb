'use client';

import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-gray-900">
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Fallback if video doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-50"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="text-center text-white px-4" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
            {t('title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md px-2">
            {t('subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}

