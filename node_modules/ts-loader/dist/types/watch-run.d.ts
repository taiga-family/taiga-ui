import * as webpack from 'webpack';
import { TSInstance } from './interfaces';
/**
 * Make function which will manually update changed files
 */
export declare function makeWatchRun(instance: TSInstance): (compiler: webpack.Compiler, callback: () => void) => void;
