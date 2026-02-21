"use client";
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Download, Copy, Check, Info } from 'lucide-react';
import jsPDF from 'jspdf';

export default function MessageItem({ message }: any) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'downloading'>('idle');

  const showStatus = (type: 'copied' | 'downloading') => {
    setStatus(type);
    setTimeout(() => setStatus('idle'), 2000);
  };

  const downloadPDF = () => {
    showStatus('downloading');
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    let cursorY = 55;
    doc.setFillColor(248, 250, 252);
    doc.rect(0, 0, pageWidth, doc.internal.pageSize.getHeight(), 'F');
    doc.setFillColor(37, 99, 235);
    doc.rect(0, 0, pageWidth, 45, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("SANCHARI YATRA", 20, 25);
    doc.setTextColor(30, 41, 59);
    doc.setFontSize(11);
    const lines = message.text.split('\n');
    lines.forEach((line: string) => {
      let processed = line.trim().replace(/\*\*/g, '').replace(/[#*-]/g, '');
      if (processed) {
        const splitLine = doc.splitTextToSize(processed, pageWidth - 40);
        doc.text(splitLine, 20, cursorY);
        cursorY += (splitLine.length * 7) + 2;
      }
    });
    doc.save(`sanchari-yatra.pdf`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(message.text);
    showStatus('copied');
  };

  return (
    <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4 w-full group animate-in fade-in slide-in-from-bottom-1 duration-200`}>
      <div className="relative max-w-[90%] sm:max-w-[85%] flex flex-col gap-1 overflow-hidden">
        <div className={`px-3 py-2 rounded-xl shadow-sm border transition-all break-words overflow-hidden ${
          message.role === 'user' 
          ? 'bg-blue-600 border-blue-500 text-white rounded-tr-none' 
          : 'bg-white border-slate-100 text-slate-800 rounded-tl-none'
        }`}>
          <div className={`prose prose-xs sm:prose-sm max-w-full break-words ${
            message.role === 'user' ? 'prose-invert' : 'prose-slate'
          } prose-p:my-0.5 prose-headings:my-1 prose-headings:text-sm prose-li:my-0 prose-ul:my-1`}>
            <ReactMarkdown>{message.text}</ReactMarkdown>
          </div>
        </div>

        {message.role === 'bot' && (
          <div className="flex items-center gap-4 ml-1 mt-1">
            <button onClick={copyToClipboard} className="flex items-center gap-1 text-[10px] font-bold text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-wider p-1">
              {status === 'copied' ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
              <span>{status === 'copied' ? 'Saved' : 'Copy'}</span>
            </button>
            <button onClick={downloadPDF} className="flex items-center gap-1 text-[10px] font-bold text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-wider p-1">
              {status === 'downloading' ? <Info size={12} className="animate-spin" /> : <Download size={12} />}
              <span>{status === 'downloading' ? 'Exporting' : 'PDF'}</span>
            </button>
          </div>
        )}
      </div>

      {status !== 'idle' && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] bg-slate-800/95 backdrop-blur-sm text-white px-4 py-2 rounded-full text-[11px] font-medium shadow-xl animate-in fade-in zoom-in slide-in-from-bottom-2 flex items-center gap-2 whitespace-now6wrap">
          {status === 'copied' ? <Check size={14} className="text-green-400" /> : <Download size={14} className="animate-bounce" />}
          {status === 'copied' ? 'Copied to clipboard' : 'Generating PDF document...'}
        </div>
      )}
    </div>
  );
}