import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {rdfsCommentProperty} from "@site/docs/reference/ontology/properties/rdfsCommentProperty";
import {rdfsLabelProperty} from "@site/docs/reference/ontology/properties/rdfsLabelProperty";
import {foafDepictionProperty} from "@site/docs/reference/ontology/properties/foafDepictionProperty";

const className = "RdfProperty";

const rdfPropertyProperties: readonly PropertiesTableProperty[] = [
  foafDepictionProperty({className}),
  rdfsCommentProperty({className}),
  rdfsLabelProperty({className}),
  {
    term: "filterable",
    iri: "cms:propertyFilterable",
    description:
      "Is the property filterable? e.g., it has a limited set of values or range",
    cardinality: "0..1",
    valueType: "boolean",
    exampleValues: "true",
  },
  {
    term: "order",
    iri: "cms:propertyOrder",
    description: "Order of the property within its group",
    cardinality: "0..1",
    valueType: "integer",
    exampleValues: "0",
  },
  {
    term: "range",
    iri: "rdfs:range",
    description: "Class to which the values of the property belong",
    cardinality: "0..1",
    valueType: "IRI",
    exampleValues: "http://example.com/propertyValueClass",
  },
  {
    term: "searchable",
    iri: "cms:propertySearchable",
    description: "Is the property fulltext searchable?",
    cardinality: "0..1",
    valueType: "boolean",
    exampleValues: "true",
  },
];
export default rdfPropertyProperties;
