import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

export const dctermsTitleProperty = (kwds: {
  cardinality?: string;
  className: string;
}): PropertiesTableProperty => ({
  cardinality: kwds.cardinality ?? "1",
  description: `Human-readable name of the ${kwds.className}`,
  exampleValues: `My ${kwds.className}`,
  iri: "dcterms:title",
  term: "title",
  valueType: "string",
});
