import React, { useState } from "react";

function Form({ albums, setAlbums }) {
  const newFormObj = {
    title: "",
    image: "",
    artist: "",
    release_year: 0,
    price: 0,
    genre: "",
    link: "",
  };

  const [newForm, setNewForm] = useState(newFormObj);
  const [formToggle, setFormToggle] = useState(true);

  function showForm() {
    setFormToggle(!formToggle);
  }

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
    <div className="form-container">
      <form onSubmit={handleSubmit} className="playlist-form">
        <h2 className="form-heading" onClick={showForm}>
          Sell an Album
        </h2>
        <div className="input-container">
          <input
            className="input-field"
            placeholder="Album Name"
            type="text"
            name="title"
            onChange={handleChange}
          />
          <br />

          <input
            className="input-field"
            placeholder="Artist"
            type="text"
            name="artist"
            onChange={handleChange}
          />
          <br />
          <input
            className="input-field"
            placeholder="Year Released"
            type="text"
            name="release_year"
            onChange={handleChange}
          />
          <br />
          <input
            className="input-field"
            placeholder="Genre"
            type="text"
            name="genre"
            onChange={handleChange}
          />
          <br />
          <input
            className="input-field"
            placeholder="Price"
            type="value"
            name="price"
            onChange={handleChange}
          />
          <br />
          <input
            className="input-field"
            placeholder="Image URL"
            type="text"
            name="image"
            onChange={handleChange}
          />
          <br />
          <input
            className="input-field"
            placeholder="YouTube Link"
            type="text"
            name="link"
            onChange={handleChange}
          />
        </div>
        <br />
        <input className="submit-field" type="submit" value="Sell this Album" />
      </form>
    </div>
  );
}

export default Form;
