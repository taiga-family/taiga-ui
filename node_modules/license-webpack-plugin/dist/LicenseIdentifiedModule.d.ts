import { Module } from './Module';
import { PackageJson } from './PackageJson';
interface LicenseIdentifiedModule extends Module {
    packageJson: PackageJson;
    licenseId: string | null;
    licenseText: string | null;
}
export { LicenseIdentifiedModule };
