from pathlib import Path
from shutil import rmtree
from typing import List, Any

from dataproperty import Align
from paradicms_etl.models.creative_commons.creative_commons_licenses import (
    CreativeCommonsLicenses,
)
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from pytablewriter import MarkdownTableWriter
from pytablewriter.style import Style

ROOT_DIR_PATH = Path(__file__).parent.parent.absolute()
TABLES_DIR_PATH = ROOT_DIR_PATH / "docs" / "reference" / "enrichment" / "tables"
rmtree(TABLES_DIR_PATH, ignore_errors=True)
TABLES_DIR_PATH.mkdir()


HEADERS = ("IRI", "Label")


def write_markdown_table(*, file_name_prefix: str, value_matrix: List[List[Any]]):
    with open(
        TABLES_DIR_PATH / f"_{file_name_prefix}-table.md",
        "w+",
    ) as md_file:
        writer = MarkdownTableWriter(
            column_styles=[Style(align=Align.LEFT) for _ in HEADERS],
            headers=HEADERS,
            value_matrix=value_matrix,
        )
        writer.stream = md_file
        writer.write_table()


write_markdown_table(
    file_name_prefix="creative-commons-licenses",
    value_matrix=[
        [str(license.uri), license.title]
        for license in CreativeCommonsLicenses.as_tuple()
    ],
)

write_markdown_table(
    file_name_prefix="rights-statement-dot-org-rights-statements",
    value_matrix=[
        [str(rights_statement.uri), rights_statement.pref_label]
        for rights_statement in RightsStatementsDotOrgRightsStatements.as_tuple()
    ],
)
