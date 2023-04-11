import React from "react";
import MDXComponents from "@theme/MDXComponents";

const Figure: React.FunctionComponent<{
  caption: string;
  src: any;
}> = ({caption, src}) => (
  <figure>
    <figcaption style={{textAlign: "center"}}>
      <h5>{caption}</h5>
    </figcaption>
    <MDXComponents.img alt={caption} src={src} />
    <div className="text--center" style={{fontSize: "small"}}>
      <i>Click image to zoom</i>
    </div>
  </figure>
);

export default Figure;
