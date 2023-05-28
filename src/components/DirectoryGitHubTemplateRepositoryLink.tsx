import React from "react";
import GitHubTemplateRepositoryLink from "@site/src/components/GitHubTemplateRepositoryLink";

const DirectoryGitHubTemplateRepositoryLink: React.FunctionComponent<React.PropsWithChildren<{
  rawPath?: string;
}>> = ({children, rawPath}) => (
  <GitHubTemplateRepositoryLink
    organization="minorg"
    rawPath={rawPath}
    repository="ComputerScienceInventions"
  >
    {children}
  </GitHubTemplateRepositoryLink>
);

export default DirectoryGitHubTemplateRepositoryLink;
