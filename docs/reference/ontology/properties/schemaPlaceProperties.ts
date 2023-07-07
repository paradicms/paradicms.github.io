import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

const schemaPlaceProperties: readonly PropertiesTableProperty[] = [
  {
    term: "label",
    iri: "rdfs:label",
    description: "Human-readable label",
    cardinality: "0..1",
    valueType: "string",
    exampleValues: "My house",
  },
  {
    term: "lat",
    iri: "wgs:lat",
    description: "WGS84 latitude",
    cardinality: "0..1",
    valueType: "decimal",
    exampleValues: "42.7281",
  },
  {
    term: "long",
    iri: "wgs:long",
    description: "WGS84 longitude",
    cardinality: "0..1",
    valueType: "decimal",
    exampleValues: "-73.68758",
  },
];
export default schemaPlaceProperties;
