import React, { useState } from "react";

function Form({ albums, setAlbums }) {
  const newFormObj = {
    title: "",
    image: "",
    artist: "",
    release_year: "",
    price: "",
    genre: "",
    link: "",
  };

  const [newForm, setNewForm] = useState(newFormObj);

  function handleChange(e) {
    setNewForm({
      ...newForm,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/albums", {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(newForm),
    });
    e.target.reset();

    setAlbums([...albums, newForm]);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="playlist-form">
        <h2>Sell an Album</h2>

        <input
          placeholder="Album Name"
          type="text"
          name="title"
          onChange={handleChange}
        />
        <br />

        <input
          placeholder="Artist"
          type="text"
          name="artist"
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Year Released"
          type="text"
          name="release_year"
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Image URL"
          type="text"
          name="image"
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Genre"
          type="text"
          name="genre"
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="YouTube Link"
          type="text"
          name="link"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Sell this Album" />
      </form>
      <br />
    </>
  );
}

export default Form;
