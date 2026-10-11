import React, { useEffect, useRef } from 'react';
import { ArrowRight, Phone, Eye, ShieldAlert, CheckCircle, Activity, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HOSPITAL_INFO } from '../config/hospitalInfo';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const EyeCareSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (rowsRef.current && rowsRef.current.children.length > 0) {
        gsap.fromTo(
          Array.from(rowsRef.current.children),
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.6,
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
      id="eye-care-details"
      ref={containerRef}
      className="w-full bg-[#103A40] text-[#FAF9F5] py-20 lg:py-28 relative border-b border-[#C9A66B]/20"
    >
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16">
        
        {/* Top Header Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#C9A66B]/20">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <Eye className="w-4 h-4 text-[#C9A66B]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C9A66B]">
                Clinical Ophthalmology Wing
              </span>
            </div>
            <h2 className="font-bold text-3xl sm:text-4xl uppercase tracking-tight text-[#FAF9F5]">
              Look closer at your eye health.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#C9A66B]">
            <span className="bg-[#0D3035] px-3 py-1.5 border border-[#C9A66B]/30 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5" /> High-Resolution OCT Scans
            </span>
            <span className="bg-[#0D3035] px-3 py-1.5 border border-[#C9A66B]/30 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#8BA8A0]" /> Daycare Micro-Incision Surgery
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative & Visual (5 columns) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <p className="text-base text-[#FAF9F5]/85 leading-relaxed font-sans">
              Our diagnostic wing utilizes advanced ophthalmic imaging to pinpoint anterior and posterior chamber conditions with microscopic precision, serving Gandhinagar families with absolute integrity.
            </p>

            {/* Feature Image Frame */}
            <div className="relative bg-[#0D3035] p-2 border border-[#C9A66B]/30 shadow-xl group overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKl1Re3RCqW8BEsrN-nGn6pit69CfupPb071BwhUTdQ1HvFo0uAGUwAx6RuqtIXCnDSGd5joP43HlRAIO9Dej1MQ3rwxkLEtZfySKkVM9hwEYA5GlWI0NyOHB8A44pqQM_r6anfBiikUmdqTp6aDgS5NpcgzHaFHuQO0dWFxdzgw8n7ltWhiv5-ZJlPdemlRLEIWyB2w-qaIqiJgcdA6074oFjLQ_VuyuGsNN609x1px2B01voT-bOcQ"
                alt="Ophthalmologist examining patient with slit-lamp microscope at Darshanam Hospital Kudasan"
                className="w-full h-80 object-cover object-center filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#103A40]/95 p-3 text-[#C9A66B] text-xs font-bold tracking-wider uppercase border-l-2 border-[#C9A66B] flex items-center justify-between">
                <span>Slit-Lamp Microscopy • Retina Scans</span>
                <Sparkles className="w-4 h-4 text-[#C9A66B]" />
              </div>
            </div>

            {/* Clinical Commitment Card */}
            <div className="p-5 bg-[#0D3035] border border-[#C9A66B]/20 text-xs text-[#FAF9F5]/80 space-y-2">
              <p className="font-bold text-[#C9A66B] uppercase tracking-wider">
                Comprehensive OPD Eye Care Protocols
              </p>
              <p className="leading-relaxed">
                Whether undergoing routine vision correction or evaluating cataract surgical options, every patient receives dedicated slit-lamp examination and unhurried clinical counseling.
              </p>
            </div>
          </div>

          {/* Right Column: Procedure List (7 columns) */}
          <div className="lg:col-span-7 flex flex-col">
            <div ref={rowsRef} className="divide-y divide-[#C9A66B]/20 bg-[#0D3035]/40 border border-[#C9A66B]/20">
              {HOSPITAL_INFO.eyeServices.map((service) => (
                <div
                  key={service.id}
                  className="p-6 group hover:bg-[#0D3035] transition-all duration-200 border-l-2 border-transparent hover:border-[#C9A66B]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#C9A66B]">
                          {service.code}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#8BA8A0] bg-[#103A40] px-2 py-0.5 border border-[#8BA8A0]/30">
                          {service.tag}
                        </span>
                        {service.isEmergency && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-red-300 bg-red-950/80 px-2 py-0.5 border border-red-500/40">
                            <ShieldAlert className="w-3 h-3 text-red-400" /> Emergency Triage
                          </span>
                        )}
                      </div>

                      <h3 className="font-bold text-lg sm:text-xl text-[#FAF9F5] mb-2 group-hover:text-[#C9A66B] transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-sm text-[#FAF9F5]/80 leading-relaxed font-sans">
                        {service.description}
                      </p>
                    </div>

                    <div className="shrink-0 pt-1">
                      {service.isEmergency ? (
                        <a
                          href={`tel:${HOSPITAL_INFO.phone.raw}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FAF9F5] bg-red-900/60 hover:bg-red-800 px-4 py-2 border border-red-500/40 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-red-300" />
                          <span>Call Emergency</span>
                        </a>
                      ) : (
                        <button
                          onClick={scrollToConsultation}
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C9A66B] hover:text-[#FAF9F5] bg-[#103A40] px-4 py-2 border border-[#C9A66B]/30 group-hover:border-[#C9A66B] transition-colors"
                        >
                          <span>Consult</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Consultation Banner */}
            <div className="mt-6 p-4 bg-[#0D3035] border border-[#C9A66B]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#FAF9F5]/80">
                <span className="font-bold text-[#C9A66B] uppercase tracking-wider block">
                  Need an urgent eye checkup in Kudasan?
                </span>
                <span>OPD opens at 09:30 AM. Call directly or book online.</span>
              </div>
              <a
                href={`tel:${HOSPITAL_INFO.phone.raw}`}
                className="bg-[#C9A66B] hover:bg-[#D4B57D] text-[#103A40] text-xs font-bold uppercase tracking-wider px-5 py-2.5 shrink-0 transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{HOSPITAL_INFO.phone.display}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
