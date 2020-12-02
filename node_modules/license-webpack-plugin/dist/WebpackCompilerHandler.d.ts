import { WebpackChunkHandler } from './WebpackChunkHandler';
import { WebpackCompiler } from './WebpackCompiler';
import { ChunkIncludeExcludeTester } from './ChunkIncludeExcludeTester';
import { ModuleCache } from './ModuleCache';
import { AssetManager } from './AssetManager';
import { Module } from './Module';
declare class WebpackCompilerHandler {
    private chunkIncludeTester;
    private chunkHandler;
    private assetManager;
    private moduleCache;
    private addBanner;
    private perChunkOutput;
    private additionalChunkModules;
    private additionalModules;
    constructor(chunkIncludeTester: ChunkIncludeExcludeTester, chunkHandler: WebpackChunkHandler, assetManager: AssetManager, moduleCache: ModuleCache, addBanner: boolean, perChunkOutput: boolean, additionalChunkModules: {
        [chunkName: string]: Module[];
    }, additionalModules: Module[]);
    handleCompiler(compiler: WebpackCompiler): void;
    private iterateChunks(compilation, chunks);
}
export { WebpackCompilerHandler };
