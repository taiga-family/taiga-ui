/// <reference types="node" />
import { Plugin } from 'rollup';
import { CreateFilter } from '@rollup/pluginutils';
export interface SourcemapsPluginOptions {
    include?: Parameters<CreateFilter>[0];
    exclude?: Parameters<CreateFilter>[1];
    readFile?(path: string, callback: (error: Error | null, data: Buffer | string) => void): void;
}
export default function sourcemaps({ include, exclude, readFile, }?: SourcemapsPluginOptions): Plugin;
