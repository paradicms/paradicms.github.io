import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

const dcRightsProperties = (kwds: {
  className: string;
}): readonly PropertiesTableProperty[] => [
  {
    term: "contributor",
    iri: "dcterms:contributor",
    description: `Reference to a contributor (usually an \`Organization\` or \`Person\`) of this ${kwds.className}`,
    cardinality: "0..n",
    valueType: "IRI",
    exampleValues: "http://example.com/Person",
  },
  {
    term: "contributorLiteral",
    iri: "dcterms:contributor",
    description: `String identifying a contributor to this ${kwds.className}, used as a fallback when no IRI is available`,
    cardinality: "0..n",
    valueType: "string",
    exampleValues: '"Wikipedia user Bob"',
  },
  {
    term: "creator",
    iri: "dcterms:creator",
    description: `Reference to a creator (usually an \`Organization\` or \`Person\`) of this ${kwds.className}`,
    cardinality: "0..n",
    valueType: "IRI",
    exampleValues: "http://example.com/Person",
  },
  {
    term: "creatorLiteral",
    iri: "dcterms:creator",
    description: `String identifying a creator of this ${kwds.className}, used as a fallback when no IRI is available`,
    cardinality: "0..n",
    valueType: "string",
    exampleValues: '"Wikipedia user Bob"',
  },
  {
    term: "license",
    iri: "dcterms:license",
    description: `Reference to a \`License\` of this ${kwds.className}`,
    cardinality: "0..n",
    valueType: "IRI",
    exampleValues: "http://example.com/License",
  },
  {
    term: "rightsHolder",
    iri: "dcterms:rightsHolder",
    description: `Reference to a rights holder (usually an \`Organization\` or \`Person\`) of this ${kwds.className}`,
    cardinality: "0..n",
    valueType: "IRI",
    exampleValues: "http://example.com/Person",
  },
  {
    term: "rightsHolderLiteral",
    iri: "dcterms:rightsHolder",
    description: `String identifying the rights holder of this ${kwds.className}, used as a fallback when no IRI is available`,
    cardinality: "0..n",
    valueType: "string",
    exampleValues: '"Wikipedia user Bob"',
  },
  {
    term: "rights",
    iri: "dcterms:rights",
    description: `Reference to the \`RightsStatement\` governing this ${kwds.className}`,
    cardinality: "0..1",
    valueType: "IRI",
    exampleValues: "http://example.com/RightsStatement",
  },
];
export default dcRightsProperties;
