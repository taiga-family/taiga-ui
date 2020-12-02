import { LicensesRenderer } from './LicensesRenderer';
import { LicenseIdentifiedModule } from './LicenseIdentifiedModule';
declare class PluginLicensesRenderer implements LicensesRenderer {
    renderLicenses: (modules: LicenseIdentifiedModule[]) => string;
    renderBanner: (filename: string, modules: LicenseIdentifiedModule[]) => string;
    constructor(renderLicenses: (modules: LicenseIdentifiedModule[]) => string, renderBanner: (filename: string, modules: LicenseIdentifiedModule[]) => string);
}
export { PluginLicensesRenderer };
