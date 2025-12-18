'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

type ProcessType = 'ExtraAcid' | 'ExtrAlkali' | 'HCl';

export function ProcessSection() {
  const [activeProcess, setActiveProcess] = useState<ProcessType>('ExtraAcid');
  const t = useTranslations('process');

  const processInfo: Record<ProcessType, React.ReactNode> = {
    ExtraAcid: (
      <div className="text-left space-y-4 sm:space-y-6 max-w-4xl mx-auto">
        <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border-l-4 border-blue-600">
          <p className="text-base sm:text-lg font-semibold text-gray-800">
            {t('extraAcid.summary')}
          </p>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{t('extraAcid.introduction')}</h4>
          <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
            {t('extraAcid.introText1')}
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            {t('extraAcid.introText2')}
          </p>
        </div>

        <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
          <p className="text-sm sm:text-base font-semibold text-gray-800">{t('extraAcid.systemWorks')}</p>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{t('extraAcid.benefitsTitle')}</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm sm:text-base text-gray-600">
            <li>• {t('extraAcid.benefits.energy')}</li>
            <li>• {t('extraAcid.benefits.design')}</li>
            <li>• {t('extraAcid.benefits.flexible')}</li>
            <li>• {t('extraAcid.benefits.range')}</li>
            <li>• {t('extraAcid.benefits.impurities')}</li>
            <li>• {t('extraAcid.benefits.footprint')}</li>
            <li>• {t('extraAcid.benefits.optimized')}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{t('extraAcid.applicationsTitle')}</h4>
          <ul className="space-y-1 text-sm sm:text-base text-gray-600">
            <li>• {t('extraAcid.applications.titanium')}</li>
            <li>• {t('extraAcid.applications.gas')}</li>
            <li>• {t('extraAcid.applications.nitration')}</li>
            <li>• {t('extraAcid.applications.mining')}</li>
            <li>• {t('extraAcid.applications.purity')}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{t('extraAcid.patentedTitle')}</h4>
          <p className="text-sm sm:text-base text-gray-600">
            {t('extraAcid.patentedText')}
          </p>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{t('extraAcid.steamTitle')}</h4>
          <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
            {t('extraAcid.steamText1')}
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            {t('extraAcid.steamText2')}
          </p>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{t('extraAcid.impuritiesTitle')}</h4>
          <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
            {t('extraAcid.impuritiesText1')}
          </p>
          <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
            {t('extraAcid.impuritiesText2')}
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            {t('extraAcid.impuritiesText3')}
          </p>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{t('extraAcid.crystallisationTitle')}</h4>
          <p className="text-sm sm:text-base text-gray-600">
            {t('extraAcid.crystallisationText')}
          </p>
        </div>
      </div>
    ),
    ExtrAlkali: (
      <div className="text-left space-y-4 sm:space-y-6 max-w-4xl mx-auto">
        <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border-l-4 border-blue-600">
          <p className="text-base sm:text-lg font-semibold text-gray-800">
            {t('extrAlkali.summary')}
          </p>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{t('extrAlkali.introduction')}</h4>
          <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
            {t('extrAlkali.introText1')}
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-600 ml-4">
            <li>{t('extrAlkali.introItems.noStandard')}</li>
            <li>{t('extrAlkali.introItems.utilities')}</li>
            <li>{t('extrAlkali.introItems.opex')}</li>
            <li>{t('extrAlkali.introItems.concentration')}</li>
          </ul>
        </div>

        <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
          <p className="text-sm sm:text-base font-semibold text-gray-800">{t('extrAlkali.systemWorks')}</p>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{t('extrAlkali.benefitsTitle')}</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm sm:text-base text-gray-600">
            <li>• {t('extrAlkali.benefits.nickel')}</li>
            <li>• {t('extrAlkali.benefits.energy')}</li>
            <li>• {t('extrAlkali.benefits.upTo')}</li>
            <li>• {t('extrAlkali.benefits.impurities')}</li>
            <li>• {t('extrAlkali.benefits.footprint')}</li>
            <li>• {t('extrAlkali.benefits.optimized')}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{t('extrAlkali.applicationsTitle')}</h4>
          <ul className="space-y-1 text-sm sm:text-base text-gray-600">
            <li>• {t('extrAlkali.applications.naoh')}</li>
            <li>• {t('extrAlkali.applications.h2so4')}</li>
            <li>• {t('extrAlkali.applications.hcl')}</li>
            <li>• {t('extrAlkali.applications.cacl2')}</li>
            <li>• {t('extrAlkali.applications.hf')}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{t('extrAlkali.patentedTitle')}</h4>
          <p className="text-sm sm:text-base text-gray-600">
            {t('extrAlkali.patentedText')}
          </p>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{t('extrAlkali.steamTitle')}</h4>
          <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
            {t('extrAlkali.steamText1')}
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            {t('extrAlkali.steamText2')}
          </p>
        </div>
      </div>
    ),
    HCl: (
      <div className="text-left space-y-4 sm:space-y-6 max-w-4xl mx-auto">
        <div>
          <h4 className="text-2xl font-bold text-gray-800 mb-4 text-center">{t('hcl.title')}</h4>
          <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
            {t('hcl.text1')}
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            {t('hcl.text2')}
          </p>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{t('hcl.turnKeyTitle')}</h4>
          <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
            {t('hcl.turnKeyText')}
          </p>
          
          <h5 className="text-lg font-semibold text-gray-800 mb-2 sm:mb-3">{t('hcl.advantagesTitle')}</h5>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm sm:text-base text-gray-600 mb-4">
            <li>• {t('hcl.advantages.synthesis')}</li>
            <li>• {t('hcl.advantages.efficiency')}</li>
            <li>• {t('hcl.advantages.lifetime')}</li>
            <li>• {t('hcl.advantages.request')}</li>
            <li>• {t('hcl.advantages.compatible')}</li>
            <li>• {t('hcl.advantages.references')}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{t('hcl.technicalTitle')}</h4>
          <ul className="space-y-2 text-sm sm:text-base text-gray-600">
            <li>• {t('hcl.technical.modular')}</li>
            <li>• {t('hcl.technical.steam')}</li>
            <li>• {t('hcl.technical.firing')}</li>
          </ul>
        </div>
      </div>
    ),
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('title')}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {t('subtitle')}
          </p>
        </div>

        {/* Process Selection Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12" data-aos="fade-up">
          <div className="bg-white p-1 sm:p-2 rounded-lg shadow-md w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-0">
              <button
                onClick={() => setActiveProcess('ExtraAcid')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium transition-all duration-200 w-full sm:w-auto ${
                  activeProcess === 'ExtraAcid'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                ExtraAcid
              </button>
              <button
                onClick={() => setActiveProcess('ExtrAlkali')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium transition-all duration-200 w-full sm:w-auto ${
                  activeProcess === 'ExtrAlkali'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                ExtrAlkali
              </button>
              <button
                onClick={() => setActiveProcess('HCl')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium transition-all duration-200 w-full sm:w-auto ${
                  activeProcess === 'HCl'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                HCl
              </button>
            </div>
          </div>
        </div>

        {/* Process Content */}
        <div
          className="bg-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg shadow-md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              {activeProcess}
            </h3>
            <div className="text-gray-600">
              {processInfo[activeProcess]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

