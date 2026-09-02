import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

const SYSTEM_PROMPT = `You are Aman Gill's personal portfolio assistant. Answer any questions visitors have about Aman professionally and concisely.

Here is everything about Aman:
- Full-stack software engineer based in the Greater Toronto Area
- 5+ years of experience across fintech, telecom, and emergency tech
- Computer Science graduate from Western University with a specialization in CS and minor in Software Engineering

Work Experience:
- FDM Group (Mar 2026–Present): Spring Boot REST APIs, GCP CI/CD, React SPAs, Docker, Kubernetes
- Rogers Communications (May 2022–May 2025): Senior Software Engineer, eView platform managing 14,000+ devices, Node.js, .NET, Azure DevOps, React
- Resili (Jun 2020–Apr 2022): Angular UIs for emergency workflows, LangChain chatbot prototyping
- MyCart (Sep 2019–Mar 2020): Node.js API services, Bootstrap, SQL
- XP Eats (Sep 2019–Dec 2019): Python, PostgreSQL, automated order tracking

Projects:
- AI Agent: Python, Gemini API, tool calling and feedback loop
- SmartPay: Java, Spring Boot, JPA, REST API banking system
- HashProof: Aptos blockchain, Move smart contracts, file verification
- GCP CI/CD Pipeline: Docker, Kubernetes, Cloud Run, Artifact Registry

Skills: Java, Python, JavaScript, TypeScript, React, Spring Boot, Node.js, .NET, GCP, Docker, Kubernetes, SQL, Firebase, LangChain

Open to roles in: DevOps/cloud engineering, CI/CD, AI-focused engineering, full-stack development, Pipelines, and software architecture.
Email: amanpreetg100@gmail.com
GitHub: github.com/A-men007
LinkedIn: linkedin.com/in/amanpreet-gill

If someone wants to get in touch, encourage them to fill out the contact form on this page.
Keep answers concise, friendly, and professional.`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! I'm Aman's portfolio assistant. Ask me anything about his experience, skills, or projects — or just say hi!" }
  ]);
  const [input, setInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async () => {
    if (!form.name || !form.email) {
      setFormStatus("error");
      return;
    }
    try {
      await addDoc(collection(db, "contacts"), {
        ...form,
        timestamp: serverTimestamp(),
      });
      setFormStatus("success");
      setForm({ name: "", company: "", email: "", message: "" });
    } catch (err) {
      setFormStatus("error");
    }
  };

  const handleChat = async () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setChatLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
      const chat = model.startChat({
        history: [
          { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
          { role: "model", parts: [{ text: "Understood. I'm ready to answer questions about Aman." }] },
          ...messages.slice(1).map((m) => ({
            role: m.role === "user" ? "user" : "model",
            parts: [{ text: m.text }],
          })),
        ],
      });
      const result = await chat.sendMessage(userMessage);
      const response = result.response.text();
      setMessages((prev) => [...prev, { role: "assistant", text: response }]);
    } catch (err) {
      const errorMsg = err?.message || "";
      let fallback = "Sorry, I ran into an issue. Please try again.";
      
      if (errorMsg.includes("quota") || errorMsg.includes("limit") || errorMsg.includes("429")) {
        fallback = "I've hit my usage limit for now. Please reach out to Aman directly at amanpreetg100@gmail.com or fill out the contact form!";
      } else if (errorMsg.includes("token") || errorMsg.includes("length")) {
        fallback = "This conversation has gotten too long for me to handle. Please refresh the page to start a new chat!";
      }
      
      setMessages((prev) => [...prev, { role: "assistant", text: fallback }]);
    } finally {
      setChatLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    background: "#0d0d14",
    border: "1px solid #1a1a2e",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", padding: "80px 20px", color: "#fff" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
          <p style={{ fontSize: "11px", letterSpacing: "4px", color: "#00e5ff", marginBottom: "12px", textTransform: "uppercase" }}>Get In Touch</p>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, marginBottom: "16px" }}>Contact</h2>
          <p style={{ color: "#888", fontSize: "16px", maxWidth: "500px", margin: "0 auto" }}>
            Have a role in mind or want to learn more? Fill out the form or chat with my AI assistant.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>

          {/* Contact Form */}
          <div style={{ background: "#0d0d14", border: "1px solid #1a1a2e", borderRadius: "12px", padding: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: 700 }}>Send a Message</h3>

            <input
              name="name"
              placeholder="Name *"
              value={form.name}
              onChange={handleFormChange}
              style={inputStyle}
            />
            <input
              name="company"
              placeholder="Company (optional)"
              value={form.company}
              onChange={handleFormChange}
              style={inputStyle}
            />
            <input
              name="email"
              placeholder="Email *"
              value={form.email}
              onChange={handleFormChange}
              style={inputStyle}
            />
            <textarea
              name="message"
              placeholder="What are you looking for? (optional)"
              value={form.message}
              onChange={handleFormChange}
              rows={4}
              style={{ ...inputStyle, resize: "vertical" }}
            />

            <button
              onClick={handleFormSubmit}
              style={{
                padding: "12px",
                background: "#00e5ff",
                color: "#0a0a0f",
                border: "none",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "14px",
                cursor: "pointer",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Send Message
            </button>

            {formStatus === "success" && (
              <p style={{ color: "#00ff88", fontSize: "13px", margin: 0 }}>Message sent! I'll be in touch soon.</p>
            )}
            {formStatus === "error" && (
              <p style={{ color: "#ff4444", fontSize: "13px", margin: 0 }}>Please fill in your name and email.</p>
            )}
          </div>

          {/* Chatbot */}
          <div style={{ background: "#0d0d14", border: "1px solid #1a1a2e", borderRadius: "12px", padding: "32px", display: "flex", flexDirection: "column" }}>
            <h3 style={{ margin: "0 0 16px", fontSize: "16px", fontWeight: 700 }}>Ask Aman's Assistant</h3>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: "auto", maxHeight: "320px", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "16px" }}>
              {messages.map((msg, i) => (
                <div key={i} style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                }}>
                  <div style={{
                    maxWidth: "80%",
                    padding: "10px 14px",
                    borderRadius: msg.role === "user" ? "12px 12px 0 12px" : "12px 12px 12px 0",
                    background: msg.role === "user" ? "#00e5ff22" : "#1a1a2e",
                    border: `1px solid ${msg.role === "user" ? "#00e5ff44" : "#2a2a3e"}`,
                    fontSize: "13px",
                    color: "#ddd",
                    lineHeight: 1.6,
                  }}>
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                  </div>
                </div>
              ))}
              {chatLoading && (
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <div style={{ padding: "10px 14px", borderRadius: "12px 12px 12px 0", background: "#1a1a2e", border: "1px solid #2a2a3e", fontSize: "13px", color: "#555" }}>
                    Thinking...
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div style={{ display: "flex", gap: "8px" }}>
              <input
                placeholder="Ask about Aman's experience, skills..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleChat()}
                style={{ ...inputStyle, flex: 1 }}
              />
              <button
                onClick={handleChat}
                disabled={chatLoading}
                style={{
                  padding: "12px 20px",
                  background: chatLoading ? "#1a1a2e" : "#00e5ff",
                  color: chatLoading ? "#444" : "#0a0a0f",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "13px",
                  cursor: chatLoading ? "not-allowed" : "pointer",
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}