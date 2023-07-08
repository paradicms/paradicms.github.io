import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {schemaThingProperties} from "@site/docs/reference/ontology/properties/schemaThingProperties";

const className = "SchemaPlace";

const schemaPlaceProperties: readonly PropertiesTableProperty[] = [
  ...schemaThingProperties({className, nameRequired: false}),
  {
    term: "latitude",
    iri: "schema:latitude",
    description: `WGS84 latitude of the ${className}'s centroid`,
    cardinality: "0..1",
    valueType: "decimal",
    exampleValues: "42.7281",
  },
  {
    term: "longitude",
    iri: "schema:longitude",
    description: `WGS84 longitude of the ${className}'s centroid`,
    cardinality: "0..1",
    valueType: "decimal",
    exampleValues: "-73.68758",
  },
];
export default schemaPlaceProperties;
