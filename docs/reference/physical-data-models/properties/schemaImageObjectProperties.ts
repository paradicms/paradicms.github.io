import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {schemaCreativeWorkProperties} from "@site/docs/reference/physical-data-models/properties/schemaCreativeWorkProperties";
import {cmsImageSrcProperty} from "@site/docs/reference/physical-data-models/properties/cmsImageSrcProperty";

const className = "SchemaImageObject";

export const schemaImageObjectProperties: readonly PropertiesTableProperty[] = [
  ...schemaCreativeWorkProperties({className, nameRequired: false}),
  cmsImageSrcProperty,
  {
    cardinality: "0..1",
    description: `Caption for this ${className}`,
    exampleValues: "Image caption",
    iri: "schema:caption",
    term: "caption",
    valueType: "IRI",
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
