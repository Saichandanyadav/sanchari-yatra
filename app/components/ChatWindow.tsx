"use client";
import { useEffect, useRef } from 'react';
import MessageItem from './MessageItem';

export default function ChatWindow({ messages, loading }: any) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  return (
    <div 
      ref={scrollRef} 
      className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth"
    >
      <div className="max-w-3xl mx-auto w-full">
        {messages.map((m: any, i: number) => (
          <MessageItem key={i} message={m} />
        ))}
        
        {loading && (
          <div className="flex justify-start mb-6">
            <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none border border-slate-200">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}