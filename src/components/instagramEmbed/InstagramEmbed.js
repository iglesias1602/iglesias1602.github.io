import React, { useEffect } from "react";

const InstagramEmbed = ({ src }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src]);

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [src]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={src}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: "3px",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px",
        maxWidth: "450px",
        minWidth: "326px",
        padding: 0,
        width: "-webkit-calc(100% - 2px)",
      }}
    >
      <div style={{ padding: "16px" }}>
        <a
          href={src}
          style={{
            background: "#FFFFFF",
            lineHeight: 0,
            padding: 0,
            textAlign: "center",
            textDecoration: "none",
            width: "100%",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          View this post on Instagram
        </a>
      </div>
    </blockquote>
  );
};

export default InstagramEmbed;
