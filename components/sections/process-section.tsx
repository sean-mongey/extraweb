'use client';

import { useState } from 'react';

type ProcessType = 'ExtraAcid' | 'ExtrAlkali' | 'HCl';

export function ProcessSection() {
  const [activeProcess, setActiveProcess] = useState<ProcessType>('ExtraAcid');

  const processInfo: Record<ProcessType, React.ReactNode> = {
    ExtraAcid: (
      <div className="text-left space-y-6 max-w-4xl mx-auto">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
          <p className="text-lg font-semibold text-gray-800">
            ExtrAcid® is the first system that recycles waste sulfuric acid under pressure using innovative patented loop systems producing high concentrated acid and process steam at the same time.
          </p>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">INTRODUCTION</h4>
          <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
            Waste sulfuric acid from various chemical processes has to be recycled by removing water and other impurities from the acid. By dewatering the concentration rides from less than 15% to higher values of typically 98%.
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            Typical Acid concentration systems (SAC or SAS or dewatering systems) are separated in to lower concentration of up to 70%, medium and high concentration systems.
          </p>
        </div>

        <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
          <p className="text-sm sm:text-base font-semibold text-gray-800">SYSTEM WORKS FOR ALKALINE, HF OF HCL AS WELL</p>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">BENEFITS AT A GLANCE</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm sm:text-base text-gray-600">
            <li>• Energy recovery by steam production</li>
            <li>• Innovative patented 2 loops design</li>
            <li>• Flexible inlet concentration</li>
            <li>• From 5 to 98%</li>
            <li>• Handles impurities</li>
            <li>• Small footprint</li>
            <li>• Optimized capex and opex</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">APPLICATIONS FOR ExtrAcid®</h4>
          <ul className="space-y-1 text-sm sm:text-base text-gray-600">
            <li>• Titanium Dioxide</li>
            <li>• Gas drying/purification</li>
            <li>• Nitration processes</li>
            <li>• Mining</li>
            <li>• High purity acids</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">PATENTED DESIGN</h4>
          <p className="text-sm sm:text-base text-gray-600">
            The design of the ExtrAcid® system is patented covering the process including the loops for steam production and the usage of SIC material in the required pressure and temperature ranges.
          </p>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">TURN ACID WATER INTO PROCESS STEAM</h4>
          <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
            Well-known is that recycling by vacuum evaporation of water consumes high energy resources. Although the energy consumption has been optimized in recent years valuable energy cannot be recovered due to low temperature levels.
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            The innovative ExtrAcid® process system is the first that can significantly reduce the energy consumption by producing valuable process steam.
          </p>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">IMPURITIES</h4>
          <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
            As waste sulfuric acid has many different sources it often contains organic or inorganic impurities other than water which have to be removed. Dependent on the nature of the process typical examples are HF, H₂O₂ or Fe.
          </p>
          <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
            It is important to know the kind and amount of the impurities before the design of the ExtrAcid® system. Some organics like H₂O₂ are decomposed into water and O₂ if the temperature is increased sufficiently. Others like HF stay in the vapor phase and can be separated this way. Some need special treatment like purification by crystallization.
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            ExtrAcid® can offer many solutions to this wide range of challenges. Due to the universal chemical resistance of our main material, it is suitable for HF applications, due to high temperatures it burns many organics into its elements or separates by evaporation.
          </p>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">PURIFICATION BY CRYSTALLISATION</h4>
          <p className="text-sm sm:text-base text-gray-600">
            A usual task for the treatment of waste acid coming from the production of Titanium Dioxide is the Fe load in the waste. It can be reduced by forming Ferrous sulphate Monohydrate. These kind of processes can easily be added to the ExtrAcid® system.
          </p>
        </div>
      </div>
    ),
    ExtrAlkali: (
      <div className="text-left space-y-6 max-w-4xl mx-auto">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
          <p className="text-lg font-semibold text-gray-800">
            ExtrAlkali® is the first system that significantly reduces the Capex – Opex for the concentrating of Caustic Soda using Silicone Carbide to reach a high concentrated caustic soda and process steam at the same time.
          </p>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">INTRODUCTION</h4>
          <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
            Caustic soda from the electrolysis has to be concentrated by removing water and other impurities. By using SIC the End product is Nikel free even at high concentrations up to 99%. A tailor-made plant:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>No standard concept – designed according to given situation using modules</li>
            <li>According to available utilities on site</li>
            <li>Optimizing OPEX and CAPEX</li>
            <li>50, 70 or 99% Concentration</li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <p className="font-semibold text-gray-800">SYSTEM WORKS FOR ACID, HF OF HCL AS WELL.</p>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">BENEFITS AT A GLANCE</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
            <li>• No Nikel Pick up</li>
            <li>• Energy recovery by steam production</li>
            <li>• Up to 99%</li>
            <li>• Handles impurities</li>
            <li>• Small footprint</li>
            <li>• Optimized capex and opex</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">APPLICATIONS</h4>
          <ul className="space-y-1 text-sm sm:text-base text-gray-600">
            <li>• NaOH/ KOH up to 99%</li>
            <li>• H₂SO₄ up to 98% (chlorine drying)</li>
            <li>• HCl up to 25%</li>
            <li>• CaCl₂ up to 72%</li>
            <li>• HF up to 40%</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">PATENTED DESIGN</h4>
          <p className="text-sm sm:text-base text-gray-600">
            The design of the ExtrAlkali® system is patented for up to 6 effects and the usage of SIC material in the required pressure and temperature ranges.
          </p>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">TURN PROCESS WATER INTO PROCESS STEAM</h4>
          <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
            It is well known that the current concentration systems, by evaporation of water, have a high energy consumption. Although the energy consumption has been optimized in recent years valuable energy cannot be recovered due to low temperature levels.
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            The innovative ExtrAlkali® process system is the first that can significantly reduce the energy consumption by producing valuable process steam.
          </p>
        </div>
      </div>
    ),
    HCl: (
      <div className="text-left space-y-6 max-w-4xl mx-auto">
        <div>
          <h4 className="text-2xl font-bold text-gray-800 mb-4 text-center">HCL SYNTHESIS</h4>
          <p className="text-gray-600 mb-4">
            During the HCL synthesis chlorine reacts with water to HCL at temperatures of more than 1,500 °C. The process requires the addition of heat, which is removed from the system later on.
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            For a safe operation the process is handled in graphite units. A reference list of more than 100 applications is available.
          </p>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Turn key units incl. the process engineering</h4>
          <p className="text-gray-600 mb-4">
            We offer simple furnaces, three in one units and complete turn key units including the process engineering
          </p>
          
          <h5 className="text-lg font-semibold text-gray-800 mb-3">Advantages of the three in one units:</h5>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 mb-4">
            <li>• Synthesis, absorption and cooling in one unit</li>
            <li>• Improved efficiency</li>
            <li>• Long life time</li>
            <li>• Turn key units on request</li>
            <li>• Compatible with existing plants</li>
            <li>• More than 100 references</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Technical Data</h4>
          <ul className="space-y-2 text-gray-600">
            <li>• Modular structure of different sizes</li>
            <li>• Steam as a by-product</li>
            <li>• Firing from below</li>
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
            Our Processes
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explore our innovative processing solutions
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

