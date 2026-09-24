import { z } from 'zod';

export const bookingSchema = z.object({
  vehicleId: z.string().min(1, "Please select a vehicle"),
  days: z.number().min(1, "Rental must be at least 1 day (24 hours)").max(30, "For rentals above 30 days, please contact us directly"),
  pickupDate: z.string().min(1, "Please select a pickup date"),
  customerName: z.string().trim().min(2, "Name must be at least 2 characters"),
  customerPhone: z.string().trim().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  pickupLocation: z.string().min(1, "Please select a pickup hub or doorstep"),
  notes: z.string().optional()
});

export type BookingSchemaType = z.infer<typeof bookingSchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  email: z.string().trim().email("Please enter a valid email").optional().or(z.literal("")),
  preferredCar: z.string().optional(),
  message: z.string().trim().min(5, "Message must be at least 5 characters")
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
