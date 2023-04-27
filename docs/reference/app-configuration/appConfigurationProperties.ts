import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

const appConfigurationProperties: readonly PropertiesTableProperty[] = [
  {
    term: "app",
    iri: "configuration:app",
    description: "Identifier of one of the Paradicms apps",
    cardinality: "0..1",
    valueType: "string",
    exampleValues: "work-search",
  },
  {
    term: "stylesheet",
    iri: "configuration:stylesheet",
    description: "Absolute or relative URL of a Bootstrap 5 CSS file",
    cardinality: "0..1",
    valueType: "string or IRI",
    exampleValues: "http://example.com/bootstrap.min.css",
  },
  {
    term: "title",
    iri: "configuration:title",
    description:
      "Site title, used in the HTML title tag and other parts of the app",
    cardinality: "0..1",
    valueType: "string",
    exampleValues: "My collection",
  },
];
export default appConfigurationProperties;
