---
title: RDF-backed models in TypeScript
authors: [minorg]
---

An object-oriented abstraction layer can ease some of the burden of navigating RDF in TypeScript while still taking advantage of the strengths of the RDF data model.

<!-- truncate -->

A [previous post](/blog/2023/06/05/javascript-rdf-techniques) explored various techniques for manipulating RDF data in JavaScript and TypeScript, including the [RDF/JS interfaces](https://rdf.js.org/), the [clownface library](https://github.com/zazuko/clownface), and [SPARQL](https://www.w3.org/TR/2013/REC-sparql11-query-20130321/#select) projection into JSON. Those techniques are often sufficient for simple applications as well as ones that expose a low-level RDF data model i.e., showing RDF graphs or allowing users to create arbitrary RDF statements.

Complex, end user-facing applications are usually designed against more abstract data models than RDF's. Applications like the ones in [Paradicms](/docs/reference/apps) employ RDF as a low-level interchange data model and never expose it to end users. The user interfaces of the Paradicms apps are framed in terms of collections, works, and other high-level abstractions, and not in terms in RDF triples or graphs. These abstractions comprise the Paradicms [conceptual data model](/docs/introduction/conceptual-data-model).

One of the primary design goals of Paradicms is for its conceptual data model to accommodate [multiple logical data models](/docs/reference/logical-data-models) with compatible structures, such as [Linked Art](https://linked.art/), [schema.org](https://schema.org/), [Wikidata](https://wikidata.org/), and [Omeka Classic](https://omeka.org/classic/) items/files/elements/element sets. Supporting multiple logical data models means the same user interface code can be applied to data from multiple sources, such as Linked Art APIs or Wikidata.

The flexibility of this design comes at the cost of requiring transformation between the data adhering to the logical models and the Paradicms conceptual data model. There are several ways to implement this transformation.

### Transforming data as part of an extract-transform-load process

In a batch [extract-transform-load (ETL)](https://en.wikipedia.org/wiki/Extract,_transform,_load) process, data is extracted en masse from a source such as a Linked Art API, then transformed to fit a single logical data model (the _target_) that corresponds closely to the data model expected by downstream consumers such as end user-facing applications.

To illustrate, an ETL process could transform the following snippet of [JSON-LD](https://json-ld.org/)-serialized Linked Art (abridged from the [documentation](https://linked.art/model/collection/))

```json
{
  "@context": "https://linked.art/ns/v1/linked-art.json",
  "id": "https://linked.art/example/set/4",
  "type": "Set",
  "_label": "Collection of Example Museum",
  "classified_as": [
    {
      "id": "http://vocab.getty.edu/aat/300025976",
      "type": "Type",
      "_label": "Collection"
    }
  ]
}
```

into [Turtle](https://en.wikipedia.org/wiki/Turtle_(syntax))-serialized RDF that targets the schema.org model:

```turtle
@prefix schema: <https://schema.org/> .

<https://linked.art/example/set/4> a schema:Collection ;
    schema:name "Collection of Example Museum" .
```

This transformation can be implemented with low-level RDF manipulation techniques like the ones described in a [previous post](/blog/2023/06/05/javascript-rdf-techniques) or with declarative mapping systems using e.g., [RML](https://rml.io/specs/rml/).

Transforming disparate source data to fit a common target data model as part of an ETL process has the advantage of simplifying application logic, since applications only have to consume data encoded in the target model. The main disadvantage of this approach is that the target data model must be carefully designed to preserve the semantics of any data from the source data models that any downstream application might need. Accurately anticipating what applications will need from source data can be challenging. In designing and evolving the target data model there is a tendency to recapitulate the source data models rather than carefully capturing commonalities and excluding unnecessary details, which leads to the target data model becoming as complex as all the source data models combined.

### Transforming data in applications

In this scenario applications may query data sources directly, as described in ["Federated SPARQL queries in your browser"](https://ruben.verborgh.org/blog/2015/06/09/federated-sparql-queries-in-your-browser/), or a separate extract-load process may cache extracted data ahead of time and deliver them to applications asynchronously. In either case, application logic is responsible for transforming data conforming to a range of compatible logical data models (Linked Art, Wikidata, et al.) into a form the application can use.

An application that displays a table of works associated would contain code for traversing the specific vocabularies and graph structures that Linked Art, Wikidata, and schema.org use to describe works and dynamically transforming these structures into a common format for display in the table. A Wikidata snippet like the following:

```turtle
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix sdohttp: <http://schema.org/> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix wd: <http://www.wikidata.org/entity/> .
@prefix wdt: <http://www.wikidata.org/prop/direct/> .

wd:Q937690 a wikibase:Item ;
    rdfs:label "Pilot ACE"@en ;
    sdohttp:description "computer"@en ;
    sdohttp:name "Pilot ACE"@en ;
    skos:prefLabel "Pilot ACE"@en ;
    ns387:P646 <http://www.wikidata.org/entity/statement/Q937690-DE68D193-FA30-44D9-8AB5-154E2FD19AFD> ;
    wdt:P18 <http://commons.wikimedia.org/wiki/Special:FilePath/Pilot%20ACE%20computer-2.jpg> ;
    wdt:P31 wd:Q28542014 ;
    wdt:P373 "Pilot ACE" ;
    wdt:P646 "/m/02w0ky" .
```

would be transformed directly into HTML for display in the browser:

```html
<table>
    <thead>
        <tr>
            <th>Work name</th>
            <th>Work description</th>
            <th>Work image</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Pilot ACE</td>
            <td>computer</td>
            <td><img src="http://commons.wikimedia.org/wiki/Special:FilePath/Pilot%20ACE%20computer-2.jpg"/></td>
        </tr>
    </tbody>
</table>
```

The key advantage of this approach is that each part of the application only needs to transform as much of the source data as it needs, in the form it needs. No single target data model design needs to anticipate what every application might need from the source data. The obvious disadvantage is the additional complexity of handling multiple logical data models in application code.

### Hybrid approaches

Paradicms takes a hybrid approach that varies between data sources. For non-RDF native data sources such as [YAML files](/docs/reference/directory-format), Paradicms executes an asynchronous extract-transform-load process that transforms the data into RDF conforming to one of the logical data models Paradicms supports. For RDF-native data sources such as Wikidata, Paradicms extracts data ahead of time and passes it asynchronously to Paradicms apps, to be transformed as part of application logic. (The alternative of querying the RDF data sources at runtime would also be possible.)

## RDF-backed models in TypeScript

Paradicms apps are implemented in TypeScript using [React](https://react.dev/) and [Next.js](https://nextjs.org/). Pages and React components interact with *models* in a manner similar to the [Model-View-Controller pattern](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller), but without an explicit controller.

Models represent instances of classes in one of the logical data models Paradicms supports, such as `schema:Collection` or `dcmitype:PhysicalObject`. A model class is defined by a TypeScript `interface`, like the following for `License`:

```ts
export interface License extends Model {
  readonly label: string;
}
```

Implementations of `License` are responsible for transforming RDF conforming to different logical data models to suit this interface. For example, the [Dublin Core](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/) implementation of `License` is `DcLicenseDocument` (abridged):

```ts
export class DcLicenseDocument extends ResourceNamedModel implements License {
  get label(): string {
    return requireNonNull(
            this.findAndMapObject(dcterms.title, this.mapStringObject)
    );
  }
}
```

The `DcLicenseDocument` `label` handles the specific Dublin Core RDF, looking for triples of the form `(<this model IRI>, dcterms:title, "some string literal")` and pulling out the literal object as a TypeScript `string`. Functional-like convenience methods like `findAndMapObject` and `mapStringObject` encapsulate common uses of the low-level RDF/JS `DatasetCore` `match` method for traversing a quad store:

```ts
protected findAndMapObject<T>(
    property: NamedNode,
    callback: (value: Term) => NonNullable<T> | null
): NonNullable<T> | null {
    for (const quad of this.dataset.match(
        this.identifier,
        property,
        null,
        this.graph
    )) {
        const mappedObject: T | null = callback(quad.object);
        if (mappedObject !== null) {
            return mappedObject as NonNullable<T>;
        }
    }
    return null;
}

protected mapStringObject(term: Term): string | null {
    if (term.termType !== "Literal") {
        return null;
    }
    return term.value;
}
```

A similar approach can be extended to navigating a graph of model instances backed by the same underlying RDF [dataset](https://www.w3.org/TR/rdf11-datasets/). For example, the `Collection` interface (abridged, below) allows you to get an array of `Work`s associated with a `Collection`:

```ts
export interface Collection extends NamedModel {
  readonly works: readonly Work[];
}
```

The `SchemaCollection` implementation (abridged, below) of the `works` getter uses a cache of model instances for efficiency:

```ts
export class SchemaCollection extends SchemaNamedModel implements Collection {
  get works(): readonly Work[] {
    return this.modelSet.worksByCollectionKey(this.key);
  }
}
```

Paradicms apps are agnostic of model class implementations and the RDF transformations needed to support them. From an app's perspective, it's irrelevant whether a `Work` is a `SchemaCreativeWork` or a `WikidataWork`, since they both expose the same high-level `Work` interface. Similarly, the `SchemaCollection` snippet above is agnostic of whether a `Work` belonging to it is a `DcPhysicalObject` or some other implementation of `Work`. The design follows the [dependency inversion principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle).

### Handling `owl:sameAs`

It is natural to associate a single subject node in a set of RDF triples with a single model instance in TypeScript. For example, `wd:Q937690` can be the subject of a `WikidataWork` instance. Paradicms uses [named graphs](https://en.wikipedia.org/wiki/Named_graph) to distinguish which quad subjects in an RDF dataset correspond to model instances and which do not. Each model instance -- a schema.org-backed `SchemaImageObject`, for example, or a Wikidata-backed `WikidataWork` -- inhabits its own named graph in the RDF dataset, and the model's subject IRI or blank node is the same as the graph name.

This simple approach breaks down when handling `owl:sameAs`, which should, in effect, merge two model instances under a [facade](https://en.wikipedia.org/wiki/Facade_pattern). Consider a [FOAF](http://xmlns.com/foaf/0.1/) `Person` that is `owl:sameAs` a Wikidata `Person` in this abridged [TRiG](https://en.wikipedia.org/wiki/TriG_(syntax)):

```trig
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix sdohttp: <http://schema.org/> .
@prefix wd: <http://www.wikidata.org/entity/> .

<http://example.com/person0> {
    <http://example.com/person0> a foaf:Person ;
        owl:sameAs wd:Q7251 ;
        foaf:name "FoafPerson 0"
        .
}

wd:Q7251 {
    wd:Q7251 a wikibase:Item ;
        rdfs:label "Alan Turing"@en ;
        sdohttp:description "English mathematician and computer scientist (1912–1954)"@en
    .    
}
```

There are two models in the dataset, a `FoafPerson` corresponding to `<http://example.com/person0>` and a `WikidataPerson` corresponding to `wd:Q7251`. However, `owl:sameAs` from the former to the latter means the two should be merged under a facade that implements `Person`. This facade delegates to the underlying `FoafPerson` and `WikidataPerson` instances depending on which information it can get from each. For example, the `FoafPerson` has a `name` but not a `description`, so `description` should be sourced from the `WikidataPerson`. In other cases, like gathering images associated with a `Person`, the facade will concatenate results from both underlying model instances. The same algorithm can be applied to any number of model instances connected by `owl:sameAs`.

## Conclusion

Paradicms takes a hybrid approach to handling RDF from source to application:
* data from non-RDF native data sources such as spreadsheets and YAML files are transformed to RDF as part of asynchronous extract-transform-load processes
* data from RDF native data sources such as Wikidata is extracted and passed through to applications as-is
* application logic is written against TypeScript interfaces corresponding to the Paradicms conceptual data model
* multiple implementations of these interfaces encapsulate logical data models such as schema.org and Wikidata on the application side

This approach evolved through trial and error. Early versions of Paradicms had more conventional designs that extracted data from different sources (RDF- and non-RDF-native) and immediately transformed the data to TypeScript-friendly JSON for downstream consumption by applications.

The current design allows applications to take advantage of the power of RDF and Linked Data while still supporting non-RDF data sources. With the help of RDF-backed models in TypeScript, Paradicms applications can transform and consume what they need from an RDF dataset without requiring the end-to-end system to capture every source's semantics in a single logical data model.