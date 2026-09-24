import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HeroSection } from '../components/home/HeroSection';
import { QuickInfoBar } from '../components/home/QuickInfoBar';
import { FleetSection } from '../components/home/FleetSection';
import { TripCalculator } from '../components/home/TripCalculator';
import { RequirementsSection } from '../components/home/RequirementsSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { HowItWorks } from '../components/home/HowItWorks';
import { FAQSection } from '../components/home/FAQSection';
import { ContactSection } from '../components/home/ContactSection';
import { BUSINESS_INFO } from '../data/fleet';

export const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{BUSINESS_INFO.name} | Self-Drive Car Rental in Surat (24h Rental • 350 KM Limit)</title>
        <meta
          name="description"
          content="Rent self-drive cars in Surat with WROOM CAR RENTAL. 24-Hour Rental with 350 KM Included. Hatchbacks, CNG sedans, family 7-seaters, and luxury BMW. Call +91 8980944981."
        />
        <link rel="canonical" href="https://wroomcarrental.com/" />
      </Helmet>

      <main>
        <HeroSection />
        <QuickInfoBar />
        <FleetSection />
        <TripCalculator />
        <WhyChooseUs />
        <HowItWorks />
        <RequirementsSection />
        <FAQSection />
        <ContactSection />
      </main>
    </>
  );
};
