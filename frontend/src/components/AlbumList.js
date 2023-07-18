import React from "react";
import AlbumDisplay from "./AlbumDisplay";

function AlbumList(albums) {
  const mappedAlbums = albums((album) => (
    <AlbumDisplay key={album.id} image={album.image} />
  ));
  return <div className="album-nav">{mappedAlbums}</div>;
}

export default AlbumList;
