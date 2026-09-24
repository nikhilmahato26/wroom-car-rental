import type { Vehicle, FAQItem } from '../types';

export const BUSINESS_INFO = {
  name: "WROOM CAR RENTAL",
  tagline: "Premium Self-Drive Cars in Surat",
  phone: "+91 8980944981",
  phoneRaw: "8980944981",
  whatsappRaw: "918980944981",
  email: "Wroomcarrental@gmail.com",
  address: "WROOM CAR RENTAL, Near Dukhiyano Darbar, Bharthana Road, Mota Varachha, Surat 394107",
  city: "Surat",
  area: "Mota Varachha",
  durationHighlight: "24 HOURS",
  kmLimitHighlight: "350 KM LIMIT",
  operatingHours: "Open 24/7 for Pickups & Customer Assistance",
  googleMapsUrl: "https://maps.google.com/?q=Mota+Varachha+Surat+Gujarat"
};

export const FLEET_VEHICLES: Vehicle[] = [
  {
    id: "i10-cng",
    name: "i10 CNG",
    type: "CNG",
    category: "cng",
    price: 3000,
    priceFormatted: "₹3,000",
    image: "/images/cars/i10.jpg",
    seats: "5 Seater",
    fuel: "CNG + Petrol",
    trans: "Manual",
    highlightBadge: "Top Mileage",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    description: "Compact, highly economical, and easy to park. Perfect for Surat city exploration and daily errands.",
    features: ["Dual Airbags", "Chilled AC", "Touchscreen Audio", "Clean & Sanitized"]
  },
  {
    id: "swift-auto",
    name: "Swift Auto",
    type: "Automatic",
    category: "auto",
    price: 3500,
    priceFormatted: "₹3,500",
    image: "/images/cars/swift.jpg",
    seats: "5 Seater",
    fuel: "Petrol",
    trans: "Automatic",
    highlightBadge: "Effortless Drive",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
    description: "Sporty and responsive automatic hatchback. Ideal for hassle-free navigation in Surat rush hour traffic.",
    features: ["Automatic Gearbox", "Cruise Control", "Apple CarPlay & Android Auto", "Excellent Fuel Efficiency"]
  },
  {
    id: "aura-cng",
    name: "Aura CNG",
    type: "CNG",
    category: "cng",
    price: 3500,
    priceFormatted: "₹3,500",
    image: "/images/cars/aura.jpg",
    seats: "5 Seater",
    fuel: "CNG + Petrol",
    trans: "Manual Sedan",
    highlightBadge: "Comfort Sedan",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    description: "Spacious compact sedan offering plush ride comfort, generous legroom, and a large trunk for luggage.",
    features: ["Spacious Boot", "Rear AC Vents", "Wireless Phone Charger", "Dual Fuel Economy"]
  },
  {
    id: "baleno-cng",
    name: "Baleno CNG",
    type: "CNG",
    category: "cng",
    price: 4000,
    priceFormatted: "₹4,000",
    image: "/images/cars/baleno.jpg",
    seats: "5 Seater",
    fuel: "CNG + Petrol",
    trans: "Manual Hatchback",
    highlightBadge: "Premium Hatch",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    description: "Class-leading cabin width, modern dashboard tech, and supreme comfort with high mileage.",
    features: ["360 Degree Camera", "Head-Up Display", "Wide Rear Bench", "Factory CNG"]
  },
  {
    id: "ertiga-cng",
    name: "Ertiga CNG",
    type: "CNG",
    category: "cng",
    price: 4000,
    priceFormatted: "₹4,000",
    image: "/images/cars/ertiga.jpg",
    seats: "7 Seater",
    fuel: "CNG + Petrol",
    trans: "Manual MPV",
    highlightBadge: "Family 7-Seater",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    description: "The crowd-favorite 7-seater family vehicle. Smooth highway ride, versatile seat folding, and low operating costs.",
    features: ["7 Full Seats", "Independent Roof AC", "Ample Luggage Mode", "Low Cost Per KM"]
  },
  {
    id: "venue",
    name: "Venue",
    type: "SUV",
    category: "suv",
    price: 4500,
    priceFormatted: "₹4,500",
    image: "/images/cars/venue.jpg",
    seats: "5 Seater",
    fuel: "Petrol",
    trans: "Compact SUV",
    highlightBadge: "Urban SUV",
    badgeClass: "bg-purple-50 text-purple-700 border-purple-200",
    description: "High ground clearance, aggressive styling, and effortless highway cruising for weekend getaways.",
    features: ["High Seating Position", "Electric Sunroof", "Drive Modes", "High Ground Clearance"]
  },
  {
    id: "kia-sonet",
    name: "Kia Sonet",
    type: "SUV",
    category: "suv",
    price: 5000,
    priceFormatted: "₹5,000",
    image: "/images/cars/sonet.jpg",
    seats: "5 Seater",
    fuel: "Petrol / Diesel",
    trans: "Sport SUV",
    highlightBadge: "Sporty & Bold",
    badgeClass: "bg-purple-50 text-purple-700 border-purple-200",
    description: "Bold tiger-nose styling, punchy performance, and premium cabin appointments for driving enthusiasts.",
    features: ["Bose Premium Audio", "Ventilated Front Seats", "LED Headlamps", "Sporty Cockpit"]
  },
  {
    id: "kia-seltos",
    name: "Kia Seltos",
    type: "SUV",
    category: "suv",
    price: 6000,
    priceFormatted: "₹6,000",
    image: "/images/cars/seltos.jpg",
    seats: "5 Seater",
    fuel: "Petrol / Diesel",
    trans: "Mid-size SUV",
    highlightBadge: "Most Demanded",
    badgeClass: "bg-purple-50 text-purple-700 border-purple-200",
    description: "Commanding road stance, luxurious dual-tone leatherette interior, and silky smooth highway ride.",
    features: ["Panoramic Sunroof", "Dual 10.25-inch Screens", "ADAS Safety Features", "High Ground Clearance"]
  },
  {
    id: "virtus-gt",
    name: "Virtus GT",
    type: "Premium Sedan",
    category: "sedan",
    price: 6500,
    priceFormatted: "₹6,500",
    image: "/images/cars/virtus.jpg",
    seats: "5 Seater",
    fuel: "TSI Turbo Petrol",
    trans: "DSG Sport Sedan",
    highlightBadge: "German Turbo",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
    description: "German engineering at its finest. Razor-sharp steering, 5-star GNCAP safety, and thrilling TSI turbo power.",
    features: ["1.5L TSI Turbo Engine", "5-Star GNCAP Safety", "Digital Cockpit", "Paddle Shifters"]
  },
  {
    id: "verna-auto",
    name: "Verna Auto",
    type: "Automatic Sedan",
    category: "auto",
    price: 6500,
    priceFormatted: "₹6,500",
    image: "/images/cars/verna.jpg",
    seats: "5 Seater",
    fuel: "Petrol",
    trans: "Automatic Sedan",
    highlightBadge: "Executive Luxury",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
    description: "Futuristic horizon styling, whisper-quiet cabin acoustics, and seamless automatic gear transitions.",
    features: ["Full Horizon LED Bar", "Heated & Ventilated Seats", "Bose 8-Speaker Audio", "Whisper Silent Cabin"]
  },
  {
    id: "hyundai-alcazar",
    name: "Hyundai Alcazar",
    type: "SUV",
    category: "suv",
    price: 7000,
    priceFormatted: "₹7,000",
    image: "/images/cars/alcazar.jpg",
    seats: "7 Seater",
    fuel: "Diesel / Petrol",
    trans: "Premium 7-Seater",
    highlightBadge: "Luxury 7-Seater",
    badgeClass: "bg-purple-50 text-purple-700 border-purple-200",
    description: "Premium executive 3-row comfort for family vacations, business delegates, and long highway journeys.",
    features: ["3-Row Captain Seats", "Voice Controlled Panoramic Sunroof", "Air Purifier with AQI", "Dual Zone Climate Control"]
  },
  {
    id: "fortuner-legender",
    name: "Fortuner Legender",
    type: "Premium SUV",
    category: "luxury",
    price: 20000,
    priceFormatted: "₹20,000",
    image: "/images/cars/fortuner.jpg",
    seats: "7 Seater",
    fuel: "2.8L 4x4 Diesel",
    trans: "Automatic 4x4",
    highlightBadge: "VIP Flagship",
    badgeClass: "bg-rose-50 text-red-700 border-red-200",
    description: "Unmatched road authority, bulletproof Toyota 4x4 dependability, and unmatched status for VIPs and weddings.",
    features: ["Aggressive Split Grille", "204 PS / 500 Nm Torque", "4x4 Terrain Modes", "VIP Road Presence"]
  },
  {
    id: "bmw-2-series",
    name: "BMW 2 Series",
    type: "Luxury",
    category: "luxury",
    price: 25000,
    priceFormatted: "₹25,000",
    image: "/images/cars/bmw.jpg",
    seats: "5 Seater",
    fuel: "TwinPower Turbo",
    trans: "Steptronic Auto",
    highlightBadge: "Pure German Luxury",
    badgeClass: "bg-rose-50 text-red-700 border-red-200",
    description: "Prestige luxury gran coupé craftsmanship, athletic rear-biased dynamics, and iconic BMW status.",
    features: ["BMW Live Cockpit Professional", "Frameless Doors", "TwinPower Turbocharged", "Supreme Status & Prestige"]
  }
];

export const RENTAL_REQUIREMENTS = [
  {
    step: "01",
    title: "Valid Driving License",
    description: "Original Indian Driving License (minimum 1 year driving experience required). Digital Digilocker / mParivahan verification accepted alongside physical verification.",
    badge: "Mandatory Document"
  },
  {
    step: "02",
    title: "Original Aadhaar Card / ID Proof",
    description: "Original Aadhaar Card or Passport for local Surat address / national identity verification. Mobile-linked OTP verification may be conducted.",
    badge: "Identity Verification"
  },
  {
    step: "03",
    title: "Refundable Security Deposit",
    description: "A small refundable deposit is collected at the time of car handover and refunded back to your UPI/Bank within 24 hours of safe return.",
    badge: "100% Refundable"
  },
  {
    step: "04",
    title: "Minimum Age Eligibility",
    description: "The primary driver must be at least 21 years of age with a valid 4-wheeler driver's license in active standing.",
    badge: "Age 21+ Years"
  },
  {
    step: "05",
    title: "Fuel Policy (Same to Same)",
    description: "Cars are handed over with a designated fuel level. Simply return the vehicle with the same fuel level to avoid refueling surcharges.",
    badge: "Same-to-Same Fuel"
  },
  {
    step: "06",
    title: "Clean Return & Smoke-Free",
    description: "All our vehicles are thoroughly detailed and sanitized. We uphold a strict 100% smoke-free and hygienic fleet policy.",
    badge: "Hygienic Fleet"
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is included in the 24-hour rental pricing?",
    answer: "Every listed price is for a complete 24-hour rental duration and includes 350 KM of driving allowance. For example, if you rent the Kia Seltos at ₹6,000, you have the vehicle for 24 hours with up to 350 KM included."
  },
  {
    id: "faq-2",
    question: "What happens if I exceed the 350 KM limit?",
    answer: "If you exceed the 350 KM daily limit, extra kilometers are charged at an economical, transparent rate per excess KM (typically ₹9 to ₹15/km depending on vehicle segment). There are zero hidden fees."
  },
  {
    id: "faq-3",
    question: "How do I book a car with WROOM CAR RENTAL?",
    answer: "Booking is fast and hassle-free! Simply click the 'Book Now' or 'WhatsApp' button on your desired car, select your date, and send us a message. Our team verifies your documents on WhatsApp within minutes and confirms your booking."
  },
  {
    id: "faq-4",
    question: "Where do I pick up the car in Surat?",
    answer: "Our primary hub is located at Near Dukhiyano Darbar, Bharthana Road, Mota Varachha, Surat 394107. We also provide doorstep delivery across Surat upon advance booking request."
  },
  {
    id: "faq-5",
    question: "Can I take the self-drive car out of Surat or Gujarat?",
    answer: "Yes! All WROOM CAR RENTAL vehicles have valid all-India permits and commercial insurance. You can travel across Gujarat and inter-state. State border entry taxes and highway FASTag tolls are payable directly by the renter."
  },
  {
    id: "faq-6",
    question: "How quickly is the security deposit refunded?",
    answer: "After returning the car and a brief 5-minute vehicle inspection, your security deposit is initiated immediately and credited to your UPI or bank account within 24 hours."
  },
  {
    id: "faq-7",
    question: "Can I extend my rental duration?",
    answer: "Yes, extensions are possible subject to vehicle availability. Just notify us via WhatsApp at least 4 hours before your scheduled return time."
  }
];
