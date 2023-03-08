# Reference: data model

This page documents the Paradicms data model and its mapping to RDF. For an explanatory overview of the data model, see the [introduction](/docs/introduction/data-model).

## Classes

The following sections document classes in the data model such as `Collection`, `Image`, and `Work`.

A class section contains:

* a brief description of the class and how it's used
* a table of the class's properties

A class's properties table has columns for:

##### Term

Per [the JSON-LD definition](https://www.w3.org/TR/json-ld11/#dfn-term), a **term** is short word defined in a [JSON-LD] context that may be expanded to an [IRI](https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier). Paradicms uses JSON-LD contexts to map terms such as `abstract` to IRIs (`http://purl.org/dc/terms/abstract`). For example, each [column header in a spreadsheet](spreadsheet-format) or top-level YAML object key in Markdown Directory YAML is a term corresponding to a predicate IRI in an RDF statement.

The per-class property tables in this document are essentially human-readable versions of the JSON-LD contexts for the classes.

##### IRI

A property's term expands to this predicate IRI. For space reasons the IRIs are abbreviated with commonly-used namespaces:

| Namespace prefix | Namespace IRI                                 | Vocabulary                                                                               |
|------------------|-----------------------------------------------|------------------------------------------------------------------------------------------|
| `cc:`            | `http://creativecommons.org/ns#`              | [Creative Commons Rights Expression Language](https://creativecommons.org/ns#)           |
| `cms:`           | `http://www.paradicms.org/ns/cms#`            | Paradicms data model                                                                     |
| `contact:`       | `http://www.w3.org/2000/10/swap/pim/contact#` | W3C PIM vocabulary                                                                       |
| `dc:`            | `http://purl.org/dc/elements/1.1/`            | [DCMI Metadata terms](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/) |
| `dcterms:`       | `http://purl.org/dc/terms/`                   | [DCMI Metadata terms](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/) |
| `exif:`          | `http://www.w3.org/2003/12/exif/ns#`          | [Exif vocabulary](https://www.w3.org/2003/12/exif/)                                      |
| `foaf:`          | `http://xmlns.com/foaf/0.1/`                  | [FOAF vocabulary](http://xmlns.com/foaf/0.1/)                                            |
| `rdf:`           | `http://www.w3.org/1999/02/22-rdf-syntax-ns#` | [RDF Model and Syntax](http://www.w3.org/1999/02/22-rdf-syntax-ns#)                      |
| `skos:`          | `http://www.w3.org/2004/02/skos/core#`        | [SKOS Simple Knowledge Organization System](https://www.w3.org/2004/02/skos/)            |
| `time:`          | `http://www.w3.org/2006/time#>`               | [Time Ontology in OWL](https://www.w3.org/TR/owl-time/)                                  |
| `vra:`           | `http://purl.org/vra/>`                       | [VRA Core RDF Ontology](http://vraweb.org/vra-core-rdf-ontology-available-for-review/)   |
| `wgs:`           | `http://www.w3.org/2003/01/geo/wgs84_pos#>`   | [Basic Geo Vocabulary](https://www.w3.org/2003/01/geo/)                                  |
| `xsd:`           | `http://www.w3.org/2001/XMLSchema#>`          | [XML Schema](https://www.w3.org/XML/Schema)                                              |


#### Description

Most of the properties used by Paradicms have well-described semantics, and are backed up by formal specifications in [RDF Schema](https://www.w3.org/TR/rdf-schema/), [Shapes Constraint Language (SHACL)](https://www.w3.org/TR/shacl/), and [the Web Ontology Language (OWL)](https://www.w3.org/OWL/). This column briefly summarizes the expected semantics of a property and how it's used. For extended descriptions, refer to the original vocabulary for a property, such as [DCMI Metadata Terms](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/) for `dcterms:`-prefixed properties like `dcterms:creator`.

#### Cardinality

This column indicates the cardinality of the class property. It can contain the following values:

* **0..1**: The class may have zero or one value(s) for the property
* **0..n**: The class may have zero or more values for the property
* **1**: The class must have only one value for the property
* **1..n**: The class must have at least one value for the property

#### Value type

A property IRI becomes the predicate of a `(subject, predicate, object)` RDF statement. The `subject` is usually implicit in the data source -- a synthesized IRI of a spreadsheet row, for example.

This column of the properties table specifies the expected type of the `object` in the statement. For example, values of `title` (i.e., `dcterms:title`) are expected to be strings, as in the following `(subject, predicate, object)` RDF triple:

```
<http://example.com/institution1/shared/work13> <http://purl.org/dc/terms/title> "Example title"
```

Booleans, strings, and other literals in Paradicms have [XML Schema](https://www.w3.org/XML/Schema) types: a boolean is an `xsd:boolean`, a string is an `xsd:string`, and so on.

Literal syntax is handled in a per-data source fashion. In spreadsheet cells you don't need to quote (`"`) strings, for example, since the cell boundaries delimit the string.

Other properties expect IRI values. For example, values of `dcterms:license` are expected to be IRIs referencing a valid `License` class instance:

```
<http://example.com/institution1/shared/work13> <http://purl.org/dc/terms/license> <http://creativecommons.org/licenses/nc/1.0/>
```

The syntax for specifying IRIs varies between data sources. In the [spreadsheet format](spreadsheet-format), an IRI can be shortened with a namespace prefix, as in the following hypothetical sheet:

| @id                 | `creator`               |
|---------------------|-------------------------|
| ss-work:ExampleWork | ss-person:ExamplePerson |

After expanding the namespaces, the sheet translates to the following `(subject, predicate, object)` RDF triple:

```
<urn:spreadsheet:example:work:ExampleWork> <http://purl.org/dc/terms/creator> <urn:spreadsheet:example:work:person:ExamplePerson>
```

#### Example values

For each property, the table lists one or more example values. As in the spreadsheet example above, a value may have a different syntax depending on the data source.


### `Collection`

A `Collection` is an aggregate of `Work`s belonging to a single `Institution`.

| Term        | IRI              | Description                                                                       | Cardinality | Value type              | Example values                 |
|-------------|------------------|-----------------------------------------------------------------------------------|-------------|-------------------------|--------------------------------|
| abstract    | dcterms:abstract | Human-readable summary of the collection                                          | 0..1        | string                  | A collection of my works       |                
| institution | cms:institution  | Child->parent reference to the `Institution` this `Collection` is associated with | 1           | IRI of an `Institution` | http://example.com/Institution |
| title       | dcterms:title    | Human-readable name of the collection                                             | 1           | string                  | My collection                  |                


### Image

An `Image` is a visual surrogate for a `Work`, `Collection`, `Person`, or other instance of a Paradicms class.

| Term        | IRI                | Description                                                                                      | Cardinality | Value type                        | Example values                |
|-------------|--------------------|--------------------------------------------------------------------------------------------------|-------------|-----------------------------------|-------------------------------|
| copyable    | cms:imageCopyable  | Is the image copyable from its source?                                                           | 0..1        | boolean                           | true                          |             
| created     | dcterms:created    | Date-time the image was created                                                                  | 0..1        | dateTime                          | 2023-03-08T18:23:16+00:00     |             
| depicts     | foaf:depicts       | Reference to the object this `Image` depicts                                                     | 1           | IRI of a `Person`, `Work`, et al. | http://example.com/Work       |             
| format      | dcterms:format     | MIME type of the image                                                                           | 0..1        | string                            | image/jpeg                    |             
| height      | exif:height        | Exact height of the image, in pixels                                                             | 0..1        | integer                           | 200                           |             
| maxHeight   | cms:imageMaxHeight | Maximum height of the image, in pixels                                                           | 0..1        | integer                           | 200                           |             
| maxWidth    | cms:imageMaxWidth  | Maximum width of the image, in pixels                                                            | 0..1        | integer                           | 200                           |             
| modified    | dcterms:created    | Date-time the image was modified                                                                 | 0..1        | dateTime                          | 2023-03-08T18:23:16+00:00     |             
| src         | cms:imageSrc       | Absolute or relative URL where the image data is stored; if not specified, use the `Image`'s IRI | 0..1        | string                            | http://example.com/image.jpg  |             
| thumbnail   | foaf:thumbnail     | Reference to another `Image` that is a thumbnail of this `Image`                                 | 0..1        | IRI                               | http://example.com/OtherImage |             
| thumbnailOf | cms:thumbnailOf    | Reference to another `Image` that this `Image` is a thumbnail of; inverse of `thumbnail`         | 0..1        | IRI                               | http://example.com/OtherImage |             
| title       | dcterms:title      | Human-readable caption of this image                                                             | 0..1        | string                            | My image                      |             
| width       | exif:width         | Exact height of the image, in pixels                                                             | 0..1        | integer                           | 200                           |             


### Institution

### License

### Location

### NamedValue

### Organization

### Person

### RightsStatement

### Work

* `Work`, which is a built or created object

### Work events

#### WorkClosing

##### WorkCreation

##### WorkOpening
