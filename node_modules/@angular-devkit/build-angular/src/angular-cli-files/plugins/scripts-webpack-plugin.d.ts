/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Compiler } from 'webpack';
export interface ScriptsWebpackPluginOptions {
    name: string;
    sourceMap: boolean;
    scripts: string[];
    filename: string;
    basePath: string;
}
export declare class ScriptsWebpackPlugin {
    private options;
    private _lastBuildTime?;
    private _cachedOutput?;
    constructor(options?: Partial<ScriptsWebpackPluginOptions>);
    shouldSkip(compilation: any, scripts: string[]): boolean;
    private _insertOutput;
    apply(compiler: Compiler): void;
}
