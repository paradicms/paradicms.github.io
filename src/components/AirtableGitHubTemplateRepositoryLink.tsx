import React from "react";
import GitHubTemplateRepositoryLink from "@site/src/components/GitHubTemplateRepositoryLink";

const AirtableGitHubTemplateRepositoryLink: React.FunctionComponent<React.PropsWithChildren<{
  rawPath?: string;
}>> = ({children}) => (
  <GitHubTemplateRepositoryLink
    organization="dressdiscover"
    repository="costume-core-template"
  >
    {children}
  </GitHubTemplateRepositoryLink>
);

export default AirtableGitHubTemplateRepositoryLink;
