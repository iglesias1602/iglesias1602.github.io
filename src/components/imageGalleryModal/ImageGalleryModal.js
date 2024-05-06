import React, { useState } from "react";

function ImageGalleryModal({ isOpen, images, handleClose }) {
  const [current, setCurrent] = useState(0);

  if (!isOpen || !images.length) return null;

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () =>
    setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="gallery-modal">
      <div className="gallery-content">
        <img
          src={require(`../../assets/images/${images[current]}`)}
          alt="Gallery Image"
        />
        <button onClick={prevImage}>Prev</button>
        <button onClick={nextImage}>Next</button>
      </div>
      <button onClick={handleClose}>Close</button>
    </div>
  );
}

export default ImageGalleryModal;
