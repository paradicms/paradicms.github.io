# Reference: a repeatable data entry workflow

The interdependencies between [classes in the Paradicms data model](./data-model.md) suggest that there is an optimal workflow for entering completely new data into a spreadsheet, Markdown directory, or other source that maps directly to the data model.

For example, a `Work` has a one-way link to one or more `Collection`s, and a `Collection` has a one-way link to an `Institution`, so it makes sense to enter the `Institution` first, then the `Collection`(s) that link to that `Institution`, then the `Work`(s) that link to the `Collection`(s).

## Workflow

In a repeatable data entry workflow, we will enter data that other data depends on first, then enter first order dependencies, and so on.

You may not need to enter new data for every step. If your system already contains a row for e.g., the `License` your `Image` will link to, you can obviously skip the `License` entry step.

### Enter self-contained classes

These are classes that do not depend on any other classes. They can be entered in any order.

* `License`. `License`s are often pre-populated in templates, but you can enter new ones if needed.
* `Location`
* `RightsStatement`. Similar to `License`, `RightsStatement`s are often pre-populated.

### Enter `Institution`, `Organization`, and/or `Person`

All of these can link to a `Location`.

### Enter `Collection`

`Collection` links to/depends on `Institution`.

### Enter `Work`

`Work` links to one or more `Collection`(s), a single `Institution`, and zero or more `Person`(s).

### Enter `Image`

An `Image` can `depict` (and thus link to) instances of several other classes, including:

* `Collection`
* `Institution`
* `Organization`
* `Person`
* `Work`

An `Image` should also be linked to a `License` and a `RightsStatement`.

### Enter work events

Work events such as `WorkCreation` link to a `Work`. They may also link to `Location`, `Person`, and other classes. 