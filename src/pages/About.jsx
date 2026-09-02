import { useState } from "react";

const experiences = [
  {
    company: "FDM Group",
    role: "Software Engineer Consultant",
    period: "Mar 2026 – Present",
    location: "Toronto, ON",
    points: [
      "Built REST APIs with Spring Boot, JPA, and microservices architecture",
      "Deployed containerized apps on GCP with CI/CD pipelines",
      "Developed SPAs in React with Hooks, Router, and Axios",
      "Applied SOLID principles, multithreading, and Java Collections",
    ],
  },
  {
    company: "Rogers Communications",
    role: "Senior Software Engineer",
    period: "May 2022 – May 2025",
    location: "Markham, ON",
    points: [
      "Maintained eView platform managing 14,000+ network devices",
      "Built file management system with Node.js, .NET, and Chonky",
      "Implemented CI/CD pipelines with Azure DevOps and GitHub Actions",
      "Modernized legacy ASPX pages into React JSX components",
    ],
  },
  {
    company: "Resili",
    role: "Software Developer",
    period: "Jun 2020 – Apr 2022",
    location: "Toronto, ON",
    points: [
      "Built responsive UIs with Angular and JavaScript for emergency workflows",
      "Prototyped chatbot workflows using LangChain for AI-driven responses",
      "Tested APIs from external providers using Postman",
      "Delivered scalable features in Agile development cycles",
    ],
  },
  {
    company: "XP Eats",
    role: "Software Developer Intern",
    period: "Sept 2019 – Dec 2019 ",
    location: "Mississauga, ON",
    points: [
      "Built automated order tracking system using Python and PostgreSQL",
      "Reduced HTTP requests by 50% through codebase and image optimization",
      "Developed bi-weekly membership feature driving 38% increase in order value",
      "Designed digital media content for the grocery page",
    ],
  },
  {
    company: "MyCart",
    role: "Software Developer Intern",
    period: "June 2019 – Sept 2020",
    location: "Brampton, ON",
    points: [
      "Developed and integrated API services with Node.js and SQL",
      "Designed digital media content and grocery page layouts with Bootstrap",
      "Built marketing posters using Adobe, increasing user count by 10%",
      "Analyzed grocery chain data to surface high-demand products",
    ],
  },
];

const skills = {
  Languages: ["Java", "Python", "JavaScript", "TypeScript", "C#", "PHP", "SQL"],
  Frontend: ["React", "Bootstrap", "HTML", "CSS", "Angular"],
  Backend: ["Spring Boot", "Node.js", ".NET", "REST APIs", "Microservices"],
  "DevOps & Cloud": ["GCP", "Docker", "Kubernetes", "Azure DevOps", "CI/CD"],
  "AI & Tools": ["LangChain", "Gemini API", "Postman", "Git", "Firebase"],
};

export default function About() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", padding: "80px 20px", color: "#fff" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Bio */}
        <div style={{ marginBottom: "80px", textAlign: "center" }}>
          <p style={{ fontSize: "11px", letterSpacing: "4px", color: "#00e5ff", marginBottom: "12px", textTransform: "uppercase" }}>About Me</p>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, marginBottom: "24px" }}>
            Builder. Engineer. Rider.
          </h2>
          <p style={{ color: "#888", fontSize: "16px", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto" }}>
            Full-stack software engineer based in the Greater Toronto Area with 5+ years building scalable 
            systems across fintech, telecom, and emergency tech. Computer Science graduate from Western University 
            with a specialization in CS and a minor in Software Engineering. I care about clean architecture, 
            real-world impact, and shipping things that work. When I'm not writing code, I'm on my motorcycle.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ marginBottom: "80px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "4px", color: "#00e5ff", marginBottom: "40px", textTransform: "uppercase" }}>Experience</p>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "16px", top: 0, bottom: 0, width: "1px", background: "#00e5ff22" }} />
            {experiences.map((exp, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ position: "relative", paddingLeft: "52px", marginBottom: "32px", cursor: "pointer" }}
              >
                <div style={{
                  position: "absolute",
                  left: "9px",
                  top: "6px",
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  background: hovered === i ? "#00e5ff" : "#0a0a0f",
                  border: "2px solid #00e5ff",
                  transition: "all 0.3s ease",
                  zIndex: 1,
                }} />
                <div style={{
                  background: hovered === i ? "#0f1923" : "#0d0d14",
                  border: `1px solid ${hovered === i ? "#00e5ff44" : "#1a1a2e"}`,
                  borderRadius: "10px",
                  padding: "20px 24px",
                  transition: "all 0.3s ease",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: hovered === i ? "16px" : "0" }}>
                    <div>
                      <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: "#fff" }}>{exp.company}</h3>
                      <p style={{ margin: "2px 0 0", fontSize: "13px", color: "#00e5ff" }}>{exp.role}</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p style={{ margin: 0, fontSize: "12px", color: "#555" }}>{exp.period}</p>
                      <p style={{ margin: 0, fontSize: "12px", color: "#555" }}>{exp.location}</p>
                    </div>
                  </div>
                  {hovered === i && (
                    <ul style={{ margin: 0, paddingLeft: "16px" }}>
                      {exp.points.map((point, j) => (
                        <li key={j} style={{ color: "#888", fontSize: "13px", lineHeight: 1.7, marginBottom: "4px" }}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div style={{ marginBottom: "60px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "4px", color: "#00e5ff", marginBottom: "32px", textTransform: "uppercase" }}>Skills</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p style={{ fontSize: "11px", color: "#00e5ff", letterSpacing: "2px", marginBottom: "12px", textTransform: "uppercase" }}>{category}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {items.map((skill) => (
                    <span key={skill} style={{
                      padding: "4px 12px",
                      borderRadius: "20px",
                      border: "1px solid #1a1a2e",
                      fontSize: "12px",
                      color: "#888",
                      background: "#0d0d14"
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Download */}
        <div style={{ textAlign: "center" }}>
          
            href="/Amanpreet_Gill_Resume.pdf"
            download
            <a
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
              textTransform: "uppercase"
            }}
          >
            Download Resume
          </a>
        </div>

      </div>
    </div>
  );
}