import { getTranslations } from 'next-intl/server';

export default async function PilotPage() {
  const t = await getTranslations('pilot');

  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t('title')}
            </h1>
            <p className="text-gray-600 text-xl mt-8">
              {t('message')}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

