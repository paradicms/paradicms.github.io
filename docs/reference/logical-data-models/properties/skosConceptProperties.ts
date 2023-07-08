import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {foafDepictionProperty} from "./foafDepictionProperty";

const className = "SkosConcept";

const skosConceptProperties: readonly PropertiesTableProperty[] = [
  foafDepictionProperty({className}),
  {
    cardinality: "0..n",
    description: "Alternative label",
    exampleValues: "Alternative concept label",
    iri: "skos:altLabel",
    term: "altLabel",
    valueType: "string",
  },
  {
    cardinality: "0..1",
    description: "Definition",
    exampleValues: "Human-readable, long-form concept definition",
    iri: "skos:definition",
    term: "definition",
    valueType: "string",
  },
  {
    cardinality: "1",
    description: "Preferred label",
    exampleValues: "Concept label",
    iri: "skos:prefLabel",
    term: "prefLabel",
    valueType: "string",
  },
  {
    cardinality: "0..1",
    description: "Value to use when a controlled value is selected",
    exampleValues: "5",
    iri: "rdf:value",
    term: "value",
    valueType: "IRI or literal",
  },
];

export default skosConceptProperties;
