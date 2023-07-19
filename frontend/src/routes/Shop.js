import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Form from "../Form";

export default function Shop() {
  console.log(useLoaderData());
  const [albums, setAlbums] = useState([]);
  console.log(albums);
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
    <div className="mt-2.5 grid grid-cols-2 gap-5">
      {albums.map((album) => (
        <div key={album.id}>
          <p>{album.name}</p>
          <sub>${album.price}.00</sub>
        </div>
      ))}
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}
