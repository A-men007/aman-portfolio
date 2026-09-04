import { useState } from "react";

const projects = [
  {
    title: "AI Agent",
    brief: "Autonomous AI agent built with Python and Gemini API.",
    gradient: "linear-gradient(90deg, #00e5ff, #7b2fff)",
    description: "An autonomous AI agent leveraging Google's Gemini API with tool calling and a feedback loop. The agent can execute tasks, evaluate its own output, and self-correct — demonstrating applied AI engineering beyond basic API calls.",
    stack: ["Python", "Gemini API", "Tool Calling", "Feedback Loop"],
    github: "https://github.com/A-men007/ai-agent",
  },
  {
    title: "SmartPay",
    brief: "Spring Boot banking API.",
    gradient: "linear-gradient(90deg, #ffb300, #ff6b00)",
    description: "A full-featured banking REST API built with Spring Boot, Spring Data JPA, and microservices architecture. Includes account management, transactions, and loan processing. Built with TDD using JUnit and Mockito, following SOLID principles throughout.",
    stack: ["Java", "Spring Boot", "JPA", "REST API", "JUnit", "Mockito"],
    github: "https://github.com/A-men007",
  },
  {
    title: "HashProof",
    brief: "Blockchain-based file verification system on Aptos. Built during Consensus Hackathon",
    gradient: "linear-gradient(90deg, #ff6b00, #ff2d7a)",
    description: "A file verification system leveraging the Aptos blockchain to enable on-chain tracking of off-chain files. Uses Move smart contracts to create immutable records of file hashes, enabling tamper-proof file authenticity verification.",
    stack: ["Aptos", "Move", "Blockchain", "File Verification"],
    github: "https://github.com/A-men007/file_chain_tagging",
  },
  {
    title: "GCP CI/CD Pipeline",
    brief: "Cloud deployment pipeline built on Google Cloud Platform.",
    gradient: "linear-gradient(90deg, #00e5ff, #00ff88)",
    description: "Designed and deployed a full CI/CD pipeline on GCP using Cloud Run, Artifact Registry, Docker, and Kubernetes. Includes automated build triggers, containerized deployments, and GCP logging and monitoring for full observability.",
    stack: ["GCP", "Docker", "Kubernetes", "Cloud Run", "CI/CD", "Artifact Registry"],
    github: "https://github.com/A-men007",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", padding: "80px 20px", color: "#fff" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
          <p style={{ fontSize: "11px", letterSpacing: "4px", color: "#00e5ff", marginBottom: "12px", textTransform: "uppercase" }}>Work</p>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, marginBottom: "16px" }}>
            Projects
          </h2>
          <p style={{ color: "#888", fontSize: "16px", maxWidth: "500px", margin: "0 auto" }}>
            A selection of things I've built — hover to learn more.
          </p>
        </div>

        {/* Project Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "24px" }}>
          {projects.map((project, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? "#0f1923" : "#0d0d14",
                border: `1px solid ${hovered === i ? "#00e5ff44" : "#1a1a2e"}`,
                borderRadius: "12px",
                padding: "28px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div style={{
                height: "4px",
                borderRadius: "12px 12px 0 0",
                background: project.gradient,
                margin: "-28px -28px 16px -28px"
              }} />

              <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#fff" }}>
                {project.title}
              </h3>

              <p style={{ margin: 0, fontSize: "14px", color: "#888", lineHeight: 1.7 }}>
                {hovered === i ? project.description : project.brief}
              </p>

              {hovered === i && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.stack.map((tech) => (
                    <span key={tech} style={{
                      padding: "3px 10px",
                      borderRadius: "20px",
                      border: "1px solid #00e5ff33",
                      fontSize: "11px",
                      color: "#00e5ff",
                      background: "#00e5ff11",
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <div style={{ marginTop: "auto", paddingTop: "12px", borderTop: `1px solid ${hovered === i ? "#00e5ff22" : "#1a1a2e"}` }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    fontSize: "12px",
                    color: hovered === i ? "#00e5ff" : "#555",
                    textDecoration: "none",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    transition: "color 0.3s ease",
                  }}
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <a
            href="https://github.com/A-men007"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "12px 40px",
              background: "transparent",
              border: "1px solid #00e5ff",
              color: "#00e5ff",
              borderRadius: "6px",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "13px",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            View All on GitHub →
          </a>
        </div>

      </div>
    </div>
  );
}