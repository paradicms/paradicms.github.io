import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

const dcRightsProperties = (kwds: {
  className: string;
}): readonly PropertiesTableProperty[] => [
  {
    term: "contributor",
    iri: "dcterms:contributor",
    description: `Reference to the contributor (usually an \`Organization\` or \`Person\`) of this ${kwds.className}`,
    cardinality: "0..1",
    valueType: "IRI",
    exampleValues: "http://example.com/Person",
  },
  {
    term: "contributorLiteral",
    iri: "dcterms:contributor",
    description: `String identifying a contributor to this ${kwds.className}, used as a fallback when no IRI is available`,
    cardinality: "0..1",
    valueType: "string",
    exampleValues: '"Wikipedia user Bob"',
  },
  {
    term: "creator",
    iri: "dcterms:creator",
    description: `Reference to the creator (usually an \`Organization\` or \`Person\`) of this ${kwds.className}`,
    cardinality: "0..1",
    valueType: "IRI",
    exampleValues: "http://example.com/Person",
  },
  {
    term: "creatorLiteral",
    iri: "dcterms:creator",
    description: `String identifying the creator of this ${kwds.className}, used as a fallback when no IRI is available`,
    cardinality: "0..1",
    valueType: "string",
    exampleValues: '"Wikipedia user Bob"',
  },
  {
    term: "license",
    iri: "dcterms:license",
    description: `Reference to the \`License\` of this ${kwds.className}`,
    cardinality: "0..1",
    valueType: "IRI",
    exampleValues: "http://example.com/License",
  },
  {
    term: "rightsHolder",
    iri: "dcterms:rightsHolder",
    description: `Reference to the rights holder (usually an \`Organization\` or \`Person\`) of this ${kwds.className}`,
    cardinality: "0..1",
    valueType: "IRI",
    exampleValues: "http://example.com/Person",
  },
  {
    term: "rightsHolderLiteral",
    iri: "dcterms:rightsHolder",
    description: `String identifying the rights holder of this ${kwds.className}, used as a fallback when no IRI is available`,
    cardinality: "0..1",
    valueType: "string",
    exampleValues: '"Wikipedia user Bob"',
  },
  {
    term: "rights",
    iri: "dcterms:rights",
    description: `Reference to the \`RightsStatement\` of this ${kwds.className}`,
    cardinality: "0..1",
    valueType: "IRI",
    exampleValues: "http://example.com/RightsStatement",
  },
];
export default dcRightsProperties;
