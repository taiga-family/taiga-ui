import { WebpackChunk } from './WebpackChunk';
import { ModuleCache } from './ModuleCache';
import { Module } from './Module';
import { WebpackCompilation } from './WebpackCompilation';
interface WebpackChunkHandler {
    processChunk(compilation: WebpackCompilation, chunk: WebpackChunk, moduleCache: ModuleCache): void;
    processModule(compilation: WebpackCompilation, chunk: WebpackChunk, moduleCache: ModuleCache, module: Module): void;
}
export { WebpackChunkHandler };
