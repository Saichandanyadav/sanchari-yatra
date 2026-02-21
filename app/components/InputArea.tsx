"use client";
import { useState } from 'react';
import { SendHorizontal } from 'lucide-react';

export default function InputArea({ onSend, loading }: any) {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (!text.trim() || loading) return;
    onSend(text);
    setText('');
  };

  return (
    <div className="relative flex items-center">
      <input
        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 pr-16 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 transition-all disabled:opacity-50"
        placeholder="Ask Sanchari Yatra..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        disabled={loading}
      />
      <button
        onClick={handleSubmit}
        disabled={loading || !text.trim()}
        className="absolute right-3 p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
      >
        <SendHorizontal size={20} />
      </button>
    </div>
  );
}