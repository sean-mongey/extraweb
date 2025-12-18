'use client';

import { useState } from 'react';

type ProcessType = 'ExtraAcid' | 'ExtraAlk' | 'HCl';

export function ProcessSection() {
  const [activeProcess, setActiveProcess] = useState<ProcessType>('ExtraAcid');

  const processInfo: Record<ProcessType, string> = {
    ExtraAcid: 'This is where the info for ExtraAcid will go',
    ExtraAlk: 'This is where the info for ExtraAlk will go',
    HCl: 'This is where the info for HCl will go',
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Processes
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explore our innovative processing solutions
          </p>
        </div>

        {/* Process Selection Tabs */}
        <div className="flex justify-center mb-12" data-aos="fade-up">
          <div className="bg-white p-2 rounded-lg shadow-md">
            <button
              onClick={() => setActiveProcess('ExtraAcid')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeProcess === 'ExtraAcid'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              ExtraAcid
            </button>
            <button
              onClick={() => setActiveProcess('ExtraAlk')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeProcess === 'ExtraAlk'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              ExtraAlk
            </button>
            <button
              onClick={() => setActiveProcess('HCl')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeProcess === 'HCl'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              HCl
            </button>
          </div>
        </div>

        {/* Process Content */}
        <div
          className="bg-white p-8 rounded-lg shadow-md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {activeProcess}
            </h3>
            <p className="text-gray-600 text-lg">{processInfo[activeProcess]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

