import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

export const cmsPropertyOrderProperty: PropertiesTableProperty = {
  term: "order",
  iri: "cms:propertyOrder",
  description: "Order of the property within its group",
  cardinality: "0..1",
  valueType: "integer",
  exampleValues: "0",
};
