import React from "react";
import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

const PropertiesTable: React.FunctionComponent<{
  properties: readonly PropertiesTableProperty[];
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
      {properties
        .concat()
        .sort((left, right) => left.term.localeCompare(right.term))
        .map((property, propertyI) => (
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
