/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/modulewithproviders/src/scanner" />
import { Type } from '@angular/compiler';
import * as ts from 'typescript';
import { ReferenceEmitter } from '../../imports';
import { PartialEvaluator } from '../../partial_evaluator';
import { ReflectionHost } from '../../reflection';
export interface DtsHandler {
    addTypeReplacement(node: ts.Declaration, type: Type): void;
}
export declare class ModuleWithProvidersScanner {
    private host;
    private evaluator;
    private emitter;
    constructor(host: ReflectionHost, evaluator: PartialEvaluator, emitter: ReferenceEmitter);
    scan(sf: ts.SourceFile, dts: DtsHandler): void;
    private visitStatement;
    private visitFunctionOrMethodDeclaration;
    private returnTypeOf;
}
