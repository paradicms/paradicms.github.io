import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

export const schemaThingProperties = (kwds: {
  className: string;
  nameRequired?: boolean;
}): readonly PropertiesTableProperty[] => [
  {
    cardinality: "0..n",
    description: `A human-readable alternate name for this ${kwds.className}`,
    exampleValues: "An alternate name",
    iri: "schema:alternateName",
    term: "alternateName",
    valueType: "string",
  },
  {
    cardinality: "0..1",
    description: `A human-readable long description for this ${kwds.className}`,
    exampleValues: "Long description text",
    iri: "schema:description",
    term: "description",
    valueType: "string",
  },
  {
    cardinality: "0..n",
    description: `Reference to an \`Image\` that depicts this ${kwds.className}`,
    exampleValues: "http://example.com/image",
    iri: "schema:image",
    term: "image",
    valueType: "IRI",
  },
  {
    cardinality: kwds.nameRequired ? "1" : "0..n",
    description: `A human-readable short name for this ${kwds.className}`,
    exampleValues: `My name`,
    iri: "schema:name",
    term: "name",
    valueType: "string",
  },
  {
    term: "sameAs",
    iri: "schema:sameAs",
    description: `IRI of a ${kwds.className} this ${kwds.className} is the same as`,
    cardinality: "0..n",
    valueType: "IRI",
    exampleValues: "http://www.wikidata.org/entity/Q7251",
  },
  {
    term: "url",
    iri: "schema:url",
    description: `URL of a webpage about this ${kwds.className}, such as a Wikipedia page`,
    cardinality: "0..n",
    valueType: "IRI",
    exampleValues: "http://example.com/somepage",
  },
];
