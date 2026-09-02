export default function Footer() {
  return (
    <div style={{
      background: "#0a0a0f",
      borderTop: "1px solid #1a1a2e",
      padding: "20px",
      textAlign: "center",
      display: "flex",
      gap: "24px",
      justifyContent: "center",
      alignItems: "center"
    }}>
        <a
        href="https://www.linkedin.com/in/amanpreetgill100/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#555", fontSize: "12px", textDecoration: "none", letterSpacing: "2px", textTransform: "uppercase" }}
        >
        LinkedIn
      </a>
        <a
        href="mailto:amanpreetg100@gmail.com"
        style={{ color: "#555", fontSize: "12px", textDecoration: "none", letterSpacing: "2px", textTransform: "uppercase" }}
        >
        Email
      </a>
      <span style={{ color: "#333", fontSize: "12px" }}>© 2026 Amanpreet Gill</span>
    </div>
  );
}