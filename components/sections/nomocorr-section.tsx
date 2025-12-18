'use client';

import { Card } from '@/components/ui/card';

export function NoMoCorrSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          <Card className="p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                SIC – THE UNIVERSAL ANTI CORROSION MATERIAL
              </h2>
              <div className="text-gray-600 text-lg max-w-4xl mx-auto text-left space-y-6">
                <p>
                  Our SIC Products are manufactured from pure directly sintered a SIC, the so called SSiC. They do no longer contain free Silicone, which may reduce the chemical resistance. SIC offers a nearly universal chemical resistance, highest thermal conductivity. Extreme surface hardness allows protection against abrasion and results in high flow rates with increased thermal efficiency. Like hardly any other corrosion resistant material, SSiC is excellently suited for extreme high temperature applications.
                </p>
                <p>
                  SIC is used as a material of choice for the following components for high temperatures. Most of them are innovatively designed in detail or generally by Wilk Graphite for the use in severe applications.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  <ul className="space-y-2 text-base">
                    <li>• Universal Chemical resistance</li>
                    <li>• Highest thermal conductivity</li>
                    <li>• No abrasion</li>
                    <li>• No contamination</li>
                    <li>• Extremely hard ceramic</li>
                    <li>• Low wall thickness</li>
                    <li>• Low fouling rates</li>
                    <li>• High velocities</li>
                    <li>• High thermal shock resistance</li>
                  </ul>
                  <ul className="space-y-2 text-base">
                    <li>• Many designs possible</li>
                    <li>• High temperature resistance</li>
                    <li>• Low surface roughness</li>
                    <li>• No aging / no fatigue</li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">KEY PROPERTIES</h3>
                  <ul className="space-y-2 text-base text-left max-w-2xl mx-auto">
                    <li>• Density &gt; 3 120 kg/m³</li>
                    <li>• Thermal conductivity: 130 W/(m.K)</li>
                    <li>• Heat exchanger up to 450 °C and 40 barg</li>
                    <li>• Separators</li>
                    <li>• Pipes</li>
                    <li>• Compensator</li>
                    <li>• Thermowells</li>
                    <li>• Columns</li>
                    <li>• Vickers hardness: 19,2 GPa (500g load) &gt; Tensile Strength: 210 Mpa</li>
                    <li>• Young's modulus: 420 GPa</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

