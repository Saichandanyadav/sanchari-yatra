"use client";
import { useRouter } from 'next/navigation';
import { Coffee, Map, Clock, ArrowRight, Sparkles } from 'lucide-react';

const getaways = [
  {
    title: "Weekend Getaways from Hyderabad",
    items: [
      { name: "Ananthagiri Hills", dist: "80km", tag: "Nature", img: "https://goxp.in/wp-content/uploads/2019/07/maxresdefault.jpg" },
      { name: "Srisailam", dist: "213km", tag: "Spiritual", img: "https://www.srisailadevasthanam.org/static/media/SD-gallery-01.99bade47.png" },
      { name: "Bidar Fort", dist: "145km", tag: "History", img: "https://www.trawell.in/admin/images/upload/090985672Bidar_Fort_Main.jpg" },
      { name: "Nagarjuna Sagar", dist: "150km", tag: "Views", img: "https://tse3.mm.bing.net/th/id/OIP.NuDw_gVf4v_xBn82Cu9khQHaEV?pid=Api&P=0&h=180" },
      { name: "Warangal", dist: "148km", tag: "Architecture", img: "https://tse2.mm.bing.net/th/id/OIP.ahS0RuwDvpr2QcdmlUDTNwHaE6?pid=Api&P=0&h=180" }
    ]
  },
  {
    title: "Hidden Cafes in South Goa",
    items: [
      { name: "The Mill", loc: "Palolem", tag: "Converted Mill", img: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600" },
      { name: "Bibhitaki", loc: "Patnem", tag: "Vegan Friendly", img: "https://tse3.mm.bing.net/th/id/OIP.oeFtJVl0EF7tClWwVpCgXwHaJ3?pid=Api&P=0&h=180" },
      { name: "Blue Planet", loc: "Agonda", tag: "Organic", img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=600" },
      { name: "Patisserie Victoria", loc: "Margao", tag: "Bakery", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600" },
      { name: "Kopi Desa", loc: "Agonda", tag: "Cozy Vibes", img: "https://media-cdn.tripadvisor.com/media/photo-s/0e/60/48/77/kopi-desa.jpg" }
    ]
  }
];

export default function TopPicks() {
  const router = useRouter();

  const handleAskSanchari = () => {
    const prompt = "Give me a top 5 list of unique experiences in Hampi for a solo traveler.";
    const encodedPrompt = encodeURIComponent(prompt);
    router.push(`/?prompt=${encodedPrompt}`);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-12">
      <div className="bg-white py-12 md:py-20 px-6 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
             <div className="h-1 w-12 bg-blue-600 rounded-full" />
             <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Handpicked</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">Curated Top Picks</h1>
          <p className="text-slate-500 text-base md:text-xl max-w-2xl leading-relaxed">
            The ultimate travel shortlist. Discover handpicked local gems verified by Sanchari Yatra.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-12 space-y-16">
        {getaways.map((section, idx) => (
          <div key={idx} className="relative">
            <div className="flex items-center justify-between mb-6 px-2">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${idx === 0 ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'}`}>
                  {idx === 0 ? <Map size={24} /> : <Coffee size={24} />}
                </div>
                <h2 className="text-xl md:text-3xl font-black text-slate-800 tracking-tight">{section.title}</h2>
              </div>
            </div>

            <div className="flex overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 pb-6 no-scrollbar touch-pan-x">
              {section.items.map((item: any, i) => (
                <div key={i} className="min-w-[260px] md:min-w-0 group cursor-pointer bg-white p-3 rounded-[2rem] border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 md:h-40 rounded-[1.5rem] overflow-hidden mb-4">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-800 shadow-sm">
                      {item.tag}
                    </div>
                  </div>
                  <div className="px-2">
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">{item.name}</h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-2 font-medium">
                      {item.dist ? <><Clock size={14} className="text-blue-400" /> {item.dist} drive</> : <><MapPin size={14} className="text-orange-400" /> {item.loc}, Goa</>}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="relative overflow-hidden bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl">
          <Sparkles className="absolute top-[-20px] right-[-20px] text-white/5 w-64 h-64 -rotate-12" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black mb-3">Want a custom list?</h2>
              <p className="text-slate-400 text-lg">Our AI engine scans thousands of local spots to find your perfect vibe.</p>
            </div>
            <button 
              onClick={handleAskSanchari}
              className="w-full md:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-700 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-500/20"
            >
              Ask AI Assistant <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapPin({ size, className }: { size: number, className: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}