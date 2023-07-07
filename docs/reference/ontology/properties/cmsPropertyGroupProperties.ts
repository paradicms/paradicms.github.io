import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

const cmsPropertyGroupProperties: readonly PropertiesTableProperty[] = [
  {
    term: "comment",
    iri: "rdfs:comment",
    description: "Description of this property",
    cardinality: "0..1",
    valueType: "string",
    exampleValues: "Human-readable long description of this property",
  },
  {
    term: "label",
    iri: "rdfs:label",
    description: "Short human-readable label of this property group",
    cardinality: "1",
    valueType: "string",
    exampleValues: "My property group",
  },
];
export default cmsPropertyGroupProperties;
