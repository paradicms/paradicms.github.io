import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import rightsProperties from "@site/docs/reference/ontology/properties/rightsProperties";

const workProperties: readonly PropertiesTableProperty[] = rightsProperties.concat(
  [
    {
      term: "collection",
      iri: "cms:collection",
      description:
        "Child->parent reference to a collection the work belongs to",
      cardinality: "0..n",
      valueType: "IRI",
      exampleValues: "http://example.com/Collection",
    },
    {
      term: "description",
      iri: "dcterms:description",
      description: "Human-readable summary of the work",
      cardinality: "0..1",
      valueType: "string",
      exampleValues: "My work was created ...",
    },
    {
      term: "page",
      iri: "foaf:page",
      description: "Website of the work",
      cardinality: "0..n",
      valueType: "string",
      exampleValues: "https://mysite.com",
    },
    {
      term: "relation",
      iri: "dcterms:relation",
      description: "Related IRI e.g., a Wikidata concept IRI",
      cardinality: "0..n",
      valueType: "IRI",
      exampleValues: "http://www.wikidata.org/entity/Q7251",
    },
    {
      term: "spatial",
      iri: "dcterms:spatial",
      description:
        "Reference to a `Location` this work is spatially located in/at",
      cardinality: "0..n",
      valueType: "IRI",
      exampleValues: "http://example.com/Location",
    },
    {
      term: "title",
      iri: "dcterms:title",
      description: "Human-readable name of the work",
      cardinality: "1",
      valueType: "IRI",
      exampleValues: "My work",
    },
    {
      term: "type",
      iri: "dcterms:type",
      description:
        "Type of the work, usually a [Dublin Core Metadata Initiative Type](https://www.dublincore.org/specifications/dublin-core/dcmi-type-vocabulary/)",
      cardinality: "0..1",
      valueType: "IRI",
      exampleValues: "http://purl.org/dc/dcmitype/Text",
    },
  ]
);
export default workProperties;
