import React from "react";
import "./Home.css";

const Home = ({ setView }) => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Our Shop</h1>
        <p>Find the best tech products at unbeatable prices.</p>
        <p>By: Sparsh Taparia(23BCE0843)</p>
        <button className="shop-btn" onClick={() => setView({ page: "productList" })}>
          Start Shopping
        </button>
      </header>
    </div>
  );
};

export default Home;
