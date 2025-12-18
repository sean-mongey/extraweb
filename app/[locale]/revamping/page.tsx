import { Card } from '@/components/ui/card';

export default function RevampingPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                ExtrAlkali® Revamping
              </h1>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Patented revamping module for NaOH & KOH concentration unit by Chem-Eng SASU and Wilk Graphite GmbH
              </p>
            </div>

            <div className="space-y-8">
              {/* Introduction */}
              <Card className="p-8 md:p-12" data-aos="fade-up">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    About ExtrAlkali®
                  </h2>
                  <p className="text-gray-600 text-lg">
                    ExtrAlkali® is a brand born from fruitful collaboration of two internationally renowned companies
                  </p>
                </div>
                <div className="mt-6">
                  <p className="text-gray-600 mb-4">
                    A brand for process solutions for the chlor-alkali industry such as:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Caustic evaporation / flaking plant</li>
                    <li>Sulfuric acid concentration plant</li>
                    <li>HCl synthesis plant</li>
                    <li>Calcium chloride production plant</li>
                  </ul>
                </div>
              </Card>

              {/* Tailor Made Plant */}
              <Card className="p-8 md:p-12" data-aos="fade-up" data-aos-delay="100">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Tailor Made Plant
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li>• No standard concept – designed according to given situation using modules</li>
                  <li>• According to available utilities on site (cooling water, steam, etc.)</li>
                  <li>• Optimizing OPEX according energy prices (gas, steam, etc.)</li>
                  <li>• CAPEX consideration</li>
                </ul>
              </Card>

              {/* Revamping Module */}
              <Card className="p-8 md:p-12" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Revamping Module
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-2xl font-bold text-blue-600 mr-4">1</span>
                    <p className="text-gray-600 flex-1">
                      Typical revamping: upgrade from a double or triple effect system to a quadruple effect system
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl font-bold text-blue-600 mr-4">2</span>
                    <p className="text-gray-600 flex-1">
                      By high temperature only use of SIC equipment to grant an excellent product quality (more or less no Ni pick up) and a long life of all equipment.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl font-bold text-blue-600 mr-4">3</span>
                    <p className="text-gray-600 flex-1">
                      Up to 5 effects available to reduce energy consumptions / CO₂ emissions
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl font-bold text-blue-600 mr-4">4</span>
                    <p className="text-gray-600 flex-1">
                      ExtrAlkali is the only brand offering such plant concept.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Revamping Benefits */}
              <Card className="p-8 md:p-12" data-aos="fade-up" data-aos-delay="300">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Revamping Benefits
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-2xl font-bold text-blue-600 mr-4">1</span>
                    <p className="text-gray-600 flex-1">
                      Possibility to revamp existing double effects or triple effects evaporation to a quadruple effects system (very low space requirement)
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl font-bold text-blue-600 mr-4">2</span>
                    <p className="text-gray-600 flex-1">
                      Payback less than two years even considering an additional thermal oil heating system
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl font-bold text-blue-600 mr-4">3</span>
                    <p className="text-gray-600 flex-1">
                      Attractive concept especially in country with high energy costs and CO₂ emission taxes
                    </p>
                  </div>
                </div>
              </Card>

              {/* Installation Options */}
              <Card className="p-8 md:p-12" data-aos="fade-up" data-aos-delay="400">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Installation Options
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-2xl font-bold text-blue-600 mr-4">1</span>
                    <p className="text-gray-600 flex-1">
                      Additional effect can be delivered SKID mounted and be installed next to the existing evaporation unit
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl font-bold text-blue-600 mr-4">2</span>
                    <p className="text-gray-600 flex-1">
                      Additional effect can be installed in the existing building (if space available)
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl font-bold text-blue-600 mr-4">3</span>
                    <p className="text-gray-600 flex-1">
                      Thermal oil heating unit is required
                    </p>
                  </div>
                </div>
              </Card>

              {/* Energy Savings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="500">
                <Card className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Energy Savings</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="text-3xl font-bold text-blue-600">-22%</p>
                    <p>Energy reduction for triple to quadruple effect upgrade</p>
                  </div>
                </Card>
                <Card className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Energy Savings</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="text-3xl font-bold text-blue-600">-48%</p>
                    <p>Energy reduction for double to quadruple effect upgrade</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}

