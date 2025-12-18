'use client';

export function ComparisonTable() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Process Comparison
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Compare ExtraAcid and ExtrAlkali processes
          </p>
        </div>

        <div className="overflow-x-auto -mx-4 sm:mx-0" data-aos="fade-up" data-aos-delay="200">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow-md rounded-lg">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Feature
                    </th>
                    <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      ExtraAcid
                    </th>
                    <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      ExtrAlkali
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap">
                      Process Type
                    </td>
                    <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                      Sulfuric Acid Concentration/Dewatering
                    </td>
                    <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                      Caustic Soda (NaOH) Concentration
                    </td>
                  </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap">
                  Concentration Range
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                  5% to 98% (Inlet: 5-50%, Outlet: 50-98%)
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                  30% to 98.5% (typically 32% to 99%)
                </td>
              </tr>
              <tr>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap">
                  Temperature Range
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                  Up to 450°C
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                  Up to 500°C (evaporators)
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap">
                  Pressure Range
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                  Up to 40 barg
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                  Up to 20 bar (evaporators), vacuum to 10 bar
                </td>
              </tr>
              <tr>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap">
                  Energy Recovery
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                  Steam production (up to 10 bar), Energy recovery ratio: 70%
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                  25-35% energy saving in 4-step evaporation, Steam recovery
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap">
                  Design Features
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                  Innovative patented 2 loops design, Pressure operation
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                  Up to 5 effects available, 2-4 stage evaporation
                </td>
              </tr>
              <tr>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap">
                  Key Benefits
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                  • Energy recovery by steam production<br/>
                  • Flexible inlet concentration<br/>
                  • Handles impurities (HF, H₂O₂, Fe)<br/>
                  • Small footprint<br/>
                  • Optimized capex and opex
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                  • No Nickel pick up<br/>
                  • Energy recovery by steam production<br/>
                  • Longer life time, less maintenance<br/>
                  • Small footprint<br/>
                  • Optimized capex and opex
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap">
                  Applications
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                  • Titanium Dioxide<br/>
                  • Gas drying/purification<br/>
                  • Nitration processes<br/>
                  • Mining<br/>
                  • High purity acids<br/>
                  • Works for Alkaline, HF or HCl as well
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                  • NaOH/KOH up to 99%<br/>
                  • H₂SO₄ up to 98% (chlorine drying)<br/>
                  • HCl up to 25%<br/>
                  • CaCl₂ up to 72%<br/>
                  • HF up to 40%<br/>
                  • Works for Acid, HF or HCl as well
                </td>
              </tr>
              <tr>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap">
                  Material
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                  NoMoCorr® SIC (Silicon Carbide) block heat exchangers
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                  NoMoCorr® SIC (Silicon Carbide), PTFE for lower requirements
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap">
                  Flow Rates
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                  2 up to 200 MTPD SA97<br/>
                  Size of 200 MTPD: 2.4m x 2.7m x 12m height (skid mounted)
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                  Tailor-made concept, modular structure of different sizes
                </td>
              </tr>
              <tr>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap">
                  Special Features
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                  • Organics mostly decomposed at high evaporation temperatures<br/>
                  • Purification by crystallization possible<br/>
                  • Can handle HF applications
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                  • Revamping capability (2-3 effects to 4-5 effects)<br/>
                  • Payback less than 2 years for revamping<br/>
                  • Combined plants from 30% to 98.5%<br/>
                  • Flaking or Prilling options
                </td>
              </tr>
            </tbody>
          </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

