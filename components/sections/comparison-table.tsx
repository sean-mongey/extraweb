'use client';

import { useLocale, useTranslations } from 'next-intl';

type ComparisonItem = {
  feature: string;
  extraAcid: string;
  extrAlkali: string;
};

function getComparisonData(locale: string): ComparisonItem[] {
  if (locale === 'de') {
    return [
      { feature: 'Prozesstyp', extraAcid: 'Säurekonzentration/Entwässerung', extrAlkali: 'Ätznatron-Konzentration' },
      { feature: 'Konzentrationsbereich', extraAcid: '5% bis 98%', extrAlkali: '30% bis 98,5%' },
      { feature: 'Temperaturbereich', extraAcid: 'Bis zu 450°C', extrAlkali: 'Bis zu 500°C (Verdampfer)' },
      { feature: 'Druckbereich', extraAcid: 'Bis zu 40 barg', extrAlkali: 'Bis zu 20 bar (Verdampfer), Vakuum bis 10 bar' },
      { feature: 'Energierückgewinnung', extraAcid: 'Dampferzeugung (bis zu 10 bar), Energierückgewinnungsrate bis zu 70%', extrAlkali: 'Bis zu 48% Energieeinsparung mit mehreren Effekten, Dampfrückgewinnung' },
      { feature: 'Konstruktionsmerkmale', extraAcid: 'Innovatives patentiertes 2-Loop-Design, Druckbetrieb', extrAlkali: 'Bis zu 8 Effekte verfügbar' },
      { feature: 'Hauptvorteile', extraAcid: '• Energierückgewinnung durch Dampferzeugung<br/>• Flexible Eingangskonzentration<br/>• Behandelt Verunreinigungen (HF, H₂O₂, Fe)<br/>• Kleiner Platzbedarf<br/>• Optimierte Capex und Opex', extrAlkali: '• Keine Nickel-Aufnahme<br/>• Energierückgewinnung durch Dampferzeugung<br/>• Längere Lebensdauer, weniger Wartung<br/>• Kleiner Platzbedarf<br/>• Optimierte Capex und Opex' },
      { feature: 'Anwendungen', extraAcid: '• Titandioxid<br/>• Gas-Trocknung/Reinigung<br/>• Nitrierungsprozesse<br/>• Bergbau<br/>• Hochreine Säuren', extrAlkali: '• NaOH bis zu 99%<br/>• KOH bis zu 99%<br/>• HCl bis zu 25%<br/>• CaCl₂ bis zu 72%' },
      { feature: 'Material', extraAcid: 'NoMoCorr® SIC (Siliziumkarbid)', extrAlkali: 'NoMoCorr® SIC (Siliziumkarbid)' },
      { feature: 'Durchsatz', extraAcid: '2 bis 200 MTPD SA97<br/>Größe bei 200 MTPD: 2,4m x 2,7m x 12m Höhe (SKID-montiert)', extrAlkali: 'Maßgeschneidertes Konzept, modulare Struktur in verschiedenen Größen' },
      { feature: 'Besondere Merkmale', extraAcid: '• Organische Stoffe werden bei hohen Verdampfungstemperaturen weitgehend zersetzt<br/>• Reinigung durch Kristallisation möglich<br/>• Geeignet für HF-Anwendungen', extrAlkali: '• Amortisation in weniger als 2 Jahren bei Modernisierung<br/>• Flockungs- oder Prilling-Optionen' },
    ];
  }

  if (locale === 'fr') {
    return [
      { feature: 'Type de procédé', extraAcid: 'Concentration d\'acide/Déshydratation', extrAlkali: 'Concentration de soude caustique' },
      { feature: 'Plage de concentration', extraAcid: '5% à 98%', extrAlkali: '30% à 98,5%' },
      { feature: 'Plage de température', extraAcid: 'Jusqu\'à 450°C', extrAlkali: 'Jusqu\'à 500°C (évaporateurs)' },
      { feature: 'Plage de pression', extraAcid: 'Jusqu\'à 40 barg', extrAlkali: 'Jusqu\'à 20 bar (évaporateurs), vide jusqu\'à 10 bar' },
      { feature: 'Récupération d\'énergie', extraAcid: 'Production de vapeur (jusqu\'à 10 bar), taux de récupération d\'énergie jusqu\'à 70%', extrAlkali: 'Jusqu\'à 48% d\'économie d\'énergie avec effets multiples, récupération de vapeur' },
      { feature: 'Caractéristiques de conception', extraAcid: 'Conception innovante brevetée à 2 boucles, fonctionnement sous pression', extrAlkali: 'Jusqu\'à 8 effets disponibles' },
      { feature: 'Avantages clés', extraAcid: '• Récupération d\'énergie par production de vapeur<br/>• Concentration d\'entrée flexible<br/>• Gère les impuretés (HF, H₂O₂, Fe)<br/>• Faible encombrement<br/>• Capex et opex optimisés', extrAlkali: '• Aucune absorption de nickel<br/>• Récupération d\'énergie par production de vapeur<br/>• Durée de vie plus longue, moins de maintenance<br/>• Faible encombrement<br/>• Capex et opex optimisés' },
      { feature: 'Applications', extraAcid: '• Dioxyde de titane<br/>• Séchage/purification des gaz<br/>• Procédés de nitration<br/>• Exploitation minière<br/>• Acides de haute pureté', extrAlkali: '• NaOH jusqu\'à 99%<br/>• KOH jusqu\'à 99%<br/>• HCl jusqu\'à 25%<br/>• CaCl₂ jusqu\'à 72%' },
      { feature: 'Matériau', extraAcid: 'NoMoCorr® SIC (Carbure de silicium)', extrAlkali: 'NoMoCorr® SIC (Carbure de silicium)' },
      { feature: 'Débits', extraAcid: '2 à 200 MTPD SA97<br/>Dimensions pour 200 MTPD: 2,4m x 2,7m x 12m de hauteur (monté sur SKID)', extrAlkali: 'Concept sur mesure, structure modulaire de différentes tailles' },
      { feature: 'Caractéristiques spéciales', extraAcid: '• Les organiques sont majoritairement décomposés à haute température d\'évaporation<br/>• Purification par cristallisation possible<br/>• Peut gérer les applications HF', extrAlkali: '• Retour sur investissement en moins de 2 ans pour la modernisation<br/>• Options de flocage ou de prilling' },
    ];
  }

  return [
    { feature: 'Process Type', extraAcid: 'Acid Concentration/Dewatering', extrAlkali: 'Caustic Soda Concentration' },
    { feature: 'Concentration Range', extraAcid: '5% to 98%', extrAlkali: '30% to 98.5%' },
    { feature: 'Temperature Range', extraAcid: 'Up to 450°C', extrAlkali: 'Up to 500°C (evaporators)' },
    { feature: 'Pressure Range', extraAcid: 'Up to 40 barg', extrAlkali: 'Up to 20 bar (evaporators), vacuum to 10 bar' },
    { feature: 'Energy Recovery', extraAcid: 'Steam production (up to 10 bar), Energy recovery ratio up to 70%', extrAlkali: 'Up to 48% energy saving with multiple effects, Steam recovery' },
    { feature: 'Design Features', extraAcid: 'Innovative patented 2 loops design, Pressure operation', extrAlkali: 'Up to 8 effects available' },
    { feature: 'Key Benefits', extraAcid: '• Energy recovery by steam production<br/>• Flexible inlet concentration<br/>• Handles impurities (HF, H₂O₂, Fe)<br/>• Small footprint<br/>• Optimized capex and opex', extrAlkali: '• No Nickel pick up<br/>• Energy recovery by steam production<br/>• Longer life time, less maintenance<br/>• Small footprint<br/>• Optimized capex and opex' },
    { feature: 'Applications', extraAcid: '• Titanium Dioxide<br/>• Gas drying/purification<br/>• Nitration processes<br/>• Mining<br/>• High purity acids', extrAlkali: '• NaOH up to 99%<br/>• KOH up to 99%<br/>• HCl up to 25%<br/>• CaCl₂ up to 72%' },
    { feature: 'Material', extraAcid: 'NoMoCorr® SIC (Silicon Carbide)', extrAlkali: 'NoMoCorr® SIC (Silicon Carbide)' },
    { feature: 'Flow Rates', extraAcid: '2 up to 200 MTPD SA97<br/>Size of 200 MTPD: 2.4m x 2.7m x 12m height (skid mounted)', extrAlkali: 'Tailor-made concept, modular structure of different sizes' },
    { feature: 'Special Features', extraAcid: '• Organics mostly decomposed at high evaporation temperatures<br/>• Purification by crystallization possible<br/>• Can handle HF applications', extrAlkali: '• Payback less than 2 years for revamping<br/>• Flaking or Prilling options' },
  ];
}

export function ComparisonTable() {
  const t = useTranslations('comparison');
  const locale = useLocale();
  const comparisonData = getComparisonData(locale);
  const featureHeader = locale === 'de' ? 'Merkmal' : locale === 'fr' ? 'Caractéristique' : 'Feature';

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('title')}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {t('subtitle')}
          </p>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4" data-aos="fade-up" data-aos-delay="200">
          {comparisonData.map((item, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 rounded-lg shadow-sm p-4 ${
                index % 2 === 1 ? 'bg-gray-50' : ''
              }`}
            >
              <h3 className="text-sm font-bold text-gray-900 mb-3 pb-2 border-b border-gray-200">
                {item.feature}
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-1">ExtrAcid:</p>
                  <p
                    className="text-xs text-gray-600"
                    dangerouslySetInnerHTML={{ __html: item.extraAcid }}
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-1">ExtrAlkali:</p>
                  <p
                    className="text-xs text-gray-600"
                    dangerouslySetInnerHTML={{ __html: item.extrAlkali }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto -mx-4 sm:mx-0" data-aos="fade-up" data-aos-delay="200">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow-md rounded-lg">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      {featureHeader}
                    </th>
                    <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      ExtrAcid
                    </th>
                    <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      ExtrAlkali
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonData.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? 'bg-gray-50' : ''}>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap">
                        {item.feature}
                      </td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                        <span dangerouslySetInnerHTML={{ __html: item.extraAcid }} />
                      </td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-600">
                        <span dangerouslySetInnerHTML={{ __html: item.extrAlkali }} />
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

