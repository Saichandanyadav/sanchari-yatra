"use client";
import { 
  Github, MapPin, MessageSquare, Zap, 
  Sparkles, Code2, User, Linkedin, 
  Instagram, Twitter, Globe, ExternalLink 
} from 'lucide-react';
import Link from 'next/link';

export default function HowItWorks() {
  const features = [
    {
      icon: <Sparkles size={24} />,
      title: "AI-Powered Travel Planning",
      description: "Leveraging Google Gemini API to generate personalized itineraries based on your preferences and budget."
    },
    {
      icon: <MapPin size={24} />,
      title: "Destination Discovery",
      description: "Explore curated destinations with detailed information about attractions, weather, and local experiences."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Smart Chat History",
      description: "All your travel conversations are saved with unique IDs, making it easy to revisit and modify your plans."
    },
    {
      icon: <Zap size={24} />,
      title: "Real-Time Budget Calculation",
      description: "Instantly calculate trip costs with dynamic pricing based on travel style, duration, and group size."
    }
  ];

  const techStack = [
    { name: "Next.js 14", desc: "React framework with App Router" },
    { name: "TypeScript", desc: "Type-safe JavaScript development" },
    { name: "Tailwind CSS", desc: "Utility-first styling framework" },
    { name: "Google Gemini API", desc: "AI-powered text generation" },
    { name: "UUID", desc: "Unique chat identification" },
    { name: "React Markdown", desc: "Markdown rendering in chat" },
    { name: "jsPDF", desc: "PDF export functionality" },
    { name: "Lucide Icons", desc: "Beautiful icon library" }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/Saichandanyadav", label: "GitHub", color: "hover:bg-slate-800" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/Saichandanyadav", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: <Twitter size={20} />, href: "https://twitter.com/Saichandanyadav", label: "X / Twitter", color: "hover:bg-sky-500" },
    { icon: <Instagram size={20} />, href: "https://instagram.com/Saichandanyadav", label: "Instagram", color: "hover:bg-pink-600" }
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-gradient-to-b from-blue-600 to-blue-500 py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">How It Works</h1>
          <p className="text-blue-100 text-lg max-w-2xl">Discover the technology and vision behind Sanchari Yatra, your intelligent travel companion.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-16">
        <div className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-8 bg-white border border-slate-200 rounded-3xl hover:shadow-xl hover:shadow-blue-100 transition-all">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-12">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-300 transition-all">
                <h3 className="font-bold text-slate-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-slate-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12">Step-by-Step Guide</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex gap-6 p-8 bg-blue-50 rounded-3xl border border-blue-200">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-lg">1</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">Start Planning</h3>
                <p className="text-slate-600">Click "New Trip" to create a new chat and start your travel planning journey.</p>
              </div>
            </div>
            <div className="flex gap-6 p-8 bg-emerald-50 rounded-3xl border border-emerald-200">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-black text-lg">2</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">Ask Questions</h3>
                <p className="text-slate-600">Query our AI about destinations, budgets, attractions, or any travel-related questions.</p>
              </div>
            </div>
            <div className="flex gap-6 p-8 bg-orange-50 rounded-3xl border border-orange-200">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-2xl flex items-center justify-center font-black text-lg">3</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">Personalized Plans</h3>
                <p className="text-slate-600">Receive AI-generated travel plans tailored to your preferences, budget, and style.</p>
              </div>
            </div>
            <div className="flex gap-6 p-8 bg-purple-50 rounded-3xl border border-purple-200">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-2xl flex items-center justify-center font-black text-lg">4</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">Save & Export</h3>
                <p className="text-slate-600">All chats are automatically saved. Download your itineraries as PDF for offline reference.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-12">Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Code2 className="text-blue-600" /> Project Overview
              </h3>
              <div className="space-y-4 text-slate-600">
                <p><span className="font-bold text-slate-900">Name:</span> Sanchari Yatra</p>
                <p><span className="font-bold text-slate-900">Description:</span> An AI-powered travel planning assistant that helps users create personalized itineraries and manage trip budgets.</p>
                <p><span className="font-bold text-slate-900">Version:</span> 2.0</p>
                <p><span className="font-bold text-slate-900">Purpose:</span> Simplify travel planning with intelligent recommendations.</p>
              </div>
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <User className="text-emerald-600" /> Developer Details
              </h3>
              <div className="space-y-4 text-slate-600">
                <p><span className="font-bold text-slate-900">Developer:</span> Sai Chandan Gundaboina</p>
                <p className="flex items-center gap-2 font-bold text-slate-900">Connect with me:</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {socialLinks.map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`p-3 bg-slate-100 rounded-xl text-slate-600 transition-all hover:text-white ${social.color}`}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <p className="pt-4 text-sm italic">Available for full-stack collaborations and AI integrations.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Globe size={300} />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl font-black mb-6">Let's Build the Future of Travel</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Sanchari Yatra is an open-source initiative. Whether you're a traveler with an idea or a developer with a PR, I'd love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/Saichandanyadav/sanchari-yatra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20"
              >
                <Github size={20} /> Repository
              </a>
              <Link 
                href="/"
                className="flex items-center gap-2 bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-700 transition-all"
              >
                Plan a Trip <ExternalLink size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm font-medium tracking-widest uppercase flex items-center justify-center gap-2">
            Made with <span className="text-red-500 animate-pulse">❤️</span> by Saichandanyadav
          </p>
        </div>
      </div>
    </div>
  );
}