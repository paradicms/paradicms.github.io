import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

const workProperties: readonly PropertiesTableProperty[] = [
  {
    term: "collection",
    iri: "cms:collection",
    description: "Child->parent reference to a collection the work belongs to",
    cardinality: "0..n",
    valueType: "IRI",
    exampleValues: "http://example.com/Collection",
  },
  {
    term: "contributor",
    iri: "dcterms:contributor",
    description:
      "Reference to the contributor (usually an `Organization` or `Person`) of this work",
    cardinality: "0..1",
    valueType: "IRI",
    exampleValues: "http://example.com/Person",
  },
  {
    term: "contributorLiteral",
    iri: "dcterms:contributor",
    description:
      "String identifying a contributor to this work, used as a fallback when no IRI is available",
    cardinality: "0..1",
    valueType: "string",
    exampleValues: '"Wikipedia user Bob"',
  },
  {
    term: "creator",
    iri: "dcterms:creator",
    description:
      "Reference to the creator (usually an `Organization` or `Person`) of this work",
    cardinality: "0..1",
    valueType: "IRI",
    exampleValues: "http://example.com/Person",
  },
  {
    term: "creatorLiteral",
    iri: "dcterms:creator",
    description:
      "String identifying the creator of this work, used as a fallback when no IRI is available",
    cardinality: "0..1",
    valueType: "string",
    exampleValues: '"Wikipedia user Bob"',
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
    term: "license",
    iri: "dcterms:license",
    description: "Reference to the `License` of this work",
    cardinality: "0..1",
    valueType: "IRI",
    exampleValues: "http://example.com/License",
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
    term: "rightsHolder",
    iri: "dcterms:rightsHolder",
    description:
      "Reference to the rights holder (usually an `Organization` or `Person`) of this work",
    cardinality: "0..1",
    valueType: "IRI",
    exampleValues: "http://example.com/Person",
  },
  {
    term: "rightsHolderLiteral",
    iri: "dcterms:rightsHolder",
    description:
      "String identifying the rights holder of this work, used as a fallback when no IRI is available",
    cardinality: "0..1",
    valueType: "string",
    exampleValues: '"Wikipedia user Bob"',
  },
  {
    term: "rights",
    iri: "dcterms:rights",
    description: "Reference to the `RightsStatement` of this work",
    cardinality: "0..1",
    valueType: "IRI",
    exampleValues: "http://example.com/RightsStatement",
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
];
export default workProperties;
