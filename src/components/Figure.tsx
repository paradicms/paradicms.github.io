import React from "react";
import MDXComponents from "@theme/MDXComponents";

const Figure: React.FunctionComponent<{
  caption?: string;
  src: any;
}> = ({caption, src}) => (
  <figure className="margin-vert--lg">
    <MDXComponents.img alt={caption} src={src} />
    <figcaption style={{fontSize: "small", textAlign: "center"}}>
      <strong>{caption}</strong>
    </figcaption>
  </figure>
);

export default Figure;
