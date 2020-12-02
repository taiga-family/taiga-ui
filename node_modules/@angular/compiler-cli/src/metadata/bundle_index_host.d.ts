/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/metadata/bundle_index_host" />
import * as ts from 'typescript';
import { CompilerOptions } from '../transformers/api';
import { MetadataCache } from '../transformers/metadata_cache';
export declare function createBundleIndexHost<H extends ts.CompilerHost>(ngOptions: CompilerOptions, rootFiles: ReadonlyArray<string>, host: H, getMetadataCache: () => MetadataCache): {
    host: H;
    indexName?: string;
    errors?: ts.Diagnostic[];
};
