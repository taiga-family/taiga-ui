/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/metadata/symbols" />
import * as ts from 'typescript';
import { MetadataSymbolicReferenceExpression, MetadataValue } from './schema';
export declare class Symbols {
    private sourceFile;
    private _symbols;
    private references;
    constructor(sourceFile: ts.SourceFile);
    resolve(name: string, preferReference?: boolean): MetadataValue | undefined;
    define(name: string, value: MetadataValue): void;
    defineReference(name: string, value: MetadataSymbolicReferenceExpression): void;
    has(name: string): boolean;
    private get symbols();
    private buildImports;
}
