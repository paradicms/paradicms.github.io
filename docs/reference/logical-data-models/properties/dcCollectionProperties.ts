import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {dctermsDescriptionProperty} from "@site/docs/reference/logical-data-models/properties/dctermsDescriptionProperty";
import {dctermsTitleProperty} from "@site/docs/reference/logical-data-models/properties/dctermsTitleProperty";

const className = "DcCollection";

const dcCollectionProperties: PropertiesTableProperty[] = [
  dctermsDescriptionProperty({className}),
  dctermsTitleProperty({className}),
  {
    cardinality: "0..n",
    description: `Reference to a Work that is part of the ${className}`,
    exampleValues: "http://example.com/work",
    iri: "dcterms:hasPart",
    term: "hasPart",
    valueType: "IRI",
  },
];

export default dcCollectionProperties;
