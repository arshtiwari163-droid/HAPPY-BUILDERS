
import { Project, FAQ, Material, Amenity } from './types';

export const PROJECTS: Project[] = [
  {
    id: 4,
    title: "Happy Kuteer",
    location: "Madhurawada, Vizag",
    status: "Current",
    completionPercentage: 0, // Removed specific percentage as requested
    expectedDate: "2026",
    image: "/Happy_Kuteer.jpg",
    description: "Premium residential development. Project 4 - Happy Kuteer (2026).",
    brochure: "/happy_kuteer.pdf"
  },
  {
    id: 3,
    title: "Happy Nivas",
    location: "Vizag",
    status: "Completed",
    completionPercentage: 100,
    expectedDate: "2024",
    image: "/Happy_Nivas.jpg",
    description: "Project 3 - Happy Nivas (2024). Modern living spaces designed for comfort and community."
  },
  {
    id: 2,
    title: "Happy Nest",
    location: "Madhurawada, Vizag",
    status: "Completed",
    completionPercentage: 100,
    expectedDate: "2023",
    image: "/Happy_Nest.jpg",
    description: "Project 2 - Happy Nest (2023). Spacious residential complex with integrated green spaces."
  },
  {
    id: 1,
    title: "Venus Heights",
    location: "Seethamadhara, Vizag",
    status: "Completed",
    completionPercentage: 100,
    expectedDate: "2021",
    image: "/Venus_Heights.jpg",
    description: "Project 1 - Venus Heights (2021). A landmark completed project."
  }
];

export const AMENITIES: Amenity[] = [
  {
    title: "100% Power Back-up",
    description: "Full reliability for your comfort",
    icon: "⚡"
  },

  {
    title: "Car Parking",
    description: "Dedicated and safe space",
    icon: "🚗"
  },
  {
    title: "Electricity",
    description: "Uninterrupted supply lines",
    icon: "💡"
  },
  {
    title: "GVMC Water",
    description: "Potable municipal supply",
    icon: "🚰"
  },
  {
    title: "Rain Water Harvesting",
    description: "Eco-friendly water conservation",
    icon: "🌧️"
  },
  {
    title: "Underground Cabling",
    description: "Clean aesthetic, zero clutter",
    icon: "🔌"
  },
  {
    title: "Vastu Compliant",
    description: "Harmony and prosperity",
    icon: "☯️"
  },
  {
    title: "Water Cascades",
    description: "Serene landscape features",
    icon: "⛲"
  }
];

export const MATERIALS: Material[] = [
  {
    brand: "Birla Shakti Cement",
    category: "Foundation & Structure",
    description: "High-grade 53 OPC/PPC for maximum strength and durability.",
    icon: "🏗️"
  },
  {
    brand: "Vizag Steel",
    category: "Reinforcement",
    description: "Genuine TMT bars from Vizag Steel ensuring earthquake resistance.",
    icon: "🏗️"
  },
  {
    brand: "Kohler",
    category: "Sanitaryware",
    description: "Premium bathroom fittings and sanitaryware for a touch of luxury.",
    icon: "🚿"
  },
  {
    brand: "Legrand",
    category: "Electricals",
    description: "Modular switches and fire-resistant cabling for safety.",
    icon: "🔌"
  }
];

export const FAQS: FAQ[] = [
  {
    question: "Why is Madhurawada considered the best choice for ready to move flats in Vizag?",
    answer: "Madhurawada is Vizag's fastest-growing IT & residential corridor. It offers high rental yields and the best flats for sale in Madhurawada Visakhapatnam, especially for those looking near the Google Data Center."
  },
  {
    question: "How do I find affordable flats in Visakhapatnam under 50 lakhs?",
    answer: "Happy Builders specializes in 2 BHK flats Madhurawada below 50 lakhs. We ensure every 2 BHK flat Madhurawada 50 lakh option we offer is RERA registered and home loan eligible."
  },
  {
    question: "2 BHK vs 3 BHK Madhurawada: Which is a better investment?",
    answer: "In the Madhurawada real estate market, 2 BHKs sell and rent significantly faster. Our specialized 2 BHK ready possession Vizag projects offer the highest ROI due to high demand from IT professionals."
  },
  {
    question: "What is the current appreciation rate in Vizag?",
    answer: "With the upcoming Google Data Center and infrastructure growth, property values in prime areas like Madhurawada are seeing steady double-digit annual appreciation."
  },
  {
    question: "Do you assist with home loans?",
    answer: "Absolutely. We have tie-ups with major banks like SBI and Union Bank of India to ensure smooth and quick loan processing for our customers."
  },
  {
    question: "How do you ensure construction quality?",
    answer: "We use only premium materials: Vizag Steel (TMT), Simhadri cement, and Kohler fittings, with rigorous quality checks at every stage."
  },
  {
    question: "Is there a water shortage issue in your projects?",
    answer: "No. We provide dual water supply systems (Borewell) along with rainwater harvesting to ensure 24/7 availability."
  },
  {
    question: "What documents should I check before buying?",
    answer: "Always check for RERA registration, LP Number (VMRDA/GVMC approved), Link Documents, and Encumbrance Certificate (EC). We provide clear title deeds for all units."
  },
  {
    question: "Can NRI customers buy properties easily?",
    answer: "Yes, we specialize in assisting NRIs with seamless documentation, power of attorney guidance, and remote project updates via WhatsApp."
  },
  {
    question: "What extra costs should I expect apart from the flat cost?",
    answer: "Please contact our sales team for the latest pricing, amenity charges, and GST details."
  }
];

export const SPECIFICATIONS: import('./types').Specification[] = [
  {
    category: "Structure",
    details: [
      "Earthquake resistant RCC framed Structure in accordance with IS code."
    ],
    icon: "🏗️"
  },
  {
    category: "Super Structure",
    details: [
      "In-table Red brick (Rajahmundry/machavaram) with Cement Mortar.",
      "6\" thick for external walls.",
      "4\" thick for internal walls."
    ],
    icon: "🧱"
  },
  {
    category: "Doors & Windows",
    details: [
      "Main Door: Well Seasoned Teakwood Frame & teakwood panelled shutter with melamine polishing & designer hardware of standard make (Godrej / Europa Locking systems).",
      "Internal Door: Well Seasoned Country wood Frames With flush doors.",
      "Windows: UPVC Sliding with glass, Safety Grill & Mosquito Mesh of standard make."
    ],
    icon: "🚪"
  },
  {
    category: "Flooring",
    details: [
      "Living & Dining: 2x2 size vitrified tiles of standard make.",
      "Bedrooms & Kitchen: 2x2 size vitrified tiles of standard make.",
      "Toilets, Balcony & Utilities: Acid resistant, Antiskid Ceramic tiles of standard make.",
      "Corridor, Staircase: Scratch proof tiles or Granite Flooring."
    ],
    icon: "✨"
  },
  {
    category: "Painting",
    details: [
      "External Walls: Two Coats of weather Proof Emulsion Paint (Asian/Berger) over one coat of primer and Two Coats cement Putty or texture Putty (Jk/Birla/Altek or Equivalent).",
      "Internal Walls: Two Coats Of Emulsion Paint (Asian/Berger) over one coat of primer & Two Coats of Cement Putty."
    ],
    icon: "🎨"
  },
  {
    category: "Kitchen",
    details: [
      "Black Granite Platform With Stainless steel sink.",
      "2' height tile dadoing."
    ],
    icon: "🍳"
  },
  {
    category: "Utility/Wash",
    details: [
      "Provision for washing machine.",
      "Wet area for washing utilities."
    ],
    icon: "🧺"
  },
  {
    category: "Bathrooms",
    details: [
      "Low Level Flooring With Acid resistant, Antiskid ceramic Tiles.",
      "Tiles Dado upto 7ft height.",
      "EWC & Sanitaryware of standard make (Jhonson/Parryware or Equivalent)."
    ],
    icon: "🚿"
  },
  {
    category: "Electrical",
    details: [
      "Finolex /RR wiring with PVC concealed conduit.",
      "Provision for adequate power points.",
      "TV Point in Living Room with protective MCB's.",
      "Power outlets for geyser in Bathrooms.",
      "Modular switches and sockets of Legrand/Schneider or Equivalent."
    ],
    icon: "⚡"
  },
  {
    category: "Plumbing",
    details: [
      "All Sanitary, Cpvc & Upvc Pipes and Fittings are of Standard Make (Astral/Trubore/Sudhakar or Equivalent)."
    ],
    icon: "🔧"
  },
  {
    category: "Water Supply",
    details: [
      "24/7 Water supply from bore."
    ],
    icon: "💧"
  },
  {
    category: "Lift",
    details: [
      "6 Passenger Telescopic lift of Standard make."
    ],
    icon: "🛗"
  },
  {
    category: "Generator",
    details: [
      "Power Backup for common amenities and 250 watt for each flat."
    ],
    icon: "🔋"
  },
  {
    category: "Security",
    details: [
      "Sophisticated round-the-clock security system.",
      "Surveillance cameras in common areas."
    ],
    icon: "🛡️"
  }
];
