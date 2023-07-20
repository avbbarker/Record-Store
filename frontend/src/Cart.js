import React from "react";

export default function Cart({ cartList }) {
  return (
    <div>
      {cartList.map((album) => {
        return (
          <div key={album.id}>
            <img src={album.image} />
            <div>{album.title}</div>
            <div>{album.artist}</div>
            <div>{album.genre}</div>
          </div>
        );
      })}
    </div>
  );
}
