"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { v4 as uuidv4 } from 'uuid';
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { PanelLeftOpen } from "lucide-react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [conversations, setConversations] = useState<any[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("sanchari_chats");
    if (saved) {
      const parsed = JSON.parse(saved);
      setConversations(parsed);
      const activeId = localStorage.getItem("sanchari_active_chat");
      if (activeId && parsed.some((c: any) => c.id === activeId)) {
        setActiveChatId(activeId);
      } else if (parsed.length > 0) {
        setActiveChatId(parsed[0].id);
        localStorage.setItem("sanchari_active_chat", parsed[0].id);
      }
    }
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("sanchari_chats", JSON.stringify(conversations));
    }
  }, [conversations, mounted]);

  useEffect(() => {
    if (activeChatId) {
      localStorage.setItem("sanchari_active_chat", activeChatId);
    }
  }, [activeChatId]);

  const startNewChat = () => {
    const existing = conversations.find(
      chat => chat.title === "New Trip Chat" && (!chat.messages || chat.messages.length === 0)
    );
    if (existing) {
      setActiveChatId(existing.id);
      localStorage.setItem("sanchari_active_chat", existing.id);
      router.push(`/?id=${existing.id}`);
      return;
    }
    
    const newId = uuidv4();
    const newChat = { id: newId, title: "New Trip Chat", messages: [], createdAt: new Date().toISOString() };
    const updated = [newChat, ...conversations];
    
    setConversations(updated);
    setActiveChatId(newId);
    localStorage.setItem("sanchari_active_chat", newId);
    localStorage.setItem(`sanchari_chat_${newId}`, JSON.stringify([]));
    localStorage.setItem(`sanchari_chat_${newId}_title`, JSON.stringify("New Trip Chat"));
    localStorage.setItem("sanchari_chats", JSON.stringify(updated));
    
    setTimeout(() => {
      router.push(`/?id=${newId}`);
    }, 50);
  };

  const deleteChat = (id: string) => {
    const updated = conversations.filter((c) => c.id !== id);
    setConversations(updated);
    localStorage.removeItem(`sanchari_chat_${id}`);
    localStorage.removeItem(`sanchari_chat_${id}_title`);
    if (activeChatId === id) {
      const newActiveId = updated[0]?.id || null;
      setActiveChatId(newActiveId);
      if (newActiveId) {
        localStorage.setItem("sanchari_active_chat", newActiveId);
        router.push(`/?id=${newActiveId}`);
      } else {
        localStorage.removeItem("sanchari_active_chat");
        router.push("/");
      }
    }
  };

  const selectChat = (id: string) => {
    setActiveChatId(id);
    localStorage.setItem("sanchari_active_chat", id);
    router.push(`/?id=${id}`);
  };

  if (!mounted) {
    return (
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div className="flex h-screen bg-white text-slate-900" />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex h-screen bg-white text-slate-900 overflow-hidden">
          <Sidebar
            conversations={conversations}
            activeId={activeChatId}
            onSelect={selectChat}
            onNew={startNewChat}
            onDelete={deleteChat}
            isOpen={isSidebarOpen}
            setIsOpen={setIsSidebarOpen}
          />
          <main className="flex-1 flex flex-col relative w-full h-full overflow-y-auto">
            {!isSidebarOpen && (
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="fixed top-4 left-4 z-30 p-2 bg-white border border-slate-200 rounded-lg shadow-md text-slate-600 hover:bg-slate-50 transition-all active:scale-95"
              >
                <PanelLeftOpen size={20} />
              </button>
            )}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}