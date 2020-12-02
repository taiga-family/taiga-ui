import { WebpackChunk } from './WebpackChunk';
import { Source } from 'webpack-sources';
export interface WebpackCompilation {
    chunks: IterableIterator<WebpackChunk>;
    assets: {
        [key: string]: Source;
    };
    errors: any[];
    warnings: any[];
    getPath(filename: string, data: {
        hash?: any;
        chunk?: any;
        filename?: string;
        basename?: string;
        query?: any;
    }): string;
    hooks: {
        optimizeChunkAssets: {
            tap: (pluginName: string, handler: (chunks: IterableIterator<WebpackChunk>) => void) => void;
        };
    };
    plugin?: (phase: string, callback: Function) => void;
}
