import React from "react";
import "./Cart.css";

const Cart = ({ cart, removeFromCart, setView }) => (
  <div className="cart">
    <h2>Shopping Cart</h2>
    {cart.length === 0 ? (
      <p className="empty-cart">Your cart is empty.</p>
    ) : (
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <p>
              {item.name} - <span className="price">${item.price}</span>
            </p>
            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    )}
    <h3 className="total">
      Total: ${cart.reduce((total, item) => total + item.price, 0)}
    </h3>
    <button className="checkout-btn" onClick={() => setView({ page: "checkout" })}>
      Proceed to Checkout
    </button>
  </div>
);

export default Cart;
