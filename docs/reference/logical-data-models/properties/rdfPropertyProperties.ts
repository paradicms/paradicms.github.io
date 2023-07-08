import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {rdfsCommentProperty} from "./rdfsCommentProperty";
import {rdfsLabelProperty} from "./rdfsLabelProperty";
import {foafDepictionProperty} from "./foafDepictionProperty";
import {cmsPropertyFilterableProperty} from "./cmsPropertyFilterableProperty";
import {cmsPropertyHiddenProperty} from "./cmsPropertyHiddenProperty";
import {cmsPropertyOrderProperty} from "./cmsPropertyOrderProperty";
import {cmsPropertySearchableProperty} from "./cmsPropertySearchableProperty";

const className = "RdfProperty";

const rdfPropertyProperties: readonly PropertiesTableProperty[] = [
  cmsPropertyFilterableProperty,
  cmsPropertyHiddenProperty,
  cmsPropertyOrderProperty,
  cmsPropertySearchableProperty,
  foafDepictionProperty({className}),
  rdfsCommentProperty({className}),
  rdfsLabelProperty({className}),
  {
    term: "range",
    iri: "rdfs:range",
    description: "Class to which the values of the property belong",
    cardinality: "0..1",
    valueType: "IRI",
    exampleValues: "http://example.com/propertyValueClass",
  },
];
export default rdfPropertyProperties;
