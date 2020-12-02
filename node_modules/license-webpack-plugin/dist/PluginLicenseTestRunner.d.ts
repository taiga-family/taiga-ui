import { LicenseTest } from './LicenseTest';
import { LicenseTestRunner } from './LicenseTestRunner';
declare class PluginLicenseTestRunner implements LicenseTestRunner {
    private licenseTest;
    constructor(licenseTest: LicenseTest);
    test(licenseId: string): boolean;
}
export { PluginLicenseTestRunner };
