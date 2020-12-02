import { PackageJson } from './PackageJson';
import { WebpackCompilation } from './WebpackCompilation';
interface LicenseTypeIdentifier {
    findLicenseIdentifier(compilation: WebpackCompilation, packageName: string, packageJson: PackageJson): string | null;
}
export { LicenseTypeIdentifier };
