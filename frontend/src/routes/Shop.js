import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Form from "../Form";
import Search from "../Search";
import AlbumList from "../AlbumList";
import ClickedAlbum from "../ClickedAlbum";
import Cart from "../Cart";

//setting the state conditins 
export default function Shop() {
  const [albums, setAlbums] = useState(useLoaderData()); //for the albums display 
  const [searchInput, setSearchInput] = useState(""); //for the search input 
  const [clickedAlbumFromList, setClickedAlbumFromList] = useState(albums[0]); //for the featured album
  const [cartList, setCartList] = useState([]); //for the shopping cart 
  const [albumFormOpen, setAlbumFormOpen] = useState(true); //for the form

  //function that will display the clicked album
  function handleClickedAlbum(album) {
    setClickedAlbumFromList(album);
  }

  function changeSearch(e) {
    setSearchInput(e);
  }

  function handleAddToCart(albumToAdd) {
    setCartList([...cartList, albumToAdd]);
  }

  function handleClickForm() {
    setAlbumFormOpen(!albumFormOpen);
  }

  return (
    <>
      <Search searchInput={searchInput} changeSearch={changeSearch} />
      <AlbumList
        searchInput={searchInput}
        albums={albums}
        handleClickedAlbum={handleClickedAlbum} // this function is being passed down to the component bc the event is on the album display
      />
      <ClickedAlbum
        clickedAlbumFromList={clickedAlbumFromList}
        handleAddToCart={handleAddToCart}
      />
      <Cart cartList={cartList} setCartList={setCartList} />
      <div className="form-toggle">
        <button className="form-button" onClick={() => handleClickForm()}>
          {albumFormOpen ? "Open" : "Close"} Sell Form
        </button>
      </div>
      {albumFormOpen ? null : <Form albums={albums} setAlbums={setAlbums} />}
    </>
  );
}
