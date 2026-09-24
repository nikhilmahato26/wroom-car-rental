export type VehicleCategory = 'all' | 'cng' | 'auto' | 'suv' | 'sedan' | 'luxury';

export interface Vehicle {
  id: string;
  name: string;
  type: string;
  category: VehicleCategory;
  price: number;
  priceFormatted: string;
  image: string;
  seats: string;
  fuel: string;
  trans: string;
  highlightBadge: string;
  badgeClass: string;
  description: string;
  features: string[];
}

export interface BookingFormData {
  vehicleId: string;
  days: number;
  pickupDate: string;
  customerName: string;
  customerPhone: string;
  pickupLocation: string;
  notes?: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  preferredCar?: string;
  message: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
