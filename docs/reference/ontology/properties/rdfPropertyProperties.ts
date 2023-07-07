import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

const rdfPropertyProperties: readonly PropertiesTableProperty[] = [
  {
    term: "comment",
    iri: "rdfs:comment",
    description: "Description of this property",
    cardinality: "0..1",
    valueType: "string",
    exampleValues: "Human-readable long description of this property",
  },
  {
    term: "filterable",
    iri: "cms:propertyFilterable",
    description:
      "Is the property filterable? e.g., it has a limited set of values or range",
    cardinality: "0..1",
    valueType: "boolean",
    exampleValues: "true",
  },
  {
    term: "group",
    iri: "cms:propertyGroup",
    description:
      "Group this property belongs to, typically used to group properties in a user interface",
    cardinality: "0..1p",
    valueType: "IRI",
    exampleValues: "http://example.com/propertyGroup",
  },
  {
    term: "label",
    iri: "rdfs:label",
    description: "Short human-readable label of this property",
    cardinality: "1",
    valueType: "string",
    exampleValues: "My property",
  },
  {
    term: "order",
    iri: "cms:propertyOrder",
    description: "Order of the property within its group",
    cardinality: "0..1",
    valueType: "integer",
    exampleValues: "0",
  },
  {
    term: "range",
    iri: "rdfs:range",
    description: "Class to which the values of the property belong",
    cardinality: "0..1",
    valueType: "IRI",
    exampleValues: "http://example.com/propertyValueClass",
  },
  {
    term: "searchable",
    iri: "cms:propertySearchable",
    description: "Is the property fulltext searchable?",
    cardinality: "0..1",
    valueType: "boolean",
    exampleValues: "true",
  },
];
export default rdfPropertyProperties;
