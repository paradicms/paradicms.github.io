import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

const rightsStatementProperties: readonly PropertiesTableProperty[] = [
  {
    term: "definition",
    iri: "skos:definition",
    description: "Long-form, human-readable rights statement",
    cardinality: "0..1",
    valueType: "string",
    exampleValues:
      "The copyright and related rights status of this Item has not been evaluated. ...",
  },
  {
    term: "description",
    iri: "dcterms:description",
    description:
      "Short-form, human-readable description of the rights statement",
    cardinality: "0..1",
    valueType: "string",
    exampleValues:
      "This Rights Statement indicates that the organization that has published the Item has not evaluated the copyright and related rights status of the Item.",
  },
  {
    term: "identifier",
    iri: "dcterms:identifier",
    description: "Short identifier of the rights statement",
    cardinality: "1",
    valueType: "string",
    exampleValues: "CNE",
  },
  {
    term: "note",
    iri: "skos:note",
    description:
      "Human-readable note about how to interpret the rights statement",
    cardinality: "0..n",
    valueType: "string",
    exampleValues:
      "Unless expressly stated otherwise, the organization that has made this Item available ...",
  },
  {
    term: "prefLabel",
    iri: "skos:prefLabel",
    description: "Short, human-readable label for the rights statement",
    cardinality: "1",
    valueType: "string",
    exampleValues: "Copyright Not Evaluated",
  },
  {
    term: "scopeNote",
    iri: "skos:scopeNote",
    description:
      "Human-readable note about the applicability/scope of the rights statement",
    cardinality: "0..n",
    valueType: "string",
    exampleValues: "This Rights Statement should be used ...",
  },
];
export default rightsStatementProperties;
