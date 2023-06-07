---
title: Techniques for handling RDF in JavaScript
authors: [minorg]
---

Working with [RDF](https://en.wikipedia.org/wiki/Resource_Description_Framework) graphs in JavaScript can be cumbersome compared to working with [JSON](https://en.wikipedia.org/wiki/JSON) data structures. This post explores different techniques for handling RDF in JavaScript less tedious and more idiomatic.

<!-- truncate -->

For much of the 2000s and early 2010s, Java and then Python were the preferred programming languages for manipulating data serialized in RDF, [SPARQL](https://en.wikipedia.org/wiki/SPARQL) endpoints, and other [Semantic Web](https://en.wikipedia.org/wiki/Semantic_Web) technologies. There are mature libraries in both languages, including [Apache Jena](https://en.wikipedia.org/wiki/Apache_Jena) and [RDF4J](https://en.wikipedia.org/wiki/RDF4J) in Java and [RDFLib](https://en.wikipedia.org/wiki/RDFLib) in Python.

Since that time JavaScript has largely supplanted Java and Python as the language of choice for handling RDF. The shift can be ascribed to the maturation of JavaScript as a language; the creation of the [RDF/JS specifications](https://rdf.js.org/), which have become de facto standards for programmatic access to RDF in JavaScript; and the [Solid project](https://en.wikipedia.org/wiki/Solid_(web_decentralization_project))'s choice of JavaScript as its main implementation language, among other reasons.

JavaScript, like Java and Python, lacks built-in primitives for manipulating graph data. All three languages are object-oriented and  work best with [record](https://en.wikipedia.org/wiki/Record_(computer_science))-like data structures (i.e., [product types](https://en.wikipedia.org/wiki/Product_type)).

In the absence of explicit language support there are various library-based techniques for handling RDF graph data in JavaScript, described in the sections below.

### Low-level RDF/JS

The RDF/JS specifications represent the lowest common denominator, record-oriented way of working with RDF in JavaScript. The following example from the [N3.js](https://github.com/rdfjs/N3.js/#parsing) library documentation employs simple, object-oriented JavaScript to iterate over a set of hard-coded RDF quads using an RDF/JS [`DatasetCore`](https://rdf.js.org/dataset-spec/) implementation (`N3.Store`):

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

The `DatasetCore` `match` method is the workhorse of the interface, extracting subsets of quads in the dataset that match a pattern. The pattern consists of exact (`Term equals`) or wildcard (anything accepted) matches on the components of a quad (subject, predicate, object, graph). More sophisticated matching such as partial [IRI](https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier)s or literal comparisons is left to higher-level libraries.

### Domain-specific languages

Traversing subgraphs with `match` quad patterns quickly becomes involved. Even a simple SPARQL `WHERE` clause such as `?s foaf:knows ?t . ?t foaf:knows ?z .` would require two `match` loops.

Libraries such as [clownface](https://github.com/zazuko/clownface) simplify RDF manipulation with [an embedded domain-specific language](https://en.wikipedia.org/wiki/Domain-specific_language#External_and_Embedded_Domain_Specific_Languages). Under the hood, clownface uses RDF/JS interfaces as primitives. 

The following abridged example from the clownface documentation demonstrates the technique:

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

Starting from the RDF node `stuartBloom`, which represents the person Stuart Bloom:
* Find all `(stuartBloom, schema:knows, person)` triples, where every `person` object corresponds to a person Stuart Bloom knows
* For each `person`, map the `person` to their full name by
  * Finding the `person`'s given name by matching the triple pattern (`person`, `schema:givenName`, `givenName`)
  * Finding the `person`'s family name in a similar manner
  * Concatenating the resulting literal values with a space separator
* Join all the full names of all the people with a `, `

### Graph to record projection

SPARQL `SELECT` queries can be used to project nodes and edges in the RDF graph into JSON data structures. The [SPARQL 1.1 Query Language specification](https://www.w3.org/TR/2013/REC-sparql11-query-20130321/#select) includes the following example `SELECT` query:

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

Validating schemas for the JSON data structures can also be defined with [yup](https://github.com/jquense/yup), [https://github.com/colinhacks/zod](https://github.com/colinhacks/zod), or similar libraries, and TypeScript types inferred at compile-time from the schemas.

SPARQL projection can be used to create nested records, too. For example, a `Person` record may have a list of `friends` in the form of nested `Person` records. There is no nesting in the graph, only triples connecting the various `Person` nodes to each other. Converting references (the triples) to nested records creates redundancy in the resulting data but simplifies processing in JavaScript, since there are language primitives for accessing nested records (e.g., `object[key1][key2]`).

### Conclusion

Although libraries for handling RDF in JavaScript long predate the emergence of the RDF/JS specifications, the latter have provided a foundation for higher-level interfaces such as clownface. In the absence of JavaScript language primitives for manipulating RDF graph data, concise and idiomatic domain-specific languages and libraries are the preferred technique for working with RDF in JavaScript.