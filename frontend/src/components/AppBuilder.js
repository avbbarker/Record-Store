import React, { useState, useEffect } from "react";
import Form from "./Form";
import Search from "./Search";
import AlbumList from "./AlbumList";

const PORT = "htttp://localhost:3000/albums";

function AppBuilder() {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbums, setSelectedAlbums] = useState([]);

  useEffect(() => {
    fetch(PORT)
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data);
        setSelectedAlbums(data);
      });
  }, []);

  return (
    <>
      <Form />
      <Search />
      <AlbumList />
    </>
  );
}

export default AppBuilder;
