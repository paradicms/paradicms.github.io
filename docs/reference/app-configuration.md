---
sidebar_position: 2
---

# Reference: app configuration

This page documents the means of configuring [Paradicms apps](./apps).

### App configuration RDF

Like the data consumed by apps, app configuration is specified in RDF:

```turtle
@prefix : <http://www.paradicms.org/ns/configuration#> .

[] a :AppConfiguration;
  :stylesheet <http://example.com/example.css> ;
  :title "Example"
  .
```

All app configuration properties are in the namespace `http://www.paradicms.org/ns/configuration#`. In the Turtle example above it is the default namespace (`:`), which allows properties to be specified as `:property`: `:stylesheet`, `:title`, et al.

In JSON-LD syntax you can use a simple `@context` to indicate that terms are in the configuration namespace:
```json
{
    "@context": {
        "@vocab": "http://www.paradicms.org/ns/configuration#"
    },
    "@type": "AppConfiguration",
    "stylesheet": "http://example.com/example.css",
    "title": "Example"
}
```


### `AppConfiguration`

The app configuration RDF graph must include a top-level resource with the type `AppConfiguration`. It can be a blank node, as in the examples above. In the Turtle the top-level resource is declared with  `[] a AppConfiguration`. In JSON-LD it is the `"@type": "AppConfiguration"` property.

Most of the app configuration consists of statements about this top-level resource, like `:title "Example"` in the example Turtle. The following table documents the available properties of an `AppConfiguration`. 

#### Properties

| Property     | Description                                                                     | Cardinality | Value type        | Example values                       |
|--------------|---------------------------------------------------------------------------------|-------------|-------------------|--------------------------------------|
| app          | Identifier of one of the [Paradicms apps](/docs/reference/apps)                 | 0..1        | string            | work-search                          |
| stylesheet   | Absolute or relative URL of a [Bootstrap 5](https://getbootstrap.com/) CSS file | 0..1        | string or IRI     | http://example.com/bootstrap.min.css |
| title        | Site title, used in the HTML `<title>` tag and other parts of the app           | 0..1        | string            | My collection                        |

Note that all the properties are optional. Paradicms apps don't require configuration, but will run with sensible defaults.

### Other classes

Instances of `Property` and `PropertyGroup` classes from the [Paradicms ontology](/docs/reference/ontology) may also affect the behavior of apps by e.g., making certain properties filterable and fulltext-searchable. See the [ontology reference](/docs/reference/ontology) for more information.

### Passing app configuration to an app

App configuration can be passed to an app by:

* putting the app configuration RDF in a separate file
* adding an `AppConfiguration` class instance to the data in your preferred source

#### Separate app configuration RDF file

App configuration RDF can be passed to an app via a file in any RDF serialization:

* Turtle: `app-configuration.ttl`
* JSON-LD: `app-configuration.json`
* N-Triples: `app-configuration.nt`

or any of the other serializations supported by the [`rdf-parse` library](https://www.npmjs.com/package/rdf-parse). See the latter page for a list of file extensions associated with each serialization.

The path to an app configuration file is specified via the `data_file_paths` input parameter to GitHub Actions or the `DATA_FILE_PATHS` environment variable when building an app manually.

#### App configuration in the data

An `AppConfiguration` class instance can be included in the data instead of passing it in a separate file.

For example, you can add an `AppConfiguration` sheet to a spreadsheet (as in the [Google Sheets template](https://docs.google.com/spreadsheets/d/1j2oaMvMxY4pnXO-sEH_fky2R2gm6TQeIev_Q8rVOD4M/edit#gid=0)) or an `AppConfiguration` Markdown directory (as in the [Markdown directory template](https://github.com/minorg/ComputerScienceInventions)). The `AppConfiguration` follows the usual rules of the format, just like other Paradicms models (`Collection`, `Image`, `Work`, et al.).

