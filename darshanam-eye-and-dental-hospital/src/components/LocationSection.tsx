import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Building } from 'lucide-react';
import { HOSPITAL_INFO } from '../config/hospitalInfo';

export const LocationSection: React.FC = () => {
  return (
    <section
      id="location"
      className="w-full bg-[#E2F1F3] text-[#172426] py-20 lg:py-28 border-b border-[#E7ECEB]"
    >
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Address & Details (6 columns) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C9A66B] block mb-2">
                Location &amp; Access
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl uppercase tracking-tight text-[#103A40] mb-8">
                Visit Darshanam in Kudasan.
              </h2>

              <div className="space-y-6 mb-8">
                {/* Physical Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#103A40] text-[#C9A66B] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#103A40] mb-1">
                      Physical Address
                    </h3>
                    <p className="text-sm text-[#172426]/80 leading-relaxed font-sans">
                      {HOSPITAL_INFO.address.fullFormatted}
                    </p>
                  </div>
                </div>

                {/* Telephone Inquiries */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#103A40] text-[#C9A66B] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#103A40] mb-1">
                      Telephone Inquiries
                    </h3>
                    <p className="text-sm text-[#172426]/80 font-sans">
                      <a
                        href={`tel:${HOSPITAL_INFO.phone.raw}`}
                        className="font-bold text-[#103A40] hover:text-[#C9A66B] transition-colors"
                      >
                        {HOSPITAL_INFO.phone.display}
                      </a>
                    </p>
                  </div>
                </div>

                {/* OPD Timings */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#103A40] text-[#C9A66B] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#103A40] mb-1">
                      OPD Consultation Timings
                    </h3>
                    <p className="text-sm text-[#172426]/80 font-sans">
                      {HOSPITAL_INFO.hours.days} • {HOSPITAL_INFO.hours.time}
                    </p>
                    <p className="text-xs text-[#8BA8A0] font-semibold mt-0.5">
                      Sunday: {HOSPITAL_INFO.hours.sunday}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-[#E7ECEB]">
              <a
                href={`tel:${HOSPITAL_INFO.phone.raw}`}
                className="inline-flex items-center gap-2 bg-[#103A40] hover:bg-[#172426] text-[#FAF9F5] text-xs font-bold uppercase tracking-wider px-6 py-3.5 transition-all shadow-md"
              >
                <Phone className="w-4 h-4 text-[#C9A66B]" />
                <span>Call Hospital Now</span>
              </a>

              <a
                href={HOSPITAL_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FAF9F5] border border-[#E7ECEB] text-[#103A40] hover:border-[#C9A66B] text-xs font-bold uppercase tracking-wider px-6 py-3.5 transition-all shadow-sm"
              >
                <Navigation className="w-4 h-4 text-[#C9A66B]" />
                <span>Google Maps Directions</span>
              </a>
            </div>
          </div>

          {/* Map Preview Container (6 columns) */}
          <div className="lg:col-span-6">
            <div className="h-96 w-full border border-[#E7ECEB] relative overflow-hidden bg-[#FAF9F5] shadow-sm flex flex-col justify-between p-6">
              
              <div className="relative z-10 bg-[#103A40] text-[#FAF9F5] p-5 border border-[#C9A66B]/30 max-w-sm">
                <div className="flex items-center gap-2 mb-1 text-[#C9A66B]">
                  <Building className="w-4 h-4" />
                  <span className="text-[11px] font-bold uppercase tracking-widest">
                    Pramukh Arcade 2
                  </span>
                </div>
                <h4 className="font-bold text-sm uppercase text-[#FAF9F5] mb-1">
                  Opposite Akshar Bunglow
                </h4>
                <p className="text-xs text-[#FAF9F5]/70 font-sans">
                  Kudasan, Gandhinagar, Gujarat 382419
                </p>
              </div>

              {/* Map Visual Representation with direct destination pin button */}
              <div className="absolute inset-0 bg-[#E7ECEB] flex items-center justify-center overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNBjmrXDaTaWbKES2BcbL1XYCR__jFOOUw68nVpwQXQKE_Ex2Pa3o3Ty4wlxXlGp4iYCR8jqKSu79p6hpwfLlPMMyysK91ePWT9Ftu_8Xj9rZtJhOV2FHyjpPXYUN1HExQiG7i5F_NDbg64ZHwWLB3cng-C2L2Au-ygjbQozw1NCcqZzE0CKFlrcrRu_eDPbOtMSpuTJo1k3FlHoo4b_2Ae1g4CjdRfMtLfOSqTKGX5O5M7V8wYSewoA"
                  alt="Map location preview for Pramukh Arcade Kudasan"
                  className="w-full h-full object-cover filter contrast-[1.05] brightness-[0.95]"
                />
              </div>

              {/* Bottom Overlay Link */}
              <div className="relative z-10 self-end">
                <a
                  href={HOSPITAL_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#103A40] hover:bg-[#172426] text-[#FAF9F5] text-xs font-bold uppercase tracking-wider px-4 py-2.5 inline-flex items-center gap-2 border border-[#C9A66B]/30 shadow-lg"
                >
                  <span>Open Full Navigation</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C9A66B]" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
