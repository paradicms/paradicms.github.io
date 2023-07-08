import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import dcRightsProperties from "./dcRightsProperties";
import {dctermsCreatedProperty} from "./dctermsCreatedProperty";
import {dctermsDescriptionProperty} from "./dctermsDescriptionProperty";
import {dctermsModifiedProperty} from "./dctermsModifiedProperty";
import {dctermsTitleProperty} from "./dctermsTitleProperty";

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
