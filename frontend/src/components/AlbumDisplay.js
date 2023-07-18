import React from "react";
// import MyPlaylist from "./MyPlaylist";

function AlbumDisplay(SelectedAlbum) {
  return (
    <div>
      <h2>{selectedAlbum.title}</h2>
      <h3>{selectedAlbum.artist}</h3>
      <h4>{selectedAlbum.genre}</h4>
      <li>{selectedAlbum.songs}</li>
    <div/>
  );
}

export default AlbumDisplay;
