import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {rdfsCommentProperty} from "./rdfsCommentProperty";
import {rdfsLabelProperty} from "./rdfsLabelProperty";
import {foafDepictionProperty} from "./foafDepictionProperty";

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
