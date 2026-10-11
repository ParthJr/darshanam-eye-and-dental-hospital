import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Sparkles, Stethoscope, ArrowRight, CheckCircle2, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HOSPITAL_INFO } from '../config/hospitalInfo';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const DentalCareSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (leftColRef.current && rightColRef.current) {
        gsap.fromTo(
          [leftColRef.current, rightColRef.current],
          { y: 25, opacity: 0 },
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

  const scrollToConsultation = () => {
    const el = document.getElementById('consultation');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="dental-care-details"
      ref={containerRef}
      className="w-full bg-[#FAF9F5] text-[#172426] py-20 lg:py-28 border-b border-[#E7ECEB]"
    >
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16">
        
        {/* Top Header Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E7ECEB]">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <Stethoscope className="w-4 h-4 text-[#8BA8A0]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#8BA8A0]">
                Conservative &amp; Restorative Dental Wing
              </span>
            </div>
            <h2 className="font-bold text-3xl sm:text-4xl uppercase tracking-tight text-[#103A40]">
              Confidence starts with understanding.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#103A40]">
            <span className="bg-[#E2F1F3] px-3 py-1.5 border border-[#8BA8A0]/40 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8BA8A0]" /> Autoclave Sterilization Standards
            </span>
            <span className="bg-[#E2F1F3] px-3 py-1.5 border border-[#8BA8A0]/40 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#C9A66B]" /> Pain-Free Intraoral Diagnostics
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Image Composition & Sanitization Protocol (5 columns) */}
          <div ref={leftColRef} className="lg:col-span-5 relative order-2 lg:order-1 space-y-6">
            <p className="text-base text-[#172426]/85 leading-relaxed font-sans">
              Our oral health approach is rooted in preservation rather than aggressive intervention. We take time to guide patients through digital intraoral scans, empowering informed choices in a relaxing Kudasan clinical studio.
            </p>

            <div className="bg-[#E2F1F3] p-2 border border-[#E7ECEB] shadow-lg overflow-hidden group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvwEuuxwJ5qSkezW3xwHDybfPNNBg8vlz4eoFbU0i6sYA4vS76w0WSuEVvkRIU67wIi0P1JIusENE2q2H_AhDgYmxGnnWp8TWr1WzStzDPHM_8Ryqmq-mZHTKYHzNkM8s0OBqXyGuMeEd8i8iTBegPO8EinMC0bz2ecU24Z-926d294I3hL_EKO91jVnev4nhB_wwlc-nNcrFRSyddbzlm_9T8WXDuV51w54NvibsILHbeImqtZUsFmw"
                alt="Modern Japanese-inspired dental operatory at Darshanam Hospital Kudasan"
                className="w-full h-80 object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Architectural Sanitization Accent Card */}
            <div className="p-5 bg-[#E2F1F3] border-l-4 border-[#8BA8A0] border-t border-r border-b border-[#E7ECEB] flex items-center justify-between shadow-sm">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#8BA8A0]">
                  Sanitization Protocol
                </p>
                <p className="text-sm font-bold text-[#103A40] mt-0.5">
                  Strict 4-Step Medical Sterilization Standards
                </p>
              </div>
              <ShieldCheck className="w-8 h-8 text-[#8BA8A0] shrink-0" />
            </div>

            <button
              onClick={scrollToConsultation}
              className="w-full bg-[#103A40] hover:bg-[#172426] text-[#FAF9F5] text-xs font-bold uppercase tracking-wider py-4 transition-all duration-300 border-b-2 border-[#8BA8A0] flex items-center justify-center gap-2"
            >
              <span>Book a Dental Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Complete 5 Dental Protocols (7 columns) */}
          <div ref={rightColRef} className="lg:col-span-7 flex flex-col order-1 lg:order-2">
            <div className="divide-y divide-[#8BA8A0]/30 bg-[#E2F1F3]/40 border border-[#8BA8A0]/30">
              {HOSPITAL_INFO.dentalServices.map((service) => (
                <div
                  key={service.id}
                  className="p-5 group hover:bg-[#E2F1F3] transition-all duration-200 border-l-2 border-transparent hover:border-[#8BA8A0]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#8BA8A0]">
                          {service.code}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#103A40] bg-[#FAF9F5] px-2 py-0.5 border border-[#8BA8A0]/40">
                          {service.tag}
                        </span>
                      </div>

                      <h3 className="font-bold text-lg text-[#103A40] mb-1.5 group-hover:text-[#8BA8A0] transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-sm text-[#172426]/80 leading-relaxed font-sans">
                        {service.description}
                      </p>
                    </div>

                    <div className="shrink-0 pt-1">
                      <button
                        onClick={scrollToConsultation}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#103A40] bg-[#FAF9F5] hover:bg-[#103A40] hover:text-[#FAF9F5] px-3.5 py-1.5 border border-[#8BA8A0]/40 transition-colors"
                      >
                        <span>Select</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
