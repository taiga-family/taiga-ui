/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/partial_evaluator/src/interpreter" />
import * as ts from 'typescript';
import { DependencyTracker } from '../../incremental/api';
import { ReflectionHost } from '../../reflection';
import { ForeignFunctionResolver } from './interface';
import { ResolvedValue } from './result';
/**
 * Tracks the scope of a function body, which includes `ResolvedValue`s for the parameters of that
 * body.
 */
declare type Scope = Map<ts.ParameterDeclaration, ResolvedValue>;
interface Context {
    originatingFile: ts.SourceFile;
    /**
     * The module name (if any) which was used to reach the currently resolving symbols.
     */
    absoluteModuleName: string | null;
    /**
     * A file name representing the context in which the current `absoluteModuleName`, if any, was
     * resolved.
     */
    resolutionContext: string;
    scope: Scope;
    foreignFunctionResolver?: ForeignFunctionResolver;
}
export declare class StaticInterpreter {
    private host;
    private checker;
    private dependencyTracker;
    constructor(host: ReflectionHost, checker: ts.TypeChecker, dependencyTracker: DependencyTracker | null);
    visit(node: ts.Expression, context: Context): ResolvedValue;
    private visitExpression;
    private visitArrayLiteralExpression;
    protected visitObjectLiteralExpression(node: ts.ObjectLiteralExpression, context: Context): ResolvedValue;
    private visitTemplateExpression;
    private visitIdentifier;
    private visitDeclaration;
    private visitVariableDeclaration;
    private visitEnumDeclaration;
    private visitElementAccessExpression;
    private visitPropertyAccessExpression;
    private visitSourceFile;
    private accessHelper;
    private visitCallExpression;
    private visitConditionalExpression;
    private visitPrefixUnaryExpression;
    private visitBinaryExpression;
    private visitParenthesizedExpression;
    private evaluateFunctionArguments;
    private visitSpreadElement;
    private stringNameFromPropertyName;
    private getResolvedEnum;
    private getReference;
}
export {};
