import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { AOSInit } from '@/components/aos-init';

export default function PilotPage() {
  return (
    <>
      <AOSInit />
      <main className="min-h-screen">
        <Navigation />
        
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Pilot Plant
              </h1>
              <p className="text-gray-600 text-xl mt-8">
                This page is still in the making.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

