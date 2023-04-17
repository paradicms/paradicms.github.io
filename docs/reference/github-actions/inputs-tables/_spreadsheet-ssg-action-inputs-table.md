|            Name             |                                         Description                                          |Optional/Required|Default|
|-----------------------------|----------------------------------------------------------------------------------------------|-----------------|-------|
|`spreadsheet`                |Google Sheets spreadsheet id, Google Sheet URL, or path to an Excel 2010 (.xlsx) file         |Required         |       |
|`app_configuration_file_path`|Path to an app configuration file, which controls the static site generator                   |Optional         |       |
|`build_directory_path`       |Path to a directory where the generated static assets (CSS, HTML, JavaScript) should be placed|Optional         |_site  |
|`debug`                      |Debug the action                                                                              |Optional         |       |
|`pipeline_id`                |Pipeline id. Defaults to the name of the repository.                                          |Optional         |       |
