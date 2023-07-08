import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import foafAgentProperties from "@site/docs/reference/physical-data-models/properties/foafAgentProperties";

const foafOrganizationProperties: readonly PropertiesTableProperty[] = foafAgentProperties(
  {className: "FoafOrganization"}
);
export default foafOrganizationProperties;