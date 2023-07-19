import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Form from "../Form";
import Search from "../Search";

export default function Shop() {
  const [albums, setAlbums] = useState(useLoaderData());
  const [searchInput, setSearchInput] = useState("")

  function changeSearch(e){
    setSearchInput(e)
  }

  return (
    <div className="mt-2.5 grid grid-cols-2 gap-5">
      {albums.map((album) => (
        <div key={album.id}>
          <p>{album.name}</p>
          <sub>{album.price}</sub>
        </div>
      ))}
      {/* <Form albums={albums} setAlbums={setAlbums} /> */}
      <Search searchInput={searchInput} changeSearch={changeSearch} />

      <div>
        
      </div>
    </div>
  );
}
