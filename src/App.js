import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./App.css";

const App = () => {
  const [view, setView] = useState({ page: "home" });
  const [cart, setCart] = useState([]);

  // 🛒 Add to Cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // ❌ Remove from Cart
  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <div className="app-container">
      {/* 📌 Sidebar */}
      <Sidebar setView={setView} cartLength={cart.length} />

      {/* 🔝 Header */}
      <header className="header">
        <h1 className="logo">🛍️ ShopMate</h1>
        <button className="cart-icon" onClick={() => setView({ page: "cart" })}>
          🛒 {/* Unicode shopping cart icon */}
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </button>
      </header>

      {/* 🔥 Dynamic Page Rendering */}
      {view.page === "home" && <Home setView={setView} />}
      {view.page === "productList" && <ProductList addToCart={addToCart} setView={setView} />}
      {view.page === "cart" && <Cart cart={cart} removeFromCart={removeFromCart} setView={setView} />}
      {view.page === "checkout" && <Checkout setView={setView} />}
    </div>
  );
};

export default App;
