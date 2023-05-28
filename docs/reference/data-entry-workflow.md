---
sidebar_position: 4
---

# Reference: a repeatable data entry workflow

The interdependencies between [classes in the Paradicms ontology](./ontology) suggest that there is an optimal workflow for entering completely new data into a spreadsheet, Markdown directory, or other source that maps directly to the ontology.

In a repeatable data entry workflow, we will enter data that other data depends on first, then enter first order dependencies, and so on.

For example:

* A `Work` has a one-way link to one or more `Collection`s, so enter `Collection`s first
* After the `Collection`(s) are entered, enter `Work`s that link to the `Collection`s.

## Workflow

You may not need to enter new data for every step. If your system already contains data for e.g., the `License` your `Image` will link to, you can obviously skip the `License` entry step.

### Enter self-contained classes

These are classes that do not depend on any other classes. They can be entered in any order.

* `License`s are often pre-populated in templates and/or resolved during [enrichment](./enrichment), but you can enter new ones if needed.
* `Location`s do not depend on any other classes.
* `PropertyGroup`s do not depend on any other classes.
* `RightsStatement`s, like `License`s are often pre-populated and/or resolved during enrichment.

### Enter `Property`

`Property` can link to `PropertyGroup`.

### Enter `Collection`, `Organization`,  and/or `Person`

These can link to a `Location`.

### Enter `Work`

`Work` can link to:
* one or more `Collection`s
* zero or more `Organization`s
* zero or one `License`
* zero or more `Person`s
* zero or one `RightsStatement`

### Enter `Image`

An `Image` can `depict` (and thus link to) instances of several other classes, including:

* `Collection`
* `Organization`
* `Person`
* `Work`

An `Image` should also be linked to a `License` and a `RightsStatement`.

### Enter work events

Work events such as `WorkCreation` link to a `Work`. They may also link to `Location`, `Person`, and other classes. 