import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import agentProperties from "@site/docs/reference/ontology/properties/agentProperties";

const personProperties: readonly PropertiesTableProperty[] = agentProperties.concat(
  [
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
  ]
);
export default personProperties;
