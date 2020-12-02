/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/transformers/metadata_cache" />
import * as ts from 'typescript';
import { MetadataCollector, MetadataValue, ModuleMetadata } from '../metadata/index';
import { MetadataProvider } from './compiler_host';
export declare type ValueTransform = (value: MetadataValue, node: ts.Node) => MetadataValue;
export interface MetadataTransformer {
    connect?(cache: MetadataCache): void;
    start(sourceFile: ts.SourceFile): ValueTransform | undefined;
}
/**
 * Cache, and potentially transform, metadata as it is being collected.
 */
export declare class MetadataCache implements MetadataProvider {
    private collector;
    private readonly strict;
    private transformers;
    private metadataCache;
    constructor(collector: MetadataCollector, strict: boolean, transformers: MetadataTransformer[]);
    getMetadata(sourceFile: ts.SourceFile): ModuleMetadata | undefined;
}
