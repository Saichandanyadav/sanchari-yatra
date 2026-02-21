import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();
    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;

    if (!apiKey) return NextResponse.json({ error: "API Key missing" }, { status: 500 });

    const listUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
    const listResponse = await fetch(listUrl);
    const listData = await listResponse.json();

    if (listData.error) {
      return NextResponse.json({ error: "API Key invalid or restricted." }, { status: 403 });
    }

    const availableModels = listData.models
      .filter((m: any) => m.supportedGenerationMethods.includes("generateContent"))
      .map((m: any) => m.name);

    if (availableModels.length === 0) {
      return NextResponse.json({ error: "No compatible models found." }, { status: 404 });
    }

    const targetModel = availableModels[0]; 
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/${targetModel}:generateContent?key=${apiKey}`;

    const contents = history.map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.text }],
    }));

    contents.push({
      role: "user",
      parts: [{ text: `You are 'Sanchari Yatra', a travel expert. 
      Rules: 
      1. Allow greetings. 
      2. Otherwise, only travel queries. 
      3. Non-travel query? Reply: 'I only provide help with travel-related queries. Please ask me about places, itineraries, or trip planning.'
      
      User Query: ${message}` }],
    });

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1500,
        }
      }),
    });

    const data = await response.json();

    if (data.error) {
       return NextResponse.json({ error: data.error.message }, { status: 500 });
    }

    if (!data.candidates || !data.candidates[0].content) {
      return NextResponse.json({ text: "I'm sorry, I couldn't generate a response." });
    }

    const botText = data.candidates[0].content.parts[0].text;
    return NextResponse.json({ text: botText });

  } catch (error: any) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}