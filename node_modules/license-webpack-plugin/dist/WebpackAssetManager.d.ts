import { AssetManager } from './AssetManager';
import { WebpackCompilation } from './WebpackCompilation';
import { WebpackChunk } from './WebpackChunk';
import { LicensesRenderer } from './LicensesRenderer';
import { LicenseIdentifiedModule } from './LicenseIdentifiedModule';
declare class WebpackAssetManager implements AssetManager {
    private outputFilename;
    private licensesRenderer;
    constructor(outputFilename: string, licensesRenderer: LicensesRenderer);
    writeChunkLicenses(modules: LicenseIdentifiedModule[], compilation: WebpackCompilation, chunk: WebpackChunk): void;
    writeChunkBanners(modules: LicenseIdentifiedModule[], compilation: WebpackCompilation, chunk: WebpackChunk): void;
    writeAllLicenses(modules: LicenseIdentifiedModule[], compilation: WebpackCompilation): void;
}
export { WebpackAssetManager };
