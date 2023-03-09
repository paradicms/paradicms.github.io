---
sidebar_position: 1
---

# Reference: apps

Paradicms apps are statically-generated, web-based user interfaces for browsing and searching data encoded in the [Paradicms data model](/docs/introduction/data-model).

Apps are usually generated via [GitHub Actions](github-actions), which extract data from a source like Google Sheets, transform it to the Paradicms data model, and feed the data to an app-specific static site generator. The result is a set of HTML, CSS, and JavaScript files which can be deployed to a static file hosting service such as GitHub Pages.

This page documents the apps currently available in Paradicms, with one section per app.


### `multi-page-exhibition`

The `multi-page-exhibition` app displays the `Work`s in a dataset in a sequence of multiple web pages the user can click through.

![Screenshot of multi-page-exhibition app](multi-page-exhibition.png)


### `single-page-exhibition`

The `single-page-exhibition` app displays the `Work`s in a dataset in a vertical sequence on one web page the user can scroll through.

![Screenshot of single-page-exhibition app](single-page-exhibition.png)


### `work-search`

The `work-search` app provides a faceted and full-text search interface over a set of `Work`s. The app can be [configured](../app-configuration.md) to facetize, filter, and search arbitrary domain-specific `Work` properties such as [Costume Core](http://www.ardenkirkland.com/costumecore/) `condition`.

![Screenshot of work-search app](work-search.png)