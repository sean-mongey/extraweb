'use client';

import { Card } from '@/components/ui/card';
import { useLocale } from 'next-intl';

function getNoMoCorrContent(locale: string) {
  if (locale === 'de') {
    return {
      title: 'SIC - DAS UNIVERSELLE KORROSIONSBESTÄNDIGE MATERIAL',
      p1: 'Unsere SIC-Produkte werden aus rein direkt gesintertem SIC, dem sogenannten SSiC, hergestellt. Sie enthalten kein freies Silikon mehr, was die chemische Beständigkeit und Wärmeleitfähigkeit einschränkt. SIC bietet eine nahezu universelle chemische Beständigkeit und eine hohe Wärmeleitfähigkeit. Die extreme Oberflächenhärte schützt vor Abrieb und ermöglicht hohe Strömungsgeschwindigkeiten bei erhöhter thermischer Effizienz. Wie kaum ein anderes korrosionsbeständiges Material eignet sich SSiC hervorragend für Anwendungen bei extrem hohen Temperaturen.',
      p2: 'ExtrAcid und ExtrAlkali sind die ersten vollständigen Systeme mit umfangreichem Einsatz von SSiC bei hohen Temperaturen und Drücken.',
      features: [
        'Universelle chemische Beständigkeit',
        'Höchste Wärmeleitfähigkeit',
        'Kein Abrieb',
        'Keine Kontamination',
        'Extrem harte Keramik',
        'Geringe Wandstärke',
        'Niedrige Fouling-Raten',
        'Hohe Strömungsgeschwindigkeiten',
        'Hohe Temperaturwechselbeständigkeit',
        'Viele Designs möglich',
        'Hohe Temperaturbeständigkeit',
        'Geringe Oberflächenrauheit',
        'Keine Alterung / keine Ermüdung',
      ],
      keyTitle: 'SCHLUESSELEIGENSCHAFTEN',
      keyItems: [
        'Dichte > 3 120 kg/m³',
        'Wärmeleitfähigkeit: 130 W/(m.K)',
        'Wärmetauscher bis 450 °C und 40 barg',
        'Vickers-Härte: 19,2 GPa (500g Last) > Zugfestigkeit: 210 MPa',
        "Young's Modul: 420 GPa",
      ],
      applicationsTitle: 'ANWENDUNGEN',
      applications: ['Separatoren', 'Rohre', 'Kompensatoren', 'Thermowells', 'Kolonnen'],
    };
  }

  if (locale === 'fr') {
    return {
      title: 'SIC - LE MATERIAU UNIVERSEL RESISTANT A LA CORROSION',
      p1: 'Nos produits SIC sont fabriqués à partir de SIC pur fritté directement, appelé SSiC. Ils ne contiennent plus de silicone libre, ce qui limite la résistance chimique et la conductivité thermique. Le SIC offre une résistance chimique quasi universelle et une conductivité thermique élevée. L\'extrême dureté de surface protège contre l\'abrasion et permet des débits élevés avec une efficacité thermique accrue. Comme très peu d\'autres matériaux résistants à la corrosion, le SSiC est parfaitement adapté aux applications à très haute température.',
      p2: 'ExtrAcid et ExtrAlkali sont les premiers systèmes complets avec une utilisation intensive du SSiC à hautes températures et pressions.',
      features: [
        'Résistance chimique universelle',
        'Conductivité thermique maximale',
        'Pas d\'abrasion',
        'Pas de contamination',
        'Céramique extrêmement dure',
        'Faible épaisseur de paroi',
        'Faibles taux d\'encrassement',
        'Vitesses élevées',
        'Haute résistance aux chocs thermiques',
        'Nombreuses conceptions possibles',
        'Résistance aux hautes températures',
        'Faible rugosité de surface',
        'Pas de vieillissement / pas de fatigue',
      ],
      keyTitle: 'PROPRIETES CLES',
      keyItems: [
        'Densité > 3 120 kg/m³',
        'Conductivité thermique: 130 W/(m.K)',
        'Échangeur thermique jusqu\'à 450 °C et 40 barg',
        'Dureté Vickers: 19,2 GPa (charge de 500g) > Résistance à la traction: 210 MPa',
        'Module de Young: 420 GPa',
      ],
      applicationsTitle: 'APPLICATIONS',
      applications: ['Séparateurs', 'Tuyaux', 'Compensateurs', 'Doigts de gant', 'Colonnes'],
    };
  }

  return {
    title: 'SIC – THE UNIVERSAL ANTI CORROSION MATERIAL',
    p1: 'Our SIC products are manufactured from pure directly sintered SIC, the so-called SSiC. They no longer contain free silicone, which limits chemical resistance and thermal conductivity. SIC offers nearly universal chemical resistance and high thermal conductivity. Extreme surface hardness allows protection against abrasion and results in high flow rates with increased thermal efficiency. Like hardly any other corrosion resistant material, SSiC is excellently suited for extreme high temperature applications.',
    p2: 'ExtrAcid and ExtrAlkali are the first full Systems with extensive usage of SSiC at high temperatures and pressures.',
    features: [
      'Universal Chemical resistance',
      'Highest thermal conductivity',
      'No abrasion',
      'No contamination',
      'Extremely hard ceramic',
      'Low wall thickness',
      'Low fouling rates',
      'High velocities',
      'High thermal shock resistance',
      'Many designs possible',
      'High temperature resistance',
      'Low surface roughness',
      'No aging / no fatigue',
    ],
    keyTitle: 'KEY PROPERTIES',
    keyItems: [
      'Density > 3 120 kg/m³',
      'Thermal conductivity: 130 W/(m.K)',
      'Heat exchanger up to 450 °C and 40 barg',
      'Vickers hardness: 19,2 GPa (500g load) > Tensile Strength: 210 Mpa',
      "Young's modulus: 420 GPa",
    ],
    applicationsTitle: 'APPLICATIONS',
    applications: ['Separators', 'Pipes', 'Compensator', 'Thermowells', 'Columns'],
  };
}

export function NoMoCorrSection() {
  const locale = useLocale();
  const content = getNoMoCorrContent(locale);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          <Card className="p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {content.title}
              </h2>
              <div className="text-gray-600 text-lg max-w-4xl mx-auto text-left space-y-6">
                <p>
                  {content.p1}
                </p>
                <p>
                  {content.p2}
                </p>
                
                <div className="my-8">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 text-base">
                    {content.features.map(item => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">{content.keyTitle}</h3>
                    <ul className="space-y-2 text-base text-left">
                      {content.keyItems.map(item => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">{content.applicationsTitle}</h3>
                    <ul className="space-y-2 text-base text-left">
                      {content.applications.map(item => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

