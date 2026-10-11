import React, { useEffect, useRef } from 'react';
import { Star, ShieldCheck, ArrowRight, Eye, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { HOSPITAL_INFO } from '../config/hospitalInfo';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const ratingRef = useRef<HTMLDivElement>(null);
  const imageBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Eyebrow and Headline animation
      tl.fromTo(
        '.hero-eyebrow',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.3'
        )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          ctaGroupRef.current ? Array.from(ctaGroupRef.current.children) : [],
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 },
          '-=0.3'
        )
        .fromTo(
          ratingRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.6 },
          '-=0.2'
        )
        .fromTo(
          imageBoxRef.current,
          { opacity: 0, x: 30, clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
          { opacity: 1, x: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.1 },
          '-=0.9'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full bg-[#103A40] text-[#FAF9F5] overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-[#C9A66B]/20"
    >
      {/* Subtle architectural background radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#103A40] via-[#0D3035] to-[#172426] opacity-95 pointer-events-none" />
      <div className="absolute top-1/4 -right-36 w-96 h-96 rounded-full bg-[#C9A66B]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-5 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Narrative (7 columns) */}
          <div className="lg:col-span-7 flex flex-col z-10">
            
            {/* Eyebrow */}
            <div className="hero-eyebrow inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#C9A66B] inline-block" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C9A66B] font-sans">
                DARSHANAM EYE AND DENTAL HOSPITAL · KUDASAN
              </span>
            </div>

            {/* Main Title */}
            <h1
              ref={headlineRef}
              className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.12] uppercase tracking-tight text-[#FAF9F5] mb-3"
            >
              CARE THAT CHANGES HOW YOU SEE AND SMILE.
            </h1>

            {/* Editorial Quote */}
            <p className="font-serif-quote italic text-xl md:text-2xl text-[#C9A66B] mb-4">
              {HOSPITAL_INFO.editorialQuote}
            </p>

            {/* Supporting Paragraph */}
            <p
              ref={subtextRef}
              className="text-base sm:text-lg text-[#FAF9F5]/80 max-w-2xl mb-8 leading-relaxed font-sans"
            >
              Explore eye care and dental care services through a patient-focused consultation experience. Experience advanced ophthalmic surgical care and dignified dental wellness under one roof in Kudasan, Gandhinagar. Designed with clinical calm and uncompromised medical precision.
            </p>

            {/* CTA Controls */}
            <div
              ref={ctaGroupRef}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <button
                onClick={() => scrollToSection('specialties')}
                className="inline-flex items-center justify-center bg-[#C9A66B] hover:bg-[#D4B57D] text-[#103A40] text-xs font-bold uppercase tracking-wider px-8 py-4 transition-all duration-300 shadow-md group border-b-2 border-[#103A40]"
              >
                <span>Explore Our Specialties</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('consultation')}
                className="inline-flex items-center justify-center bg-transparent border border-[#FAF9F5]/30 hover:bg-white/10 text-[#FAF9F5] text-xs font-bold uppercase tracking-wider px-8 py-4 transition-all duration-300"
              >
                <span>Request a Consultation</span>
              </button>
            </div>

            <div className="w-16 h-[1px] bg-[#C9A66B] mb-4" />

            {/* Verified Google Review Reputation Badge */}
            <div
              ref={ratingRef}
              className="inline-flex items-center gap-3 bg-[#103A40]/80 backdrop-blur-sm px-4 py-3 border border-[#C9A66B]/30 w-fit"
            >
              <div className="flex items-center text-[#C9A66B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A66B]" />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#FAF9F5]">{HOSPITAL_INFO.rating.score} ★</span>
                <span className="text-[11px] text-[#FAF9F5]/70 tracking-wider uppercase font-sans">
                  · {HOSPITAL_INFO.rating.count} Google reviews · Gandhinagar
                </span>
              </div>
            </div>

          </div>

          {/* Right Hero Architectural Photograph (5 columns) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div
              ref={imageBoxRef}
              className="relative bg-[#103A40] p-2 border border-[#C9A66B]/30 shadow-2xl overflow-hidden group"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZfTO9O4Al7mdCofTPlww63VW0l2yS6sa9FX4Gt1JAIvsNjpzBQcmGpfzU_vgImQfkvagV0a45O46Sm_nAhMXONh1fyi6mkk3Mk-kuGDDwJpqz7DS606tcNiSPlzG3Eit1rMZTM1z90YnI5_DI37gMWuckZGsQo_j-pPreylZAnw3fnASeWwxEHD7_-ExDr323AoBeLa0OpjNGSLoVp8XkBNS5ve8-ebBkWEfLiqSlbIZFTw2v0K_-mQ"
                alt="Modern clinical consultation room at Darshanam Hospital Kudasan"
                className="w-full h-[460px] lg:h-[520px] object-cover object-center filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#103A40]/80 via-transparent to-transparent pointer-events-none" />

              {/* Architectural Overlay Label */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#103A40]/95 backdrop-blur-md p-4 border border-[#C9A66B]/30 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#C9A66B] block">
                    Kudasan Surgical Suite
                  </span>
                  <span className="text-sm font-bold text-[#FAF9F5] uppercase">
                    Precision Diagnostics
                  </span>
                </div>
                <ShieldCheck className="w-6 h-6 text-[#C9A66B]" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
