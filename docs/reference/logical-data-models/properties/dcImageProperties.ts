import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import dcRightsProperties from "@site/docs/reference/physical-data-models/properties/dcRightsProperties";
import {owlSameAsProperty} from "@site/docs/reference/physical-data-models/properties/owlSameAsProperty";
import {dctermsTitleProperty} from "@site/docs/reference/physical-data-models/properties/dctermsTitleProperty";
import {dctermsModifiedProperty} from "@site/docs/reference/physical-data-models/properties/dctermsModifiedProperty";
import {cmsImageSrcProperty} from "@site/docs/reference/physical-data-models/properties/cmsImageSrcProperty";

const className = "DcImage";

const dcImageProperties: readonly PropertiesTableProperty[] = [
  cmsImageSrcProperty,
  ...dcRightsProperties({className}),
  dctermsModifiedProperty({className}),
  dctermsTitleProperty({cardinality: "0..1", className}),
  owlSameAsProperty({className}),
  {
    term: "copyable",
    iri: "cms:imageCopyable",
    description: "Is the image copyable from its source?",
    cardinality: "0..1",
    valueType: "boolean",
    exampleValues: "true",
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
    term: "source",
    iri: "dcterms:source",
    description:
      "reference to another `Image` that this `Image` is a thumbnail of, or reference to a `Work` that this `Image` depicts",
    cardinality: "0..1",
    valueType: "IRI",
    exampleValues: "http://example.com/OtherImage",
  },
  {
    term: "width",
    iri: "exif:width",
    description: "Exact height of the image, in pixels",
    cardinality: "0..1",
    valueType: "integer",
    exampleValues: "200",
  },
];
export default dcImageProperties;
