import React, { useState } from 'react';
import { Phone, MapPin, Clock, Eye, Stethoscope } from 'lucide-react';
import { HOSPITAL_INFO } from '../config/hospitalInfo';
import { PrivacyModal } from './PrivacyModal';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#103A40] text-[#FAF9F5] border-t border-[#C9A66B]/20">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand & Identity Column */}
          <div className="flex flex-col">
            <span className="font-bold text-xl uppercase tracking-tight text-[#FAF9F5]">
              {HOSPITAL_INFO.name}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#C9A66B] mt-1">
              Kudasan · Gandhinagar
            </span>
            <p className="font-serif-quote italic text-lg text-[#C9A66B] mt-4">
              {HOSPITAL_INFO.editorialQuote}
            </p>
            <p className="text-xs text-[#FAF9F5]/70 mt-3 leading-relaxed font-sans">
              Dual-discipline surgical excellence delivered with architectural precision and dignified clinical hospitality in Gandhinagar.
            </p>
          </div>

          {/* Eye Care Services Column */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C9A66B] pb-2 border-b border-[#C9A66B]/25 flex items-center gap-2">
              <Eye className="w-3.5 h-3.5" />
              <span>Eye Care Services</span>
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-xs text-[#FAF9F5]/80 font-sans">
              {HOSPITAL_INFO.eyeServices.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => scrollToSection('eye-care-details')}
                    className="hover:text-[#C9A66B] transition-colors text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Dental Care Services Column */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C9A66B] pb-2 border-b border-[#C9A66B]/25 flex items-center gap-2">
              <Stethoscope className="w-3.5 h-3.5 text-[#8BA8A0]" />
              <span>Dental Care Services</span>
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-xs text-[#FAF9F5]/80 font-sans">
              {HOSPITAL_INFO.dentalServices.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => scrollToSection('dental-care-details')}
                    className="hover:text-[#C9A66B] transition-colors text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hospital Location Column */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C9A66B] pb-2 border-b border-[#C9A66B]/25">
              Hospital Location
            </h3>
            <address className="not-italic mt-4 flex flex-col gap-2.5 text-xs text-[#FAF9F5]/80 font-sans leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C9A66B] shrink-0 mt-0.5" />
                <span>{HOSPITAL_INFO.address.fullFormatted}</span>
              </p>
              <p className="flex items-center gap-2 mt-1">
                <Phone className="w-4 h-4 text-[#C9A66B] shrink-0" />
                <span>
                  Phone:{' '}
                  <a
                    href={`tel:${HOSPITAL_INFO.phone.raw}`}
                    className="text-[#FAF9F5] font-bold hover:text-[#C9A66B] transition-colors"
                  >
                    {HOSPITAL_INFO.phone.display}
                  </a>
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C9A66B] shrink-0" />
                <span>OPD Hours: Mon – Sat, 09:30 AM – 08:00 PM</span>
              </p>
            </address>
          </div>

        </div>

        {/* Copyright & Legal Links */}
        <div className="mt-12 pt-6 border-t border-[#C9A66B]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FAF9F5]/70 font-sans">
          <p>© 2026 {HOSPITAL_INFO.name}. Kudasan, Gandhinagar. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider font-semibold">
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-[#C9A66B] transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-[#C9A66B]/40">•</span>
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-[#C9A66B] transition-colors"
            >
              Terms of Use
            </button>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="mt-6 pt-4 text-center border-t border-[#C9A66B]/10">
          <p className="text-[11px] text-[#FAF9F5]/60 leading-normal font-sans">
            Medical Disclaimer: The clinical information presented on this portal is strictly for educational guidance and does not constitute formal medical diagnosis or surgical prescription without an in-person consultation.
          </p>
        </div>

      </div>

      {/* Privacy and Terms Modal */}
      <PrivacyModal
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        type={modalType || 'privacy'}
      />
    </footer>
  );
};
