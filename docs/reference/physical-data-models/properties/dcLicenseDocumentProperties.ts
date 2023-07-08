import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {dctermsTitleProperty} from "@site/docs/reference/physical-data-models/properties/dctermsTitleProperty";

const className = "DcLicenseDocument";

const dcLicenseDocumentProperties: readonly PropertiesTableProperty[] = [
  dctermsTitleProperty({className}),
];
export default dcLicenseDocumentProperties;
