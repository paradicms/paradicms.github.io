import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import dcRightsProperties from "@site/docs/reference/physical-data-models/properties/dcRightsProperties";
import {dctermsCreatedProperty} from "@site/docs/reference/physical-data-models/properties/dctermsCreatedProperty";
import {dctermsDescriptionProperty} from "@site/docs/reference/physical-data-models/properties/dctermsDescriptionProperty";
import {dctermsModifiedProperty} from "@site/docs/reference/physical-data-models/properties/dctermsModifiedProperty";
import {dctermsTitleProperty} from "@site/docs/reference/physical-data-models/properties/dctermsTitleProperty";

const className = "DcPhysicalObject";

const dcPhysicalObjectProperties: readonly PropertiesTableProperty[] = [
  ...dcRightsProperties({className}),
  dctermsCreatedProperty({className}),
  dctermsDescriptionProperty({className}),
  dctermsModifiedProperty({className}),
  dctermsTitleProperty({className}),
  {
    term: "relation",
    iri: "dcterms:relation",
    description: `Reference to a related resource, such as a Wikipedia page`,
    cardinality: "0..n",
    valueType: "IRI",
    exampleValues: "http://example.com/related",
  },
  {
    term: "spatial",
    iri: "dcterms:spatial",
    description: `Reference to a \`Location\` this ${className} is spatially located in/at`,
    cardinality: "0..n",
    valueType: "IRI",
    exampleValues: "http://example.com/Location",
  },
];
export default dcPhysicalObjectProperties;
