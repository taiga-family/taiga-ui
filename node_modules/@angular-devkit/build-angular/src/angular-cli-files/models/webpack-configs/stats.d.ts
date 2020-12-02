/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { WebpackConfigOptions } from '../build-options';
export declare function getWebpackStatsConfig(verbose?: boolean): {
    colors: boolean;
    hash: boolean;
    timings: boolean;
    chunks: boolean;
    chunkModules: boolean;
    children: boolean;
    modules: boolean;
    reasons: boolean;
    warnings: boolean;
    errors: boolean;
    assets: boolean;
    version: boolean;
    errorDetails: boolean;
    moduleTrace: boolean;
};
export declare function getStatsConfig(wco: WebpackConfigOptions): {
    stats: {
        colors: boolean;
        hash: boolean;
        timings: boolean;
        chunks: boolean;
        chunkModules: boolean;
        children: boolean;
        modules: boolean;
        reasons: boolean;
        warnings: boolean;
        errors: boolean;
        assets: boolean;
        version: boolean;
        errorDetails: boolean;
        moduleTrace: boolean;
    };
};
