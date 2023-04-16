import PropertiesTable from "@site/src/components/PropertiesTable";
import React from "react";

const CollectionPropertiesTable: React.FunctionComponent = () => (
  <PropertiesTable
    properties={[
      {
        cardinality: "0..1",
        description: "Human-readable summary of the collection",
        exampleValues: "A collection of my works",
        iri: "dcterms:description",
        term: "description",
        valueType: "string",
      },
      {
        cardinality: "1",
        description: "Human-readable name of the collection",
        exampleValues: "My collection",
        iri: "dcterms:title",
        term: "title",
        valueType: "string",
      },
    ]}
  />
);

export default CollectionPropertiesTable;
