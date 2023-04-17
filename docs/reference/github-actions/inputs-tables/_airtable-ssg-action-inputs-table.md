|            Name             |                                                      Description                                                       |Optional/Required|  Default   |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------|-----------------|------------|
|`airtable_access_token`      |Airtable access token (not API key), see https://support.airtable.com/docs/creating-and-using-api-keys-and-access-tokens|Required         |            |
|`airtable_base_id`           |Airtable base id such as appgU92SdGTwPIVNg, see the base API documentation                                              |Required         |            |
|`app_configuration_file_path`|Path to an app configuration file, which controls the static site generator                                             |Optional         |            |
|`build_directory_path`       |Path to a directory where the generated static assets (CSS, HTML, JavaScript) should be placed                          |Optional         |_site       |
|`debug`                      |Debug the action                                                                                                        |Optional         |            |
|`pipeline_id`                |Pipeline id. Defaults to the name of the repository.                                                                    |Optional         |            |
|`profile`                    |Application profile of the data/metadata in the Airtable metadata, one of: costume_core                                 |Optional         |costume_core|
