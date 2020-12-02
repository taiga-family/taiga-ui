/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Path, virtualFs } from '@angular-devkit/core';
import { BuildOptions } from '../angular-cli-files/models/build-options';
import { AssetPatternClass, OptimizationClass, Schema as BrowserBuilderSchema, SourceMapClass } from '../browser/schema';
import { NormalizedFileReplacement } from './normalize-file-replacements';
/**
 * A normalized browser builder schema.
 */
export declare type NormalizedBrowserBuilderSchema = BrowserBuilderSchema & BuildOptions & {
    sourceMap: SourceMapClass;
    assets: AssetPatternClass[];
    fileReplacements: NormalizedFileReplacement[];
    optimization: OptimizationClass;
};
export declare function normalizeBrowserSchema(host: virtualFs.Host<{}>, root: Path, projectRoot: Path, sourceRoot: Path | undefined, options: BrowserBuilderSchema): NormalizedBrowserBuilderSchema;
