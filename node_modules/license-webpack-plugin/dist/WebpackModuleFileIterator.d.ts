import { WebpackChunkModule } from './WebpackChunkModule';
declare class WebpackModuleFileIterator {
    iterateFiles(chunkModule: WebpackChunkModule, callback: (filename: string | null | undefined) => void): void;
}
export { WebpackModuleFileIterator };
