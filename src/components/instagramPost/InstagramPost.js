import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

const InstagramPost = ({ src }) => {
  return (
    <InstagramEmbed url={src} width={"auto"} height={"87%"} captioned={true} />
  );
};

export default InstagramPost;
