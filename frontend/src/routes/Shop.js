import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Form from "../Form";
// import Search from "../Search";

export default function Shop() {
  const [albums, setAlbums] = useState(useLoaderData());

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3000/albums", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: albums.length + 1,
        name: event.target.name.value,
        price: parseInt(event.target.price.value),
      }),
    })
      .then((response) => response.json())
      .then((newAlbum) => setAlbums([...albums, newAlbum]));
  }

  return (
    <div className="album-display">
      {albums.map((album) => (
        <div key={album.id}>
          <h2>{album.title}</h2>
          <h3>{album.artist}</h3>
          <h5>{album.genre}</h5>
          <h6>{album.release_year}</h6>
        </div>
      ))}
      {/* <Form albums={albums} setAlbums={setAlbums} /> */}
      {/* <Search searchInput={searchInput} changeSearch={changeSearch} /> */}

      <div></div>
    </div>
  );
}
