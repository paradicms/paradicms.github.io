---
sidebar_position: 4
---

# Reference: a repeatable data entry workflow

The interdependencies between [classes in the Paradicms data model](./data-model) suggest that there is an optimal workflow for entering completely new data into a spreadsheet, Markdown directory, or other source that maps directly to the data model.

For example, a `Work` has a one-way link to one or more `Collection`s, then the `Work`s that link to the `Collection`s.

## Workflow

In a repeatable data entry workflow, we will enter data that other data depends on first, then enter first order dependencies, and so on.

You may not need to enter new data for every step. If your system already contains a row for e.g., the `License` your `Image` will link to, you can obviously skip the `License` entry step.

### Enter self-contained classes

These are classes that do not depend on any other classes. They can be entered in any order.

* `License`. `License`s are often pre-populated in templates, but you can enter new ones if needed.
* `Location`
* `RightsStatement`. Similar to `License`, `RightsStatement`s are often pre-populated.

### Enter `Organization` and/or `Person`

All of these can link to a `Location`.

### Enter `Collection`

`Collection` can also link to a `Location`.

### Enter `Work`

`Work` links to one or more `Collection`s, zero or more `Organization`s, and zero or more `Person`s.

### Enter `Image`

An `Image` can `depict` (and thus link to) instances of several other classes, including:

* `Collection`
* `Organization`
* `Person`
* `Work`

An `Image` should also be linked to a `License` and a `RightsStatement`.

### Enter work events

Work events such as `WorkCreation` link to a `Work`. They may also link to `Location`, `Person`, and other classes. 