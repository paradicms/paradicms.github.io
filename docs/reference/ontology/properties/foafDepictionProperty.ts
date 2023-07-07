import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

export const foafDepictionProperty = (kwds: {
  className: string;
}): PropertiesTableProperty => ({
  term: "depiction",
  iri: "foaf:depiction",
  description: `Reference to an \`Image\` depicting this ${kwds.className}`,
  cardinality: "0..n",
  valueType: "IRI",
  exampleValues: "http://example.com/image",
});
