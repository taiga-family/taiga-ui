/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/transformers/lower_expressions" />
import * as ts from 'typescript';
import { MetadataCache, MetadataTransformer, ValueTransform } from './metadata_cache';
export interface LoweringRequest {
    kind: ts.SyntaxKind;
    location: number;
    end: number;
    name: string;
}
export declare type RequestLocationMap = Map<number, LoweringRequest>;
export declare function getExpressionLoweringTransformFactory(requestsMap: RequestsMap, program: ts.Program): (context: ts.TransformationContext) => (sourceFile: ts.SourceFile) => ts.SourceFile;
export interface RequestsMap {
    getRequests(sourceFile: ts.SourceFile): RequestLocationMap;
}
export declare class LowerMetadataTransform implements RequestsMap, MetadataTransformer {
    private cache;
    private requests;
    private lowerableFieldNames;
    constructor(lowerableFieldNames: string[]);
    getRequests(sourceFile: ts.SourceFile): RequestLocationMap;
    connect(cache: MetadataCache): void;
    start(sourceFile: ts.SourceFile): ValueTransform | undefined;
}
