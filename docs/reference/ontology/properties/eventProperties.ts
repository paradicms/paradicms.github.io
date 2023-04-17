import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

const eventProperties: readonly PropertiesTableProperty[] = [
  {
    term: "date",
    iri: "dcterms:date",
    description: "Single date of the work event",
    cardinality: "0..1",
    valueType: "dateTime, `DateTimeDescription`, or string",
    exampleValues: "2023-03-08T18:23:16+00:00",
  },
  {
    term: "description",
    iri: "dcterms:description",
    description: "Human-readable summary of the work event",
    cardinality: "0..1",
    valueType: "string",
    exampleValues: "My work was created ...",
  },
  {
    term: "endDate",
    iri: "vra:endDate",
    description: "End date of the work event",
    cardinality: "0..1",
    valueType: "dateTime, `DateTimeDescription`, or string",
    exampleValues: "2023-03-08T18:23:16+00:00",
  },
  {
    term: "spatial",
    iri: "dcterms:spatial",
    description: "Reference to a `Location` where the event took place",
    cardinality: "0..1",
    valueType: "IRI",
    exampleValues: "http://example.com/Location",
  },
  {
    term: "startDate",
    iri: "vra:startDate",
    description: "Start date of the work event",
    cardinality: "0..1",
    valueType: "dateTime, `DateTimeDescription`, or string",
    exampleValues: "2023-03-08T18:23:16+00:00",
  },
  {
    term: "title",
    iri: "dcterms:title",
    description: "Human-readable name of the work event",
    cardinality: "0..1",
    valueType: "string",
    exampleValues: "My work creation",
  },
];
export default eventProperties;
