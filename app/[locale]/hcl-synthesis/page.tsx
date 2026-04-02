import { Card } from '@/components/ui/card';
import { getLocale } from 'next-intl/server';

function getHclContent(locale: string) {
  if (locale === 'de') {
    return {
      title: 'HCl-Synthese',
      p1: 'Bei der Synthese von Salzsäure reagiert Chlor mit Wasserstoff [oder Wasser, wie im Original] zu HCl bei Temperaturen über 1.500°C. Der Verbrennungsprozess erzeugt erhebliche Wärme, die anschließend aus dem System entfernt wird.',
      p2: 'Für einen sicheren und zuverlässigen Prozessablauf ist der Einsatz von Graphitausrüstung unerlässlich. Unsere Graphiteinheiten sind in mehr als 100 Anwendungen weltweit erprobt.',
      completeLead: 'Komplettsysteme inklusive Verfahrenstechnik:',
      completeText: 'Wir bieten alles von einfachen Brennern und dreistufigen Einheiten bis hin zu kompletten schlüsselfertigen Anlagen, einschließlich vollständiger Verfahrenstechnik und Auslegung.',
      advantagesTitle: 'Vorteile',
      advantages: [
        ['Integrierte Lösung:', 'Synthese, Absorption und Kühlung in einer einzigen Einheit'],
        ['Erhöhte Effizienz:', 'Optimierte Leistung für industrielle Anforderungen'],
        ['Hohe Langlebigkeit:', 'Lange Lebensdauer auch in aggressiven Umgebungen'],
        ['Schlüsselfertige Projekte:', 'Komplette Installationen auf Anfrage verfügbar'],
        ['Nahtlose Integration:', 'Vollständig kompatibel mit bestehenden Anlagen'],
        ['Bewährte Referenzen:', 'Mehr als 100 erfolgreiche Referenzen'],
      ],
      techTitle: 'Technische Spezifikationen',
      tech: [
        ['Modulares Design:', 'Verfügbar in verschiedenen Abmessungen und Maßstäben'],
        ['Energierückgewinnung:', 'Dampferzeugung als wertvolles Nebenprodukt'],
        ['Bodenbefeuerte Verbrennung:', 'Optimierte Brennerkonfiguration (Bottom-up)'],
        ['Kopfbefeuerte Verbrennung:', 'Bewährte Brennerkonfiguration'],
        ['Brennermaterial:', 'Quarz, SSiC oder Graphit je nach Anforderungen'],
      ],
      globalTitle: 'Europaeische Ingenieurskunst - Globale Lieferung',
      globalP1: 'Als gemeinsames europäisches Unternehmen bieten ExtraSys (Schweiz) und Deftline (Frankreich) weltweit leistungsstarke Prozesslösungen an. Unsere HCl-Syntheseanlagen stehen für beste europäische Ingenieurskunst und verbinden innovatives Design mit zuverlässiger Projektabwicklung.',
      globalP2: 'Während Engineering und Vertrieb in Europa verankert sind, nutzen wir die globale Größe unseres langjährigen Partners Nantong Sunshine, einem der weltweit größten Graphitlieferanten, um die zuverlässigsten Materialien für unsere Systeme zu beziehen. Ob schlüsselfertige SKID-Lösung für "Plug-and-Play"-Integration oder kundenspezifische Montage vor Ort - wir passen unsere Lieferung an Ihre spezifischen Anlagenanforderungen an.',
    };
  }

  if (locale === 'fr') {
    return {
      title: 'Synthèse HCl',
      p1: 'Lors de la synthèse de l\'acide chlorhydrique, le chlore réagit avec l\'hydrogène [ou l\'eau, selon l\'original] pour former du HCl à des températures supérieures à 1 500°C. Le processus de combustion génère une chaleur importante, qui est ensuite évacuée du système.',
      p2: 'Pour garantir un fonctionnement sûr et fiable du procédé, l\'utilisation d\'équipements en graphite est essentielle. Nos unités en graphite ont été éprouvées sur le terrain dans plus de 100 applications dans le monde.',
      completeLead: 'Systèmes complets incluant l\'ingénierie des procédés :',
      completeText: 'Nous proposons tout, des brûleurs simples et des unités à trois étages aux installations clés en main complètes, incluant l\'ingénierie et la conception complètes du procédé.',
      advantagesTitle: 'Avantages',
      advantages: [
        ['Solution intégrée :', 'Synthèse, absorption et refroidissement au sein d\'une seule unité'],
        ['Efficacité renforcée :', 'Performance optimisée pour les besoins industriels'],
        ['Haute durabilité :', 'Longue durée de vie même en environnement agressif'],
        ['Projets clés en main :', 'Installations complètes disponibles sur demande'],
        ['Intégration fluide :', 'Entièrement compatible avec les installations existantes'],
        ['Fiabilité prouvée :', 'Plus de 100 références réussies'],
      ],
      techTitle: 'Spécifications techniques',
      tech: [
        ['Conception modulaire :', 'Disponible en différentes dimensions et capacités'],
        ['Récupération d\'énergie :', 'Génération de vapeur comme sous-produit précieux'],
        ['Combustion par le bas :', 'Configuration de brûleur optimisée (Bottom-up)'],
        ['Combustion par le haut :', 'Configuration de brûleur bien établie'],
        ['Matériau du brûleur :', 'Quartz, SSiC ou graphite selon les exigences'],
      ],
      globalTitle: 'Ingénierie européenne - Livraison mondiale',
      globalP1: 'En tant que coentreprise européenne, ExtraSys (Suisse) et Deftline (France) fournissent des solutions de procédé haute performance aux clients du monde entier. Nos unités de synthèse HCl représentent le meilleur de l\'ingénierie européenne, alliant conception innovante et exécution de projet fiable.',
      globalP2: 'Alors que l\'ingénierie et les ventes sont ancrées en Europe, nous nous appuyons sur l\'envergure mondiale de notre partenaire de longue date Nantong Sunshine, l\'un des plus grands fournisseurs de graphite au monde, pour sourcer les matériaux les plus fiables pour nos systèmes. Que vous ayez besoin d\'une solution SKID clé en main pour une intégration "plug-and-play" ou d\'un assemblage personnalisé sur site, nous adaptons notre livraison à vos besoins d\'installation spécifiques.',
    };
  }

  return {
    title: 'HCl Synthesis',
    p1: 'In the synthesis of hydrochloric acid, chlorine reacts with hydrogen [or water, per original] to form HCl at temperatures exceeding 1,500°C. The combustion process generates significant heat, which is subsequently removed from the system.',
    p2: 'To guarantee a safe and reliable process flow, the use of graphite equipment is essential. Our graphite units have been field-proven in more than 100 applications worldwide.',
    completeLead: 'Complete Systems including Process Engineering:',
    completeText: 'We offer everything from simple burners and three-stage units to complete turnkey installations, including full process engineering and design.',
    advantagesTitle: 'Advantages',
    advantages: [
      ['Integrated Solution:', 'Synthesis, absorption, and cooling within a single unit'],
      ['Enhanced Efficiency:', 'Optimized performance for industrial demands'],
      ['High Durability:', 'Long service life even in aggressive environments'],
      ['Turnkey Projects:', 'Complete installations available upon request'],
      ['Seamless Integration:', 'Fully compatible with existing plants'],
      ['Proven Track Record:', 'More than 100 successful references'],
    ],
    techTitle: 'Technical Specifications',
    tech: [
      ['Modular Design:', 'Available in various dimensions and scales'],
      ['Energy Recovery:', 'Steam generation as a valuable by-product'],
      ['Bottom-Fired Combustion:', 'Optimized burner configuration (Bottom-up)'],
      ['Top Fired-Combustion:', 'Well-known burner configuration'],
      ['Burner Material:', 'Quartz, SSiC or Graphite depending on the requirements'],
    ],
    globalTitle: 'European Engineering - Global Delivery',
    globalP1: 'As a joint European venture, ExtraSys (Switzerland) and Deftline (France) provide high-performance process solutions for customers worldwide. Our HCl synthesis units represent the best of European engineering, combining innovative design with reliable project execution.',
    globalP2: 'While the engineering and sales are rooted in Europe, we leverage the global scale of our long-term Partner Nantong Sunshine, one of the world\'s largest graphite suppliers, to source the most reliable materials for our systems. Whether you require a turnkey SKID solution for "plug-and-play" integration or a custom on-site assembly, we adapt our delivery to fit your specific plant requirements.',
  };
}

export default async function HclSynthesisPage() {
  const locale = await getLocale();
  const content = getHclContent(locale);

  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 md:p-12" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
                {content.title}
              </h1>

              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  {content.p1}
                </p>
                <p>
                  {content.p2}
                </p>
                <p>
                  <strong className="text-gray-800">{content.completeLead}</strong>{' '}
                  {content.completeText}
                </p>

                <div className="pt-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {content.advantagesTitle}
                  </h2>
                  <ul className="space-y-2 ml-4">
                    {content.advantages.map(([lead, text]) => (
                      <li key={lead}>
                        • <strong className="text-gray-800">{lead}</strong> {text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {content.techTitle}
                  </h2>
                  <ul className="space-y-2 ml-4">
                    {content.tech.map(([lead, text]) => (
                      <li key={lead}>
                        • <strong className="text-gray-800">{lead}</strong> {text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {content.globalTitle}
                  </h2>
                  <p>
                    {content.globalP1}
                  </p>
                  <p>
                    {content.globalP2}
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
