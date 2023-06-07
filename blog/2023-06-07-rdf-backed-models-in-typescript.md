---
title: RDF-backed models in TypeScript
authors: [minorg]
---

Working with [RDF](https://en.wikipedia.org/wiki/Resource_Description_Framework) graphs in browser-based code is cumbersome compared to working with [JSON](https://en.wikipedia.org/wiki/JSON) documents. An object-oriented abstraction layer can ease much of the burden while still taking advantage of the strengths of the RDF data model.

<!-- truncate -->

For much of the 2000s and early 2010s, Java and then Python were the preferred programming languages for working with data serialized in RDF, [SPARQL](https://en.wikipedia.org/wiki/SPARQL) endpoints, and other [Semantic Web](https://en.wikipedia.org/wiki/Semantic_Web) technologies. There are mature libraries in both languages, such as [Apache Jena](https://en.wikipedia.org/wiki/Apache_Jena) and [RDF4J](https://en.wikipedia.org/wiki/RDF4J) in Java and [RDFLib](https://en.wikipedia.org/wiki/RDFLib) in Python.

Since then JavaScript has largely supplanted Java and Python as the language of choice for working with RDF. The shift can be ascribed to the maturation of JavaScript as a language; the creation of the [RDF/JS specifications](https://rdf.js.org/), which have become de facto standards for programmatic access to RDF in JavaScript; and the [Solid project](https://en.wikipedia.org/wiki/Solid_(web_decentralization_project))'s choice of JavaScript as its main implementation language, among other reasons.

JavaScript, like Java and Python, lacks built-in primitives for navigating and manipulating graph data. All three languages are object-oriented and  work best with [record](https://en.wikipedia.org/wiki/Record_(computer_science))-like data structures (i.e., [product types](https://en.wikipedia.org/wiki/Product_type).

In the absence of explicit language support there are various library-based approaches to working with graph data in JavaScript, described in the sections below.

## Techniques for working with RDF in JavaScript

### Low-level RDF/JS

The RDF/JS specifications represent the lowest common denominator, record-oriented way of working with RDF in JavaScript. The following example from the [N3.js](https://github.com/rdfjs/N3.js/#parsing) library documentation uses simple, object-oriented Javascript to iterate over a set of hard-coded RDF quads using an RDF/JS `DatasetCore` implementation:

```js
const store = new N3.Store();
store.add(
  namedNode('http://ex.org/Pluto'),
  namedNode('http://ex.org/type'),
  namedNode('http://ex.org/Dog')
);
store.add(
  namedNode('http://ex.org/Mickey'),
  namedNode('http://ex.org/type'),
  namedNode('http://ex.org/Mouse')
);

// Retrieve all quads
for (const quad of store)
  console.log(quad);
// Retrieve Mickey's quads
for (const quad of store.match(namedNode('http://ex.org/Mickey'), null, null))
  console.log(quad);
```

The `DatasetCore` `match` method is the workhorse of the interface, extracting subsets of quads in the dataset that match a pattern. The pattern consists of exact (`equals`) or wildcard (anything accepted) matches on the components of a quad (subject, predicate, object, graph). More sophisticated matching such as partial [IRI](https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier)s or literal comparisons is left to higher-level libraries.

### Domain-specific languages

Traversing subgraphs with `match` quad patterns quickly becomes verbose and involved. For example, even a simple SPARQL `WHERE` clause such as `?s foaf:knows ?t . ?t foaf:knows ?z .` would require two `match` loops.

Libraries such as [clownface](https://github.com/zazuko/clownface) address this verbosity with [a domain-specific language](https://en.wikipedia.org/wiki/Domain-specific_language#External_and_Embedded_Domain_Specific_Languages). The clownface language is embedded in JavaScript and uses RDF/JS implementations as low-level primitives. 

The following abridged example from the clownface documentation demonstrates the language:

```js
const peopleStuartKnows = stuartBloom
  .out(ns.schema.knows)
  .map((person) => {
    const personalInformation = person.out([
      ns.schema.givenName,
      ns.schema.familyName
    ])
    return personalInformation.values.join(' ')
  })
  .join(', ')
```

Starting from the RDF node `stuartBloom`, which represents a person:
* Find all `(stuartBloom, schema:knows, person)` triples, where every `person` object corresponds to a person Stuart Bloom knows
* For each `person`, map the `person` to their full name by
  * Finding the `person`'s given name by matching the triple pattern (`person`, `schema:givenName`, `givenName`)
  * Finding the `person`'s family name in a similar manner
  * Concatenate the two string values with a space separator
* Join all of the full names of all of the people with a `, `

### Graph to record projection

SPARQL `SELECT` queries can be used to project nodes and edges in the RDF graph into documents. The [SPARQL 1.1 Query Language specification](https://www.w3.org/TR/2013/REC-sparql11-query-20130321/#select) includes the following example `SELECT` query:

```sparql
PREFIX foaf:    <http://xmlns.com/foaf/0.1/>
SELECT ?nameX ?nameY ?nickY
WHERE
  { ?x foaf:knows ?y ;
       foaf:name ?nameX .
    ?y foaf:name ?nameY .
    OPTIONAL { ?y foaf:nick ?nickY }
  }
```

with example results in JSON:

```json
{
  "head": {
    "vars": [ "nameX" , "nameY" , "nickY" ]
  } ,
  "results": {
    "bindings": [
      {
        "nameX": { "type": "literal" , "value": "Alice" } ,
        "nameY": { "type": "literal" , "value": "Bob" }
      } ,
      {
        "nameX": { "type": "literal" , "value": "Alice" } ,
        "nameY": { "type": "literal" , "value": "Clare" } ,
        "nickY": { "type": "literal" , "value": "CT" }
      }
    ]
  }
}
```

Manipulating the JSON results in JavaScript is straightforward:

```js
for (const binding of outer.results.bindings) {
    console.log(binding.nameX.value);
}
```

So is defining a type overlay in TypeScript:

```ts
export type Binding = { nameX: string; nameY: string; }
```

Projection be used to implement nested records, too. For example, a `Person` record may have a list of `friends` in the form of nested `Person` records. There is no nesting in the graph, only triples connecting the various `Person` nodes to each other. Converting references (the triples) to nested records creates redundancy in the resulting data but simplifies processing in JavaScript, since there are language primitives for accessing nested records (e.g., `object[key1][key2]`).

## Data models and transformations

The techniques described in the sections above involve relatively low-level manipulation of RDF data. That is appropriate for applications that expose a low-level RDF data model i.e., showing RDF graphs or allowing users to create arbitrary RDF statements.

Most end user applications, including the [Paradicms apps](/docs/reference/apps), are designed against more abstract data models, however. These applications employ RDF as a low-level interchange data model and never expose it to end users. The user interfaces of Paradicms apps are framed in terms of collections, works, and other high-level abstractions, and not in terms in RDF triples or graphs. These abstractions comprise the Paradicms [abstract data model](/docs/introduction/data-model).

One of the primary design goals of Paradicms is for its abstract data model accommodate multiple concrete data models with compatible structures, such as [Linked Art](https://linked.art/), [schema.org](https://schema.org/), [Wikidata](https://wikidata.org/), and [Omeka Classic](https://omeka.org/classic/) items/files/elements/element sets. Supporting multiple concrete data models means the same application logic and interfaces can be used with data from multiple sources, such as Linked Art APIs or Wikidata.

The flexibility of this design comes at the cost of requiring transformation between the concrete data models and the abstract data model. There are several ways to implement this transformation.

### Transformation close to the data source

A transformation close to the data source is usually part of an [extract-transform-load (ETL)](https://en.wikipedia.org/wiki/Extract,_transform,_load) process. Data is extracted from a source such as a Linked Art API, then transformed into a single concrete data model (the _target_) that corresponds closely to the [abstract] data model expected by applications. The [Paradicms ontology](/docs/reference/ontology) serves as the target data model for this kind of transformation in Paradicms. The ontology is the most direct encoding of the Paradicms abstract data model.

For example, the ETL process could transform the following snippet of [JSON-LD](https://json-ld.org/)-serialized Linked Art (abridged from the [documentation](https://linked.art/model/collection/))

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

into [Turtle](https://en.wikipedia.org/wiki/Turtle_(syntax))-serialized RDF that adheres to the Paradicms ontology:

```turtle
@prefix cms: <http://www.paradicms.org/ns/cms#> .
@prefix dcterms: <http://purl.org/dc/terms/> .

<https://linked.art/example/set/4> a cms:Collection ;
    dcterms:title "Collection of Example Museum" .
```

Transforming disparate source data models (e.g., Linked Art, Wikidata) into a common target data model (e.g., the Paradicms ontology) as part of an ETL process has the advantage of simplifying application logic, since applications only have to consume data encoded in the target model. The main disadvantage of transforming data close to the source is that the target data model must be carefully designed to preserve the semantics of any data from the source models that an application might need. Accurately anticipating what applications will need from source data can be challenging. There is a tendency to recapitulate the source models rather than carefully capturing commonalities and excluding unnecessary details, which leads to the target model becoming as complex as all the source models combined.

### Transformation close to the application logic

In this scenario applications may query data sources directly, as described in ["Federated SPARQL queries in your browser"](https://ruben.verborgh.org/blog/2015/06/09/federated-sparql-queries-in-your-browser/), or a separate process may cache extracted data ahead of time and deliver them to applications asynchronously. In either case, application logic is responsible for transforming the range of compatible concrete data models (Linked Art, Wikidata, et al.) into the abstract data model by using techniques like SPARQL projection, described above.

An application that displays a table of works associated would contain code for traversing the specific vocabularies and graph structures that Linked Art, Wikidata, and schema.org use to describe works and dynamically transform these structures into a common format for display in the table. A Wikidata snippet like the following:

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

The key advantage of this approach is that each part of the application only needs to transform as much of the source data as it needs, in the form it needs. No single target data model design needs to anticipate what every application might need from the source data.

### Hybrid approaches

Paradicms takes a hybrid approach that varies between data sources. For non-RDF native data sources such as [spreadsheets](/docs/reference/spreadsheet-format) and [YAML files](/docs/reference/directory-format), Paradicms executes an asynchronous extract-transform-load process that transforms the data into RDF conforming to the Paradicms ontology. For RDF-native data sources such as Wikidata, Paradicms extracts data ahead of time and passes it asynchronously to Paradicms apps, to be transformed as part of application logic. (The alternative of querying the RDF data sources at runtime would also be possible.) Every concrete data model handled by an application -- the Paradicms ontology, Wikidata, et al. -- can be transformed to the abstract data model. These transformations are implemented in RDF-backed models in TypeScript.

## RDF-backed models in TypeScript

Paradicms apps are implemented in TypeScript using [React](https://react.dev/) and [Next.js](https://nextjs.org/). Pages and React components interact with *models* in a manner similar to the [Model-View-Controller pattern](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller), but without an explicit controller.

Models represent instances of classes in the Paradicms abstract data model, such as `Collection` or `Work`. A model class is defined by a TypeScript `interface`, like the following for `License`:

```ts
export interface License extends Model {
  readonly label: string;
}
```

Implementations of `License` are responsible for transforming RDF conforming to different concrete data models (Paradicms ontology, Wikidata, et al.) to suit this interface. For example, the Paradicms ontology implementation of `License` is `CmsLicense` (abridged):

```ts
export class CmsLicense extends CmsNamedModel implements License {
  get label(): string {
    return requireNonNull(
            this.findAndMapObject(dc11.title, this.mapStringObject)
    );
  }
}
```

The `CmsLicense` `label` gets down to the RDF of the Paradicms ontology, looking for triples of the form `(<this model IRI>, dc:title, "some string literal")` and pulling out the literal object as a TypeScript `string`. Convenience methods like `findAndMapObject` and `mapStringObject` encapsulate common uses of the low-level RDF/JS `DatasetCore` `match` method, described above.

The same approach can be extended to navigating a graph of model instances backed by the same underlying RDF [dataset](https://www.w3.org/TR/rdf11-datasets/). For example, the `Collection` interface (abridged, below) allows you to get an array of `Work`s associated with a `Collection`:

```ts
export interface Collection extends NamedModel {
  readonly works: readonly Work[];
}
```

The `CmsCollection` implementation (abridged, below) of the `works` getter uses a cache of model instances for efficiency:

```ts
export class CmsCollection extends CmsNamedModel implements Collection {
  get works(): readonly Work[] {
    return this.modelSet.worksByCollectionKey(this.key);
  }
}
```

Paradicms apps are agnostic of model class implementations and the RDF transformations needed to support them. From an app's perspective, it's irrelevant whether a `Work` is a `CmsWork` or a `WikidataWork`, since they both expose the same high-level `Work` interface. Similarly, the `CmsCollection` snippet above is agnostic of whether a `Work` belonging to it is a `CmsWork` or some other implementation of `Work`. The design follows the [dependency inversion principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle).

### Handling `owl:sameAs`

It is natural to associate a single subject (blank or named node) in a set of RDF triples with a single model instance in TypeScript. For example, `wd:Q937690` can be the subject IRI of a `WikidataWork` instance. Paradicms uses [named graphs](https://en.wikipedia.org/wiki/Named_graph) to distinguish which quad subjects in an RDF dataset correspond to model instances and which do not. Each model instance -- a Paradicms ontology-backed `CmsLicense`, for example, or a Wikidata-backed `WikidataWork` -- inhabits its own named graph in the RDF dataset, and the model's subject IRI or blank node is the same as the graph name.

This simple approach breaks down when handling `owl:sameAs`, which should, in effect, merge two model instances under a [facade](https://en.wikipedia.org/wiki/Facade_pattern). Consider a Paradicms ontology person that is `owl:sameAs` a Wikidata person in this abridged [TRiG](https://en.wikipedia.org/wiki/TriG_(syntax)):

```trig
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix sdohttp: <http://schema.org/> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix wd: <http://www.wikidata.org/entity/> .

<http://example.com/person0> {
    <http://example.com/person0> a cms:Person ;
        owl:sameAs wd:Q7251 ;
        foaf:name "CmsPerson 0"
        .
}

wd:Q7251 {
    wd:Q7251 a wikibase:Item ;
        rdfs:label "Alan Turing"@en ;
        sdohttp:description "English mathematician and computer scientist (1912–1954)"@en
    .    
}
```

There are two models in the dataset, a `CmsPerson` corresponding to `<http://example.com/person0>` and a `WikidataPerson` corresponding to `wd:Q7251`. However, `owl:sameAs` from the former to the latter means the two should be merged under a facade that implements `Person`. This facade delegates to the underlying `CmsPerson` and `WikidataPerson` instances depending on which information it can get from each. For example, the `CmsPerson` has a `name` but not a `description`, so `description` should be sourced from the `WikidataPerson`. In other cases, like gathering images associated with a `Person`, the facade will concatenate results from both underlying models.

## Conclusion

Paradicms takes a hybrid approach to working with RDF from source to application:
* data from non-RDF native data sources such as spreadsheets and YAML files are transformed to RDF as part of asynchronous extract-transform-load processes
* data from RDF native data sources such as Wikidata is passed through to applications as-is
* application logic is written against abstract TypeScript interfaces corresponding to the Paradicms data model
* multiple implementations of these interfaces support working with multiple concrete data models on the application side

This approach evolved through trial and error. Early versions of Paradicms had more conventional designs that extracted data from different sources (RDF- and non-RDF-native) and immediately transformed the data to TypeScript-friendly JSON for downstream consumption by browser-based applications.

The current design, in contrast, allows applications to take advantage of the power of RDF and Linked Data while still supporting non-RDF data sources. With the help of RDF-backed models in TypeScript, Paradicms applications can transform and consume what they need from an RDF dataset without requiring the end-to-end system to capture every source's semantics in a single concrete data model.