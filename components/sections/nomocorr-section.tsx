'use client';

import { Card } from '@/components/ui/card';

export function NoMoCorrSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          <Card className="p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                NoMoCorr@ INOVATIVE SILICONE CARBIDE MATERIAL.
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                This section will contain detailed information about the NoMoCorr
                innovative silicone carbide material.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

