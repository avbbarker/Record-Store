import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Form from "../Form";
import Search from "../Search";
import AlbumList from "../AlbumList";
import ClickedAlbum from "../ClickedAlbum";

export default function Shop() {
  const [albums, setAlbums] = useState(useLoaderData());
  const [searchInput, setSearchInput] = useState("");
  const [clickedAlbumFromList, setClickedAlbumFromList] = useState(albums[0]);

  function handleClickedAlbum(album) {
    setClickedAlbumFromList(album);
  }

  function changeSearch(e) {
    setSearchInput(e);
  }
  console.log(AlbumList);

  return (
    <>
      <Search searchInput={searchInput} changeSearch={changeSearch} />
      <AlbumList
        searchInput={searchInput}
        albums={albums}
        handleClickedAlbum={handleClickedAlbum}
      />
      <ClickedAlbum clickedAlbumFromList={clickedAlbumFromList} />
      <Form albums={albums} setAlbums={setAlbums} />
    </>
  );
}
