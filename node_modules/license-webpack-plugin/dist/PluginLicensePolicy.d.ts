import { LicensePolicy } from './LicensePolicy';
import { LicenseTestRunner } from './LicenseTestRunner';
declare class PluginLicensePolicy implements LicensePolicy {
    private licenseTester;
    private unacceptableLicenseTester;
    private unacceptableLicenseHandler;
    private missingLicenseTextHandler;
    constructor(licenseTester: LicenseTestRunner, unacceptableLicenseTester: LicenseTestRunner, unacceptableLicenseHandler: ((packageName: string, licenseType: string) => void), missingLicenseTextHandler: ((packageName: string, licenseType: string) => void));
    isLicenseWrittenFor(licenseType: string): boolean;
    isLicenseUnacceptableFor(licenseType: string): boolean;
    handleUnacceptableLicense(packageName: string, licenseType: string): void;
    handleMissingLicenseText(packageName: string, licenseType: string): void;
}
export { PluginLicensePolicy };
