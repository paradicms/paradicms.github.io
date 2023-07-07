import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

const foafAgentProperties: readonly PropertiesTableProperty[] = [
  {
    term: "name",
    iri: "foaf:name",
    description: "Human-readable name",
    cardinality: "1",
    valueType: "string",
    exampleValues: "Alan Turing",
  },
  {
    term: "page",
    iri: "foaf:page",
    description: "Website of the person",
    cardinality: "0..n",
    valueType: "string",
    exampleValues: "https://mysite.com",
  },
  {
    term: "relation",
    iri: "dcterms:relation",
    description: "Related IRI e.g., a Wikidata concept IRI",
    cardinality: "0..n",
    valueType: "IRI",
    exampleValues: "http://www.wikidata.org/entity/Q7251",
  },
  {
    term: "sameAs",
    iri: "owl:sameAs",
    description:
      "IRI of an agent this agent is the same as e.g., a Wikidata concept IRI",
    cardinality: "0..n",
    valueType: "IRI",
    exampleValues: "http://www.wikidata.org/entity/Q7251",
  },
];
export default foafAgentProperties;
