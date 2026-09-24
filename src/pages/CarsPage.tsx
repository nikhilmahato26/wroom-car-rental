import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Info, ShieldCheck } from 'lucide-react';
import { FLEET_VEHICLES, BUSINESS_INFO } from '../data/fleet';
import { CarCard } from '../components/ui/CarCard';
import type { VehicleCategory } from '../types';

export const CarsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<VehicleCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs: { id: VehicleCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Fleet', count: FLEET_VEHICLES.length },
    { id: 'cng', label: 'CNG & Economy', count: FLEET_VEHICLES.filter(v => v.category === 'cng').length },
    { id: 'auto', label: 'Automatics', count: FLEET_VEHICLES.filter(v => v.category === 'auto').length },
    { id: 'suv', label: 'SUVs & 7-Seaters', count: FLEET_VEHICLES.filter(v => v.category === 'suv').length },
    { id: 'sedan', label: 'Sedans', count: FLEET_VEHICLES.filter(v => v.category === 'sedan' || v.id === 'aura-cng' || v.id === 'verna-auto').length },
    { id: 'luxury', label: 'Luxury & Premium', count: FLEET_VEHICLES.filter(v => v.category === 'luxury').length },
  ];

  const filteredVehicles = useMemo(() => {
    return FLEET_VEHICLES.filter((vehicle) => {
      let matchesCategory = true;
      if (selectedCategory === 'cng') matchesCategory = vehicle.category === 'cng';
      else if (selectedCategory === 'auto') matchesCategory = vehicle.category === 'auto';
      else if (selectedCategory === 'suv') matchesCategory = vehicle.category === 'suv';
      else if (selectedCategory === 'sedan') matchesCategory = vehicle.category === 'sedan' || vehicle.id === 'aura-cng' || vehicle.id === 'verna-auto';
      else if (selectedCategory === 'luxury') matchesCategory = vehicle.category === 'luxury';

      const matchesSearch =
        vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.fuel.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <Helmet>
        <title>Our Self-Drive Car Fleet | {BUSINESS_INFO.name} Surat</title>
        <meta
          name="description"
          content="Explore our complete self-drive fleet in Surat: i10, Swift Auto, Baleno CNG, Ertiga, Venue, Sonet, Seltos, Virtus GT, Fortuner Legender & BMW. All rentals include 24 hours & 350 KM."
        />
      </Helmet>

      <div className="py-12 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-red-600 border border-red-200 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
              13+ Verified Vehicles Available
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              COMPLETE CAR FLEET
            </h1>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Every vehicle listed comes sanitized and ready to roll with our standard 24-Hour Rental & 350 KM Limit.
            </p>
          </div>

          {/* Pricing Highlight Strip */}
          <div className="mb-8 max-w-4xl mx-auto bg-white rounded-2xl border-l-4 border-red-600 border-slate-200 shadow-sm p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <Info className="w-5 h-5 text-red-600 shrink-0" />
              <span className="text-slate-700">
                All prices are for <strong>24 Hours</strong> and include a <strong>350 KM Limit</strong>. Extra KM charged nominally.
              </span>
            </div>
            <div className="inline-flex items-center gap-1 font-bold text-red-600 uppercase text-xs shrink-0">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero Hidden Fees</span>
            </div>
          </div>

          {/* Filters & Search */}
          <div className="mb-10 bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {filterTabs.map((tab) => {
                const isActive = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                      isActive
                        ? 'bg-red-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search car model or fuel..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-red-600 outline-none"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <CarCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
