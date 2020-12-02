/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { analytics } from '@angular-devkit/core';
import { Compiler, Module, Stats, compilation } from 'webpack';
import { Source } from 'webpack-sources';
declare const NormalModule: any;
interface NormalModule extends Module {
    _source?: Source | null;
    resource?: string;
}
/**
 * Faster than using a RegExp, so we use this to count occurences in source code.
 * @param source The source to look into.
 * @param match The match string to look for.
 * @param wordBreak Whether to check for word break before and after a match was found.
 * @return The number of matches found.
 * @private
 */
export declare function countOccurrences(source: string, match: string, wordBreak?: boolean): number;
/**
 * Holder of statistics related to the build.
 */
declare class AnalyticsBuildStats {
    errors: string[];
    numberOfNgOnInit: number;
    numberOfComponents: number;
    initialChunkSize: number;
    totalChunkCount: number;
    totalChunkSize: number;
    lazyChunkCount: number;
    lazyChunkSize: number;
    assetCount: number;
    assetSize: number;
    polyfillSize: number;
    cssSize: number;
}
/**
 * Analytics plugin that reports the analytics we want from the CLI.
 */
export declare class NgBuildAnalyticsPlugin {
    protected _projectRoot: string;
    protected _analytics: analytics.Analytics;
    protected _category: string;
    private _isIvy;
    protected _built: boolean;
    protected _stats: AnalyticsBuildStats;
    constructor(_projectRoot: string, _analytics: analytics.Analytics, _category: string, _isIvy: boolean);
    protected _reset(): void;
    protected _getMetrics(stats: Stats): (string | number)[];
    protected _getDimensions(stats: Stats): import("../../../../../dist-schema/packages/angular/cli/commands/config").Value[];
    protected _reportBuildMetrics(stats: Stats): void;
    protected _reportRebuildMetrics(stats: Stats): void;
    protected _checkTsNormalModule(module: NormalModule): void;
    protected _checkNgFactoryNormalModule(module: NormalModule): void;
    protected _collectErrors(stats: Stats): void;
    protected _collectBundleStats(json: any): void;
    /************************************************************************************************
     * The next section is all the different Webpack hooks for this plugin.
     */
    /**
     * Reports a succeed module.
     * @private
     */
    protected _succeedModule(mod: Module): void;
    protected _compilation(compiler: Compiler, compilation: compilation.Compilation): void;
    protected _done(stats: Stats): void;
    apply(compiler: Compiler): void;
}
export {};
