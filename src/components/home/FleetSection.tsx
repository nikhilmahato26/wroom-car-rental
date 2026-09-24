import React, { useState, useMemo } from 'react';
import { Search, Info, ShieldCheck } from 'lucide-react';
import { FLEET_VEHICLES } from '../../data/fleet';
import { CarCard } from '../ui/CarCard';
import { SectionHeading } from '../ui/SectionHeading';
import type { VehicleCategory } from '../../types';

export const FleetSection: React.FC = () => {
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
        vehicle.fuel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="fleet" className="py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          tag="Self-Drive Car Fleet"
          title="OUR CAR FLEET"
          subtitle="Choose the right car for your journey. From economical city cars to premium SUVs and luxury vehicles."
        />

        {/* Mandatory Pricing & 350 KM Included Notice Banner */}
        <div className="mb-10 max-w-4xl mx-auto bg-white rounded-2xl border-l-4 border-red-600 border-slate-200 shadow-sm p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
                Transparent All-Inclusive Pricing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Every listed rental price is for <strong className="text-slate-900">24 HOURS</strong> and includes a generous <strong className="text-red-600">350 KM LIMIT</strong>. Zero hidden surprises.
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3 py-1.5 rounded-lg bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider shrink-0 border border-red-200">
            <ShieldCheck className="w-4 h-4" />
            <span>24h • 350 KM</span>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="mb-10 bg-white rounded-2xl p-3 sm:p-4 border border-slate-200 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
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
                      ? 'bg-red-600 text-white shadow-sm shadow-red-500/30'
                      : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200/80'
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

          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search car by name or type..."
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all"
            />
          </div>
        </div>

        {/* Fleet Grid */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <CarCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
            <h3 className="text-lg font-bold text-slate-900 mb-2">No matching vehicles found</h3>
            <p className="text-sm text-slate-500 mb-6">
              We couldn't find any vehicle matching "{searchQuery}". Try clearing the search or category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-lg bg-red-600 text-white font-bold text-sm shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
