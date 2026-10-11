export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  description: string;
  category: 'eye' | 'dental';
  tag: string;
  isEmergency?: boolean;
}

export interface HospitalConfig {
  name: string;
  tagline: string;
  editorialQuote: string;
  address: {
    street: string;
    building: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    fullFormatted: string;
  };
  phone: {
    display: string;
    raw: string;
  };
  rating: {
    score: number;
    count: number;
    platform: string;
  };
  hours: {
    days: string;
    time: string;
    sunday: string;
  };
  mapUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  eyeServices: ServiceItem[];
  dentalServices: ServiceItem[];
}

export const HOSPITAL_INFO: HospitalConfig = {
  name: "Darshanam Eye and Dental Hospital",
  tagline: "Care that changes how you see and smile.",
  editorialQuote: "See clearly. Smile confidently.",
  address: {
    street: "205, Pramukh Arcade 2, A-204",
    building: "Pramukh Arcade 2",
    landmark: "opposite Akshar Bunglow",
    area: "Kudasan",
    city: "Gandhinagar",
    state: "Gujarat",
    pincode: "382419",
    fullFormatted: "205, Pramukh Arcade 2, A-204, opposite Akshar Bunglow, Kudasan, Gandhinagar, Gujarat 382419"
  },
  phone: {
    display: "091733 49099",
    raw: "09173349099"
  },
  rating: {
    score: 4.9,
    count: 41,
    platform: "Google Reviews"
  },
  hours: {
    days: "Monday to Saturday",
    time: "09:30 AM – 08:00 PM",
    sunday: "Emergency Appointments Only"
  },
  mapUrl: "https://www.google.com/maps/search/?api=1&query=205+Pramukh+Arcade+2+Kudasan+Gandhinagar+Gujarat+382419",
  coordinates: {
    lat: 23.1818,
    lng: 72.6315
  },
  eyeServices: [
    {
      id: "cataract-care",
      code: "PROCEDURE 01",
      title: "Cataract Surgery & Lens Replacement",
      description: "Comprehensive lens density profiling, biometry mapping, and personalized counseling for monofocal, toric, and multifocal intraocular lenses.",
      category: "eye",
      tag: "Microscopic Surgery"
    },
    {
      id: "dry-eye-treatment",
      code: "PROCEDURE 02",
      title: "Dry-Eye & Ocular Surface Management",
      description: "Targeted tear-breakup evaluations and meibomian gland assessments to relieve digital strain, environmental dryness, and chronic fatigue.",
      category: "eye",
      tag: "Diagnostic Care"
    },
    {
      id: "eye-exam",
      code: "PROCEDURE 03",
      title: "Comprehensive Vision Examinations",
      description: "Refractive error assessment, baseline optic disc inspection, pupil dilation mapping, and preventive wellness checks for students and professionals.",
      category: "eye",
      tag: "Preventive Ophthalmology"
    },
    {
      id: "glaucoma-care",
      code: "PROCEDURE 04",
      title: "Glaucoma Diagnostics & IOP Tracking",
      description: "Accurate Goldman applanation tonometry, visual field perimeter testing, and preventive monitoring against progressive optic nerve thinning.",
      category: "eye",
      tag: "Pressure & Nerve Health"
    },
    {
      id: "emergency-eye-care",
      code: "PROCEDURE 05",
      title: "Acute Ophthalmic Triage & Foreign Body Removal",
      description: "Immediate clinical response for sudden ocular inflammation, mechanical foreign body exposure, corneal abrasions, and acute redness.",
      category: "eye",
      tag: "Emergency Triage",
      isEmergency: true
    }
  ],
  dentalServices: [
    {
      id: "preventive-dentistry",
      code: "PROTOCOL 01",
      title: "Preventive & Ultrasonic Hygiene",
      description: "Non-invasive ultrasonic plaque debridement, enamel remineralization, and personalized periodontal monitoring for long-term gum wellness.",
      category: "dental",
      tag: "Hygiene & Maintenance"
    },
    {
      id: "restorative-dentistry",
      code: "PROTOCOL 02",
      title: "Restorative & Aesthetic Bonding",
      description: "High-strength tooth-colored composite restorations, conservative decay management, and subtle aesthetic contouring.",
      category: "dental",
      tag: "Conservative Repair"
    },
    {
      id: "crown-bridge",
      code: "PROTOCOL 03",
      title: "Crown & Bridge Restorations",
      description: "Precision zirconia and ceramic crowns designed for biocompatibility, functional alignment, and natural translucent acoustics.",
      category: "dental",
      tag: "Prosthetic Architecture"
    },
    {
      id: "root-canal",
      code: "PROTOCOL 04",
      title: "Endodontic & Root Canal Guidance",
      description: "Pain-free nerve preservation therapies, thorough rotary canal cleaning, and hermetic sealing for severely sensitive or infected teeth.",
      category: "dental",
      tag: "Pain Relief & Preservation"
    },
    {
      id: "structural-rehabilitation",
      code: "PROTOCOL 05",
      title: "Complete Structural Rehabilitation",
      description: "Comprehensive bite reconstruction, full jaw alignment evaluation, and custom nightguards for grinding and TMJ strain.",
      category: "dental",
      tag: "Bite & TMJ Alignment"
    }
  ]
};
