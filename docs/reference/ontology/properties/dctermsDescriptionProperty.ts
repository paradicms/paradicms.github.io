import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

export const dctermsDescriptionProperty = (kwds: {
  className: string;
}): PropertiesTableProperty => ({
  cardinality: "0..1",
  description: `Human-readable summary of the ${kwds.className}`,
  exampleValues: `A collection}`,
  iri: "dcterms:description",
  term: "description",
  valueType: "string",
});
