---
sidebar_position: 2
---

# Tutorial: Edit collection data in Markdown files 

The tutorial will guide you in editing collection data in the Paradicms Markdown format.

### Before you start

* Create a Markdown directory. See below.
* **Review the [Paradicms data model](/docs/introduction/data-model) and [ontology](/docs/reference/ontology).**
* Optionally, **review the [reference documentation on the Paradicms Markdown format](/docs/reference/markdown-format).**


#### Creating a Markdown directory

For this tutorial you will need a place to store Markdown files. It can be any directory. As you enter data the directory will conform to the [expected structure](/docs/reference/markdown-format).

You can create directories and [edit YAML files](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files) directly on GitHub or clone the GitHub repository to your machine and perform these operations locally.


### Data entry workflow

The remaining sections of this document follow a subset of the [repeatable data entry workflow](/docs/reference/data-entry-workflow). We will not attempt to create instances of every class in the ontology, but only enough to demonstrate the editing process.



### Enter a `Collection`

Create a subdirectory named `collection` if it doesn't exist already, then create a file `costume-institute.yaml` in that directory with the following content:

```yaml title="collection/costume-institute.yaml"
page: "https://www3.metmuseum.org/about-the-met/collection-areas/the-costume-institute"
title: The Costume Institute
```


### Enter a `Person`

Create a subdirectory named `person` if it doesn't exist already, then create a file `andrew-bolton.yaml` in that directory with the following content:

```yaml title="person/andrew-bolton.yaml"
familyName: Bolton
givenName: Andrew
name: Andrew Bolton
```


### Enter a `Work`

Create a subdirectory named `work` if it doesn't exist already, then create a file `camp-notes-on-fashion.yaml` in that directory with the following content:

```yaml title="work/camp-notes-on-fashion.yaml"
collection: "md-collection:costume-institute"
creator: "md-person:andrew-bolton"
page: "https://www.metmuseum.org/exhibitions/listings/2019/camp-notes-on-fashion"
relation:
  - "http://www.wikidata.org/entity/Q65043088"
  - "https://en.wikipedia.org/wiki/Camp:_Notes_on_Fashion"
title: "Camp: Notes on Fashion"
type: "dcmi:Event"
```

The new `Work`'s `collection` property references the generated IRI of the `Collection` we created. The `creator` property references the generated IRI of the new `Person`.


### Enter an `Image`

Create a subdirectory named `image` if it doesn't exist already, then create a file `camp-notes-on-fashion.yaml` in that directory with the following content:

```yaml title="image/camp-notes-on-fashion.yaml"
creatorLiteral: Wikipedia user Rhododendrites
license: http://creativecommons.org/licenses/by-sa/4.0/
```

The new `Image` references the Creative Commons BY-SA 4.0 `License`, which is implicitly included in the data.


### Add image data

Save the [JPEG file from Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/e/e5/Camp_-_Notes_on_Fashion_at_the_Met_%2873879%29.jpg) to the file `camp-notes-on-fashion.jpg` in the `image` directory.


### Next steps

You now have a Markdown directory with data about a `Collection`, `Image`, `Person`, and `Work`. From here you can enter more data, following the [ontology reference](/docs/reference/ontology), or use the data you've entered to generate a website by following the appropriate [tutorial](/docs/tutorials/markdown-ssg).
