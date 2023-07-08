import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {schemaThingProperties} from "@site/docs/reference/physical-data-models/properties/schemaThingProperties";

const className = "SchemaTextObject";

const schemaTextObjectProperties: readonly PropertiesTableProperty[] = [
  ...schemaThingProperties({className, nameRequired: false}),
  {
    term: "text",
    iri: "schema:text",
    description: "Text value",
    cardinality: "1",
    valueType: "string",
    exampleValues: '"Text with metadata"',
  },
];
export default schemaTextObjectProperties;
