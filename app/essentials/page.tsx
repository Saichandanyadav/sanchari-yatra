"use client";
import { useState } from 'react';
import jsPDF from 'jspdf';
import { 
  CheckCircle2, Phone, Languages, 
  Mountain, Sun, TreePine, Map, 
  ShieldCheck, Smartphone, Tent, Download,
  Wind, Church, Backpack
} from 'lucide-react';

export default function Essentials() {
  const [selectedTerrain, setSelectedTerrain] = useState('Mountains');

  const categories = [
    { name: 'Mountains', icon: <Mountain size={18} />, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
    { name: 'Beaches', icon: <Sun size={18} />, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' },
    { name: 'Jungles', icon: <TreePine size={18} />, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
    { name: 'Cities', icon: <Map size={18} />, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
    { name: 'Deserts', icon: <Wind size={18} />, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
    { name: 'Spiritual', icon: <Church size={18} />, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' },
    { name: 'Backpacking', icon: <Backpack size={18} />, color: 'text-slate-700', bg: 'bg-slate-100', border: 'border-slate-300' }
  ];

  const packData: Record<string, string[]> = {
    Mountains: ["Thermal wear", "Hiking boots", "Personal first aid", "Power bank", "Sunscreen (High SPF)", "Woolen Socks"],
    Beaches: ["Light cotton clothes", "Flip flops", "Sun hat", "Waterproof pouch", "Bug spray", "Quick-dry towel"],
    Jungles: ["Full-sleeve shirts", "Leech socks", "Headlamp", "Binoculars", "Rain poncho", "Odomos/Bug spray"],
    Cities: ["Comfortable sneakers", "Daypack", "Portable Wi-Fi", "Universal adapter", "Travel insurance docs", "Local currency"],
    Deserts: ["Cotton scarves", "Sunglasses", "Hydration salts", "Lip balm", "Moisturizer", "Lightweight jacket"],
    Spiritual: ["Modest clothing", "Easy slip-off shoes", "Hand sanitizer", "Socks for hot floors", "Small cash/change", "Shawl"],
    Backpacking: ["Microfiber towel", "Laundry detergent bits", "Multi-tool", "Padlock", "Ziploc bags", "First-aid tape"]
  };

  const downloadEssentialsPDF = () => {
    const doc = new jsPDF();
    const items = packData[selectedTerrain];
    doc.setFillColor(30, 41, 59);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("SANCHARI YATRA", 20, 20);
    doc.setFontSize(10);
    doc.text(`PACKING LIST: ${selectedTerrain.toUpperCase()}`, 20, 28);
    doc.setTextColor(30, 41, 59);
    doc.setFontSize(14);
    doc.text("Essential Items to Pack:", 20, 55);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    items.forEach((item: string, index: number) => {
      doc.text(`[ ]  ${item}`, 25, 70 + (index * 10));
    });
    doc.setDrawColor(200, 200, 200);
    doc.line(20, 160, 190, 160);
    doc.setFontSize(10);
    doc.text("Emergency Contacts:", 20, 175);
    doc.text("National Emergency: 112", 20, 185);
    doc.text("Tourist Helpline: 1363", 20, 195);
    doc.save(`Sanchari-Essentials-${selectedTerrain}.pdf`);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-12">
      <div className="bg-white border-b border-slate-200 pt-12 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Travel Essentials</h1>
          <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto">Smart checklists for your next big journey across India.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-8">
        <div className="flex overflow-x-auto no-scrollbar pb-4 md:pb-6 md:flex-wrap md:justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedTerrain(cat.name)}
              className={`flex items-center gap-2 px-6 py-3 md:py-4 rounded-full md:rounded-2xl font-bold transition-all whitespace-nowrap border flex-shrink-0 ${
                selectedTerrain === cat.name 
                ? `${cat.bg} ${cat.color} ${cat.border} shadow-sm scale-105` 
                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white p-6 md:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-3">
                <Tent className="text-blue-600" size={24} /> {selectedTerrain} Gear
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {packData[selectedTerrain].map((item: string) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 transition-all hover:border-blue-200 hover:bg-white">
                  <CheckCircle2 size={20} className="text-slate-300 flex-shrink-0" />
                  <span className="text-slate-700 font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 rounded-3xl p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <ShieldCheck size={120} className="absolute -right-8 -top-8 text-blue-500/30" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3">Offline Access</h3>
              <p className="text-blue-100 mb-8 text-sm md:text-base">Take your checklist to remote areas with no signal.</p>
              <button 
                onClick={downloadEssentialsPDF}
                className="w-full bg-white text-blue-600 py-4 rounded-xl font-bold hover:bg-blue-50 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Download size={18} /> Download PDF
              </button>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-white grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="p-3 bg-slate-800 rounded-2xl mb-4"><Phone className="text-blue-400" /></div>
            <h3 className="text-lg font-bold mb-2">Support</h3>
            <p className="text-slate-400 text-sm">Police/Medical: 112</p>
            <p className="text-slate-400 text-sm">Tourism: 1363</p>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left border-y md:border-y-0 md:border-x border-slate-800 py-8 md:py-0 md:px-8">
            <div className="p-3 bg-slate-800 rounded-2xl mb-4"><Languages className="text-emerald-400" /></div>
            <h3 className="text-lg font-bold mb-2">Etiquette</h3>
            <p className="text-slate-400 text-sm leading-relaxed">A head nod and "Namaste" or "Shukriya" are highly appreciated.</p>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="p-3 bg-slate-800 rounded-2xl mb-4"><Smartphone className="text-orange-400" /></div>
            <h3 className="text-lg font-bold mb-2">Connectivity</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Grab a local SIM (Airtel/Jio) at the airport with your passport.</p>
          </div>
        </div>
      </div>
    </div>
  );
}