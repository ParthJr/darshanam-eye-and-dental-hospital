import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Eye, Stethoscope } from 'lucide-react';
import { HOSPITAL_INFO } from '../config/hospitalInfo';

interface HeaderProps {
  onOpenConsultation?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-[#FAF9F5] border-b border-[#E7ECEB] transition-all duration-300 ${
        isScrolled ? 'h-16 shadow-md' : 'h-20'
      }`}
      id="main-header"
    >
      <div className="max-w-[1440px] h-full mx-auto px-5 lg:px-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-9 h-9 bg-[#103A40] text-[#FAF9F5] flex items-center justify-center font-bold text-lg border border-[#C9A66B]/40 group-hover:bg-[#172426] transition-colors">
            D
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-[#103A40] uppercase tracking-tight leading-none font-sans">
              Darshanam
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#8BA8A0] mt-0.5">
              Eye &amp; Dental Hospital
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden xl:flex items-center gap-8"
          aria-label="Main Navigation"
        >
          <button
            onClick={() => scrollToSection('home')}
            className="text-xs font-semibold uppercase tracking-widest text-[#103A40] hover:text-[#C9A66B] py-1 border-b-2 border-[#C9A66B] transition-colors focus:outline-none"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('specialties')}
            className="text-xs font-semibold uppercase tracking-widest text-[#172426]/70 hover:text-[#103A40] py-1 border-b-2 border-transparent hover:border-[#103A40] transition-colors focus:outline-none"
          >
            Specialties
          </button>
          <button
            onClick={() => scrollToSection('eye-care-details')}
            className="text-xs font-semibold uppercase tracking-widest text-[#172426]/70 hover:text-[#103A40] py-1 border-b-2 border-transparent hover:border-[#103A40] transition-colors focus:outline-none flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-[#103A40]" /> Eye Care
          </button>
          <button
            onClick={() => scrollToSection('dental-care-details')}
            className="text-xs font-semibold uppercase tracking-widest text-[#172426]/70 hover:text-[#103A40] py-1 border-b-2 border-transparent hover:border-[#103A40] transition-colors focus:outline-none flex items-center gap-1.5"
          >
            <Stethoscope className="w-3.5 h-3.5 text-[#8BA8A0]" /> Dental Care
          </button>
          <button
            onClick={() => scrollToSection('patient-journey')}
            className="text-xs font-semibold uppercase tracking-widest text-[#172426]/70 hover:text-[#103A40] py-1 border-b-2 border-transparent hover:border-[#103A40] transition-colors focus:outline-none"
          >
            Patient Journey
          </button>
          <button
            onClick={() => scrollToSection('location')}
            className="text-xs font-semibold uppercase tracking-widest text-[#172426]/70 hover:text-[#103A40] py-1 border-b-2 border-transparent hover:border-[#103A40] transition-colors focus:outline-none"
          >
            Location
          </button>
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${HOSPITAL_INFO.phone.raw}`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#103A40] hover:text-[#C9A66B] px-3 py-2 transition-colors border border-transparent hover:border-[#E7ECEB]"
            title="Call Hospital Directly"
          >
            <Phone className="w-3.5 h-3.5 text-[#C9A66B]" />
            <span>{HOSPITAL_INFO.phone.display}</span>
          </a>
          <button
            onClick={() => scrollToSection('consultation')}
            className="bg-[#103A40] hover:bg-[#172426] text-[#FAF9F5] text-xs font-semibold uppercase tracking-wider px-5 py-3 border-b-2 border-[#C9A66B] transition-all flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C9A66B]" />
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden p-2 text-[#103A40] hover:bg-[#E7ECEB] focus:outline-none"
          aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          className="xl:hidden fixed inset-x-0 top-[64px] bg-[#FAF9F5] border-b border-[#E7ECEB] p-6 shadow-xl z-50 animate-fadeIn"
          id="mobile-drawer"
        >
          <nav className="flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left font-semibold text-sm uppercase tracking-wider py-2 border-b border-[#E7ECEB] text-[#103A40]"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('specialties')}
              className="text-left font-semibold text-sm uppercase tracking-wider py-2 border-b border-[#E7ECEB] text-[#172426]"
            >
              Our Specialties
            </button>
            <button
              onClick={() => scrollToSection('eye-care-details')}
              className="text-left font-semibold text-sm uppercase tracking-wider py-2 border-b border-[#E7ECEB] text-[#172426] flex items-center justify-between"
            >
              <span>Eye Care Department</span>
              <Eye className="w-4 h-4 text-[#103A40]" />
            </button>
            <button
              onClick={() => scrollToSection('dental-care-details')}
              className="text-left font-semibold text-sm uppercase tracking-wider py-2 border-b border-[#E7ECEB] text-[#172426] flex items-center justify-between"
            >
              <span>Dental Care Department</span>
              <Stethoscope className="w-4 h-4 text-[#8BA8A0]" />
            </button>
            <button
              onClick={() => scrollToSection('patient-journey')}
              className="text-left font-semibold text-sm uppercase tracking-wider py-2 border-b border-[#E7ECEB] text-[#172426]"
            >
              Patient Journey
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-left font-semibold text-sm uppercase tracking-wider py-2 border-b border-[#E7ECEB] text-[#172426]"
            >
              Location &amp; Contact
            </button>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`tel:${HOSPITAL_INFO.phone.raw}`}
                className="w-full text-center py-3 bg-[#E7ECEB] text-[#103A40] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C9A66B]" />
                <span>Call {HOSPITAL_INFO.phone.display}</span>
              </a>
              <button
                onClick={() => scrollToSection('consultation')}
                className="w-full text-center py-3.5 bg-[#103A40] text-[#FAF9F5] font-bold text-xs uppercase tracking-wider border-b-2 border-[#C9A66B]"
              >
                Book a Consultation
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
