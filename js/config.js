/**
 * ============================================================================
 * SMILECARE DENTAL CLINIC - CENTRAL CONFIGURATION & CONTENT HUB
 * ============================================================================
 * 
 * Agency / Customization Note:
 * When creating a website for a new dental clinic client, edit the values in this file!
 * The website will automatically update clinic names, doctor information, 
 * phone numbers, WhatsApp links, treatments, testimonials, gallery, and branding.
 * 
 * All content fields are clearly labeled below.
 */

const CLINIC_CONFIG = {
  // Brand & Clinic Info
  clinicName: "SmileCare Dental Clinic",
  tagline: "Confident Smiles Start Here",
  subTagline: "Personalized dental care in a comfortable, modern clinic — from routine checkups to advanced treatments.",
  trustIndicator: "Trusted Dental Care • Modern Technology • Patient-Focused Treatment",
  establishedYear: "2014",

  // Contact Information
  contact: {
    phoneDisplay: "+91 98765 43210",
    phoneTel: "+919876543210",
    email: "hello@smilecareclinic.example",
    whatsappNumber: "919876543210", // Without + or spaces, for WhatsApp API
    whatsappDefaultMessage: "Hello SmileCare Dental Clinic, I would like to inquire about booking an appointment.",
    addressLine1: "123 Example Road",
    addressLine2: "Indiranagar, 2nd Stage",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560038",
    country: "India",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9855523166864!2d77.63842187588047!3d12.972793287342898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a798544c0f%3A0xe67362a129fa66b5!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=SmileCare+Dental+Clinic+Bengaluru"
  },

  // Operating Hours
  hours: {
    weekdays: "Monday – Saturday: 9:00 AM – 7:00 PM",
    sunday: "Sunday: Closed (Emergency consultations on request)",
    emergencyNote: "For acute dental pain or dental emergencies during clinic hours, call our priority desk immediately."
  },

  // Lead Doctor Profile
  doctor: {
    name: "Dr. Ananya Rao",
    qualifications: "BDS, MDS",
    title: "Consultant Dentist & Oral Healthcare Specialist",
    shortBio: "Dr. Ananya Rao is committed to providing comfortable, evidence-based dental care with a strong focus on patient education and long-term oral health.",
    fullBio: "With over 12 years of clinical experience, Dr. Ananya Rao completed her Bachelor of Dental Surgery (BDS) followed by a Master of Dental Surgery (MDS) in Conservative Dentistry and Endodontics. She believes modern dentistry should be gentle, transparent, and focused on preserving natural dentition wherever possible. Dr. Rao continuously trains in minimally invasive techniques and digital dental technologies to ensure patient visits are as comfortable and stress-free as possible.",
    experienceYears: "12+",
    memberships: "Indian Dental Association (IDA), Federation of Operative Dentistry",
    specialties: [
      "Painless Microscopic Endodontics (Root Canals)",
      "Conservative Restorative Care",
      "Aesthetic Smile Designing",
      "Preventive & Pediatric Oral Health"
    ],
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Dr. Ananya Rao, Consultant Dentist at SmileCare Dental Clinic"
  },

  // Treatments & Services
  treatments: [
    {
      id: "general-dentistry",
      title: "General Dentistry",
      shortDescription: "Routine examinations, preventive care and oral health consultations.",
      icon: "tooth",
      fullDescription: "Our comprehensive oral examinations combine digital X-rays, ultrasonic scaling, and periodontal health assessments. We focus on early detection of decay, gum health maintenance, and personalized home-care guidance to keep your natural smile healthy.",
      details: [
        "Comprehensive oral health checkups",
        "Ultrasonic scaling & gentle polishing",
        "Preventive pit & fissure sealants",
        "Digital low-radiation dental X-rays"
      ]
    },
    {
      id: "root-canal",
      title: "Root Canal Treatment",
      shortDescription: "Modern endodontic care focused on preserving natural teeth.",
      icon: "shield-check",
      fullDescription: "Advanced endodontic therapy allows us to relieve toothache and rescue severely infected or damaged teeth without extraction. Utilizing rotary nickel-titanium instrumentation and apex locators, procedures are completed with precision and patient comfort.",
      details: [
        "Painless rotary endodontic therapy",
        "Single-visit root canals when clinically indicated",
        "High-strength ceramic and zirconia crowns",
        "Tooth-saving approach over extraction"
      ]
    },
    {
      id: "dental-implants",
      title: "Dental Implants",
      shortDescription: "Replacement solutions for missing teeth with personalized treatment planning.",
      icon: "activity",
      fullDescription: "Permanent, bio-compatible titanium and ceramic implant solutions that function, feel, and look just like natural teeth. Whether replacing a single tooth or multiple teeth, our planning ensures optimal stability and natural chewing capability.",
      details: [
        "Single-tooth & multi-teeth implant restorations",
        "Detailed bone & 3D treatment planning",
        "Preserves adjacent healthy teeth",
        "Long-lasting functional restoration"
      ]
    },
    {
      id: "teeth-whitening",
      title: "Teeth Whitening",
      shortDescription: "Professional cosmetic whitening options for a brighter smile.",
      icon: "sparkles",
      fullDescription: "Safe, dentist-supervised teeth whitening treatments formulated to remove stubborn stains from coffee, tea, and aging while minimizing enamel sensitivity. We offer both chairside treatments and custom-fitted home maintenance kits.",
      details: [
        "Clinically supervised enamel-safe treatment",
        "Noticeable lightening in a single session",
        "Enamel desensitizing application included",
        "Customized home touch-up trays"
      ]
    },
    {
      id: "orthodontic-care",
      title: "Orthodontic Care",
      shortDescription: "Treatment options for improving tooth alignment and bite.",
      icon: "smile",
      fullDescription: "Carefully planned orthodontic solutions for children, teens, and adults. From clear aligners to subtle aesthetic ceramic braces, we treat crowding, spacing, and bite misalignments to restore function and aesthetic balance.",
      details: [
        "Clear aligner consultations & digital scans",
        "Ceramic & traditional brackets",
        "Bite correction and crowding resolution",
        "Retainers and post-treatment maintenance"
      ]
    },
    {
      id: "cosmetic-dentistry",
      title: "Cosmetic Dentistry",
      shortDescription: "Smile-enhancement treatments designed around individual needs.",
      icon: "heart-handshake",
      fullDescription: "Subtle, harmonious cosmetic procedures designed around your facial features. We combine composite bonding, ultra-thin porcelain veneers, and gum recontouring to repair chips, close gaps, and create an effortlessly natural smile.",
      details: [
        "Minimally invasive composite bonding",
        "Custom handcrafted porcelain veneers",
        "Diastema (gap) closure",
        "Aesthetic smile contouring"
      ]
    }
  ],

  // Why Choose Us Pillars
  whyChooseUs: [
    {
      title: "Experienced Dental Team",
      description: "Led by specialist endodontist and certified clinicians with over a decade of dedicated clinical practice.",
      icon: "users"
    },
    {
      title: "Modern Clinical Equipment",
      description: "Equipped with digital intraoral sensors, rotary endodontics, and hospital-grade autoclave sterilization.",
      icon: "cpu"
    },
    {
      title: "Personalized Treatment Plans",
      description: "We explain all available clinical options clearly, presenting transparent choices without pressured upsells.",
      icon: "clipboard-check"
    },
    {
      title: "Comfortable Clinic Environment",
      description: "A calming, clean, and unhurried clinic atmosphere specifically arranged to ease dental anxiety.",
      icon: "coffee"
    },
    {
      title: "Transparent Communication",
      description: "Detailed cost estimates, straightforward explanations of procedures, and no hidden charges.",
      icon: "message-square"
    },
    {
      title: "Convenient Scheduling",
      description: "Punctual appointment slots, flexible evening timings, and easy rescheduling via phone or WhatsApp.",
      icon: "clock"
    }
  ],

  // Testimonials
  testimonials: [
    {
      quote: "The clinic was spotless, welcoming and the entire process was explained clearly. Dr. Ananya took time to walk me through the X-rays, and I felt completely comfortable throughout my visit.",
      author: "Priya S.",
      city: "Bengaluru",
      rating: 5,
      treatment: "General Consultation & Cleaning"
    },
    {
      quote: "I was quite anxious about getting a root canal done after years of postponing it. Dr. Rao's calm approach and gentle technique made it virtually painless. The follow-up call the next day was deeply appreciated.",
      author: "Rajesh K.",
      city: "Bengaluru",
      rating: 5,
      treatment: "Root Canal Treatment"
    },
    {
      quote: "Very professional and transparent clinic. They gave me clear options for my dental crown without pushing the most expensive one. Scheduling was prompt with zero waiting time upon arrival.",
      author: "Meera V.",
      city: "Bengaluru",
      rating: 5,
      treatment: "Dental Crown & Restoration"
    },
    {
      quote: "Took my 9-year-old son for his first preventive checkup. The staff was patient, friendly, and made him feel completely at ease. Highly recommend SmileCare for family dentistry.",
      author: "Arjun N.",
      city: "Bengaluru",
      rating: 5,
      treatment: "Pediatric Consultation"
    }
  ],

  // Clinic Gallery
  gallery: [
    {
      title: "Reception & Welcome Lounge",
      category: "Reception",
      caption: "Our bright, welcoming reception area designed to make you feel relaxed the moment you step in.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Modern Treatment Operatory",
      category: "Treatment Room",
      caption: "Ergonomic treatment chairs fitted with modern LED lighting and digital display monitors.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Advanced Dental Technology",
      category: "Equipment",
      caption: "Low-radiation digital radiography and rotary endodontic equipment for precise diagnosis.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Patient Waiting Lounge",
      category: "Waiting Area",
      caption: "A quiet, comfortable space with sanitized seating and complimentary refreshments.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Clinic Exterior & Entrance",
      category: "Exterior",
      caption: "Centrally located on Example Road with dedicated parking and step-free patient accessibility.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Sterilization & Hygiene Station",
      category: "Hygiene",
      caption: "Hospital-grade multi-stage autoclave sterilization ensuring strictly sterile instruments for every patient.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment by filling out the online request form on this page, calling us directly at +91 98765 43210, or messaging us on WhatsApp. Our reception team will reach out promptly to confirm a time that best suits your schedule."
    },
    {
      question: "What should I bring to my first consultation?",
      answer: "Please bring a valid photo ID, any recent dental X-rays or records you may have, and a list of current medications or relevant medical history. If you do not have previous records, our clinic can take fresh digital radiographs during your visit."
    },
    {
      question: "How long does a dental consultation take?",
      answer: "A standard comprehensive initial consultation typically takes between 30 to 45 minutes. This includes a thorough oral examination, discussion of your concerns, any required digital imaging, and a step-by-step treatment plan review."
    },
    {
      question: "Do you offer cosmetic dental treatments?",
      answer: "Yes, we provide cosmetic services including professional in-clinic teeth whitening, composite bonding for minor chips and gaps, ceramic crowns, and porcelain veneers. Each treatment plan is customized based on individual dental anatomy and clinical suitability."
    },
    {
      question: "Where is the clinic located?",
      answer: "SmileCare Dental Clinic is located at 123 Example Road, Indiranagar, Bengaluru, Karnataka. We are easily accessible from primary transit routes and have convenient parking for visitors."
    },
    {
      question: "How can I contact the clinic?",
      answer: "You can reach our desk by phone at +91 98765 43210, via WhatsApp for quick inquiries, or by email at hello@smilecareclinic.example. For non-urgent messages, our appointment form is monitored throughout operating hours."
    }
  ],

  // Social Links
  socials: {
    instagram: "https://instagram.com/smilecareclinic",
    facebook: "https://facebook.com/smilecareclinic",
    linkedin: "https://linkedin.com/company/smilecareclinic",
    googleBusiness: "https://maps.google.com"
  },

  // Brand Theme Colors (can be updated to client's preferred branding)
  theme: {
    primaryColor: "#0D9488",        // Medical Teal
    primaryDark: "#0F766E",         // Deep Teal
    primaryLight: "#F0FDFA",        // Light Mint Tint
    accentColor: "#0284C7",         // Trust Blue
    darkNeutral: "#0F172A",         // Slate 900
    bodyText: "#334155",            // Slate 700
    lightBg: "#F8FAFC"              // Slate 50
  }
};

// Export for module systems if loaded via bundler, or keep on window for vanilla HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CLINIC_CONFIG;
}
