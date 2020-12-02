/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/language-service/src/expression_type" />
import { AST, AstVisitor, Binary, BindingPipe, Chain, Conditional, FunctionCall, ImplicitReceiver, Interpolation, KeyedRead, KeyedWrite, LiteralArray, LiteralMap, LiteralPrimitive, MethodCall, NonNullAssert, PrefixNot, PropertyRead, PropertyWrite, Quote, SafeMethodCall, SafePropertyRead } from '@angular/compiler';
import { Symbol, SymbolQuery, SymbolTable } from './symbols';
import * as ng from './types';
interface ExpressionDiagnosticsContext {
    inEvent?: boolean;
}
export declare class AstType implements AstVisitor {
    private scope;
    private query;
    private context;
    private source;
    private readonly diagnostics;
    constructor(scope: SymbolTable, query: SymbolQuery, context: ExpressionDiagnosticsContext, source: string);
    getType(ast: AST): Symbol;
    getDiagnostics(ast: AST): ng.Diagnostic[];
    visitBinary(ast: Binary): Symbol;
    visitChain(ast: Chain): Symbol;
    visitConditional(ast: Conditional): Symbol;
    visitFunctionCall(ast: FunctionCall): Symbol;
    visitImplicitReceiver(_ast: ImplicitReceiver): Symbol;
    visitInterpolation(ast: Interpolation): Symbol;
    visitKeyedRead(ast: KeyedRead): Symbol;
    visitKeyedWrite(ast: KeyedWrite): Symbol;
    visitLiteralArray(ast: LiteralArray): Symbol;
    visitLiteralMap(ast: LiteralMap): Symbol;
    visitLiteralPrimitive(ast: LiteralPrimitive): Symbol;
    visitMethodCall(ast: MethodCall): Symbol;
    visitPipe(ast: BindingPipe): Symbol;
    visitPrefixNot(ast: PrefixNot): Symbol;
    visitNonNullAssert(ast: NonNullAssert): Symbol;
    visitPropertyRead(ast: PropertyRead): Symbol | undefined;
    visitPropertyWrite(ast: PropertyWrite): Symbol;
    visitQuote(_ast: Quote): Symbol;
    visitSafeMethodCall(ast: SafeMethodCall): Symbol;
    visitSafePropertyRead(ast: SafePropertyRead): Symbol | undefined;
    /**
     * Gets the source of an expession AST.
     * The AST's sourceSpan is relative to the start of the template source code, which is contained
     * at this.source.
     */
    private sourceOf;
    private _anyType;
    private get anyType();
    private _undefinedType;
    private get undefinedType();
    private resolveMethodCall;
    private resolvePropertyRead;
    private isAny;
}
export {};
