---
sidebar_position: 5
---

# Reference: GitHub Actions

[GitHub Actions](https://github.com/features/actions) are the glue that ties together disparate components of the Paradicms system. A GitHub Action like `spreadsheet-ssg-action` extracts data from a source like Google Sheets, transforms it to the Paradicms data model, and feed the data to an app-specific static site generator. The result is a set of HTML, CSS, and JavaScript files which can be deployed to a static file hosting service such as GitHub Pages.

This page documents the GitHub Actions provided by Paradicms, with one section per action.


### `spreadsheet-ssg-action`

The `spreadsheet-ssg-action` generates a [Paradicms app](./apps) from a spreadsheet. The spreadsheet can reside on Google Sheets or in an Excel 2010 file (`.xlsx`) in the GitHub repository.

#### Inputs

* `app`: identifier of one of the [Paradicms apps](./apps), such as `work-search`
* `app_configuration`: path to an [app configuration file](./app-configuration)
* `spreadsheet`: one of:
    * a Google Sheets spreadsheet id, such as `1j2oaMvMxY4pnXO-sEH_fky2R2gm6TQeIev_Q8rVOD4M` ;
    * the full URL of a Google Sheet, such as `https://docs.google.com/spreadsheets/d/1j2oaMvMxY4pnXO-sEH_fky2R2gm6TQeIev_Q8rVOD4M/edit?usp=sharing` ; or
    * the path to an Excel 2010 file (`.xlsx`) within the repository, such as `data/data.xlsx`

#### Example

The example is adapted from the [GitHub Actions workflow in the template repository](https://raw.githubusercontent.com/dressdiscover/exhibitions/main/.github/workflows/build.yml). The [tutorial on using Google Sheets to generate a faceted search interface](/docs/tutorials/spreadsheet-ssg) explains the role of this action in context.

```yaml
uses: paradicms/spreadsheet-ssg-action@v1-beta
with:
  app: work-search
  app_configuration: ./app-configuration.ttl
  spreadsheet: 1j2oaMvMxY4pnXO-sEH_fky2R2gm6TQeIev_Q8rVOD4M
```
