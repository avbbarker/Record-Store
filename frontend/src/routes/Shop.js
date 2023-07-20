import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Form from "../Form";
import Search from "../Search";
import AlbumList from "../AlbumList";
import ClickedAlbum from "../ClickedAlbum";
import Cart from "../Cart";

export default function Shop() {
  const [albums, setAlbums] = useState(useLoaderData());
  const [searchInput, setSearchInput] = useState("");
  const [clickedAlbumFromList, setClickedAlbumFromList] = useState(albums[0]);
  const [cartList, setCartList] = useState([]);

  function handleClickedAlbum(album) {
    setClickedAlbumFromList(album);
  }

  function changeSearch(e) {
    setSearchInput(e);
  }

  function handleAddToCart(albumToAdd) {
    setCartList([...cartList, albumToAdd]);
  }
  return (
    <>
      <Search searchInput={searchInput} changeSearch={changeSearch} />
      <AlbumList
        searchInput={searchInput}
        albums={albums}
        handleClickedAlbum={handleClickedAlbum}
      />
      <ClickedAlbum
        clickedAlbumFromList={clickedAlbumFromList}
        handleAddToCart={handleAddToCart}
      />
      <Form albums={albums} setAlbums={setAlbums} />
      <Cart cartList={cartList} setCartList={setCartList} />
    </>
  );
}
