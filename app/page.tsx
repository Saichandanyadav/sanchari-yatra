"use client";
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { MapPin, Calendar, Sparkles } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import ChatWindow from './components/ChatWindow';
import InputArea from './components/InputArea';

function HomeContent() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [chatTitle, setChatTitle] = useState("New Trip Chat");
  const [chatId, setChatId] = useState<string>("");
  const [initialized, setInitialized] = useState(false);
  const [titleGenerated, setTitleGenerated] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const promptParam = searchParams.get('prompt');
  const idParam = searchParams.get('id');

  useEffect(() => {
    if (idParam) {
      const saved = localStorage.getItem(`sanchari_chat_${idParam}`);
      const savedTitle = localStorage.getItem(`sanchari_chat_${idParam}_title`);
      
      if (saved) {
        setMessages(JSON.parse(saved));
      }
      setChatId(idParam);
      if (savedTitle) {
        const parsedTitle = JSON.parse(savedTitle);
        setChatTitle(parsedTitle);
        setTitleGenerated(parsedTitle !== "New Trip Chat");
      } else {
        setChatTitle("New Trip Chat");
        setTitleGenerated(false);
      }
      setInitialized(true);
    } else {
      const newId = uuidv4();
      setChatId(newId);
      setMessages([]);
      setChatTitle("New Trip Chat");
      setTitleGenerated(false);
      
      const chats = JSON.parse(localStorage.getItem("sanchari_chats") || "[]");
      const existingNew = chats.find((c: any) => c.title === "New Trip Chat" && (!c.messages || c.messages.length === 0));
      
      if (existingNew) {
        setChatId(existingNew.id);
        setChatTitle("New Trip Chat");
        setTitleGenerated(false);
        router.push(`/?id=${existingNew.id}`);
      } else {
        const newChat = { id: newId, title: "New Trip Chat", messages: [], createdAt: new Date().toISOString() };
        const updated = [newChat, ...chats];
        localStorage.setItem("sanchari_chats", JSON.stringify(updated));
        localStorage.setItem("sanchari_active_chat", newId);
        localStorage.setItem(`sanchari_chat_${newId}_title`, JSON.stringify("New Trip Chat"));
        router.push(`/?id=${newId}`);
      }
      setInitialized(true);
    }
  }, [idParam, router]);

  useEffect(() => {
    if (initialized && chatId && messages.length > 0) {
      localStorage.setItem(`sanchari_chat_${chatId}`, JSON.stringify(messages));
    }
  }, [messages, initialized, chatId]);

  useEffect(() => {
    if (initialized && chatId) {
      localStorage.setItem(`sanchari_chat_${chatId}_title`, JSON.stringify(chatTitle));
      
      const chats = JSON.parse(localStorage.getItem("sanchari_chats") || "[]");
      const updated = chats.map((c: any) => 
        c.id === chatId ? { ...c, title: chatTitle } : c
      );
      localStorage.setItem("sanchari_chats", JSON.stringify(updated));
      
      const event = new CustomEvent('chatTitleUpdated', { detail: { id: chatId, title: chatTitle } });
      window.dispatchEvent(event);
    }
  }, [chatTitle, initialized, chatId]);

  useEffect(() => {
    if (promptParam && initialized && !loading && messages.length === 0) {
      onSend(promptParam);
    }
  }, [promptParam, initialized]);

  const generateChatTitle = (userMessage: string) => {
    const words = userMessage.split(' ').slice(0, 4).join(' ');
    return words.length > 0 ? words : "Trip";
  };

  const onSend = async (text: string) => {
    if (!chatId) return;

    const newMessages = [...messages, { role: 'user', text }];
    setMessages(newMessages);
    
    if (!titleGenerated && messages.length === 0 && text.length > 0) {
      const newTitle = generateChatTitle(text);
      setChatTitle(newTitle);
      setTitleGenerated(true);
    }

    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: messages }),
      });
      const data = await res.json();
      const responseText = data.text || data.error || "I couldn't generate a response.";
      const finalMessages = [...newMessages, { role: 'bot', text: responseText }];
      setMessages(finalMessages);
    } catch (err) {
      const errorMessages = [...newMessages, { role: 'bot', text: "API Error: Unable to fetch response" }];
      setMessages(errorMessages);
    } finally {
      setLoading(false);
    }
  };

  const exampleQuestions = [
    { icon: <MapPin size={18} />, text: "Best Biryani spots & Charminar tour in Hyderabad" },
    { icon: <Calendar size={18} />, text: "3-day road trip from Hyderabad to Hampi" },
    { icon: <Sparkles size={18} />, text: "Must-visit waterfalls and tea estates in Munnar" }
  ];

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <ChatWindow messages={messages} loading={loading} />
      <div className={`p-4 w-full flex justify-center bg-white ${
        messages.length === 0 ? 'absolute inset-0 items-center bg-slate-50/50' : 'relative'
      }`}>
        <div className="w-full max-w-3xl">
          {!messages.length && (
            <div className="text-center mb-10 px-4">
              <div className="inline-block p-2 bg-white rounded-3xl mb-6 shadow-xl shadow-blue-100 rotate-3 overflow-hidden">
                <img src="/sanchari-logo.png" alt="Logo" className="w-16 h-16 object-contain mix-blend-multiply" />
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Sanchari Yatra</h1>
              <p className="text-slate-500 text-lg max-w-lg mx-auto leading-relaxed mb-8">
                Explore the world with your personal travel assistant.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-2xl mx-auto mb-4">
                {exampleQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => onSend(q.text)}
                    className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl text-left text-sm font-medium text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm"
                  >
                    <span className="text-blue-500">{q.icon}</span>
                    {q.text}
                  </button>
                ))}
              </div>
            </div>
          )}
          <InputArea onSend={onSend} loading={loading} />
          <p className="text-[10px] text-center text-slate-400 mt-4 uppercase tracking-[0.2em] font-semibold">
            Sanchari Yatra AI • Travel with Intelligence
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}