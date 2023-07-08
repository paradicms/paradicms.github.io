import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {schemaCreativeWorkProperties} from "./schemaCreativeWorkProperties";

const className = "SchemaCollection";

export const schemaCollectionProperties: readonly PropertiesTableProperty[] = [
  ...schemaCreativeWorkProperties({className, nameRequired: true}),
  {
    cardinality: "0..n",
    description: `Reference to a Work that is part of the ${className}`,
    exampleValues: "http://example.com/work",
    iri: "schema:hasPart",
    term: "hasPart",
    valueType: "IRI",
  },
];
