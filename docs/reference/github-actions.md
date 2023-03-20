---
sidebar_position: 5
---

# Reference: GitHub Actions

[GitHub Actions](https://github.com/features/actions) are the glue that ties together disparate components of the Paradicms system. A GitHub Action like `spreadsheet-ssg-action` extracts data from a source like Google Sheets, transforms it to the Paradicms data model, and feed the data to an app-specific static site generator. The result is a set of HTML, CSS, and JavaScript files which can be deployed to a static file hosting service such as GitHub Pages.

This page documents the GitHub Actions provided by Paradicms, with one section per action.


### `markdown-ssg-action`

The `markdown-ssg-action` generates a [Paradicms app](./apps) from a directory tree of Markdown (`.md`) files. The files must reside in the GitHub repository.

#### Inputs

##### Required

None.

##### Optional

* `app_configuration_file_path`: path to an [app configuration file](./app-configuration)
* `build_directory_path`: path to a directory where the generated static assets (CSS, HTML, JavaScript) should be placed, defaults to `_site`
* `markdown_directory_path`: path to a directory in the [Markdown directory format](./markdown-format), defaults to the root of the repository (`.`)

#### Example

The example is adapted from the [Computer Science Inventions repository](https://raw.githubusercontent.com/minorg/ComputerScienceInventions/main/.github/workflows/build.yml).
The [tutorial on using Markdown to generate a digital exhibition](/docs/tutorials/markdown-ssg) explains the role of this action in context.

```yaml
- uses: paradicms/markdown-ssg-action@v1-beta
```

### `spreadsheet-ssg-action`

The `spreadsheet-ssg-action` generates a [Paradicms app](./apps) from a spreadsheet. The spreadsheet can reside on Google Sheets or in an Excel 2010 file (`.xlsx`) in the GitHub repository.

#### Inputs

##### Required

* `spreadsheet`: one of:
    * a Google Sheets spreadsheet id, such as `1j2oaMvMxY4pnXO-sEH_fky2R2gm6TQeIev_Q8rVOD4M` ;
    * the full URL of a Google Sheet, such as `https://docs.google.com/spreadsheets/d/1j2oaMvMxY4pnXO-sEH_fky2R2gm6TQeIev_Q8rVOD4M/edit?usp=sharing` ; or
    * the path to an Excel 2010 file (`.xlsx`) within the repository, such as `data/data.xlsx`

##### Optional

* `app_configuration_file_path`: path to an [app configuration file](./app-configuration)
* `build_directory_path`: path to a directory where the generated static assets (CSS, HTML, JavaScript) should be placed, defaults to `_site`

#### Example

The example is adapted from the [GitHub Actions workflow in the template repository](https://raw.githubusercontent.com/dressdiscover/exhibitions/main/.github/workflows/build.yml). The [tutorial on using Google Sheets to generate a faceted search interface](/docs/tutorials/spreadsheet-ssg) explains the role of this action in context.

```yaml
uses: paradicms/spreadsheet-ssg-action@v1-beta
with:
  spreadsheet: 1j2oaMvMxY4pnXO-sEH_fky2R2gm6TQeIev_Q8rVOD4M
```
