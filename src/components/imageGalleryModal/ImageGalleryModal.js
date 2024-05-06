import React, { useState } from "react";
import "./ImageGalleryModal.css";

function ImageGalleryModal({ isOpen, images, handleClose, theme }) {
  const [current, setCurrent] = useState(0);

  if (!isOpen || !images.length) return null;

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () =>
    setCurrent((current - 1 + images.length) % images.length);

  const buttonStyle = (theme) => ({
    margin: "0 10px",
    padding: "10px 20px",
    fontSize: "16px",
    color: theme.text, // Use text color from theme
    background: theme.body, // Use body color from theme for background
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  });

  const closeButtonStyle = (theme) => ({
    margin: "0 10px",
    padding: "10px 20px",
    fontSize: "16px",
    color: theme.body, // Use body color from theme
    background: theme.dark, // Use dark color from theme for background
    border: "2px solid #FFF",
    borderRadius: "5px",
    cursor: "pointer",
  });

  return (
    <div className={`modal-backdrop ${isOpen ? "show" : ""}`}>
      <img
        src={require(`../../assests/images/${images[current]}`)}
        alt="Gallery"
        className="modal-content"
      />
      <div className="modal-buttons">
        <button onClick={prevImage} style={buttonStyle(theme)}>
          Prev
        </button>
        <button onClick={nextImage} style={buttonStyle(theme)}>
          Next
        </button>
        <button onClick={handleClose} style={closeButtonStyle(theme)}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ImageGalleryModal;
