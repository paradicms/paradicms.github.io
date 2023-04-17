import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import eventProperties from "@site/docs/reference/ontology/properties/eventProperties";

const workEventProperties: readonly PropertiesTableProperty[] = eventProperties.concat(
  [
    {
      term: "work",
      iri: "cms:work",
      description: "Reference to the `Work` this event relates to",
      cardinality: "1",
      valueType: "IRI",
      exampleValues: "http://example.com/Work",
    },
  ]
);
export default workEventProperties;
