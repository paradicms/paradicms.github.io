|            Name            |                                                      Description                                                       |Optional/Required|     Default     |
|----------------------------|------------------------------------------------------------------------------------------------------------------------|-----------------|-----------------|
|`airtable_access_token`     |Airtable access token (not API key), see https://support.airtable.com/docs/creating-and-using-api-keys-and-access-tokens|Required         |                 |
|`airtable_base_id`          |Airtable base id such as appgU92SdGTwPIVNg, see the base API documentation                                              |Required         |                 |
|`cache_directory_path`      |Path to a directory in which to store cached data                                                                       |Optional         |.paradicms/.cache|
|`debug`                     |Debug the action                                                                                                        |Optional         |                 |
|`loaded_data_directory_path`|Path to a directory in which to store the loaded RDF file                                                               |Optional         |.paradicms/data  |
|`loaded_data_file_path`     |Path to a file in which to store the loaded RDF, overrides data_directory_path if specified                             |Optional         |                 |
|`pipeline_id`               |Pipeline id. Defaults to the name of the repository.                                                                    |Optional         |                 |
|`profile`                   |Application profile of the data/metadata in the Airtable metadata, one of: costume_core                                 |Optional         |costume_core     |
