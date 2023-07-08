import PropertiesTableProperty from "@site/src/components/PropertiesTableProperty";
import {dctermsTitleProperty} from "./dctermsTitleProperty";

const className = "DcLicenseDocument";

const dcLicenseDocumentProperties: readonly PropertiesTableProperty[] = [
  dctermsTitleProperty({className}),
];
export default dcLicenseDocumentProperties;
