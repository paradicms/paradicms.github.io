import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {schemaThingProperties} from "@site/docs/reference/ontology/properties/schemaThingProperties";

const className = "SchemaDefinedTerm";

export const schemaDefinedTermProperties: readonly PropertiesTableProperty[] = [
  ...schemaThingProperties({className}),
  {
    cardinality: "0..n",
    description: "Alternative name for this defined term",
    exampleValues: "Alternative concept label",
    iri: "schema:alternateName",
    term: "alternateName",
    valueType: "string",
  },
  {
    cardinality: "0..1",
    description: "Value to use when a controlled value is selected",
    exampleValues: "5",
    iri: "rdf:value",
    term: "value",
    valueType: "IRI or literal",
  },
];
