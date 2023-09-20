import './App.css';
import React, { useState, useRef } from 'react';
import UploadForm from './Components/UploadForm';
import Title from './Components/Title';

function MyDragDropUploader() {
  const [images, setImages] = useState([]);
  const [isUserDragging, setIsUserDragging] = useState(false);
  const fileInputRef = useRef(null);

  function pickFiles() {
    fileInputRef.current.click();
  }

  function onFilePick(event) {
    const files = event.target.files;
    if (files.length === 0) return;
    for (let x = 0; x < files.length; x++) {
      if (files[x].type.split('/')[0] !== 'image') continue;
      if (!images.some((e) => e.name === files[x].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[x].name,
            url: URL.createObjectURL(files[x]),
          },
        ]);
      }
    }
  }

  function removeImage(index) {
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
    const files = event.dataTransfer.files;
    for (let x = 0; x < files.length; x++) {
      if (files[x].type.split('/')[0] !== 'image') continue;
      if (!images.some((e) => e.name === files[x].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[x].name,
            url: URL.createObjectURL(files[x]),
          },
        ]);
      }
    }
  }

  const emojiStyle = {
    display: 'inline',
  };

  return (
    <div className="card">
      <div className='top'>
        <Title />
        <UploadForm />
        <p>
          Welcome User! Drag and drop your images here <h3 style={emojiStyle}>&#128071;</h3>
        </p>
      </div>
      <div className='drag-plot' onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
        {isUserDragging ? (
          <span className='pick'>Drop image here</span>
        ) : (
          <>
            Drag and drop pictures here or {" "}
            <span className='pick' role='button' onClick={pickFiles}>
              Select from folders
            </span>
          </>
        )}
        <input name='file' type='file' className='file' multiple ref={fileInputRef} onChange={onFilePick}></input>
      </div>
      <div className='container'>
        {images.map((image, index) => (
          <div className='image' key={index}>
            <span className='remove' onClick={() => removeImage(index)}>&times;</span>
            <img src={image.url} alt={image.name} />
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
