import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {cmsPropertyFilterableProperty} from "./cmsPropertyFilterableProperty";
import {cmsPropertyHiddenProperty} from "./cmsPropertyHiddenProperty";
import {cmsPropertyOrderProperty} from "./cmsPropertyOrderProperty";
import {cmsPropertySearchableProperty} from "./cmsPropertySearchableProperty";
import {schemaThingProperties} from "./schemaThingProperties";

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
