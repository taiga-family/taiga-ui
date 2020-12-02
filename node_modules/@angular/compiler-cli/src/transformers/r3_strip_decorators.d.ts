/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/transformers/r3_strip_decorators" />
import { StaticReflector, StaticSymbol } from '@angular/compiler';
import * as ts from 'typescript';
import { MetadataTransformer, ValueTransform } from './metadata_cache';
export declare type Transformer = (sourceFile: ts.SourceFile) => ts.SourceFile;
export declare type TransformerFactory = (context: ts.TransformationContext) => Transformer;
export declare function getDecoratorStripTransformerFactory(coreDecorators: Set<StaticSymbol>, reflector: StaticReflector, checker: ts.TypeChecker): TransformerFactory;
export declare class StripDecoratorsMetadataTransformer implements MetadataTransformer {
    private coreDecorators;
    private reflector;
    constructor(coreDecorators: Set<StaticSymbol>, reflector: StaticReflector);
    start(sourceFile: ts.SourceFile): ValueTransform | undefined;
}
