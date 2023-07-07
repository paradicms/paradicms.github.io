import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

export const rdfsLabelProperty = (kwds: {
  className: string;
}): PropertiesTableProperty => ({
  term: "label",
  iri: "rdfs:label",
  description: `Short human-readable label of this ${kwds.className}`,
  cardinality: "1",
  valueType: "string",
  exampleValues: `My ${kwds.className}`,
});
