import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Form from "../Form";
import Search from "../Search";

export default function Shop() {
  const [albums, setAlbums] = useState(useLoaderData());
<<<<<<< HEAD

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
=======
  const [searchInput, setSearchInput] = useState("")

  function changeSearch(e){
    setSearchInput(e)
>>>>>>> 138816fefb41982f1de477185398e0f901ed210a
  }

  return (
    <div className="album-display">
      {albums.map((album) => (
        <div key={album.id}>
<<<<<<< HEAD
          <h2>{album.title}</h2>
          <h3>{album.artist}</h3>
          <h5>{album.genre}</h5>
          <h6>{album.release_year}</h6>
=======
          <p>{album.name}</p>
          <sub>{album.price}</sub>
>>>>>>> 138816fefb41982f1de477185398e0f901ed210a
        </div>
      ))}
      {/* <Form albums={albums} setAlbums={setAlbums} /> */}
      <Search searchInput={searchInput} changeSearch={changeSearch} />

      <div>
        
      </div>
    </div>
  );
}
