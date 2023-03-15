---
sidebar_position: 6
---

# Reference: Markdown directory format

This page documents use of Markdown files for storing Paradicms collection data on the file system.

### Markdown directory structure

Collection data in the Markdown directory format consists of:
* a single root directory, typically the root of a GitHub repository
* a set of subdirectories of the root directory, corresponding to classes in the [Paradicms data model](/docs/reference/data-model.mdx)
* a set of Markdown files in each class subdirectory, corresponding to instance of the class

Listing the root directory of the [template repository](https://github.com/minorg/ComputerScienceInventions) illustrates the structure:

```
.
./app-configuration
./app-configuration/app-configuration.yaml
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

In the listing above, `.` indicates the root directory, while `./collection` and `/person` et al. are class directories corresponding to the `Collection` and `Person` classes in the Paradicms data model, respectively.

The class directories can be named with variants of the class names:
* `WorkCreation`: the exact class name (camel case)
* `work_creation`: snake case variant of the class name
* `work-creation`: spinal case variant of the class name

The listing above uses spinal case (`work-creation`).

Note that `app-configuration` also appears in the listing, indicating that the [app configuration](/docs/reference/app-configuration) is included in the collection data rather than as a separate file.

#### Markdown files

`./work-creation/Linux.md` in the listing above is a Markdown file describing an instance of the class `WorkCreation`. The next section will describe the format of these files in detail. 


### Markdown file format

A Markdown file such as `Linux.md` in the template consists of:
1. an optional [YAML](https://yaml.org/) front matter block delimited by `---` and `---`
2. paragraphs under a labeled `#` heading
3. paragraphs not under a labeled `#` heading

The code block below is an abridged version of `Linux.md` from the `work-creation` class directory:

```markdown
---
creator: md-person:Linus%20Torvalds
date: 1991-09-17
title: Linus Torvalds begins work on the Linux kernel
---

Frustrated by the limitations of existing operating systems and curious about kernel development, Linus Torvalds begins work on what eventually becomes the Linux kernel.
```

A file with only YAML front matter can be stored as `.yaml` instead of `.md`, eliding the `---`, as in `Linus Torvalds.yaml` from the `person` class directory:

```yaml
relation:
  - http://en.wikipedia.org/wiki/Linus_Torvalds
  - http://www.wikidata.org/entity/Q34253
```


### Conversion to Linked Data

Paradicms converts a Markdown file to Linked Data by converting it to [JSON](https://www.json.org/), then interpreting the JSON as [JSON-LD](https://json-ld.org/). Having a high-level understanding of this process will help you take advantage of the power and flexibility of the Paradicms data model.

#### Converting the Markdown file to JSON

The Markdown file to JSON conversion process works as follows:

* YAML front matter (if present) is converted to as-is to a JSON object (`{}`)
* Markdown paragraphs are added to the root JSON object following these rules:
  * A paragraph under a heading with the format `# [Your heading](#key)` is converted to an HTML string and either 
    * Assigned to `key` in the root JSON object if `key` does not exist in that object
    * Concatenate to the existing string value of `key` if it does
  * A paragraph under no heading has the implicit key `abstract`, and otherwise follows the rules of paragraphs with explicit keys (above).
  * When a paragraph's key (explicit or implicit) was already present in the YAML front matter, the combined metadata and paragraph text(s) are treated as an instance of a `Text` class, with the paragraph text(s) forming the `value`.

