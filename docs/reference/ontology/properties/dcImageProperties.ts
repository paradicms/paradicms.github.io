import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import dcRightsProperties from "@site/docs/reference/ontology/properties/dcRightsProperties";

const dcImageProperties: readonly PropertiesTableProperty[] = dcRightsProperties.concat(
  [
    {
      term: "copyable",
      iri: "cms:imageCopyable",
      description: "Is the image copyable from its source?",
      cardinality: "0..1",
      valueType: "boolean",
      exampleValues: "true",
    },
    {
      term: "created",
      iri: "dcterms:created",
      description: "Date-time the image was created",
      cardinality: "0..1",
      valueType: "dateTime",
      exampleValues: "2023-03-08T18:23:16+00:00",
    },
    {
      term: "contributorLiteral",
      iri: "dcterms:contributor",
      description:
        "String identifying a contributor to this image, used as a fallback when no IRI is available",
      cardinality: "0..1",
      valueType: "string",
      exampleValues: '"Wikipedia user Bob"',
    },
    {
      term: "depicts",
      iri: "foaf:depicts",
      description:
        "Reference to the object this `Image` depicts, such as an IRI of a  `Person` or `Work`",
      cardinality: "1",
      valueType: "IRI",
      exampleValues: "http://example.com/Work",
    },
    {
      term: "format",
      iri: "dcterms:format",
      description: "MIME type of the image",
      cardinality: "0..1",
      valueType: "string",
      exampleValues: "image/jpeg",
    },
    {
      term: "height",
      iri: "exif:height",
      description: "Exact height of the image, in pixels",
      cardinality: "0..1",
      valueType: "integer",
      exampleValues: "200",
    },
    {
      term: "maxHeight",
      iri: "cms:imageMaxHeight",
      description: "Maximum height of the image, in pixels",
      cardinality: "0..1",
      valueType: "integer",
      exampleValues: "200",
    },
    {
      term: "maxWidth",
      iri: "cms:imageMaxWidth",
      description: "Maximum width of the image, in pixels",
      cardinality: "0..1",
      valueType: "integer",
      exampleValues: "200",
    },
    {
      term: "modified",
      iri: "dcterms:modified",
      description: "Date-time the image was modified",
      cardinality: "0..1",
      valueType: "dateTime",
      exampleValues: "2023-03-08T18:23:16+00:00",
    },
    {
      term: "src",
      iri: "cms:imageSrc",
      description:
        "Absolute or relative URL where the image data is stored; if not specified, use the `Image`'s IRI",
      cardinality: "0..1",
      valueType: "string",
      exampleValues: "http://example.com/image.jpg",
    },
    {
      term: "thumbnail",
      iri: "foaf:thumbnail",
      description:
        "Reference to another `Image` that is a thumbnail of this `Image`",
      cardinality: "0..1",
      valueType: "IRI",
      exampleValues: "http://example.com/OtherImage",
    },
    {
      term: "thumbnailOf",
      iri: "cms:thumbnailOf",
      description:
        "Reference to another `Image` that this `Image` is a thumbnail of; inverse of `thumbnail`",
      cardinality: "0..1",
      valueType: "IRI",
      exampleValues: "http://example.com/OtherImage",
    },
    {
      term: "title",
      iri: "dcterms:title",
      description: "Human-readable caption of this image",
      cardinality: "0..1",
      valueType: "string",
      exampleValues: "My image",
    },
    {
      term: "width",
      iri: "exif:width",
      description: "Exact height of the image, in pixels",
      cardinality: "0..1",
      valueType: "integer",
      exampleValues: "200",
    },
  ]
);
export default dcImageProperties;
