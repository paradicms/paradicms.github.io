import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

export const cmsImageSrcProperty: PropertiesTableProperty = {
  term: "src",
  iri: "cms:imageSrc",
  description:
    "Absolute or relative URL where the image data is stored; if not specified, use the `Image`'s IRI",
  cardinality: "0..1",
  valueType: "string",
  exampleValues: "http://example.com/image.jpg",
};
