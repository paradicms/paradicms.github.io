|            Name            |                                                  Description                                                  |Optional/Required|     Default     |
|----------------------------|---------------------------------------------------------------------------------------------------------------|-----------------|-----------------|
|`cache_directory_path`      |Path to a directory in which to store cached data                                                              |Optional         |.paradicms/.cache|
|`debug`                     |Debug the action                                                                                               |Optional         |                 |
|`input_directory_path`      |Path to a directory of JSON, Markdown, YAML, and/or other files containing data to extract, transform, and load|Optional         |.                |
|`loaded_data_directory_path`|Path to a directory in which to store the loaded RDF file                                                      |Optional         |.paradicms/data  |
|`loaded_data_file_path`     |Path to a file in which to store the loaded RDF, overrides data_directory_path if specified                    |Optional         |                 |
|`pipeline_id`               |Pipeline id. Defaults to the name of the repository.                                                           |Optional         |                 |
