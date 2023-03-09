---
sidebar_position: 2
---

# Reference: app configuration

This page documents the means of configuring [Paradicms apps](./apps).

### App configuration RDF

Like the data consumed by apps, app configuration is specified in RDF:

```
@prefix : <http://www.paradicms.org/ns/configuration#> .

[] a :AppConfiguration;
  :stylesheet <http://example.com/example.css> ;
  :title "Example"
  .
```

All app configuration properties are in the namespace `http://www.paradicms.org/ns/configuration#`. It is the default namespace (`:`) in the Turtle example above, which allows properties to be specified as `:property`: `:stylesheet`, `:title`, et al.

In JSON-LD syntax you can use a simple `@context` to indicate that terms are in the configuration namespace:
```json
{
    "@context": {
        "@vocab": "http://www.paradicms.org/ns/configuration"
    },
    "@type": "AppConfiguration",
    "stylesheet": "http://example.com/example.css",
    "title": "Example"
}
```


### App configuration file

App configuration RDF is passed to an app via a file in any RDF serialization:

* Turtle: `app-configuration.ttl`
* JSON-LD: `app-configuration.json`
* N-Triples: `app-configuration.nt`

or any of the other serializations supported by the [`rdf-parse`](https://www.npmjs.com/package/rdf-parse) library. See the latter page for a list of file extensions associated with each serialization.

The path to a configuration file is specified via the `app_configuration` input parameter to GitHub Actions or the `CONFIGURATION_FILE_PATH` environment variable when building an app manually.


### `AppConfiguration`

The app configuration RDF graph must include a top-level resource with the type `AppConfiguration`. It can be a blank node, as in the examples above. In the Turtle the top-level resource is declared with  `[] a AppConfiguration`. In JSON-LD it is the `"@type": "AppConfiguration"` property.

Most of the app configuration consists of statements about this top-level resource, like `:title "Example"` in the example Turtle. The following table documents the available properties of an `AppConfiguration`. 

#### Properties

| Property     | Description                                                                     | Cardinality | Value type        | Example values                       |
|--------------|---------------------------------------------------------------------------------|-------------|-------------------|--------------------------------------|
| stylesheet   | Absolute or relative URL of a [Bootstrap 5](https://getbootstrap.com/) CSS file | 0..1        | String or IRI     | http://example.com/bootstrap.min.css |
| title        | Site title, used in the HTML `<title>` tag and other parts of the app           | 0..1        | String            | My collection                        |
| workProperty | Reference to a `PropertyConfiguration`s for the `work-search` app               | 0..n        | IRI or blank node | See `PropertyConfiguration`          |

Note that all the properties are optional. Paradicms apps don't require configuration, but will run with sensible defaults.


### `PropertyConfiguration`

The `work-search` app can filter, facetize, and/or full-text search values of arbitrary `Work` properties, which makes it possible to incorporate domain-specific properties such as [Costume Core](http://www.ardenkirkland.com/costumecore/) `condition` into the faceted search interface. A `PropertyConfiguration` tells the `work-search` app about these properties.

An `AppConfiguration` with a list of `work-search` `PropertyConfiguration`s in JSON-LD looks like:

```json
{
    "@context": {
        "@vocab": "http://www.paradicms.org/ns/configuration"
    },
    "@type": "AppConfiguration",
    "stylesheet": "http://example.com/example.css",
    "title": "Example",
    "workProperty": [
      {
        "filterable": true,
        "label": "Subject",
        "predicate": {"@type": "@id", "@value": "http://purl.org/dc/terms/subject"},
        "searchable": true
      }
    ]
}
```

#### Properties

The following table documents the available properties of a `PropertyConfiguration`:

| Property   | Description                                                 | Cardinality | Value type | Example values                   |
|------------|-------------------------------------------------------------|-------------|------------|----------------------------------|
| filterable | The property is filterable and facetizable (default: false) | 0..1        | boolean    | true                             |
| label      | Human-readable label for the property                       | 1           | string     | Subject                          |
| predicate  | IRI of the property                                         | 1           | IRI        | http://purl.org/dc/terms/subject |
| searchable | The property is full-text searchable (default: false)       | 0..1        | boolean    | false                            |

