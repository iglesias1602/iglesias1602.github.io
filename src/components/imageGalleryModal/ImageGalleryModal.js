import React, { useState, useEffect } from "react";
import "./ImageGalleryModal.css";
import defaultImage from "../../assests/images/loading.svg"; // Update the path according to where your SVG is stored
import InstagramEmbed from "../instagramEmbed/InstagramEmbed"; // Import the InstagramEmbed component

function ImageGalleryModal({
  isOpen,
  comments,
  media,
  handleClose,
  theme,
  currentIndex,
  setCurrentIndex,
}) {
  console.log("Modal Props:", { isOpen, media, comments }); // Debug output for props

  const [currentMedia, setCurrentMedia] = useState(null);

  useEffect(() => {
    if (!isOpen || !media || media.length === 0) {
      setCurrentMedia(null);
      return;
    }

    const item = media[currentIndex];
    if (item.type === "video") {
      // Directly set the iframe as current media
      setCurrentMedia(
        <iframe
          width="100%"
          height="350px"
          src={item.src}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
          title="Embedded YouTube Video"
        />
      );
    } else if (item.type === "image") {
      try {
        const imagePath = require(`../../assests/images/${item.src}`);
        setCurrentMedia(
          <img
            src={imagePath}
            alt="Gallery"
            style={{ maxWidth: "100%", maxHeight: "80%" }}
          />
        );
      } catch {
        setCurrentMedia(
          <img
            src={defaultImage}
            alt="Default"
            style={{ maxWidth: "100%", maxHeight: "80%" }}
          />
        );
      }
    } else if (item.type === "instagram-post") {
      setCurrentMedia(<InstagramEmbed src={item.src} />);
    }
  }, [currentIndex, media, isOpen]); // React on changes to current index, media array, or isOpen

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [currentMedia]);

  if (!isOpen || !currentMedia) return null;

  const nextImage = () => setCurrentIndex((currentIndex + 1) % media.length);
  const prevImage = () =>
    setCurrentIndex((currentIndex - 1 + media.length) % media.length);

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
    <div
      className={`modal-backdrop ${isOpen ? "show" : ""}`}
      style={{ display: "flex" }}
    >
      <div
        className="image-column"
        style={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {currentMedia}
        <div className="modal-buttons">
          {media.length > 1 && (
            <>
              <button onClick={prevImage} style={buttonStyle(theme)}>
                Prev
              </button>
              <button onClick={nextImage} style={buttonStyle(theme)}>
                Next
              </button>
            </>
          )}
          <button onClick={handleClose} style={closeButtonStyle(theme)}>
            Close
          </button>
        </div>
      </div>
      <div
        className="comments-column"
        style={{ flex: 1, padding: "20px", overflowY: "auto", height: "100%" }}
      >
        {comments.map((comment, index) => (
          <p key={index} style={{ color: theme.body }}>
            {comment}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ImageGalleryModal;
