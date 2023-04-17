import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

const personProperties: readonly PropertiesTableProperty[] = [
  {
    term: "familyName",
    iri: "foaf:family",
    description: "Family name of the person",
    cardinality: "0..1",
    valueType: "string",
    exampleValues: "Turing",
  },
  {
    term: "givenName",
    iri: "foaf:givenName",
    description: "Given  name of the person",
    cardinality: "0..1",
    valueType: "string",
    exampleValues: "Alan",
  },
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
    term: "sortName",
    iri: "contact:sortName",
    description:
      "Name to use in sorting the person in a list of names; if not specified, use name",
    cardinality: "0..1",
    valueType: "string",
    exampleValues: "Alan Turing",
  },
];
export default personProperties;
