/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/transformers/r3_metadata_transform" />
import { PartialModule } from '@angular/compiler';
import * as ts from 'typescript';
import { MetadataTransformer, ValueTransform } from './metadata_cache';
export declare class PartialModuleMetadataTransformer implements MetadataTransformer {
    private moduleMap;
    constructor(modules: PartialModule[]);
    start(sourceFile: ts.SourceFile): ValueTransform | undefined;
}
