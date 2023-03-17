from pathlib import Path
from typing import List, Iterable, Dict, Any

from dataproperty import Align
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from pytablewriter import MarkdownTableWriter
from pytablewriter.style import Style

ROOT_DIR_PATH = Path(__file__).parent.parent.absolute()


HEADERS = ("IRI", "Label")


def write_markdown_table(*, file_stem: str, value_matrix: List[List[Any]]):
    with open(
        ROOT_DIR_PATH / "docs" / "reference" / "ambient-data" / (file_stem + ".md"),
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
    file_stem="_ambient-license-table",
    value_matrix=[
        [str(license.uri), license.title]
        for license in CreativeCommonsLicenses.as_tuple()
    ],
)

write_markdown_table(
    file_stem="_ambient-rights-statement-table",
    value_matrix=[
        [str(rights_statement.uri), rights_statement.pref_label]
        for rights_statement in RightsStatementsDotOrgRightsStatements.as_tuple()
    ],
)
