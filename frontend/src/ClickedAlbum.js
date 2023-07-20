import React from "react";

function ClickedAlbum({ clickedAlbumFromList }) {
  return (
    <div className="selected-album">
      <img
        className="selected-album-image"
        src={clickedAlbumFromList.image}
        alt={clickedAlbumFromList.title}
      />
      <div className="selected-album-info">
        <h1 className="selected-album-title">{clickedAlbumFromList.title}</h1>
        <h2 className="selected-album-artist">{clickedAlbumFromList.artist}</h2>
        <h3 className="selected-album-genre">{clickedAlbumFromList.genre}</h3>
        <h4 className="selected-album-year">
          {clickedAlbumFromList.release_year}
        </h4>
        <h2 className="selected-album-price">{clickedAlbumFromList.price}</h2>
        <a className="selected-album-link" href={clickedAlbumFromList.link}>
          Link
        </a>
        <br />
        <br />
        <button className="add-to-cart">Add to cart</button>
      </div>
    </div>
  );
}

export default ClickedAlbum;
