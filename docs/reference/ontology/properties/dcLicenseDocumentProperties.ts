import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

const dcLicenseDocumentProperties: readonly PropertiesTableProperty[] = [
  {
    term: "identifier",
    iri: "dc:identifier",
    description: "Short identifier",
    cardinality: "1",
    valueType: "string",
    exampleValues: "BY",
  },
  {
    term: "title",
    iri: "dc:title",
    description: "Human-readable name of the license",
    cardinality: "1",
    valueType: "string",
    exampleValues: "Attribution 4.0 International",
  },
  {
    term: "version",
    iri: "dcterms:hasVersion",
    description: "Human-readable version of the license",
    cardinality: "0..1",
    valueType: "string",
    exampleValues: "2.0",
  },
];
export default dcLicenseDocumentProperties;
