import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {dctermsTitleProperty} from "@site/docs/reference/ontology/properties/dctermsTitleProperty";

const className = "DcRightsStatement";

const dcRightsStatementProperties: readonly PropertiesTableProperty[] = [
  dctermsTitleProperty({className}),
];
export default dcRightsStatementProperties;