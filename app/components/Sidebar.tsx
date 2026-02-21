"use client";
import { useState, useEffect } from 'react';
import { 
  Plus, Trash2, PanelLeftClose, AlertTriangle, 
  Map, Briefcase, Star, Calculator, Home, ChevronUp, ChevronDown, Layers, Menu, Info
} from 'lucide-react';
import Link from 'next/link';

export default function Sidebar({ 
  conversations, 
  activeId, 
  onSelect, 
  onNew, 
  onDelete,
  isOpen, 
  setIsOpen 
}: any) {
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isPagesExpanded, setIsPagesExpanded] = useState(false);
  const [localConversations, setLocalConversations] = useState<any[]>(conversations);

  useEffect(() => {
    setLocalConversations(conversations);
  }, [conversations]);

  useEffect(() => {
    const handleTitleUpdate = (event: any) => {
      const { id, title } = event.detail;
      setLocalConversations((prev) =>
        prev.map((c) => (c.id === id ? { ...c, title } : c))
      );
    };

    window.addEventListener('chatTitleUpdated', handleTitleUpdate);
    return () => window.removeEventListener('chatTitleUpdated', handleTitleUpdate);
  }, []);

  const confirmDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setDeleteId(id);
  };

  const executeDelete = () => {
    if (deleteId) {
      onDelete(deleteId);
      setDeleteId(null);
    }
  };

  const handleSelectChat = (id: string) => {
    onSelect(id);
    if (window.innerWidth < 768) setIsOpen(false);
  };

  const handleNewTrip = () => {
    onNew();
    if (window.innerWidth < 768) setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '/', icon: <Home size={18} /> },
    { name: 'Destinations', href: '/destinations', icon: <Map size={18} /> },
    { name: 'Travel Essentials', href: '/essentials', icon: <Briefcase size={18} /> },
    { name: 'Top Picks', href: '/top-picks', icon: <Star size={18} /> },
    { name: 'Budget Tool', href: '/budget-tool', icon: <Calculator size={18} /> },
    { name: 'How It Works', href: '/how-it-works', icon: <Info size={18} /> },
  ];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {deleteId && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-900/60">
          <div className="bg-white rounded-[2rem] p-6 max-w-sm w-full shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center gap-4 text-red-600 mb-4">
              <div className="bg-red-50 p-2 rounded-xl">
                <AlertTriangle size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Delete Trip?</h3>
            </div>
            <p className="text-slate-500 mb-6 text-sm">
              Permanently remove this itinerary and chat history.
            </p>
            <div className="flex gap-2">
              <button 
                onClick={() => setDeleteId(null)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-bold hover:bg-slate-50"
              >
                Cancel
              </button>
              <button 
                onClick={executeDelete}
                className="flex-1 px-4 py-2.5 rounded-xl bg-red-600 text-white text-sm font-bold hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-100 flex flex-col transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 ${!isOpen && 'md:w-0 md:opacity-0 md:overflow-hidden'}
      `}>
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-xl text-slate-900 tracking-tighter">
            <img src="/sanchari-logo.png" alt="Logo" className="w-9 h-9 object-contain mix-blend-multiply" />
            <div className="flex flex-col leading-none">
              <span>Sanchari</span>
              <span className="text-blue-600 text-[10px] tracking-[0.2em] uppercase ml-0.5 mt-1">Yatra</span>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-slate-100 rounded-xl text-slate-400 transition-colors"
          >
            <PanelLeftClose size={20} />
          </button>
        </div>

        <div className="px-4 mb-4">
          <button 
            onClick={handleNewTrip}
            className="w-full flex items-center justify-center gap-2 p-3.5 rounded-xl bg-slate-900 text-white hover:bg-blue-600 transition-all text-sm font-bold shadow-lg group"
          >
            <Plus size={16} className="group-hover:rotate-90 transition-transform" />
            New Trip
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-3 space-y-1">
          <div className="px-4 py-2">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">History</p>
          </div>
          
          {localConversations.length === 0 ? (
            <div className="px-4 py-6 text-center">
              <p className="text-slate-400 text-[11px] font-medium">No recent trips</p>
            </div>
          ) : (
            localConversations.map((c: any) => (
              <div 
                key={c.id} 
                onClick={() => handleSelectChat(c.id)}
                className={`group flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                  activeId === c.id 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'hover:bg-slate-50 text-slate-600'
                }`}
              >
                <div className={`shrink-0 w-1.5 h-1.5 rounded-full ${activeId === c.id ? 'bg-blue-600' : 'bg-slate-200'}`} />
                <span className="flex-1 truncate text-xs font-bold">{c.title}</span>
                <button
                  onClick={(e) => confirmDelete(e, c.id)}
                  className="shrink-0 p-1.5 text-slate-400 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="mt-auto p-3 bg-white">
          <div className="rounded-xl overflow-hidden bg-white border border-slate-100">
            <button 
              onClick={() => setIsPagesExpanded(!isPagesExpanded)}
              className="w-full flex items-center justify-between p-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Layers size={14} className="text-blue-600" />
                <span>Explore</span>
              </div>
              {isPagesExpanded ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${isPagesExpanded ? 'max-h-80' : 'max-h-0'}`}>
              <nav className="p-1 space-y-0.5 border-t border-slate-50">
                {navItems.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    onClick={() => { if (window.innerWidth < 768) setIsOpen(false); }}
                    className="flex items-center gap-3 px-3 py-2 text-[11px] font-bold text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <p className="text-[8px] font-bold text-slate-300 text-center uppercase tracking-widest mt-4">
            Sanchari Yatra v2.0
          </p>
        </div>
      </aside>
    </>
  );
}