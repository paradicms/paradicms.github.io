---
sidebar_position: 2
---

# Tutorial: Edit file-based collection data

The tutorial will guide you in editing collection data stored in files.

### Before you start

* Create a directory. See below.
* **Review the [Paradicms conceptual data model](/docs/introduction/conceptual-data-model) and [logical data models](/docs/reference/logical-data-models).**
* Optionally, **review the [reference documentation on the Paradicms directory format](/docs/reference/directory-format).**


#### Creating a directory

For this tutorial you will need a place to store files. It can be any directory. As you enter data the directory will conform to the [expected structure](/docs/reference/directory-format).

You can create directories and [edit YAML files](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files) directly on GitHub or clone the GitHub repository to your machine and perform these operations locally.


### Data entry workflow

The remaining sections of this document follow a subset of the [repeatable data entry workflow](/docs/reference/data-entry-workflow). We will not attempt to create instances of every class in the data model, but only enough to demonstrate the editing process.


### Enter a `Person`

Create a subdirectory named `schema-person` if it doesn't exist already, then create a file `andrew-bolton.yaml` in that directory with the following content:

```yaml title="schema-person/andrew-bolton.yaml"
familyName: Bolton
givenName: Andrew
name: Andrew Bolton
```

### Enter an `Image`

Create a subdirectory named `schema-image-object` if it doesn't exist already, then create a file `camp-notes-on-fashion.yaml` in that directory with the following content:

```yaml title="schema-image-object/camp-notes-on-fashion.yaml"
creatorLiteral: Wikipedia user Rhododendrites
license: http://creativecommons.org/licenses/by-sa/4.0/
```

The new `Image` references the Creative Commons BY-SA 4.0 `License`, which is implicitly included in the data.


### Add image data

Save the [JPEG file from Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/e/e5/Camp_-_Notes_on_Fashion_at_the_Met_%2873879%29.jpg) to the file `camp-notes-on-fashion.jpg` in the `schema-image-object` directory.


### Enter an `Event`

Create a subdirectory named `schema-event` if it doesn't exist already, then create a file `camp-notes-on-fashion.yaml` in that directory with the following content:

```yaml title="schema-event/camp-notes-on-fashion.yaml"
endDate: "2019-09-09"
name: "Camp: Notes on Fashion"
organizer: "md-schema-person:andrew-bolton"
sameAs: "http://www.wikidata.org/entity/Q65043088"
startDate: "2019-05-08"
url: "https://www.metmuseum.org/exhibitions/listings/2019/camp-notes-on-fashion"
```

The new `Event`'s `organizer` property references the generated IRI of the new `Person`.


### Next steps

You now have a directory with data about a `Event`, `Image`, and `Person`. From here you can enter more data, following the [logical data models reference](/docs/reference/logical-data-models), or use the data you've entered to generate a website by following the appropriate [tutorial](/docs/tutorials/directory-ssg).
