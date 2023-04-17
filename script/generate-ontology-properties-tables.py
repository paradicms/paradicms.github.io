import json
import os.path
from pathlib import Path

ROOT_DIR_PATH = Path(__file__).parent.parent.absolute()
TABLES_DIR_PATH = ROOT_DIR_PATH / "docs" / "reference" / "ontology" / "properties"

for file_name in os.listdir(TABLES_DIR_PATH):
    if not file_name.endswith("-table.md"):
        continue
    table_md_file_path = TABLES_DIR_PATH / file_name
    json_properties = []
    with open(table_md_file_path) as table_md_file:
        for row_i, row in enumerate(table_md_file):
            columns = [column.strip() for column in row.rstrip().strip("|").split("|")]
            assert len(columns) == 6, columns
            if row_i < 2:
                continue
            json_properties.append(
                {
                    "term": columns[0],
                    "iri": columns[1],
                    "description": columns[2],
                    "cardinality": columns[3],
                    "valueType": columns[4],
                    "exampleValues": columns[5],
                }
            )
    with open(
        TABLES_DIR_PATH / f"{os.path.splitext(file_name)[0]}.ts", "w+"
    ) as properties_ts_file:
        properties_ts_file.write(
            f"""\
import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";

const properties: readonly PropertiesTableProperty[] = {json.dumps(json_properties)};
export default properties;
"""
        )
