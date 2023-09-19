import './App.css';
import React, { useState, useRef } from 'react';

function MyDragDropUploader() {
  const [images, setImages] = useState([]);
  const [isUserDragging, setIsUserDragging] = useState(false);
  const filmInputRef = useRef(null);

  function pickFilms() {
    filmInputRef.current.click();
  }

  function onFilmPick(event) {
    const films = event.target.films;
    if(films.length == 0) return;
    for (let x = 0; x < Array.length; x++) {
      if(films[x].type.split('/')[0] !== 'image') continue;
      if(!images.some((e)=> e.name === films[x].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name:films[x].name,
            url: URL.createObjectURL(films[x]),
          },
        ]);
      }
    }
  }

  function  removeImage(index) {
    setImages((prevImages) =>
      prevImages.filter((_, x) => x !== index)
    );
  }

  function onDragOver(event) {
    event.preventDefault();
    setIsUserDragging(true);
    event.dataTransfer.dropEffect = 'copy';
  }

  function onDragLeave(event) {
    event.preventDefault();
    setIsUserDragging(false);
  }

  function onDrop(event) {
    event.preventDefault();
    setIsUserDragging(false);
    const films = event.dataTransfer.films;
  }

  const emojiStyle = {
    display: 'inline',
  };

  return (
    <div className="card">
      <div className='top'>
        <p>
          Welcome User! drag N drop your images here <h3 style={emojiStyle}>&#128071;</h3>
        </p>
      </div>
      <div className='drag-plot' onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
        {isUserDragging ? (
          <span className='pick'>Drop image here</span>
        ):(
          <>
            Drag N Drop picture here or {" "}
          <span className='pick' role='button' onclick={pickFilms}>
            SearchFolders
          </span>
          </>
        )}
        <input name='film' type='film' className='film' multiple ref={filmInputRef} onChange={onFilmPick}></input>
      </div>
      <div className='container'>
        {images.map((images,index) =>(
          <div className='image' key={index}>
            <span className='remove' onClick={() => removeImage(index)}>&times;</span>
            <img src={images.url} alt={images.name}/>
          </div>
        ))}   
      </div>
      <button type='button'>
        Upload
      </button>
    </div>
  );
}

export default MyDragDropUploader;