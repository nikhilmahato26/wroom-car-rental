import { BUSINESS_INFO } from '../data/fleet';
import type { BookingSchemaType, ContactSchemaType } from './validation';
import type { Vehicle } from '../types';

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

export function buildDirectWhatsAppCarLink(carName: string, priceFormatted: string): string {
  const text = `Hello WROOM CAR RENTAL! I am interested in renting the *${carName}* (${priceFormatted} for 24 Hours / 350 KM Limit). Please confirm vehicle availability and booking requirements for Surat.`;
  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
}

export function buildBookingWhatsAppLink(data: BookingSchemaType, vehicle: Vehicle): string {
  const totalHours = data.days * 24;
  const totalKm = data.days * 350;
  const totalPrice = formatINR(vehicle.price * data.days);

  const lines = [
    `*WROOM CAR RENTAL — SELF-DRIVE RESERVATION INQUIRY*`,
    `----------------------------------------`,
    `🚗 *Vehicle:* ${vehicle.name} (${vehicle.type})`,
    `⏱️ *Duration:* ${data.days} Day(s) (${totalHours} Hours)`,
    `🛣️ *Included Limit:* ${totalKm} KM`,
    `💰 *Estimated Total:* ${totalPrice}`,
    `📅 *Pickup Date:* ${data.pickupDate}`,
    `📍 *Pickup Option:* ${data.pickupLocation}`,
    `👤 *Customer Name:* ${data.customerName}`,
    `📱 *Customer Phone:* ${data.customerPhone}`,
    data.notes ? `📝 *Notes:* ${data.notes}` : ``,
    `----------------------------------------`,
    `*Surat Hub:* Near Dukhiyano Darbar, Mota Varachha, Surat`,
    `Please confirm car availability & reservation procedure.`
  ].filter(Boolean).join('\n');

  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(lines)}`;
}

export function buildContactWhatsAppLink(data: ContactSchemaType): string {
  const lines = [
    `*WROOM CAR RENTAL — GENERAL INQUIRY*`,
    `----------------------------------------`,
    `👤 *Name:* ${data.name}`,
    `📱 *Phone:* ${data.phone}`,
    data.email ? `📧 *Email:* ${data.email}` : '',
    data.preferredCar ? `🚗 *Interested Vehicle:* ${data.preferredCar}` : '',
    `💬 *Message:* ${data.message}`,
    `----------------------------------------`,
    `Sent from wroomcarrental.com website.`
  ].filter(Boolean).join('\n');

  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(lines)}`;
}
