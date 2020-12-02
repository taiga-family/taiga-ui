import { WebpackChunk } from './WebpackChunk';
import { WebpackChunkModule } from './WebpackChunkModule';
declare class WebpackChunkModuleIterator {
    iterateModules(chunk: WebpackChunk, callback: ((module: WebpackChunkModule) => void)): void;
}
export { WebpackChunkModuleIterator };
