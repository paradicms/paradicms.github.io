import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {schemaThingProperties} from "@site/docs/reference/logical-data-models/properties/schemaThingProperties";

const className = "SchemaOrganization";

export const schemaOrganizationProperties: readonly PropertiesTableProperty[] = [
  ...schemaThingProperties({className, nameRequired: true}),
  {
    cardinality: "0..1",
    description: `Family name of this ${className}`,
    exampleValues: `Doe`,
    iri: "schema:familyName",
    term: "familyName",
    valueType: "string",
  },
  {
    cardinality: "0..1",
    description: `Given name of this ${className}`,
    exampleValues: `John`,
    iri: "schema:givenName",
    term: "givenName",
    valueType: "string",
  },
];
