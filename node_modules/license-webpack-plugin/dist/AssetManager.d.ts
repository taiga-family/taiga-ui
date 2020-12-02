import { WebpackChunk } from './WebpackChunk';
import { WebpackCompilation } from './WebpackCompilation';
import { LicenseIdentifiedModule } from './LicenseIdentifiedModule';
interface AssetManager {
    writeChunkLicenses(modules: LicenseIdentifiedModule[], compilation: WebpackCompilation, chunk: WebpackChunk): void;
    writeChunkBanners(modules: LicenseIdentifiedModule[], compilation: WebpackCompilation, chunk: WebpackChunk): void;
    writeAllLicenses(modules: LicenseIdentifiedModule[], compilation: WebpackCompilation): void;
}
export { AssetManager };
