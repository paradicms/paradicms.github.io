import React from "react";
import GitHubTemplateRepositoryLink from "@site/src/components/GitHubTemplateRepositoryLink";

const GoogleSheetsGitHubTemplateRepositoryLink: React.FunctionComponent<React.PropsWithChildren<{
  rawPath?: string;
}>> = ({children, rawPath}) => (
  <GitHubTemplateRepositoryLink
    organization="dressdiscover"
    rawPath={rawPath}
    repository="exhibitions"
  >
    {children}
  </GitHubTemplateRepositoryLink>
);

export default GoogleSheetsGitHubTemplateRepositoryLink;
