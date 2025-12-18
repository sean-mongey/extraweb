import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { AOSInit } from '@/components/aos-init';
import { Card } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <>
      <AOSInit />
      <main className="min-h-screen">
        <Navigation />
        
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                About Us
              </h1>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12" data-aos="fade-up">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    ExtrAsys
                  </h2>
                </div>

                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Extrasys was set up to bring the ExtrAcid® and ExtrAlkali® systems onto the market. The company brings together the experience of 30 years in the chemical industry with materials such as graphite, silicone carbide and PTFE.
                  </p>

                  <p>
                    These years of experience have also highlighted the gaps and limitations of today's technology. With the ExtrAcid® and ExtrAlkali® systems, the limits of today's technology in the recycling of waste acid and soda are being redefined.
                  </p>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-gray-600 mb-4">
                      Extasys is located in Switzerland with offices in France, Germany, China and India.
                    </p>
                    <p className="text-gray-600">
                      At our pilot plant in France all possible processes can be tested / demonstrated.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

