# Sanchari Yatra 🌍

An AI-powered travel planning assistant that helps users create personalized itineraries, explore destinations, and manage trip budgets.

![Sanchari Yatra](https://img.shields.io/badge/Version-2.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## 🎯 Overview

Sanchari Yatra is an intelligent travel companion that combines cutting-edge AI technology with an intuitive user interface to make travel planning effortless. Whether you're planning a weekend getaway, a budget backpacking trip, or a luxurious vacation, Sanchari Yatra helps you create detailed itineraries, discover hidden gems, and manage your travel budget.

## ✨ Key Features

- **🤖 AI-Powered Itinerary Generation**: Leverages Google Gemini API to create personalized travel plans
- **🗺️ Destination Discovery**: Explore 5+ curated destinations with detailed information and attractions
- **💬 Smart Chat History**: All conversations saved with unique IDs for easy retrieval and modification
- **💰 Real-Time Budget Calculator**: Calculate trip costs based on travel style, duration, and group size
- **📊 Expense Breakdown**: Visualize spending across accommodation, food, transport, and activities
- **📥 PDF Export**: Download itineraries as professional PDF documents
- **🎨 Beautiful UI**: Responsive design with smooth animations and intuitive navigation
- **📱 Mobile Responsive**: Fully optimized for desktop, tablet, and mobile devices
- **⚡ Instant Search**: Quick access to travel essentials, top picks, and curated recommendations

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** | React framework with App Router for server & client-side rendering |
| **TypeScript** | Type-safe JavaScript for better development experience |
| **Tailwind CSS** | Utility-first CSS framework for responsive design |
| **React** | UI library for interactive components |
| **Google Gemini API** | AI-powered text generation for travel recommendations |
| **UUID** | Unique identifier generation for chat management |
| **React Markdown** | Markdown rendering for formatted responses |
| **jsPDF** | PDF generation and export functionality |
| **Lucide Icons** | Beautiful, customizable SVG icon library |
| **LocalStorage API** | Client-side data persistence |

## 📦 Installation

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager
- Google Gemini API Key

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/Saichandanyadav/sanchari-yatra.git
cd sanchari-yatra
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
GOOGLE_GEMINI_API_KEY=your_gemini_api_key_here
```

Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey)

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**

Navigate to `http://localhost:3000`

## 🚀 Usage

### Creating a Trip
1. Click **"New Trip"** in the sidebar
2. You'll be redirected to a new chat with a unique ID
3. Start asking questions about your travel plans

### Generating Itineraries
- Use the **Budget Tool** to calculate trip costs
- Select destinations from **Destinations** section
- Click "Generate Plan" or "AI Smart Plan"
- Get personalized itineraries instantly

### Saving & Accessing Chats
- All chats are automatically saved in browser storage
- Each chat has a unique ID in the URL
- Previous conversations are preserved in history
- Click any chat to resume planning

### Exporting Plans
- Click **"PDF"** button on any AI response
- Download professionally formatted itinerary
- Share with travel companions

## 📂 Project Structure

```
sanchari-yatra/
├── app/
│   ├── page.tsx                 # Home chat component
│   ├── layout.tsx               # Root layout with sidebar
│   ├── globals.css              # Global styles
│   ├── api/
│   │   └── chat/
│   │       └── route.ts         # Gemini API integration
│   ├── components/
│   │   ├── Sidebar.tsx          # Navigation sidebar
│   │   ├── ChatWindow.tsx       # Chat display area
│   │   ├── InputArea.tsx        # Message input
│   │   └── MessageItem.tsx      # Individual message component
│   ├── destinations/
│   │   ├── page.tsx             # Destinations listing
│   │   └── [city]/
│   │       └── page.tsx         # Destination details
│   ├── budget-tool/
│   │   └── page.tsx             # Budget calculator
│   ├── top-picks/
│   │   └── page.tsx             # Curated recommendations
│   ├── essentials/
│   │   └── page.tsx             # Packing checklists
│   └── how-it-works/
│       └── page.tsx             # Project information
├── data/
│   └── cityData.ts              # Destination data
├── public/
│   └── sanchari-logo.png        # Logo asset
├── package.json
├── tsconfig.json
├── next.config.js
└── tailwind.config.js
```

## 🔌 API Integration

### Google Gemini API
The app uses Google Gemini's `generateContent` API for AI responses.

**Example request:**
```typescript
const response = await fetch(API_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ 
    contents: [
      { role: "user", parts: [{ text: userMessage }] }
    ],
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1500,
    }
  }),
});
```

## 💾 Data Persistence

- **Chat History**: Stored in browser's localStorage with chat ID as key
- **Active Chat**: Current chat ID stored for session persistence
- **Chat Metadata**: Title and creation date stored for each conversation

## 🎨 UI/UX Features

- **Dynamic Chat Titles**: Titles auto-generated from first message (first 4 words)
- **Real-time Updates**: Chat list updates without page refresh
- **Smooth Animations**: Fade-in effects and transitions throughout
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Neutral Color Palette**: Adapts well across different devices

## 🚦 Getting Started

### Quick Start Guide

1. **Create your first trip**
   ```
   Click "New Trip" → Chat ID: {unique-id} → Ask a question
   ```

2. **Use Budget Tool**
   ```
   Budget Tool → Adjust travelers & days → Select style → Generate Plan
   ```

3. **Explore Destinations**
   ```
   Destinations → Select city → View attractions → AI Smart Plan
   ```

4. **Get Travel Tips**
   ```
   Travel Essentials → Select terrain → Download packing list as PDF
   ```

## 🔐 Environment Variables

Required for production:

```env
GOOGLE_GEMINI_API_KEY=your_api_key_here
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🐛 Known Issues

- LocalStorage limited to ~5-10MB per domain
- Some older browsers may have issues with UUID generation
- PDF export may have formatting issues with very long itineraries

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📊 Statistics

- **Total Pages**: 7 (Home, Chat, Destinations, Budget Tool, Top Picks, Essentials, How It Works)
- **API Integration**: 1 (Google Gemini)
- **Components**: 6+ reusable components
- **Supported Destinations**: 5+ (Expandable)
- **Chat Capacity**: Unlimited with localStorage limits

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Saichandanyadav**
- GitHub: [@Saichandanyadav](https://github.com/Saichandanyadav)
- Focus: Full-stack web development with modern AI integration
- Location: India

## 🤝 Support

For support, issues, or questions:
1. Open an issue on [GitHub](https://github.com/Saichandanyadav/sanchari-yatra/issues)
2. Check existing discussions
3. Provide detailed error messages and reproduction steps

## 🙏 Acknowledgments

- Google for Gemini API
- Vercel for Next.js
- Tailwind Labs for Tailwind CSS
- All contributors and users of Sanchari Yatra

## 🔗 Links

- **GitHub Repository**: https://github.com/Saichandanyadav/sanchari-yatra
- **API Documentation**: [Google Gemini API Docs](https://ai.google.dev/docs)
- **Next.js Guide**: [Next.js Documentation](https://nextjs.org/docs)

---

**Made with ❤️ for travel enthusiasts worldwide**
