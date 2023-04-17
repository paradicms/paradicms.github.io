import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import workEventProperties from "@site/docs/reference/ontology/properties/workEventProperties";

const workCreationProperties: readonly PropertiesTableProperty[] = workEventProperties.concat(
  [
    {
      term: "contributor",
      iri: "dcterms:contributor",
      description:
        "Reference to an `Organization` or `Person` who contributed to the work's creation",
      cardinality: "0..n",
      valueType: "IRI",
      exampleValues: "http://example.com/Person",
    },
    {
      term: "creator",
      iri: "dcterms:creator",
      description:
        "Reference to an `Organization` or `Person` who created the work",
      cardinality: "0..n",
      valueType: "IRI",
      exampleValues: "http://example.com/Person",
    },
  ]
);
export default workCreationProperties;
