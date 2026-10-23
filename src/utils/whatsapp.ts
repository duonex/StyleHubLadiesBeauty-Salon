import { SALON_INFO } from '../data/salonData';
import type { BookingFormData } from '../types/salon';

/**
 * Encodes and creates a direct WhatsApp link with a structured message.
 */
export function createWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encoded}`;
}

/**
 * Builds standard salon appointment booking WhatsApp message.
 */
export function generateBookingWhatsAppMessage(
  data: BookingFormData,
  serviceOrPackageName: string
): string {
  return `*✨ NEW SALON BOOKING REQUEST — ${SALON_INFO.name}*

*Client Name:* ${data.fullName}
*Phone:* ${data.phone}${data.email ? `\n*Email:* ${data.email}` : ''}

*Requested Service / Package:* ${serviceOrPackageName}
*Preferred Date:* ${data.date}
*Preferred Time Slot:* ${data.timeSlot}

${data.notes ? `*Special Notes / Requests:* ${data.notes}\n` : ''}----------------------------------------
_Location: Mah Plaza, Nagercoil Road, KTC Nagar, Tirunelveli_
_Please confirm slot availability and appointment timing._`;
}

/**
 * Builds quick concierge inquiry WhatsApp message.
 */
export function generateConciergeWhatsAppMessage(topic: string = 'Appointment Inquiry'): string {
  return `Hello *${SALON_INFO.name}*,

I would like to enquire regarding: *${topic}*.
Please share available slots and pricing details.

Thank you!`;
}
