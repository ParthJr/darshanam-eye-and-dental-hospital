import React from 'react';
import { X, Shield } from 'lucide-react';
import { HOSPITAL_INFO } from '../config/hospitalInfo';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#172426]/70 backdrop-blur-xs">
      <div className="bg-[#FAF9F5] border border-[#E7ECEB] max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#103A40] hover:bg-[#E7ECEB] focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4 text-[#C9A66B]">
          <Shield className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">
            {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
          </span>
        </div>

        <h3 className="font-bold text-xl uppercase tracking-tight text-[#103A40] mb-4">
          {type === 'privacy'
            ? 'Patient Data & Privacy Governance'
            : 'Clinical Terms of Service'}
        </h3>

        <div className="text-xs sm:text-sm text-[#172426]/80 space-y-4 font-sans leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>1. Information Collection:</strong> Darshanam Eye and Dental Hospital collects patient contact details (Name, Phone Number, Preferred Consultation Slot) solely for clinical OPD scheduling and consultation follow-ups in Kudasan, Gandhinagar.
              </p>
              <p>
                <strong>2. Confidentiality &amp; Consent:</strong> All medical inquiries, symptom notes, and contact numbers submitted through this website remain strictly confidential between the patient and the hospital front office team.
              </p>
              <p>
                <strong>3. Third-Party Non-Disclosure:</strong> We do not sell, rent, or distribute personal patient data to third-party marketers or advertisers.
              </p>
              <p>
                <strong>4. Patient Rights:</strong> You may request deletion or modification of your contact records by contacting the hospital desk directly at {HOSPITAL_INFO.phone.display}.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Consultation Requests:</strong> Submission of an appointment request via this portal represents an inquiry and does not constitute a guaranteed medical slot until confirmed by hospital staff.
              </p>
              <p>
                <strong>2. Medical Disclaimer:</strong> Information provided on this portal is strictly for educational guidance and does not replace in-person professional clinical evaluation or emergency surgical intervention.
              </p>
              <p>
                <strong>3. Acute Emergencies:</strong> For acute ocular trauma or severe dental infection, please contact the hospital directly via telephone ({HOSPITAL_INFO.phone.display}) or visit the Kudasan OPD immediately.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-[#E7ECEB] flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#103A40] hover:bg-[#172426] text-[#FAF9F5] text-xs font-bold uppercase tracking-wider px-6 py-2.5 transition-colors"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
