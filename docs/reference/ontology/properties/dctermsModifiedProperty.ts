import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

export const dctermsModifiedProperty = (kwds: {
  className: string;
}): PropertiesTableProperty => ({
  term: "modified",
  iri: "dcterms:modified",
  description: `Date-time the ${kwds.className} was modified`,
  cardinality: "0..1",
  valueType: "dateTime",
  exampleValues: "2023-03-08T18:23:16+00:00",
});
