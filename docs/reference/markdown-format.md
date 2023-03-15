---
sidebar_position: 6
---

# Reference: Markdown format

This page documents the use of Markdown files for storing Paradicms collection data on the file system.

### Markdown directory structure

Collection data in the Markdown directory format consists of:
* a single root directory, typically the root of a GitHub repository
* a set of subdirectories of the root directory, corresponding to classes in the [Paradicms data model](/docs/reference/data-model)
* a set of Markdown files in each class subdirectory, corresponding to instances of the class

Listing the root directory of the [template repository](https://github.com/minorg/ComputerScienceInventions) illustrates the structure:

```
./collection
./collection/default.yaml
./image
./image/Charles Babbage.jpg
./image/Charles Babbage.yaml
./image/Difference engine.jpg
./image/Difference engine.yaml
./image/Donald Knuth.jpg
./image/Donald Knuth.yaml
./image/Douglas Engelbart.jpg
./image/Douglas Engelbart.yaml
./image/Linus Torvalds.jpg
./image/Linus Torvalds.yaml
./image/Linux.png
./image/Linux.yaml
./image/TeX.png
./image/TeX.yaml
./image/Tim Berners-Lee.jpg
./image/Tim Berners-Lee.yaml
./image/World Wide Web.png
./image/World Wide Web.yaml
./image/oN-Line System.jpg
./image/oN-Line System.yaml
./person
./person/Charles Babbage.yaml
./person/Donald Knuth.yaml
./person/Douglas Engelbart.yaml
./person/Linus Torvalds.yaml
./person/Tim Berners-Lee.yaml
./work
./work-creation
./work-creation/Difference engine.md
./work-creation/Linux.md
./work-creation/TeX.md
./work-creation/World Wide Web.md
./work-creation/oN-Line System.md
./work/Difference engine.yaml
./work/Linux.yaml
./work/TeX.yaml
./work/World Wide Web.yaml
./work/oN-Line System.yaml
```

#### Class directories

In the listing above, `./collection` and `./person` are class directories corresponding to the `Collection` and `Person` classes in the Paradicms data model, respectively.

The class directories can be named with variants of the class names:
* `WorkCreation`: the exact class name (camel case) documented in the [data model reference](/docs/reference/data-model)
* `work_creation`: snake case variant of the class name
* `work-creation`: spinal case variant of the class name

The listing above uses spinal case (`work-creation`).

#### Markdown files

`./work-creation/Linux.md` in the listing above is a Markdown file describing an instance of the class `WorkCreation`. The "Markdown file format" section below  will describe the format of these files in detail. 

#### Image data

Image data (`.jpg`, `.png`) should sit directly alongside the associated `Image` (metadata) in the `image/` directory, as in these files from the listing above:
```
./image/World Wide Web.png
./image/World Wide Web.yaml
```


### Markdown file format

The following code block shows an abridged version of the Markdown file `work-creation/Linux.md`:

```markdown title="work-creation/Linux.md"
---
creator: md-person:Linus%20Torvalds
date: 1991-09-17
title: Linus Torvalds begins work on the Linux kernel
---

Frustrated by the limitations of existing operating systems and curious about kernel development, Linus Torvalds begins work on what eventually becomes the Linux kernel.
```

A Markdown file consists of:
1. an optional [YAML](https://yaml.org/) front matter block delimited by `---` and `---`
2. paragraphs under a labeled `#` heading (not present in the example)
3. paragraphs not under a labeled `#` heading (`Frustrated ...` in the example)

A file with only YAML front matter can be stored as `.yaml` instead of `.md`, eliding the leading and trailing`---`, as in `person/Linus Torvalds.yaml`:

```yaml title="person/Linus Torvalds.yaml"
relation:
  - http://en.wikipedia.org/wiki/Linus_Torvalds
  - http://www.wikidata.org/entity/Q34253
```

The remainder of this document refers to both `.md` (optional front matter and Markdown text) and `.yaml` (front matter only) files as "Markdown files" for convenience.


### Conversion to Linked Data

Paradicms converts a Markdown file to Linked Data by converting it to [JSON](https://www.json.org/), then interpreting the JSON as [JSON-LD](https://json-ld.org/). Having a high-level understanding of this process will help you take advantage of the power and flexibility of the Paradicms data model.

#### Converting the Markdown file to JSON

The Markdown file to JSON conversion process works as follows:

* If present, YAML front matter is converted to as-is to a root JSON object; otherwise an empty root JSON object (`{}`) is synthesized.
* Markdown paragraphs are added to the root JSON object following these rules:
  * A paragraph under a Markdown heading with the format `# [Your heading](#anykey)` is converted to an HTML string, and either 
    * Assigned to `anykey` in the root JSON object if `anykey` does not exist in that object
    * Concatenated to the existing string value of `anykey` if it does
  * A paragraph under no heading, like the `Frustrated ...` paragraph in the example above, has the implicit key `abstract`, and otherwise follows the rules of paragraphs with explicit keys.
  * When a paragraph's key (explicit or implicit) was already present in the YAML front matter, the combined metadata and paragraph text(s) are treated as an instance of a `Text` class, with the paragraph text(s) forming the `value`.

Converting `work-creation/Linux.md` would result in the following JSON:

```json
{
  "abstract": "Frustrated by the limitations of existing operating systems and curious about kernel development, Linus Torvalds begins work on what eventually becomes the Linux kernel.",
  "creator": "md-person:Linus%20Torvalds",
  "date": "1991-09-17",
  "title": "Linus Torvalds begins work on the Linux kernel",
}
```

Note the `creator` property's IRI value: `md-person:Linus%20Torvalds` refers to the `Person` instance in the Markdown file `person/Linus Torvalds.md`. The file extension is dropped and the space in the remaining file stem is URL-encoded to `%20` in order to conform to IRI rules.

#### Interpreting the JSON as JSON-LD

Each class directory is associated with a class in the [Paradicms data model](/docs/reference/data-model), and each class has an associated [JSON-LD context](https://www.w3.org/TR/json-ld11/#the-context). Paradicms adds this context to the converted JSON (as a `@context` key) before interpreting the latter as JSON-LD. The JSON-LD context maps keys in the JSON object, such as `creator`, to RDF predicate IRIs, in this case `http://purl.org/dc/terms/creator`.

The result of this interpretation is a small RDF graph per Markdown file:

```turtle
<urn:markdown:ComputerScienceInventions:work-creation:Linux> a cms:Event,
        cms:WorkCreation,
        cms:WorkEvent ;
    dcterms:abstract "<p>Frustrated by the limitations of existing operating systems and curious about kernel development, Linus Torvalds begins work on what eventually becomes the Linux kernel.</p>" ;
    dcterms:creator <urn:markdown:ComputerScienceInventions:person:Linus%20Torvalds> ;
    dcterms:date "1991-09-17"^^xsd:date ;
    dcterms:title "Linus Torvalds begins work on the Linux kernel" ;
    cms:work <urn:markdown:ComputerScienceInventions:work:Linux> .
}
```

#### Implied RDF

The RDF graph above contains more information than could be directly mapped from the contents of `work-creation/Linux.md`. For example, the file has no explicit reference to the `Work` the `WorkCreation` is about, but there is a `cms:work` statement in the RDF with that reference.

Paradicms has a number of rules for inferring parts of the graph associated with a Markdown or YAML file:

* The subject of a Markdown file (`urn:markdown:ComputerScienceInventions:work-creation:Linux` in the RDF graph above) is automatically synthesized from
  * a dataset identifier, which is usually the name of the GitHub repository (here `ComputerScienceInventions`)
  * the class corresponding to the directory where the Markdown file resides (here `WorkCreation`)
  * the Markdown file stem (here `Linux`)
* The `rdf:type` of the subject (the `a cms:Event, cms:WorkCreation, cms:WorkEvent` statement) is the class corresponding to the directory where the Markdown file resides (`WorkCreation`), as well as the class's superclasses (`WorkEvent`, `Event`).
* For subclasses of `WorkEvent` such as `WorkCreation`, if there is no explicit `work` property in the Markdown file, the `work` is assumed to be a `Work` in the `work/` directory with the same file stem (`work/Linux.md` or `work/Linux.yaml`) as the work event (here `work-creation/Linux.md`).
* If no label property (usually `dcterms:title`) is specified in the Markdown file, it is adapted from the Markdown file stem (`Linux.md` -> `"Linux"`).
* All `Work`s are assumed to belong to at least one `Collection`. If no `collection` property is specified in a `Work` Markdown file, the `Work` is assumed to belong to the default collection.
* The default collection is either the first `Collection` defined in the `collection/` directory, or it is synthesized.
* If an `Image` Markdown file does not specify a `depicts` property, Paradicms looks for a `Collection` (i.e., `collection/somefile.md`), `Person`, `Work`, or other non-`Image` Markdown file with the same file stem (`Linux`) and infers that the `Image` `depicts` that `Collection`, `Person`, or `Work`.
* An image file (`.jpg`, `.png`, et al.) placed alongside a file with the same stem (`work/Linux.png` and `work/Linux.md`) is assumed to `depict` the sibling Markdown file. Paradicms synthesizes a new `Image` instance with only this `depicts` statement. This is not used in the template, since third party `Image`s should have rights metadata in addition to a `depicts` property.
* If a `license` property on `Image`, `Work`, et al. references a Creative Commons license IRI such as `http://creativecommons.org/licenses/by/4.0/`, the associated Creative Commons `License` instance is automatically included in the collection data, even if it's not explicitly defined in the `license/` directory.
* If a `rights` property on `Image`, `Work`, et al. references a RightsStatements.org IRI such as `http://rightsstatements.org/vocab/InC/1.0/`, the associated RightsStatements.org `RightsStatement` instance is automatically included in the collection data, even if it's not explicitly defined in the `rights-statement/` directory.

Most of these rules can be overridden by explicitly specifying a property: adding a `depicts` to `Image`, for example, or including a `dcterms:title` in a `Work` Markdown file instead of allowing the `dcterms:title` to be inferred from the file stem. The rules are provided for convenience.

#### Putting it all together

Converting each Markdown file with this process (file -> JSON, JSON -> RDF) produces a set of RDF graphs, which are merged to form a single large graph representing all of the data in the Markdown directory tree.

