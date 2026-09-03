import Typewriter from "typewriter-effect";
import ParticleBackground from "../components/ParticleBackground";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "#0a0a0f", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>

      {/* Particle Background */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        <ParticleBackground />
      </div>

      {/* Hero Content */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 20px" }}>

        <div style={{ fontFamily: "monospace", color: "#00e5ff", fontSize: "14px", marginBottom: "24px", letterSpacing: "2px" }}>
          <Typewriter
            options={{
              strings: [
                "> Initializing Aman Gill...",
                "> Software Engineer. Builder. Rider.",
                "> Full-Stack | Cloud | AI",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </div>

        <h1 style={{ fontSize: "clamp(40px, 8vw, 80px)", fontWeight: 800, color: "#ffffff", margin: "0 0 16px", letterSpacing: "-2px", lineHeight: 1 }}>
          Amanpreet Gill
        </h1>

        <p style={{ color: "#888", fontSize: "18px", maxWidth: "500px", margin: "0 auto 40px" }}>
          Full-Stack Engineer with 5+ years building scalable systems across fintech, telecom, and AI.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/about" style={{ padding: "12px 32px", border: "1px solid #00e5ff", color: "#00e5ff", borderRadius: "6px", fontWeight: 700, textDecoration: "none", fontSize: "14px", letterSpacing: "1px" }}>
            ABOUT ME
          </Link>
          <Link to="/projects" style={{ padding: "12px 32px", background: "#00e5ff", color: "#0a0a0f", borderRadius: "6px", fontWeight: 700, textDecoration: "none", fontSize: "14px", letterSpacing: "1px" }}>
            VIEW PROJECTS
          </Link>
          <Link to="/contact" style={{ padding: "12px 32px", border: "1px solid #00e5ff", color: "#00e5ff", borderRadius: "6px", fontWeight: 700, textDecoration: "none", fontSize: "14px", letterSpacing: "1px" }}>
            CONTACT ME
          </Link>
        </div>
      </div>
    </div>
  );
}