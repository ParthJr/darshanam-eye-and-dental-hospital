import React, { useState, useEffect } from 'react';
import { Calendar, Clock, CheckCircle2, AlertCircle, Send, ShieldCheck } from 'lucide-react';
import { HOSPITAL_INFO, ServiceItem } from '../config/hospitalInfo';

export const AppointmentForm: React.FC = () => {
  const [department, setDepartment] = useState<'eye' | 'dental'>('eye');
  const [serviceId, setServiceId] = useState<string>('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('evening');
  const [notes, setNotes] = useState('');
  const [consent, setConsent] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Get current services list based on selected department
  const currentServices: ServiceItem[] =
    department === 'eye' ? HOSPITAL_INFO.eyeServices : HOSPITAL_INFO.dentalServices;

  // Initialize service choice when department changes
  useEffect(() => {
    if (currentServices.length > 0) {
      setServiceId(currentServices[0].id);
    }
  }, [department]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setPreferredDate(dateStr);
  }, []);

  const todayStr = new Date().toISOString().split('T')[0];

  const validatePhone = (input: string) => {
    const cleaned = input.replace(/\D/g, '');
    return cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full legal name.');
      return;
    }

    if (!validatePhone(phone)) {
      setErrorMessage('Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.');
      return;
    }

    if (!preferredDate) {
      setErrorMessage('Please select a preferred date for your consultation.');
      return;
    }

    if (preferredDate < todayStr) {
      setErrorMessage('Appointment dates cannot be in the past.');
      return;
    }

    if (!consent) {
      setErrorMessage('Please consent to hospital contact for appointment verification.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable consultation request intake
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhone('');
    setNotes('');
    setConsent(false);
    setDepartment('eye');
    setErrorMessage('');
  };

  const selectedServiceObj = currentServices.find((s) => s.id === serviceId);

  return (
    <section
      id="consultation"
      className="w-full bg-[#FAF9F5] text-[#172426] py-20 lg:py-28 border-b border-[#E7ECEB]"
    >
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Explanatory Column (5 columns) */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#C9A66B] block mb-2">
              Direct Scheduling
            </span>
            <h2 className="font-bold text-3xl sm:text-4xl uppercase tracking-tight text-[#103A40] mb-4">
              Your Next Step Starts Here.
            </h2>
            <p className="text-base text-[#172426]/80 mb-8 leading-relaxed font-sans">
              Send an appointment request directly to our front desk. We verify timing, prepare clinical records, and ensure zero waiting room friction.
            </p>

            {/* Hours summary box */}
            <div className="bg-[#E2F1F3] p-5 border border-[#E7ECEB] mb-6">
              <h3 className="font-bold text-sm text-[#103A40] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C9A66B]" />
                <span>Clinic Consultation Hours</span>
              </h3>
              <p className="text-sm font-semibold text-[#172426]">
                {HOSPITAL_INFO.hours.days}: {HOSPITAL_INFO.hours.time}
              </p>
              <p className="text-xs text-[#8BA8A0] font-semibold mt-1">
                Sunday: {HOSPITAL_INFO.hours.sunday}
              </p>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[#FAF9F5] border-l-2 border-[#C9A66B] text-xs text-[#172426]/70 leading-relaxed">
              <ShieldCheck className="w-5 h-5 text-[#C9A66B] shrink-0 mt-0.5" />
              <p>
                Every submission is reviewed by clinical coordinators before appointment confirmation.
              </p>
            </div>
          </div>

          {/* Right Intake Form Container (7 columns) */}
          <div className="lg:col-span-7 bg-[#FAF9F5] p-6 sm:p-10 border border-[#E7ECEB] shadow-sm relative">
            
            {isSubmitted ? (
              /* Success Confirmation Panel */
              <div className="py-8 flex flex-col items-center text-center">
                <CheckCircle2 className="w-16 h-16 text-[#C9A66B] mb-4" />
                <h3 className="font-bold text-2xl uppercase tracking-tight text-[#103A40] mb-3">
                  Consultation Request Received
                </h3>
                <p className="text-base text-[#172426]/80 max-w-md mb-6 leading-relaxed font-sans">
                  Your consultation request has been received. The hospital team will contact you to confirm availability.
                </p>

                <div className="bg-[#E2F1F3] p-4 border border-[#E7ECEB] text-left w-full max-w-md mb-6 text-xs text-[#172426] space-y-1">
                  <p><strong>Patient Name:</strong> {fullName}</p>
                  <p><strong>Contact:</strong> +91 {phone}</p>
                  <p><strong>Department:</strong> {department === 'eye' ? 'Eye Care Wing' : 'Dental Care Wing'}</p>
                  <p><strong>Service:</strong> {selectedServiceObj?.title}</p>
                  <p><strong>Preferred Date:</strong> {preferredDate}</p>
                  <p><strong>Time Slot:</strong> {timeSlot.toUpperCase()}</p>
                </div>

                <button
                  type="button"
                  onClick={resetForm}
                  className="border border-[#103A40] hover:border-[#C9A66B] text-[#103A40] text-xs font-bold uppercase tracking-wider px-6 py-3 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              /* Consultation Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Validation Banner */}
                {errorMessage && (
                  <div className="p-4 bg-red-50 border-l-4 border-red-600 text-red-800 text-xs flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Patient Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#172426]/70 mb-1.5">
                    Full Legal Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full bg-[#FAF9F5] border border-[#E7ECEB] p-3.5 text-sm text-[#172426] focus:outline-none focus:border-[#C9A66B] transition-colors"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#172426]/70 mb-1.5">
                    Mobile Number (+91) *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit mobile number"
                    className="w-full bg-[#FAF9F5] border border-[#E7ECEB] p-3.5 text-sm text-[#172426] focus:outline-none focus:border-[#C9A66B] transition-colors"
                  />
                </div>

                {/* Specialty Toggle */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#172426]/70 mb-2">
                    Select Clinical Department *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setDepartment('eye')}
                      className={`py-3 px-4 text-xs font-bold uppercase tracking-wider text-center border-b-2 transition-all ${
                        department === 'eye'
                          ? 'bg-[#103A40] text-[#FAF9F5] border-[#C9A66B]'
                          : 'bg-[#E2F1F3] text-[#172426] border-transparent hover:bg-[#FAF9F5]'
                      }`}
                    >
                      Eye Care Wing
                    </button>
                    <button
                      type="button"
                      onClick={() => setDepartment('dental')}
                      className={`py-3 px-4 text-xs font-bold uppercase tracking-wider text-center border-b-2 transition-all ${
                        department === 'dental'
                          ? 'bg-[#103A40] text-[#FAF9F5] border-[#8BA8A0]'
                          : 'bg-[#E2F1F3] text-[#172426] border-transparent hover:bg-[#FAF9F5]'
                      }`}
                    >
                      Dental Care Wing
                    </button>
                  </div>
                </div>

                {/* Dynamic Service Selection */}
                <div>
                  <label htmlFor="serviceSelect" className="block text-xs font-bold uppercase tracking-wider text-[#172426]/70 mb-1.5">
                    Primary Reason / Service of Interest *
                  </label>
                  <select
                    id="serviceSelect"
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    className="w-full bg-[#FAF9F5] border border-[#E7ECEB] p-3.5 text-sm text-[#172426] focus:outline-none focus:border-[#C9A66B] transition-colors"
                  >
                    {currentServices.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferredDate" className="block text-xs font-bold uppercase tracking-wider text-[#172426]/70 mb-1.5">
                      Preferred Date *
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      required
                      min={todayStr}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-[#FAF9F5] border border-[#E7ECEB] p-3.5 text-sm text-[#172426] focus:outline-none focus:border-[#C9A66B] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="timeSlot" className="block text-xs font-bold uppercase tracking-wider text-[#172426]/70 mb-1.5">
                      Preferred Time Slot *
                    </label>
                    <select
                      id="timeSlot"
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full bg-[#FAF9F5] border border-[#E7ECEB] p-3.5 text-sm text-[#172426] focus:outline-none focus:border-[#C9A66B] transition-colors"
                    >
                      <option value="morning">Morning (09:30 AM – 01:00 PM)</option>
                      <option value="afternoon">Afternoon (02:00 PM – 05:00 PM)</option>
                      <option value="evening">Evening (05:00 PM – 08:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-[#172426]/70 mb-1.5">
                    Specific Symptoms or Medical History (Optional)
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Mention past surgeries, lens wear, irritation, or dental sensitivity..."
                    className="w-full bg-[#FAF9F5] border border-[#E7ECEB] p-3.5 text-sm text-[#172426] focus:outline-none focus:border-[#C9A66B] transition-colors"
                  />
                </div>

                {/* Privacy Consent Checkbox */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    id="consent"
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded-none accent-[#103A40]"
                  />
                  <label htmlFor="consent" className="text-xs text-[#172426]/80 leading-relaxed">
                    I consent to the hospital staff contacting me via Phone/WhatsApp to schedule and verify clinical OPD availability.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C9A66B] hover:bg-[#D4B57D] text-[#103A40] text-xs font-bold uppercase tracking-widest py-4 transition-all duration-300 border-b-2 border-[#103A40] flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Securing Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request a Consultation</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
