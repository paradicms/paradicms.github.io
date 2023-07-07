import React from "react";
import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {dctermsDescriptionProperty} from "@site/docs/reference/ontology/properties/dctermsDescriptionProperty";
import {dctermsTitleProperty} from "@site/docs/reference/ontology/properties/dctermsTitleProperty";

const className = "DcCollection";

const dcCollectionProperties: PropertiesTableProperty[] = [
  dctermsDescriptionProperty({className}),
  dctermsTitleProperty({className}),
  {
    cardinality: "0..n",
    description: "Reference a Work that is part of the collection",
    exampleValues: "http://example.com/work",
    iri: "dcterms:hasPart",
    term: "hasPart",
    valueType: "string",
  },
];

export default dcCollectionProperties;
