import React from "react";
import Form from "./Form";
import Search from "./Search";
import AlbumList from "./AlbumList";

function AppBuilder() {
  return (
    <>
      <Form />
      <Search />
      <AlbumList />
    </>
  );
}

export default AppBuilder;
