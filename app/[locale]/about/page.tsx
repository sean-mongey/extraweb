import { Card } from '@/components/ui/card';
import { getTranslations } from 'next-intl/server';

export default async function AboutPage() {
  const t = await getTranslations('about');

  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {t('title')}
              </h1>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12" data-aos="fade-up">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    {t('companyName')}
                  </h2>
                </div>

                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    {t('description1')}
                  </p>

                  <p>
                    {t('description2')}
                  </p>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-gray-600 mb-4">
                      {t('location')}
                    </p>
                    <p className="text-gray-600">
                      {t('pilotPlant')}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
  );
}

