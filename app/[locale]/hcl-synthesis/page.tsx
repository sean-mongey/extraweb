import { Card } from '@/components/ui/card';

export default function HclSynthesisPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 md:p-12" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
                HCl Synthesis
              </h1>

              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  In the synthesis of hydrochloric acid, chlorine reacts with hydrogen [or water, per
                  original] to form HCl at temperatures exceeding 1,500°C. The combustion process
                  generates significant heat, which is subsequently removed from the system.
                </p>
                <p>
                  To guarantee a safe and reliable process flow, the use of graphite equipment is
                  essential. Our graphite units have been field-proven in more than 100 applications
                  worldwide.
                </p>
                <p>
                  <strong className="text-gray-800">Complete Systems including Process Engineering:</strong>{' '}
                  We offer everything from simple burners and three-stage units to complete turnkey
                  installations, including full process engineering and design.
                </p>

                <div className="pt-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Advantages
                  </h2>
                  <ul className="space-y-2 ml-4">
                    <li>
                      • <strong className="text-gray-800">Integrated Solution:</strong> Synthesis,
                      absorption, and cooling within a single unit
                    </li>
                    <li>
                      • <strong className="text-gray-800">Enhanced Efficiency:</strong> Optimized
                      performance for industrial demands
                    </li>
                    <li>
                      • <strong className="text-gray-800">High Durability:</strong> Long service life
                      even in aggressive environments
                    </li>
                    <li>
                      • <strong className="text-gray-800">Turnkey Projects:</strong> Complete
                      installations available upon request
                    </li>
                    <li>
                      • <strong className="text-gray-800">Seamless Integration:</strong> Fully
                      compatible with existing plants
                    </li>
                    <li>
                      • <strong className="text-gray-800">Proven Track Record:</strong> More than 100
                      successful references
                    </li>
                  </ul>
                </div>

                <div className="pt-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Technical Specifications
                  </h2>
                  <ul className="space-y-2 ml-4">
                    <li>
                      • <strong className="text-gray-800">Modular Design:</strong> Available in
                      various dimensions and scales
                    </li>
                    <li>
                      • <strong className="text-gray-800">Energy Recovery:</strong> Steam generation
                      as a valuable by-product
                    </li>
                    <li>
                      • <strong className="text-gray-800">Bottom-Fired Combustion:</strong> Optimized
                      burner configuration (Bottom-up)
                    </li>
                    <li>
                      • <strong className="text-gray-800">Top Fired-Combustion:</strong> Well-known
                      burner configuration
                    </li>
                    <li>
                      • <strong className="text-gray-800">Burner Material:</strong> Quartz, SSiC or
                      Graphite depending on the requirements
                    </li>
                  </ul>
                </div>

                <div className="pt-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    European Engineering - Global Delivery
                  </h2>
                  <p>
                    As a joint European venture, <strong className="text-gray-800">ExtraSys (Switzerland)</strong> and{' '}
                    <strong className="text-gray-800">Deftline (France)</strong> provide high-performance process
                    solutions for customers worldwide. Our HCl synthesis units represent the best of
                    European engineering, combining innovative design with reliable project execution.
                  </p>
                  <p>
                    While the engineering and sales are rooted in Europe, we leverage the global scale
                    of our long-term Partner Nantong Sunshine, one of the world's largest graphite
                    suppliers, to source the most reliable materials for our systems. Whether you
                    require a turnkey <strong className="text-gray-800">SKID solution</strong> for "plug-and-play"
                    integration or a <strong className="text-gray-800">custom on-site assembly</strong>, we adapt
                    our delivery to fit your specific plant requirements.
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
