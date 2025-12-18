import { Card } from '@/components/ui/card';
import { getTranslations } from 'next-intl/server';

export default async function RevampingPage() {
  const t = await getTranslations('revamping');

  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {t('title')}
              </h1>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                {t('subtitle')}
              </p>
            </div>

            <div className="space-y-8">
              {/* Introduction */}
              <Card className="p-8 md:p-12" data-aos="fade-up">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {t('aboutTitle')}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {t('aboutDescription')}
                  </p>
                </div>
                <div className="mt-6">
                  <p className="text-gray-600 mb-4">
                    {t('brandFor')}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>{t('brandItems.caustic')}</li>
                    <li>{t('brandItems.sulfuric')}</li>
                    <li>{t('brandItems.hcl')}</li>
                    <li>{t('brandItems.calcium')}</li>
                  </ul>
                </div>
              </Card>

              {/* Tailor Made Plant */}
              <Card className="p-8 md:p-12" data-aos="fade-up" data-aos-delay="100">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  {t('tailorMadeTitle')}
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li>• {t('tailorMadeItems.noStandard')}</li>
                  <li>• {t('tailorMadeItems.utilities')}</li>
                  <li>• {t('tailorMadeItems.opex')}</li>
                  <li>• {t('tailorMadeItems.capex')}</li>
                </ul>
              </Card>

              {/* Revamping Module */}
              <Card className="p-8 md:p-12" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  {t('moduleTitle')}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-2xl font-bold text-blue-600 mr-4">1</span>
                    <p className="text-gray-600 flex-1">
                      {t('moduleItems.item1')}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl font-bold text-blue-600 mr-4">2</span>
                    <p className="text-gray-600 flex-1">
                      {t('moduleItems.item2')}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl font-bold text-blue-600 mr-4">3</span>
                    <p className="text-gray-600 flex-1">
                      {t('moduleItems.item3')}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl font-bold text-blue-600 mr-4">4</span>
                    <p className="text-gray-600 flex-1">
                      {t('moduleItems.item4')}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Revamping Benefits */}
              <Card className="p-8 md:p-12" data-aos="fade-up" data-aos-delay="300">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  {t('benefitsTitle')}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-2xl font-bold text-blue-600 mr-4">1</span>
                    <p className="text-gray-600 flex-1">
                      {t('benefitsItems.item1')}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl font-bold text-blue-600 mr-4">2</span>
                    <p className="text-gray-600 flex-1">
                      {t('benefitsItems.item2')}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl font-bold text-blue-600 mr-4">3</span>
                    <p className="text-gray-600 flex-1">
                      {t('benefitsItems.item3')}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Installation Options */}
              <Card className="p-8 md:p-12" data-aos="fade-up" data-aos-delay="400">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  {t('installationTitle')}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-2xl font-bold text-blue-600 mr-4">1</span>
                    <p className="text-gray-600 flex-1">
                      {t('installationItems.item1')}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl font-bold text-blue-600 mr-4">2</span>
                    <p className="text-gray-600 flex-1">
                      {t('installationItems.item2')}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl font-bold text-blue-600 mr-4">3</span>
                    <p className="text-gray-600 flex-1">
                      {t('installationItems.item3')}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Energy Savings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="500">
                <Card className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{t('energySavings')}</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="text-3xl font-bold text-blue-600">-22%</p>
                    <p>{t('energyReduction1')}</p>
                  </div>
                </Card>
                <Card className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{t('energySavings')}</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="text-3xl font-bold text-blue-600">-48%</p>
                    <p>{t('energyReduction2')}</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}

