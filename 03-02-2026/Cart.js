import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: "Wireless Headphones", price: 120, quantity: 1 },
    { id: 2, name: "Smart Watch", price: 200, quantity: 1 },
    { id: 3, name: "Bluetooth Speaker", price: 80, quantity: 1 },
    { id: 4, name: "Gaming Mouse", price: 60, quantity: 1 },
    { id: 5, name: "Power Bank", price: 50, quantity: 1 },
  ]);

  const increment = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrement = (id) => {
    setItems(
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const resetCart = () => {
    setItems(items.map((item) => ({ ...item, quantity: 1 })));
  };

  const grandTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-card">
      <h1 className="cart-title">🛒 Shopping Cart</h1>

      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          increment={increment}
          decrement={decrement}
        />
      ))}

      <h2 className="grand-total">Grand Total: ${grandTotal}</h2>

      <button className="reset-btn" onClick={resetCart}>
        Reset Cart
      </button>
    </div>
  );
}

export default Cart;
