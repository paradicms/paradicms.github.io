import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

export const cmsPropertySearchableProperty: PropertiesTableProperty = {
  term: "searchable",
  iri: "cms:propertySearchable",
  description: "Is the property fulltext searchable?",
  cardinality: "0..1",
  valueType: "boolean",
  exampleValues: "true",
};
