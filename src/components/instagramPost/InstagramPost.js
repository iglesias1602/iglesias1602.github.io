import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

const InstagramPost = ({ src }) => {
  return <InstagramEmbed url={src} width={328} />;
};

export default InstagramPost;
