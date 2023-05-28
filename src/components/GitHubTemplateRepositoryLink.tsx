import React from "react";
import MDXComponents from "@theme/MDXComponents";

const GitHubTemplateRepositoryLink: React.FunctionComponent<React.PropsWithChildren<{
  organization: string;
  rawPath?: string;
  repository: string;
}>> = ({children, organization, rawPath, repository}) => (
  <MDXComponents.a
    href={
      rawPath
        ? `https://raw.githubusercontent.com/${organization}/${repository}/main${
            rawPath.startsWith("/") ? "" : "/"
          }${rawPath}`
        : `https://github.com/${organization}/${repository}`
    }
  >
    {children}
  </MDXComponents.a>
);

export default GitHubTemplateRepositoryLink;
