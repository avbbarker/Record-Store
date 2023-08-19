import React from "react";

function AlbumList({ albums, searchInput, handleClickedAlbum }) { // props passed down from shop.js
  const filteredSearch = albums.filter((album) => {  //the search filter method that will search for specific title, artist or genre
    return (
      album.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      album.artist.toLowerCase().includes(searchInput.toLowerCase()) ||
      album.genre.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  return (
    <div className="album-display">
      {filteredSearch.map((album) => ( //display is used here instead of albumlist becuase it is also representing the entire album
        <div className="album" key={album.id}> 
          <div className="album-info">
            {/* <h2 className="album-title">{album.title}</h2>
            <h3 className="album-artist">{album.artist}</h3>
            <h5 className="album-genre">{album.genre}</h5>
            <h6 className="album-year">{album.release_year}</h6> */}
          </div>
          <div className="album-image-container">
            <img
              className="album-image"
              src={album.image}
              alt={album.title}
              onClick={() => handleClickedAlbum(album)}
            />
            <br />
          </div>
        </div>
      ))}
    </div>
  );
}

export default AlbumList;
