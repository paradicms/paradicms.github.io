import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {rdfsCommentProperty} from "@site/docs/reference/physical-data-models/properties/rdfsCommentProperty";
import {rdfsLabelProperty} from "@site/docs/reference/physical-data-models/properties/rdfsLabelProperty";
import {foafDepictionProperty} from "@site/docs/reference/physical-data-models/properties/foafDepictionProperty";
import {cmsPropertyFilterableProperty} from "@site/docs/reference/physical-data-models/properties/cmsPropertyFilterableProperty";
import {cmsPropertyHiddenProperty} from "@site/docs/reference/physical-data-models/properties/cmsPropertyHiddenProperty";
import {cmsPropertyOrderProperty} from "@site/docs/reference/physical-data-models/properties/cmsPropertyOrderProperty";
import {cmsPropertySearchableProperty} from "@site/docs/reference/physical-data-models/properties/cmsPropertySearchableProperty";

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