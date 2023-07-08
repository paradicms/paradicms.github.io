import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

export const cmsPropertyFilterableProperty: PropertiesTableProperty = {
  term: "filterable",
  iri: "cms:propertyFilterable",
  description:
    "Is the property filterable? e.g., it has a limited set of values or range",
  cardinality: "0..1",
  valueType: "boolean",
  exampleValues: "true",
};
