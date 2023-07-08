import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {schemaThingProperties} from "./schemaThingProperties";

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
