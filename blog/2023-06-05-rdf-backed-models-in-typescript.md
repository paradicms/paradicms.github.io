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

The `DatasetCore` `match` method is the workhorse of the interface, extracting subsets of quads in the dataset that match a pattern. The pattern consists of exact (`equals`) or wildcard (anything accepted) matches on the components of a quad (subject, predicate, object, graph). More sophisticated matching such as partial IRIs or literal comparisons is left to higher-level libraries.

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

One of the primary design goals of Paradicms is for its abstract data model accommodate multiple concrete data models with compatible structures, such as [Linked Art](https://linked.art/), [schema.org](https://schema.org/), [Wikidata](https://wikidata.org/), and Omeka Classic items/files/elements/element sets. Supporting multiple concrete data models means the same application logic and interfaces can be used with data from multiple sources, such as Linked Art APIs or Wikidata.

The flexibility of this design comes at the cost of requiring transformation between the concrete data models and the abstract data model. There are several ways to implement this transformation.

### Transformation close to the data source

A transformation close to the data source is usually part of an [extract-transform-load (ETL)](https://en.wikipedia.org/wiki/Extract,_transform,_load) process. Data is extracted from a source such as a Linked Art API, then transformed into a single concrete data model (the _target_) that corresponds closely to the [abstract] data model expected by applications. The [Paradicms ontology](/docs/reference/ontology) serves as the target data model for this kind of transformation in Paradicms. The ontology is the most direct encoding of the Paradicms abstract data model.

For example, the ETL process could transform the following snippet of JSON-LD-serialized Linked Art (abridged from the [documentation](https://linked.art/model/collection/))

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

into Turtle-serialized RDF that adheres to the Paradicms ontology:

```turtle
@prefix cms: <http://www.paradicms.org/ns/cms#> .
@prefix dcterms: <http://purl.org/dc/terms/> .

<https://linked.art/example/set/4> a cms:Collection ;
    dcterms:title "Collection of Example Museum" .
```

Transforming disparate source data models (e.g., Linked Art, Wikidata) into a common target data model (e.g., the Paradicms ontology) as part of an ETL process has the advantage of simplifying application logic, since applications only have to consume data encoded in the target model. The main disadvantage of transforming data close to the source is that the target data model must be carefully designed to preserve the semantics of any data from the source models that an application might need. Accurately anticipating what applications will need from source data can be challenging. There is a tendency to recapitulate the source models rather than carefully capturing commonalities and excluding unnecessary details, which leads to the target model becoming as complex as all the source models combined.

### Transformation close to the application logic

In this scenario data is extracted from a source such as a Linked Art API and passed through to applications as-is. Application logic is responsible for transforming the range of concrete data models (Linked Art, Wikidata, et al.) into the abstract data model by using techniques like SPARQL projection (described above).

For example, an application that displays a table of works associated would contain code for traversing the specific vocabularies and graph structures that Linked Art, Wikidata, and schema.org use to describe works and dynamically transform these structures into a common format for display in the table. A Wikidata snippet like the following:

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

The key advantage of this approach is that each part of the application only needs to transform as much of the source data as it needs, in the form it needs. No single target data model design needs to anticipate what any application might need from the source data.

### Hybrid approaches

Paradicms takes a hybrid approach
Non-RDF -> Paradicms ontology, which is a direct encoding ...
  In Paradicms the [Paradicms ontology](/docs/reference/ontology) is the most direct encoding of the abstract data model, and could serve as the target for transformations from other concrete models. This is necessary for
RDF is transformed as is (no T in 'ETL')

+ abstraction layer over multiple RDF

## RDF-backed models in TypeScript


## Handling `owl:sameAs`



