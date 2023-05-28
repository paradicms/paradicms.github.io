import React from "react";
import MDXComponents from "@theme/MDXComponents";

const GoogleSheetsTemplateLink: React.FunctionComponent<React.PropsWithChildren<{}>> = ({
  children,
}) => (
  <MDXComponents.a href="https://docs.google.com/spreadsheets/d/1j2oaMvMxY4pnXO-sEH_fky2R2gm6TQeIev_Q8rVOD4M/edit#gid=0">
    {children}
  </MDXComponents.a>
);

export default GoogleSheetsTemplateLink;
