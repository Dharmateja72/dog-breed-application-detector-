import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
    try {
        console.log("Chat API called");
        const apiKey = process.env.GROQ_API_KEY;
        if (!apiKey) {
            console.error("GROQ_API_KEY is missing");
            return NextResponse.json({ error: 'Server misconfiguration: API key missing' }, { status: 500 });
        }

        const body = await req.json();
        const { messages } = body;

        console.log("Received messages:", messages?.length);

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json(
                { error: 'Messages are required and must be an array' },
                { status: 400 }
            );
        }

        const systemMessage = {
            role: "system",
            content: "You are a friendly and knowledgeable dog specialist named WoofWise AI. Your goal is to help dog owners with questions about breeds, training, nutrition, and general care. Always be positive, encouraging, and provide safe, expert advice. If a question is medical emergency related, advise them to see a veterinarian immediately. Keep your answers concise and easy to read."
        };

        console.log("Sending request to Groq...");
        const completion = await groq.chat.completions.create({
            messages: [systemMessage, ...messages],
            model: "llama-3.3-70b-versatile",
            temperature: 0.7,
            max_tokens: 1024,
        });
        console.log("Groq response received");

        const reply = completion.choices[0]?.message?.content || "I'm sorry, I couldn't understand that. Could you try rephrasing?";

        return NextResponse.json({ reply });

    } catch (error) {
        console.error('Error in chat route:', error);
        // Cast error to any to access potential properties safely for logging
        const err = error as any;
        return NextResponse.json(
            { error: 'Internal server error processing your request.', details: err.message },
            { status: 500 }
        );
    }
}
