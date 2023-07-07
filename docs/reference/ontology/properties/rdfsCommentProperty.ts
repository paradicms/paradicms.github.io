import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

export const rdfsCommentProperty = (kwds: {
  className: string;
}): PropertiesTableProperty => ({
  term: "comment",
  iri: "rdfs:comment",
  description: `Description of this ${kwds.className}`,
  cardinality: "0..1",
  valueType: "string",
  exampleValues: `Human-readable long description of this ${kwds.className}`,
});
