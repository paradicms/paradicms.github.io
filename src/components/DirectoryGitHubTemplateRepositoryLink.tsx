import React from "react";
import GitHubTemplateRepositoryLink from "@site/src/components/GitHubTemplateRepositoryLink";

const DirectoryGitHubTemplateRepositoryLink: React.FunctionComponent<React.PropsWithChildren<{
  rawPath?: string;
}>> = ({children}) => (
  <GitHubTemplateRepositoryLink
    organization="minorg"
    repository="ComputerScienceInventions"
  >
    {children}
  </GitHubTemplateRepositoryLink>
);

export default DirectoryGitHubTemplateRepositoryLink;
