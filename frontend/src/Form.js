import React, {useState} from "react";

function Form({albums, setAlbums}) {

  const newFormObj = {
    title:"",
    image:"",
    artist:"",
    song: "",
    genre: "",
    link:""
  }

  const [newForm, setNewForm] = useState(newFormObj)
  
  function handleChange (e) {
    setNewForm({
    ...newForm,
    [e.target.name]: e.target.value
    })};

function handleSubmit(e) {
e.preventDefault()
fetch("http://localhost:3000/albums", {
method: "POST",
headers: {
  "Content-Type": "application/JSON"
},
body: JSON.stringify(newForm)
})
e.target.reset()

setAlbums([...albums, newForm])
}

return (
<form onSubmit={handleSubmit} className="playlist-form">

  <h2>My Playlist</h2>

  <input placeholder="Song Name" type="text" name="name" onChange={handleChange} />
  <br /> 
    
  <input placeholder="Artist" type="text" name="aritist" onChange={handleChange} />
  <br /> 
  <input placeholder="New Image URL" type="text" name="image" onChange={handleChange}/>
  <br /> 
  <input placeholder="Genre" type="text" name="genre" onChange={handleChange} />
  <br /> 
  <input placeholder="YouTube Link" type="text" name="link" onChange={handleChange} />
  <br /> 
  <input type="submit" value="Create New Playlist" />
</form>
)} 



export default Form;
