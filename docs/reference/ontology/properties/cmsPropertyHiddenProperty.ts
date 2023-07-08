import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

export const cmsPropertyHiddenProperty: PropertiesTableProperty = {
  term: "hidden",
  iri: "cms:hidden",
  description: "Is the property hidden in the user interface?",
  cardinality: "0..1",
  valueType: "boolean",
  exampleValues: "true",
};
