import { WebpackChunkModule } from './WebpackChunkModule';
export interface WebpackChunk {
    name: string;
    modulesIterable?: IterableIterator<WebpackChunkModule>;
    forEachModule?: (callback: (module: WebpackChunkModule) => void) => void;
    modules?: WebpackChunkModule[];
    entryModule?: WebpackChunkModule;
    files: string[];
}
