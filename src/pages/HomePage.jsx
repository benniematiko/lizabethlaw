import React from 'react';
import { Hero } from '../components/Hero';
import { PracticeAreas } from '../components/PracticeAreas';
import { Stats } from '../components/Stats';
import  LegalServicesSection  from '../components/LegalServicesSection';
import  WeAreHereToHelpSection  from '../components/WeAreHereToHelpSection';
import AttorneysSection from '../components/AttorneysSection';
import TestimonialsSection from '../components/TestmonialsSection';
import ContactCTASection from '../components/ContactCTASection';
import WhyUs from '../components/WhyUs';
 
const HomePage = () => (
  <>
    <Hero />
    <TestimonialsSection />
    {/* <PracticeAreas /> */}
    <LegalServicesSection />
    {/* <Stats /> */}
    <WeAreHereToHelpSection />
    <WhyUs />
    <AttorneysSection />
    <ContactCTASection />
  </>
);

export default HomePage;
