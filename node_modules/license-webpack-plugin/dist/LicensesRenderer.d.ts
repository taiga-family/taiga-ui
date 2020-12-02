import { LicenseIdentifiedModule } from './LicenseIdentifiedModule';
interface LicensesRenderer {
    renderLicenses(modules: LicenseIdentifiedModule[]): string;
    renderBanner(filename: string, modules: LicenseIdentifiedModule[]): string;
}
export { LicensesRenderer };
