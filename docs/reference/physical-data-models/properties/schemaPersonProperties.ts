import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {schemaThingProperties} from "@site/docs/reference/ontology/properties/schemaThingProperties";

const className = "SchemaPerson";

export const schemaPersonProperties: readonly PropertiesTableProperty[] = [
  ...schemaThingProperties({className, nameRequired: true}),
];
