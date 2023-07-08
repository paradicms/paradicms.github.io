import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import foafAgentProperties from "@site/docs/reference/logical-data-models/properties/foafAgentProperties";

const foafPersonProperties: readonly PropertiesTableProperty[] = [
  ...foafAgentProperties({className: "FoafPerson"}),
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
];
export default foafPersonProperties;
