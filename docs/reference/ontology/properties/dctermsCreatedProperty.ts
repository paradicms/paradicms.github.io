import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

export const dctermsCreatedProperty = (kwds: {
  className: string;
}): PropertiesTableProperty => ({
  term: "created",
  iri: "dcterms:created",
  description: `Date-time the ${kwds.className} was created`,
  cardinality: "0..1",
  valueType: "dateTime",
  exampleValues: "2023-03-08T18:23:16+00:00",
});
