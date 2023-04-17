import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

const organizationProperties: readonly PropertiesTableProperty[] = [
  {
    term: "name",
    iri: "foaf:name",
    description: "Human-readable name",
    cardinality: "1",
    valueType: "string",
    exampleValues: "My company",
  },
  {
    term: "page",
    iri: "foaf:page",
    description: "Website of the organization",
    cardinality: "0..n",
    valueType: "string",
    exampleValues: "https://mycompany.com",
  },
  {
    term: "relation",
    iri: "dcterms:relation",
    description: "Related IRI e.g., a Wikidata concept IRI",
    cardinality: "0..n",
    valueType: "IRI",
    exampleValues: "http://www.wikidata.org/entity/Q49211",
  },
];
export default organizationProperties;
