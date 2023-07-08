import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {cmsPropertyFilterableProperty} from "@site/docs/reference/logical-data-models/properties/cmsPropertyFilterableProperty";
import {cmsPropertyHiddenProperty} from "@site/docs/reference/logical-data-models/properties/cmsPropertyHiddenProperty";
import {cmsPropertyOrderProperty} from "@site/docs/reference/logical-data-models/properties/cmsPropertyOrderProperty";
import {cmsPropertySearchableProperty} from "@site/docs/reference/logical-data-models/properties/cmsPropertySearchableProperty";
import {schemaThingProperties} from "@site/docs/reference/logical-data-models/properties/schemaThingProperties";

const className = "SchemaProperty";

const schemaPropertyProperties: readonly PropertiesTableProperty[] = [
  cmsPropertyFilterableProperty,
  cmsPropertyHiddenProperty,
  cmsPropertyOrderProperty,
  cmsPropertySearchableProperty,
  ...schemaThingProperties({className, nameRequired: true}),
  {
    term: "rangeIncludes",
    iri: "schema:rangeIncludes",
    description: "Class to which the values of the property belong",
    cardinality: "0..1",
    valueType: "IRI",
    exampleValues: "http://example.com/propertyValueClass",
  },
];
export default schemaPropertyProperties;
