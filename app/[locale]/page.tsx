import { HeroSection } from '@/components/sections/hero-section';
import { ProcessSection } from '@/components/sections/process-section';
import { ComparisonTable } from '@/components/sections/comparison-table';
import { NoMoCorrSection } from '@/components/sections/nomocorr-section';
import { AOSInit } from '@/components/aos-init';

export default function Home() {
  return (
    <>
      <AOSInit />
      <main className="min-h-screen">
        <HeroSection />
        <ProcessSection />
        <ComparisonTable />
        <NoMoCorrSection />
      </main>
    </>
  );
}
