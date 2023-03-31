import json
from pathlib import Path
from shutil import rmtree

from paradicms_etl.model import Model
from paradicms_ssg.models.root_model_classes_by_name import ROOT_MODEL_CLASSES_BY_NAME  # type: ignore
from stringcase import spinalcase

ROOT_DIR_PATH = Path(__file__).parent.parent.absolute()
CONTEXTS_DIR_PATH = ROOT_DIR_PATH / "static" / "contexts"
rmtree(CONTEXTS_DIR_PATH)
CONTEXTS_DIR_PATH.mkdir(parents=True)

root_model_classes_by_name = ROOT_MODEL_CLASSES_BY_NAME.copy()
root_model_classes_by_name["Model"] = Model

for model_class_name, model_class in root_model_classes_by_name.items():
    context_file_path = CONTEXTS_DIR_PATH / f"{spinalcase(model_class_name)}.jsonld"
    with open(context_file_path, "w+") as context_file:
        json.dump({"@context": model_class.json_ld_context()}, context_file, indent=4)
