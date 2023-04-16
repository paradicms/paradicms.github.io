import React from "react";

const PropertiesTable: React.FunctionComponent<{
  properties: readonly {
    readonly exampleValues: string;
    readonly cardinality: string;
    readonly description: string;
    readonly iri: string;
    readonly term: string;
    readonly valueType: string;
  }[];
}> = ({properties}) => (
  <table>
    <thead>
      <tr>
        <th>Term</th>
        <th>IRI</th>
        <th>Description</th>
        <th>Cardinality</th>
        <th>ValueType</th>
        <th>Example values</th>
      </tr>
    </thead>
    <tbody>
      {properties.map((property, propertyI) => (
        <tr key={propertyI}>
          <td>
            <code>{property.term}</code>
          </td>
          <td>
            <code>{property.iri}</code>
          </td>
          <td>{property.description}</td>
          <td>{property.cardinality}</td>
          <td>{property.valueType}</td>
          <td>{property.exampleValues}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default PropertiesTable;
