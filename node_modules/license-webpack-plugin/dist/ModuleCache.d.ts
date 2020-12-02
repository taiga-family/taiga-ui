import { LicenseIdentifiedModule } from './LicenseIdentifiedModule';
interface ModuleCache {
    registerModule(chunkName: string, module: LicenseIdentifiedModule): void;
    markSeenForChunk(chunkName: string, packageName: string): void;
    alreadySeenForChunk(chunkName: string, packageName: string): boolean;
    getModule(packageName: string): LicenseIdentifiedModule | null;
    getAllModulesForChunk(chunkName: string): LicenseIdentifiedModule[];
    getAllModules(): LicenseIdentifiedModule[];
}
export { ModuleCache };
