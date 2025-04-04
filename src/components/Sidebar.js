import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ setView, cartLength }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "❌" : "☰"} {/* Unicode for Close and Menu */}
      </button>

      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => { setView({ page: "home" }); setIsOpen(false); }}>🏠 Home</li>
          <li onClick={() => { setView({ page: "cart" }); setIsOpen(false); }}>🛒 Cart ({cartLength})</li>
          <li onClick={() => { setView({ page: "checkout" }); setIsOpen(false); }}>💳 Checkout</li>
        </ul>
      </nav>

      {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Sidebar;
