---
sidebar_position: 4
---

# Reference: a repeatable data entry workflow

The interdependencies between [classes in the Paradicms conceptual model](/docs/introduction/conceptual-data-model) suggest that there is an optimal workflow for entering completely new data into a spreadsheet, Markdown directory, or other source that maps to one of the [logical data models](/docs/reference/logical-data-models) supported by Paradicms.

In a repeatable data entry workflow, we will enter data that other data depends on first, then enter first order dependencies, and so on.

For example:

* A `Collection` has a one-way link to one or more `Work`s, so enter `Work`s first
* After the `Work`(s) are entered, link the `Collection` to the `Work`(s)

## Workflow

You may not need to enter new data for every step. If your system already contains data for e.g., the `License` your `Image` will link to, you can obviously skip the `License` entry step.

### Enter `License`, `Location`, and `RightsStatement`

These are classes that do not depend on any other classes. They can be entered in any order.

* `License`s are often pre-populated in templates and/or resolved during [enrichment](./enrichment), but you can enter new ones if needed.
* `Location`s do not depend on any other classes.
* `RightsStatement`s, like `License`s are often pre-populated and/or resolved during enrichment.

### Enter `Image`

`Image` should be linked to `License` and `RightsStatement`.

### Enter `Concept` and `Property`

These classes can both link to `Image`.

### Enter `PropertyGroup`

`PropertyGroup` can link to `Image` and `Property`.

### Enter `Organization` and `Person`

Both can link to `Image` as well as `Location`.

### Enter `Event`

`Event` can link to `Image` and `Location`.

### Enter `Work`

`Work` can link to:
* `Image`
* `License`
* `Location`
* `Organization`
* `Person`
* `RightsStatement`

### Enter `Collection`

`Collection` can link to `Image` and `Work`.
