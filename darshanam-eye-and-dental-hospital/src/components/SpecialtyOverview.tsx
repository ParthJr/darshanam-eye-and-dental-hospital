import React, { useEffect, useRef } from 'react';
import { Eye, Stethoscope, ArrowRight, ShieldCheck, Award, HeartHandshake } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const SpecialtyOverview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardEyeRef = useRef<HTMLDivElement>(null);
  const cardDentalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (cardEyeRef.current && cardDentalRef.current) {
        gsap.fromTo(
          [cardEyeRef.current, cardDentalRef.current],
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out',
            clearProps: 'all',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="specialties"
      ref={containerRef}
      className="w-full bg-[#FAF9F5] text-[#172426] py-20 lg:py-28 border-b border-[#E7ECEB]"
    >
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16">
        
        {/* Section Header with Clinical Narrative & Stats */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-[#E7ECEB]">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#C9A66B] block mb-2">
              Comprehensive Clinical Architecture
            </span>
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#103A40] mb-3">
              Two Specialties. One Commitment to Care.
            </h2>
            <p className="font-serif-quote italic text-xl text-[#C9A66B] leading-relaxed">
              Bespoke ophthalmic diagnostics harmonized with advanced restorative dental architecture.
            </p>
          </div>

          {/* Quick Pillar Badges */}
          <div className="flex flex-wrap gap-3 text-xs font-bold uppercase tracking-wider text-[#103A40] shrink-0">
            <div className="bg-[#E2F1F3] px-4 py-2 border border-[#8BA8A0]/30 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C9A66B]" />
              <span>Unified Kudasan Facility</span>
            </div>
            <div className="bg-[#E2F1F3] px-4 py-2 border border-[#8BA8A0]/30 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#8BA8A0]" />
              <span>4.9★ Rated Experience</span>
            </div>
          </div>
        </div>

        {/* Specialty Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Eye Care Panel (Midnight Teal Theme) */}
          <div
            ref={cardEyeRef}
            className="bg-[#103A40] text-[#FAF9F5] p-8 lg:p-12 flex flex-col justify-between border-t-2 border-[#C9A66B] hover:shadow-2xl transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#C9A66B]" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#C9A66B]">
                    Specialty 01 · Ophthalmic Wing
                  </span>
                </div>
                <Eye className="w-8 h-8 text-[#C9A66B]" />
              </div>

              <div className="w-full h-64 mb-6 overflow-hidden bg-[#0D3035] relative border border-[#C9A66B]/20">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLz3EKsjWw0ZLNmhQXliWrWMNlKhV4EKgPARg03qS49K9FivnHHTwKulVPuwNW-0JkKg8g0JBfuMUVHn76fYS3DkXZJ1zAfYCziDayDZIPXMOioFlijLplcvBJHdx-S1ImQ-yHLbP9Ht_jAsauj7kh6r4bzRpOYRvdT5s8XkPh8u0AcNTxmCfzoJEMgda3y9I8LoINg2wcHhBivGyZV7pPUtBjsvhxwo7UW_SQbQUJlM1PqU3L1RIGzQ"
                  alt="Ophthalmic Care and Diagnostic Suite at Darshanam Hospital Kudasan"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <h3 className="font-bold text-xl sm:text-2xl uppercase tracking-tight mb-3 text-[#FAF9F5]">
                Ophthalmic Care &amp; Vision Health
              </h3>

              <p className="text-sm text-[#FAF9F5]/85 leading-relaxed mb-6 font-sans">
                From advanced microscopic cataract evaluations to chronic dry-eye mapping and comprehensive glaucoma diagnostics, our Gandhinagar department safeguards your sight with high-definition diagnostic instruments.
              </p>

              {/* Service Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-[#0D3035] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#C9A66B] border border-[#C9A66B]/30">
                  Cataract Evaluation
                </span>
                <span className="bg-[#0D3035] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#C9A66B] border border-[#C9A66B]/30">
                  Dry-Eye Clinic
                </span>
                <span className="bg-[#0D3035] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#C9A66B] border border-[#C9A66B]/30">
                  Glaucoma Screening
                </span>
                <span className="bg-[#0D3035] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#C9A66B] border border-[#C9A66B]/30">
                  Retinal Analysis
                </span>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('eye-care-details')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C9A66B] hover:text-[#FAF9F5] transition-colors pt-4 border-t border-[#C9A66B]/20 text-left"
            >
              <span>Explore Eye Care Specializations</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Dental Care Panel (Porcelain / Sage Theme) */}
          <div
            ref={cardDentalRef}
            className="bg-[#E2F1F3] text-[#172426] p-8 lg:p-12 flex flex-col justify-between border-t-2 border-[#8BA8A0] hover:shadow-2xl transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8BA8A0]" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#8BA8A0]">
                    Specialty 02 · Dental Wing
                  </span>
                </div>
                <Stethoscope className="w-8 h-8 text-[#8BA8A0]" />
              </div>

              <div className="w-full h-64 mb-6 overflow-hidden bg-[#E7ECEB] relative border border-[#8BA8A0]/30">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_jx9PrbzfRTE4JVAsbDI8fVVXjyHpBd852Ujm-xI-5pP26d-xAutO85HDSYW-wD5eyt2LQE8XfPFhhH6RpgSJPum6WWfv42e2q95wqEjNqdWTuUcNJZleSjDxys1jVPcD_0RJesNv1-JrYgAEqLmCb8XGrhNTN6u5QNTpNgTBNIFJsPrXPToOEe2EQfwln450B1xX2SjR_bY8f3cWSDhBJ1PcFR9yITnhYmOp6jbDyqavUYDBJRHsGw"
                  alt="Comprehensive Dental Wellness Studio at Darshanam Hospital Kudasan"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <h3 className="font-bold text-xl sm:text-2xl uppercase tracking-tight mb-3 text-[#103A40]">
                Comprehensive Dental Wellness
              </h3>

              <p className="text-sm text-[#172426]/85 leading-relaxed mb-6 font-sans">
                We provide calm, dignified general and restorative dental therapies. Designed around oral hygiene preservation, structural aesthetic rehabilitation, and gentle, anxiety-free patient experiences.
              </p>

              {/* Service Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-[#FAF9F5] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#103A40] border border-[#8BA8A0]/40">
                  Preventive Care
                </span>
                <span className="bg-[#FAF9F5] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#103A40] border border-[#8BA8A0]/40">
                  Aesthetic Bonding
                </span>
                <span className="bg-[#FAF9F5] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#103A40] border border-[#8BA8A0]/40">
                  Crown &amp; Bridges
                </span>
                <span className="bg-[#FAF9F5] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#103A40] border border-[#8BA8A0]/40">
                  Root Canal Guidance
                </span>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('dental-care-details')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#103A40] hover:text-[#C9A66B] transition-colors pt-4 border-t border-[#8BA8A0]/30 text-left"
            >
              <span>Explore Dental Care Protocols</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
