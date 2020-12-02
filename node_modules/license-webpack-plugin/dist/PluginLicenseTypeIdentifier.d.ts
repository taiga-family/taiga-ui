import { LicenseTypeIdentifier } from './LicenseTypeIdentifier';
import { PackageJson } from './PackageJson';
import { LicenseTypeOverrides } from './LicenseTypeOverrides';
import { WebpackCompilation } from './WebpackCompilation';
import { Logger } from './Logger';
declare class PluginLicenseTypeIdentifier implements LicenseTypeIdentifier {
    private logger;
    private licenseTypeOverrides;
    private preferredLicenseTypes;
    private handleLicenseAmbiguity;
    private handleMissingLicenseType;
    constructor(logger: Logger, licenseTypeOverrides: LicenseTypeOverrides, preferredLicenseTypes: string[], handleLicenseAmbiguity: ((packageName: string, licenses: {
        type: string;
        url: string;
    }[]) => string), handleMissingLicenseType: ((packageName: string) => string | null));
    findLicenseIdentifier(compilation: WebpackCompilation, packageName: string, packageJson: PackageJson): string | null;
    private findPreferredLicense(licenseTypes, preferredLicenseTypes);
}
export { PluginLicenseTypeIdentifier };
