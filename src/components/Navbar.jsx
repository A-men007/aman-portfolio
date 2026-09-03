import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ background: "#0a0a0f", borderBottom: "1px solid #00e5ff22", padding: "0 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "60px" }}>
        
        {/* Brand */}
        <Link to="/" style={{ color: "#fff", fontWeight: 800, textDecoration: "none", fontSize: "18px" }}>
          Aman Gill
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "transparent", border: "1px solid #00e5ff44", borderRadius: "6px", padding: "6px 10px", cursor: "pointer", display: "flex", flexDirection: "column", gap: "4px" }}
        >
          <span style={{ display: "block", width: "20px", height: "2px", background: "#00e5ff" }} />
          <span style={{ display: "block", width: "20px", height: "2px", background: "#00e5ff" }} />
          <span style={{ display: "block", width: "20px", height: "2px", background: "#00e5ff" }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{ display: "flex", flexDirection: "column", gap: "0px", paddingBottom: "12px" }}>
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/projects", label: "Projects" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              style={{ color: "#888", textDecoration: "none", padding: "10px 0", fontSize: "14px", letterSpacing: "1px", borderBottom: "1px solid #1a1a2e" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}