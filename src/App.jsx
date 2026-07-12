import React, { useEffect } from 'react';
import "./App.css"
import { LanguageProvider, useLang } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisionMission from './components/VisionMission';
import OrgChart from './components/OrgChart';
import Hospital from './components/Hospital';
import Programs from './components/Programs';
import Accreditations from './components/Accreditations';
import TrainingCourses from './components/TrainingCourses';
import CommercialReg from './components/CommercialReg';
import AcademyGallery from './components/AcademyGallery';
import Objectives2026 from './components/Objectives2026';
import OngoingServices from './components/OngoingServices';
import Reception from './components/Reception';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function AppContent() {
  const { isAr } = useLang();

  useEffect(() => {
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.documentElement.lang = isAr ? 'ar' : 'en';
  }, [isAr]);

  return (
    <div className={`min-h-screen font-sans ${isAr ? 'font-arabic' : ''}`}>
      <Navbar />
      <main>
        <Hero />
        <VisionMission />
        <OrgChart />
        <Hospital />
        <Programs />
        <Accreditations />
        <TrainingCourses />
        <CommercialReg />
        <AcademyGallery />
        <Objectives2026 />
        <OngoingServices />
        <Reception />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
