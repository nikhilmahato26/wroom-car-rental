import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, MapPin } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import { FLEET_VEHICLES } from '../../data/fleet';
import { bookingSchema } from '../../lib/validation';
import type { BookingSchemaType } from '../../lib/validation';
import { buildBookingWhatsAppLink, formatINR } from '../../lib/utils';

export const BookingModal: React.FC = () => {
  const { isModalOpen, selectedVehicle, closeBookingModal } = useBooking();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors }
  } = useForm<BookingSchemaType>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      vehicleId: selectedVehicle?.id || FLEET_VEHICLES[0].id,
      days: 1,
      pickupDate: new Date().toISOString().split('T')[0],
      customerName: '',
      customerPhone: '',
      pickupLocation: 'Mota Varachha Hub (Near Dukhiyano Darbar)',
      notes: ''
    }
  });

  // Keep form in sync when selectedVehicle in context changes
  useEffect(() => {
    if (selectedVehicle) {
      setValue('vehicleId', selectedVehicle.id);
    }
  }, [selectedVehicle, setValue]);

  // Prevent background scroll when modal open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const watchedVehicleId = watch('vehicleId');
  const watchedDays = watch('days') || 1;

  const currentCar =
    FLEET_VEHICLES.find((v) => v.id === watchedVehicleId) ||
    selectedVehicle ||
    FLEET_VEHICLES[0];

  const totalHours = watchedDays * 24;
  const totalKm = watchedDays * 350;
  const totalPrice = currentCar.price * watchedDays;

  const onSubmit = (data: BookingSchemaType) => {
    const waUrl = buildBookingWhatsAppLink(data, currentCar);
    window.open(waUrl, '_blank');
    closeBookingModal();
    reset();
  };

  if (!isModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeBookingModal}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-lg max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-y-auto z-10"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-xs z-10">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-600 bg-red-50 px-2.5 py-0.5 rounded">
                Surat Self-Drive
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-1">
                Book Your Car
              </h3>
            </div>
            <button
              type="button"
              onClick={closeBookingModal}
              className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-5 sm:p-6 space-y-4">
            {/* Selected Car Highlight Pill */}
            <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-4 border border-red-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={currentCar.image}
                  alt={currentCar.name}
                  className="w-16 h-12 rounded-lg object-cover bg-white shrink-0 border border-slate-200"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/hero-car.jpg';
                  }}
                />
                <div>
                  <h4 className="font-extrabold text-base text-slate-900 leading-tight">
                    {currentCar.name}
                  </h4>
                  <span className="text-xs text-slate-500 font-semibold">
                    {currentCar.isPerKm ? 'Executive Luxury Van • Distance Billed' : `${totalHours} Hours • ${totalKm} KM Included`}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="block text-xs font-bold text-slate-500 uppercase">
                  {currentCar.isPerKm ? 'Fare' : 'Total'}
                </span>
                <span className="text-lg font-black text-red-600">
                  {currentCar.isPerKm ? currentCar.priceFormatted : formatINR(totalPrice)}
                </span>
              </div>
            </div>

            {/* Vehicle Selector */}
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                Select Vehicle
              </label>
              <select
                {...register('vehicleId')}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold bg-white focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none"
              >
                {FLEET_VEHICLES.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.name} ({v.type}) — {v.priceFormatted}{v.isPerKm ? ' (Per KM)' : '/24h'}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration (Days = 24h Blocks) */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Duration (24-hr Blocks)
                </label>
                <select
                  {...register('days', { valueAsNumber: true })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold bg-white focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none"
                >
                  <option value={1}>1 Day (24 Hours - 350 KM)</option>
                  <option value={2}>2 Days (48 Hours - 700 KM)</option>
                  <option value={3}>3 Days (72 Hours - 1,050 KM)</option>
                  <option value={4}>4 Days (96 Hours - 1,400 KM)</option>
                  <option value={5}>5 Days (120 Hours - 1,750 KM)</option>
                  <option value={7}>7 Days (168 Hours - 2,450 KM)</option>
                </select>
                {errors.days && (
                  <p className="text-[11px] text-red-600 font-bold mt-1">
                    {errors.days.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Pickup Date
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  {...register('pickupDate')}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold bg-white focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none"
                />
                {errors.pickupDate && (
                  <p className="text-[11px] text-red-600 font-bold mt-1">
                    {errors.pickupDate.message}
                  </p>
                )}
              </div>
            </div>

            {/* Customer Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Anand Sharma"
                  {...register('customerName')}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none ${
                    errors.customerName
                      ? 'border-red-500 bg-red-50/40'
                      : 'border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-100'
                  }`}
                />
                {errors.customerName && (
                  <p className="text-[11px] text-red-600 font-bold mt-1">
                    {errors.customerName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  10-Digit Mobile *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 9876543210"
                  {...register('customerPhone')}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none ${
                    errors.customerPhone
                      ? 'border-red-500 bg-red-50/40'
                      : 'border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-100'
                  }`}
                />
                {errors.customerPhone && (
                  <p className="text-[11px] text-red-600 font-bold mt-1">
                    {errors.customerPhone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Pickup Location */}
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-600" />
                Pickup Location Preference
              </label>
              <select
                {...register('pickupLocation')}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold bg-white focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none"
              >
                <option value="Mota Varachha Hub (Near Dukhiyano Darbar)">
                  Mota Varachha Hub (Near Dukhiyano Darbar, Surat)
                </option>
                <option value="Surat Railway Station Delivery">
                  Surat Railway Station Delivery (On Request)
                </option>
                <option value="Surat Airport (STV) Delivery">
                  Surat Airport (STV) Delivery (On Request)
                </option>
                <option value="Doorstep Home / Hotel Delivery">
                  Doorstep Home / Hotel Delivery (Surat City)
                </option>
              </select>
            </div>

            {/* WhatsApp Dispatch Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-lg shadow-emerald-600/25 active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Confirm & Reserve via WhatsApp</span>
              </button>
              <p className="text-[11px] text-slate-500 text-center mt-2">
                Fast verification on WhatsApp. Pay small token to confirm.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
