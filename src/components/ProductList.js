import React from "react";
import "./ProductList.css";
import products from "../components/products";

const ProductList = ({ addToCart, setView }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
          <div className="product-buttons">
            <button className="view-btn" onClick={() => setView({ page: "productDetails", product })}>
              View Details
            </button>
            <button className="cart-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
