import React, { useEffect, useRef } from 'react';
import { Star, ShieldCheck, ExternalLink, Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HOSPITAL_INFO } from '../config/hospitalInfo';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ReviewsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
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

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#103A40] text-[#FAF9F5] py-20 lg:py-24 border-b border-[#C9A66B]/20"
    >
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16">
        <div
          ref={cardRef}
          className="bg-[#0D3035] p-8 lg:p-14 border border-[#C9A66B]/30 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Quote Background Icon */}
          <Quote className="absolute top-4 right-4 w-32 h-32 text-[#C9A66B]/5 pointer-events-none" />

          {/* Left Narrative Column */}
          <div className="flex flex-col lg:max-w-xl z-10">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-[#C9A66B]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C9A66B]">
                Gandhinagar Community Trust
              </span>
            </div>

            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#FAF9F5] mb-4">
              Clinical Care Honored by Kudasan Patients
            </h2>

            <p className="text-base text-[#FAF9F5]/80 leading-relaxed mb-6 font-sans">
              Known across Kudasan and Gandhinagar for unhurried explanations, transparent surgical quotes, and genuine clinical empathy across both eye and dental specialties.
            </p>

            <div className="flex items-center gap-4">
              <a
                href={HOSPITAL_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C9A66B] text-[#103A40] text-xs font-bold uppercase tracking-wider px-6 py-3.5 hover:bg-[#D4B57D] transition-all shadow-md"
              >
                <span>Read Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Metric Highlight Box */}
          <div className="bg-[#103A40] p-8 lg:p-10 border border-[#C9A66B]/30 flex flex-col items-center text-center min-w-[280px] z-10 shrink-0">
            <span className="font-bold text-5xl lg:text-6xl text-[#C9A66B] leading-none mb-2">
              {HOSPITAL_INFO.rating.score}
            </span>

            <div className="flex items-center text-[#C9A66B] mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#C9A66B]" />
              ))}
            </div>

            <p className="text-xs font-bold uppercase tracking-wider text-[#FAF9F5]">
              {HOSPITAL_INFO.rating.count} Verified Patient Ratings
            </p>

            <span className="text-[10px] text-[#FAF9F5]/60 tracking-wider uppercase mt-1">
              Google Maps Local Verification
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
