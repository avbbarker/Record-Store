import React from "react";

export default function Cart({ cartList }) {
  return (
    <div className="cart">
      <h1 className="cart-label">Cart</h1>
      <div className="cart-container">
        {cartList.map((album) => {
          return (
            <div className="cart-item-container" key={album.id}>
              <img className="cart-image" src={album.image} />
              <div className="cart-info">
                <p className="cart-title">{album.title}</p>
                <p className="cart-artist">{album.artist}</p>
                <p className="cart-genre">{album.genre}</p>
                <sub className="cart-price">${album.price}.00</sub>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
