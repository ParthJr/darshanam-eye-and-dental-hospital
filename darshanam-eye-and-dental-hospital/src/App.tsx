import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SpecialtyOverview } from './components/SpecialtyOverview';
import { EyeCareSection } from './components/EyeCareSection';
import { DentalCareSection } from './components/DentalCareSection';
import { PatientJourney } from './components/PatientJourney';
import { ReviewsSection } from './components/ReviewsSection';
import { AppointmentForm } from './components/AppointmentForm';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#172426] flex flex-col font-sans antialiased selection:bg-[#C9A66B] selection:text-[#103A40]">
      {/* 1. Header Navigation */}
      <Header />

      <main className="flex-1 w-full">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Specialty Overview */}
        <SpecialtyOverview />

        {/* 4. Eye Care Department */}
        <EyeCareSection />

        {/* 5. Dental Care Department */}
        <DentalCareSection />

        {/* 6. Patient Journey */}
        <PatientJourney />

        {/* 7. Google Reviews & Trust */}
        <ReviewsSection />

        {/* 8. Appointment Intake Form */}
        <AppointmentForm />

        {/* 9. Location & Contact */}
        <LocationSection />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
