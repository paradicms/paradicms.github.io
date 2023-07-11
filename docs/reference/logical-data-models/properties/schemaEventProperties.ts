import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {schemaThingProperties} from "./schemaThingProperties";

export const schemaEventProperties = (kwds: {
  className: string;
}): readonly PropertiesTableProperty[] => [
  ...schemaThingProperties({className: kwds.className, nameRequired: true}),
  {
    term: "endDate",
    iri: "schema:endDate",
    description: `Date-time the ${kwds.className} ends`,
    cardinality: "0..1",
    valueType: "dateTime",
    exampleValues: "2023-03-08T18:23:16+00:00",
  },
  {
    term: "startDate",
    iri: "schema:startDate",
    description: `Date-time the ${kwds.className} starts`,
    cardinality: "0..1",
    valueType: "dateTime",
    exampleValues: "2023-03-08T18:23:16+00:00",
  },
];
