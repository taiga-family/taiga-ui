import { ModuleCache } from './ModuleCache';
import { LicenseIdentifiedModule } from './LicenseIdentifiedModule';
declare class PluginModuleCache implements ModuleCache {
    private totalCache;
    private chunkCache;
    private chunkSeenCache;
    registerModule(chunkName: string, module: LicenseIdentifiedModule): void;
    getModule(packageName: string): LicenseIdentifiedModule | null;
    markSeenForChunk(chunkName: string, packageName: string): void;
    alreadySeenForChunk(chunkName: string, packageName: string): boolean;
    getAllModulesForChunk(chunkName: string): LicenseIdentifiedModule[];
    getAllModules(): LicenseIdentifiedModule[];
}
export { PluginModuleCache };
