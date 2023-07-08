import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

export const owlSameAsProperty = (kwds: {
  className: string;
}): PropertiesTableProperty => ({
  term: "sameAs",
  iri: "owl:sameAs",
  description: `IRI of a ${kwds.className} this ${kwds.className} is the same as`,
  cardinality: "0..n",
  valueType: "IRI",
  exampleValues: "http://www.wikidata.org/entity/Q7251",
});
