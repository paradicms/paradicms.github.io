import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {rdfsCommentProperty} from "@site/docs/reference/physical-data-models/properties/rdfsCommentProperty";
import {rdfsLabelProperty} from "@site/docs/reference/physical-data-models/properties/rdfsLabelProperty";
import {foafDepictionProperty} from "@site/docs/reference/physical-data-models/properties/foafDepictionProperty";

const className = "CmsPropertyGroup";

const cmsPropertyGroupProperties: readonly PropertiesTableProperty[] = [
  foafDepictionProperty({className}),
  rdfsCommentProperty({className}),
  rdfsLabelProperty({className}),
  {
    cardinality: "0..n",
    description: "Reference a Property that is part of the property group",
    exampleValues: "http://example.com/work",
    iri: "dcterms:hasPart",
    term: "hasPart",
    valueType: "string",
  },
];
export default cmsPropertyGroupProperties;
