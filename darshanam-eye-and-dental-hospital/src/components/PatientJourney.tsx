import React, { useEffect, useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const PatientJourney: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const connectorLineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (connectorLineRef.current) {
        gsap.fromTo(
          connectorLineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: 'left center',
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (stepsRef.current && stepsRef.current.children.length > 0) {
        gsap.fromTo(
          Array.from(stepsRef.current.children),
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out',
            clearProps: 'all',
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: '01',
      title: 'CONNECT',
      description:
        'Send your consultation request online or contact the reception directly. Our clinical coordinator organizes timely intake based on your clinical urgency.',
      tag: 'Average response < 2 hrs',
      badgeBg: 'bg-[#103A40] text-[#C9A66B]',
    },
    {
      num: '02',
      title: 'CONSULT',
      description:
        'Meet face-to-face with the specialist for in-depth digital imaging and thorough clinical dialogue. We answer all doubts in simple language.',
      tag: 'In-depth evaluation',
      badgeBg: 'bg-[#C9A66B] text-[#103A40]',
    },
    {
      num: '03',
      title: 'PLAN',
      description:
        'Receive a documented treatment roadmap with upfront fee transparency, scheduled follow-ups, and preventive wellness advice tailored for you.',
      tag: 'Clear clinical roadmap',
      badgeBg: 'bg-[#103A40] text-[#C9A66B]',
    },
  ];

  return (
    <section
      id="patient-journey"
      ref={containerRef}
      className="w-full bg-[#FAF9F5] text-[#172426] py-20 lg:py-28 border-b border-[#E7ECEB]"
    >
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#C9A66B] block mb-2">
            The Darshanam Protocol
          </span>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#103A40] mb-3">
            A Clearer Path to Care.
          </h2>
          <p className="text-sm sm:text-base text-[#172426]/80 leading-relaxed font-sans">
            Predictable, structured, and compassionate steps from initial intake to complete clinical recovery.
          </p>
        </div>

        {/* 3 Numbered Steps with Desktop Horizontal Connector */}
        <div className="relative">
          {/* Connector Line (Desktop Only) */}
          <div
            ref={connectorLineRef}
            className="hidden md:block absolute top-12 left-16 right-16 h-0.5 bg-[#C9A66B]/40 z-0"
          />

          <div
            ref={stepsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
          >
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#FAF9F5] p-8 border border-[#E7ECEB] flex flex-col justify-between shadow-sm hover:border-[#C9A66B] transition-colors group"
              >
                <div>
                  <div
                    className={`w-12 h-12 ${step.badgeBg} flex items-center justify-center font-bold text-lg mb-6 shadow-md border border-[#C9A66B]/30`}
                  >
                    {step.num}
                  </div>
                  <h3 className="font-bold text-lg uppercase tracking-wider text-[#103A40] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#172426]/80 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E7ECEB] text-[11px] font-bold uppercase tracking-wider text-[#C9A66B]">
                  {step.tag}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
