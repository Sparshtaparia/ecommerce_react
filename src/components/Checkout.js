import React, { useState, useEffect } from "react";
import "./Checkout.css";

const Checkout = ({ setView }) => {
  const [formData, setFormData] = useState({ name: "", email: "", address: "" });
  const [error, setError] = useState("");

  // 📌 Load Razorpay Script Dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // 📌 Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Payment Handler
  const handlePayment = () => {
    if (!formData.name || !formData.email || !formData.address) {
      setError("⚠️ All fields are required!");
      return;
    }

    // 🛑 Show popup instead of Razorpay
    alert("⚠️ Payment Gateway Not Yet Started! Click OK to go to Home.");
    setView({ page: "home" });
  };

  return (
    <div className="checkout-container">
      <form className="checkout-form">
        <h2>Checkout</h2>

        {error && <p className="error">{error}</p>}

        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />

        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />

        <input type="text" name="address" placeholder="Delivery Address" value={formData.address} onChange={handleChange} />

        <button type="button" className="checkout-btn" onClick={handlePayment}>
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Checkout;
