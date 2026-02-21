"use client";
import Link from 'next/link';
import { MapPin, ChevronRight, Compass, Stars, ArrowLeft } from 'lucide-react';

const CITIES = [
  { id: 'hyderabad', name: 'Hyderabad', description: 'Biryani, Forts & Tech Hubs', color: 'from-orange-500 to-red-600', count: '7 Places' },
  { id: 'bangalore', name: 'Bangalore', description: 'Gardens, Pubs & Startups', color: 'from-green-500 to-emerald-700', count: '7 Places' },
  { id: 'munnar', name: 'Munnar', description: 'Tea Estates & Misty Hills', color: 'from-teal-400 to-cyan-600', count: '7 Places' },
  { id: 'jaipur', name: 'Jaipur', description: 'Royal Palaces & Pink City Streets', color: 'from-pink-500 to-rose-600', count: '7 Places' },
  { id: 'goa', name: 'Goa', description: 'Golden Beaches & Party Vibes', color: 'from-yellow-400 to-orange-500', count: '7 Places' }
];

export default function DestinationsIndex() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] px-4 py-10 md:p-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 md:mb-16 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="p-2.5 bg-blue-600 rounded-xl shadow-lg shadow-blue-100">
              <Compass className="text-white" size={20} />
            </div>
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">Curation 2026</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter">
            Where to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Next?</span>
          </h1>
          <p className="text-slate-500 text-base md:text-lg max-w-xl leading-relaxed">
            Handpicked destinations for your next escape. Select a city to view top experiences and generate AI itineraries.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {CITIES.map((city) => (
            <Link 
              key={city.id} 
              href={`/destinations/${city.id}`}
              className="group relative bg-white border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${city.color} mb-5 md:mb-6 flex items-center justify-center text-white shadow-lg`}>
                <MapPin size={24} className="md:w-7 md:h-7" />
              </div>
              
              <div className="mb-6 md:mb-8">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{city.count}</span>
                  <Stars size={10} className="text-blue-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-2">{city.name}</h2>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium line-clamp-2">{city.description}</p>
              </div>

              <div className="flex items-center text-sm md:text-base text-slate-400 group-hover:text-blue-600 font-bold transition-colors">
                Explore Guide <ChevronRight size={18} className="ml-1 group-hover:ml-3 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 md:mt-24 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <Link href="/" className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 active:scale-95 transition-all shadow-xl shadow-slate-200">
            <ArrowLeft size={18} /> Back to AI Planner
          </Link>
          <div className="text-center md:text-right">
            <p className="text-slate-900 font-black text-sm mb-1 uppercase tracking-widest">Sanchari Yatra AI</p>
            <p className="text-slate-400 text-xs font-medium">Your Intelligent Travel Companion • 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}