import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

const owlTimeDateTimeDescriptionProperties: readonly PropertiesTableProperty[] = [
  {
    cardinality: "0..1",
    description: "Day of the month, 1..31 inclusive",
    exampleValues: "5",
    iri: "time:day",
    term: "day",
    valueType: "integer",
  },
  {
    cardinality: "0..1",
    description: "Hour of the day, 0..23 inclusive",
    exampleValues: "5",
    iri: "time:hour",
    term: "hour",
    valueType: "integer",
  },
  {
    cardinality: "0..1",
    description: "Minute of the hour, 0..59 inclusive",
    exampleValues: "5",
    iri: "time:minute",
    term: "minute",
    valueType: "integer",
  },
  {
    cardinality: "0..1",
    description: "Month of the year, 1..12 inclusive",
    exampleValues: "5",
    iri: "time:month",
    term: "month",
    valueType: "integer",
  },
  {
    cardinality: "0..1",
    description: "Gregorian calendar year",
    exampleValues: "2023",
    iri: "time:year",
    term: "year",
    valueType: "integer",
  },
];

export default owlTimeDateTimeDescriptionProperties;
