import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {schemaThingProperties} from "./schemaThingProperties";

export const schemaCreativeWorkProperties = (kwds: {
  className: string;
  nameRequired: boolean;
}): readonly PropertiesTableProperty[] => [
  ...schemaThingProperties({className: kwds.className}),
  {
    term: "contributor",
    iri: "schema:contributor",
    description: `Reference to a contributor (usually an \`Organization\` or \`Person\`) of this ${kwds.className}`,
    cardinality: "0..n",
    valueType: "IRI",
    exampleValues: "http://example.com/Person",
  },
  {
    term: "contributorLiteral",
    iri: "schema:contributor",
    description: `String identifying a contributor to this ${kwds.className}, used as a fallback when no IRI is available`,
    cardinality: "0..n",
    valueType: "string",
    exampleValues: '"Wikipedia user Bob"',
  },
  {
    term: "copyrightHolder",
    iri: "schema:copyrightHolder",
    description: `Reference to a rights holder (usually an \`Organization\` or \`Person\`) of this ${kwds.className}`,
    cardinality: "0..n",
    valueType: "IRI",
    exampleValues: "http://example.com/Person",
  },
  {
    term: "copyrightHolderLiteral",
    iri: "schema:copyrightHolder",
    description: `String identifying the rights holder of this ${kwds.className}, used as a fallback when no IRI is available`,
    cardinality: "0..n",
    valueType: "string",
    exampleValues: '"Wikipedia user Bob"',
  },
  {
    term: "creator",
    iri: "schema:creator",
    description: `Reference to a creator (usually an \`Organization\` or \`Person\`) of this ${kwds.className}`,
    cardinality: "0..n",
    valueType: "IRI",
    exampleValues: "http://example.com/Person",
  },
  {
    term: "creatorLiteral",
    iri: "schema:creator",
    description: `String identifying a creator of this ${kwds.className}, used as a fallback when no IRI is available`,
    cardinality: "0..n",
    valueType: "string",
    exampleValues: '"Wikipedia user Bob"',
  },
  {
    term: "dateCreated",
    iri: "schema:dateCreated",
    description: `Date-time the ${kwds.className} was created`,
    cardinality: "0..1",
    valueType: "dateTime",
    exampleValues: "2023-03-08T18:23:16+00:00",
  },
  {
    term: "dateModified",
    iri: "schema:dateModified",
    description: `Date-time the ${kwds.className} was modified`,
    cardinality: "0..1",
    valueType: "dateTime",
    exampleValues: "2023-03-08T18:23:16+00:00",
  },
  {
    term: "license",
    iri: "schema:license",
    description: `Reference to a \`License\` of this ${kwds.className}`,
    cardinality: "0..n",
    valueType: "IRI",
    exampleValues: "http://example.com/License",
  },
  {
    term: "spatial",
    iri: "schema:spatial",
    description: `Reference to a \`Location\` this ${kwds.className} is spatially located in/at`,
    cardinality: "0..n",
    valueType: "IRI",
    exampleValues: "http://example.com/Location",
  },
  {
    term: "usageInfo",
    iri: "schema:usageInfo",
    description: `Reference to the \`RightsStatement\` governing this ${kwds.className}`,
    cardinality: "0..1",
    valueType: "IRI",
    exampleValues: "http://example.com/RightsStatement",
  },
];
