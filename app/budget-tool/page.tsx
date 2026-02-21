"use client";
import { useState } from 'react';
import { Calculator, PieChart, Wallet, Plane, Utensils, Hotel, ArrowRight, Info, Minus, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BudgetTool() {
  const [people, setPeople] = useState(1);
  const [days, setDays] = useState(1);
  const [tier, setTier] = useState('mid');
  const router = useRouter();

  const pricing: any = {
    budget: { stay: 800, food: 700, transport: 500, miscellaneous: 500, label: "Backpacker" },
    mid: { stay: 2500, food: 1500, transport: 1000, miscellaneous: 1000, label: "Comfort" },
    luxury: { stay: 8000, food: 3500, transport: 2000, miscellaneous: 1500, label: "Elite" }
  };

  const current = pricing[tier];
  const totalPerDay = Object.values(current).filter(v => typeof v === 'number').reduce((a: any, b: any) => a + b, 0);
  const grandTotal = totalPerDay * people * days;

  const breakdown = [
    { icon: <Hotel size={18} />, label: "Stay", value: current.stay * people * days, color: "bg-blue-500" },
    { icon: <Utensils size={18} />, label: "Food", value: current.food * people * days, color: "bg-orange-500" },
    { icon: <Plane size={18} />, label: "Transport", value: current.transport * people * days, color: "bg-emerald-500" },
    { icon: <Wallet size={18} />, label: "Activities", value: current.miscellaneous * people * days, color: "bg-purple-500" },
  ];

  const handleGeneratePlan = () => {
    const prompt = `Create a ${tier} style ${days}-day itinerary for ${people} ${people === 1 ? 'person' : 'people'} with a total budget of ₹${grandTotal}. Include accommodation, food, transport, and activities suitable for ${tier} travelers.`;
    const encodedPrompt = encodeURIComponent(prompt);
    router.push(`/?prompt=${encodedPrompt}`);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-12 md:pb-20">
      <div className="bg-white border-b border-slate-100 pt-8 pb-8 md:pt-12 md:pb-12 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 flex items-center justify-center md:justify-start gap-3">
                <Calculator className="text-blue-600 shrink-0" size={32} /> Budget Planner
              </h1>
              <p className="text-slate-500 mt-2 text-sm md:text-lg">Real-time cost analysis for your Indian expedition.</p>
            </div>
            <div className="bg-slate-900 p-5 md:p-6 rounded-[2rem] text-white shadow-2xl shadow-slate-200">
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Estimated Total</p>
              <h2 className="text-3xl md:text-4xl font-black">₹{grandTotal.toLocaleString('en-IN')}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Info size={18} className="text-blue-600" /> Trip Configurations
            </h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase block mb-2 px-1">Group Size</label>
                  <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
                    <button onClick={() => setPeople(Math.max(1, people - 1))} className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors"><Minus size={16}/></button>
                    <span className="flex-1 text-center font-bold text-base">{people} {people === 1 ? 'Person' : 'People'}</span>
                    <button onClick={() => setPeople(people + 1)} className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors"><Plus size={16}/></button>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase block mb-2 px-1">Duration</label>
                  <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
                    <button onClick={() => setDays(Math.max(1, days - 1))} className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors"><Minus size={16}/></button>
                    <span className="flex-1 text-center font-bold text-base">{days} {days === 1 ? 'Day' : 'Days'}</span>
                    <button onClick={() => setDays(days + 1)} className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors"><Plus size={16}/></button>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase block mb-2 px-1">Travel Class</label>
                <div className="grid grid-cols-3 lg:grid-cols-1 gap-2">
                  {['budget', 'mid', 'luxury'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTier(t)}
                      className={`p-3 md:p-4 rounded-2xl border-2 text-center lg:text-left transition-all ${
                        tier === t ? 'border-blue-600 bg-blue-50/50 shadow-sm' : 'border-transparent bg-slate-50 hover:bg-slate-100'
                      }`}
                    >
                      <p className={`font-bold capitalize text-sm md:text-base ${tier === t ? 'text-blue-700' : 'text-slate-700'}`}>{t}</p>
                      <p className="hidden lg:block text-[10px] text-slate-500 font-medium">{pricing[t].label} standards</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-8 flex items-center gap-2">
              <PieChart size={18} className="text-blue-600" /> Analysis
            </h3>
            
            <div className="grid grid-cols-1 gap-8">
              <div className="space-y-5">
                {breakdown.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-[13px] font-bold text-slate-600">
                      <span className="flex items-center gap-2 uppercase tracking-wide text-[10px]">{item.icon} {item.label}</span>
                      <span className="text-slate-900 font-black">₹{item.value.toLocaleString()}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                      <div 
                        className={`h-full ${item.color} transition-all duration-700 ease-out`} 
                        style={{ width: `${(item.value / grandTotal) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col sm:flex-row items-center justify-around gap-6 text-center">
                <div>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Per Day</p>
                  <p className="text-2xl font-black text-slate-900">₹{totalPerDay.toLocaleString()}</p>
                </div>
                <div className="hidden sm:block h-10 w-px bg-slate-200"></div>
                <div>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Per Person</p>
                  <p className="text-2xl font-black text-slate-900">₹{(totalPerDay * days).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 rounded-[2rem] p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-100">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-black mb-1">Lock in this budget?</h4>
              <p className="text-blue-100 text-xs md:text-sm font-medium">Build a custom itinerary matching this price point.</p>
            </div>
            <button 
              onClick={handleGeneratePlan}
              className="w-full md:w-auto bg-white text-blue-600 px-8 py-4 rounded-xl font-black hover:bg-blue-50 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              Generate AI Plan <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}