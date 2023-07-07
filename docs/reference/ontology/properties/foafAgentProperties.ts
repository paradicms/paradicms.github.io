import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {foafDepictionProperty} from "@site/docs/reference/ontology/properties/foafDepictionProperty";

const foafAgentProperties = (kwds: {
  className: string;
}): readonly PropertiesTableProperty[] => [
  foafDepictionProperty(kwds),
  {
    term: "homepage",
    iri: "foaf:homepage",
    description: `Reference to the homepage of this ${kwds.className}`,
    cardinality: "0..n",
    valueType: "string or IRI",
    exampleValues: "http://example.com/somepage",
  },
  {
    term: "page",
    iri: "foaf:page",
    description: `Reference to a webpage, such as a Wikipedia page, whose focus is this ${kwds.className}`,
    cardinality: "0..n",
    valueType: "string or IRI",
    exampleValues: "http://example.com/somepage",
  },
  {
    term: "name",
    iri: "foaf:name",
    description: `Human-readable name of this ${kwds.className}`,
    cardinality: "1",
    valueType: "string",
    exampleValues: "Alan Turing",
  },
];
export default foafAgentProperties;
