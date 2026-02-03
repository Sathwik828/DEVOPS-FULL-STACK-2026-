import React from "react";

function CartItem({ item, increment, decrement }) {
  const total = item.price * item.quantity;

  return (
    <div className="item-card">
      <h2 className="item-name">{item.name}</h2>

      <p className="item-price">
        Price: <span>${item.price}</span>
      </p>

      <div className="quantity-control">
        <button className="btn minus" onClick={() => decrement(item.id)}>
          −
        </button>

        <span className="quantity">{item.quantity}</span>

        <button className="btn plus" onClick={() => increment(item.id)}>
          +
        </button>
      </div>

      <p className="total-price">
        Item Total: <span>${total}</span>
      </p>
    </div>
  );
}

export default CartItem;
