import React from "react";
import Figure from "./_Figure";

const BeforeAfterFiguresContainer: React.FunctionComponent<{
  after: {
    src: any;
  };
  before: {
    src: any;
  };
}> = ({after, before}) => (
  <div className="container">
    <div className="row">
      <div
        className="col coll--6"
        style={{display: "flex", justifyContent: "center"}}
      >
        <Figure caption="Before" {...before} />
      </div>
      <div
        className="col coll--6"
        style={{display: "flex", justifyContent: "center"}}
      >
        <Figure caption="After" {...after} />
      </div>
    </div>
  </div>
);

export default BeforeAfterFiguresContainer;
