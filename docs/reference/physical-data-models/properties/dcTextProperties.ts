import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import dcRightsProperties from "@site/docs/reference/physical-data-models/properties/dcRightsProperties";

const className = "DcText";

const dcTextProperties: readonly PropertiesTableProperty[] = [
  ...dcRightsProperties({className}),
  {
    term: "value",
    iri: "rdf:value",
    description: "Text value",
    cardinality: "1",
    valueType: "string",
    exampleValues: '"Text with metadata"',
  },
];
export default dcTextProperties;
