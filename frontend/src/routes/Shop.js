import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Form from "../Form";
// import Search from "../Search";

export default function Shop() {
  const [albums, setAlbums] = useState(useLoaderData());
  const [searchInput, setSearchInput] = useState("")

  function changeSearch (e) {
    setSearchInput(e)
  }

  return (
 <>
    <Search searchInput={searchInput} changeSearch={changeSearch} />
    <div className="album-display">
      {albums.map((album) => (
        <div key={album.id}>
          <h2 >{album.title}</h2>
          <h3>{album.artist}</h3>
          <h5>{album.genre}</h5>
          <h6>{album.release_year}</h6>
          <img src={album.image} alt={album.title}/>
          <br></br>
          <a href={album.link}> Link</a>


        </div>
      ))}
      {<Form albums={albums} setAlbums={setAlbums} /> }
    </div>
 </>
  );
}
