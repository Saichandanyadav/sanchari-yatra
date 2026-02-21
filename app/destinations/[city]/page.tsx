"use client";
import { useState, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MapPin, Sun, Info, ArrowLeft, Sparkles, Wind, CloudRain, ChevronDown, ChevronUp } from 'lucide-react';
import { notFound } from 'next/navigation';
import { CITY_DATA } from '@/data/cityData';

export default function DestinationPage({ params }: { params: Promise<{ city: string }> }) {
  const resolvedParams = use(params);
  const cityKey = resolvedParams.city.toLowerCase();
  const data = CITY_DATA[cityKey];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const router = useRouter();

  if (!data) return notFound();

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleAISmartPlan = () => {
    const prompt = `Plan a 3-day premium itinerary for ${data.name} including: ${data.experiences.map((e: any) => e.title).join(', ')}.`;
    const encodedPrompt = encodeURIComponent(prompt);
    router.push(`/?prompt=${encodedPrompt}`);
  };

  return (
    <div className="min-h-screen bg-slate-50/50">
      <div className="h-[40vh] md:h-[50vh] bg-[#0f172a] relative flex items-center justify-center text-center p-4 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <Link 
          href="/destinations" 
          className="absolute top-6 left-4 md:top-8 md:left-8 p-2.5 md:p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl text-white hover:bg-white/30 transition-all z-30"
        >
          <ArrowLeft size={20}/>
        </Link>
        <div className="relative z-10 w-full px-4">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white mb-3 tracking-tighter uppercase break-words leading-none">
            {data.name}
          </h1>
          <div className="inline-block px-4 py-1.5 bg-blue-600 text-white font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] rounded-full shadow-lg">
            {data.tagline}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-12 -mt-10 md:-mt-20 relative z-20">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-10">
          <div className="lg:col-span-8 space-y-6 md:space-y-10">
            <div className="p-6 md:p-10 bg-white rounded-3xl md:rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-4 md:mb-6 flex items-center gap-3">
                <Info className="text-blue-600 shrink-0" size={28}/> The Brief
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg md:text-xl font-medium italic">
                "{data.description}"
              </p>
            </div>

            <section>
              <h2 className="text-xl md:text-2xl font-black text-slate-800 mb-6 flex items-center gap-3 px-2">
                <MapPin className="text-blue-600 shrink-0"/> Places to Explore
              </h2>
              <div className="grid gap-4">
                {data.experiences.map((item: any, i: number) => (
                  <div key={i} className="overflow-hidden bg-white border border-slate-100 rounded-2xl md:rounded-3xl hover:border-blue-200 transition-all shadow-sm">
                    <button 
                      onClick={() => toggleExpand(i)}
                      className="w-full flex items-center justify-between p-4 md:p-6 text-left focus:outline-none"
                    >
                      <div className="flex items-center gap-4 md:gap-5">
                        <span className="shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-slate-50 text-blue-600 rounded-xl md:rounded-2xl font-black text-base md:text-lg border border-slate-100">
                          {i+1}
                        </span>
                        <span className="font-bold text-slate-700 text-base md:text-lg line-clamp-1">{item.title}</span>
                      </div>
                      {expandedIndex === i ? (
                        <ChevronUp className="text-blue-500 shrink-0" size={20} />
                      ) : (
                        <ChevronDown className="text-slate-300 shrink-0" size={20} />
                      )}
                    </button>
                    
                    {expandedIndex === i && (
                      <div className="px-4 pb-4 md:px-6 md:pb-6 animate-in slide-in-from-top-2 duration-300">
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-start">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-48 md:h-56 object-cover rounded-xl md:rounded-2xl shadow-inner bg-slate-100"
                          />
                          <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                            {item.info}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-6 space-y-6">
              <div className="p-6 md:p-8 bg-slate-900 rounded-3xl md:rounded-[2.5rem] text-white shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <Sun className="text-yellow-400" size={32}/>
                  <div>
                    <h3 className="font-black text-xl md:text-2xl">Climate Guide</h3>
                    <p className="text-blue-400 font-bold text-[10px] uppercase tracking-widest">Best: {data.weather.best}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-3 text-sm font-bold"><Wind size={16} className="text-orange-400"/> Summer</div>
                    <span className="text-sm font-medium">{data.weather.summer}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-3 text-sm font-bold"><CloudRain size={16} className="text-blue-400"/> Winter</div>
                    <span className="text-sm font-medium">{data.weather.winter}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleAISmartPlan}
                className="group relative w-full p-6 md:p-8 bg-blue-600 rounded-3xl md:rounded-[2.5rem] text-white text-center hover:bg-blue-700 active:scale-[0.98] transition-all shadow-xl shadow-blue-200/50"
              >
                <Sparkles className="mx-auto mb-3 md:mb-4 group-hover:rotate-12 transition-transform" size={28}/>
                <span className="block font-black text-lg md:text-xl mb-1">AI Smart Plan</span>
                <span className="text-blue-100 text-xs md:text-sm font-medium opacity-80 uppercase tracking-tighter">Instant 3-Day Itinerary</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}