import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {schemaCreativeWorkProperties} from "./schemaCreativeWorkProperties";

const className = "SchemaImageObject";

export const schemaImageObjectProperties: readonly PropertiesTableProperty[] = [
  ...schemaCreativeWorkProperties({className, nameRequired: false}),
  {
    cardinality: "0..1",
    description: `Caption for this ${className}`,
    exampleValues: "Image caption",
    iri: "schema:caption",
    term: "caption",
    valueType: "IRI",
  },
  {
    term: "contentUrl",
    iri: "schema:contentUrl",
    description:
      "Absolute or relative URL where the image data is stored; if not specified, use the `Image`'s IRI",
    cardinality: "0..1",
    valueType: "string",
    exampleValues: "http://example.com/image.jpg",
  },
  {
    cardinality: "0..n",
    description: `Reference to a thumbnail \`Image\` derived from this ${className}`,
    exampleValues: "http://example.com/image",
    iri: "schema:thumbnail",
    term: "thumbnail",
    valueType: "IRI",
  },
];
