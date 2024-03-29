from pathlib import Path
from shutil import rmtree

import yaml
from dataproperty import Align
from pytablewriter import MarkdownTableWriter
from pytablewriter.style import Style

ROOT_DIR_PATH = Path(__file__).parent.parent.absolute()
TABLES_DIR_PATH = (
    ROOT_DIR_PATH / "docs" / "reference" / "github-actions" / "inputs-tables"
)
rmtree(TABLES_DIR_PATH)
TABLES_DIR_PATH.mkdir()


def generate_github_action_table(repository_name: str):
    repository_dir_path = ROOT_DIR_PATH.parent.absolute() / repository_name
    assert repository_dir_path.is_dir(), repository_dir_path

    with open(repository_dir_path / "action.yml") as action_yml_file:
        action_yml = yaml.load(action_yml_file, Loader=yaml.FullLoader)

    headers = ["Name", "Description", "Optional/Required", "Default"]

    value_matrix = []
    for input_name, input in action_yml["inputs"].items():
        value_matrix.append(
            [
                f"`{input_name}`",
                input["description"],
                "Required" if input["required"] else "Optional",
                input.get("default", ""),
            ]
        )
    value_matrix.sort(key=lambda row: row[2] == "Required", reverse=True)

    with open(
        TABLES_DIR_PATH / f"_{repository_name}-inputs-table.md",
        "w+",
    ) as md_file:
        writer = MarkdownTableWriter(
            column_styles=[Style(align=Align.LEFT) for _ in headers],
            headers=headers,
            value_matrix=value_matrix,
        )
        writer.stream = md_file
        writer.write_table()


generate_github_action_table("airtable-etl-action")
generate_github_action_table("directory-etl-action")
generate_github_action_table("spreadsheet-etl-action")
generate_github_action_table("ssg-action")
