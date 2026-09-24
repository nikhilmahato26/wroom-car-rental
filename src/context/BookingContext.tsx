import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { FLEET_VEHICLES } from '../data/fleet';
import type { Vehicle } from '../types';

interface BookingContextType {
  isModalOpen: boolean;
  selectedVehicle: Vehicle | null;
  openBookingModal: (vehicleId?: string) => void;
  closeBookingModal: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(FLEET_VEHICLES[0]);

  const openBookingModal = (vehicleId?: string) => {
    if (vehicleId) {
      const found = FLEET_VEHICLES.find(v => v.id === vehicleId);
      if (found) setSelectedVehicle(found);
    }
    setIsModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BookingContext.Provider
      value={{
        isModalOpen,
        selectedVehicle,
        openBookingModal,
        closeBookingModal
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = (): BookingContextType => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
