import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import foafAgentProperties from "./foafAgentProperties";

const foafOrganizationProperties: readonly PropertiesTableProperty[] = foafAgentProperties(
  {className: "FoafOrganization"}
);
export default foafOrganizationProperties;
