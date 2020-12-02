/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Compiler } from 'webpack';
import { HashFormat } from '../models/webpack-configs/utils';
export interface RemoveHashPluginOptions {
    chunkNames: string[];
    hashFormat: HashFormat;
}
export declare class RemoveHashPlugin {
    private options;
    constructor(options: RemoveHashPluginOptions);
    apply(compiler: Compiler): void;
}
