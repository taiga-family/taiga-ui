import * as Lint from 'tslint';
import * as ts from 'typescript';
import * as e from '@angular/compiler/src/expression_parser/ast';
import { SourceMappingVisitor } from '../sourceMappingVisitor';
import { ComponentMetadata } from '../metadata';
export interface FlatSymbolTable {
    [identifier: string]: boolean;
}
export declare class RecursiveAngularExpressionVisitor extends SourceMappingVisitor implements e.AstVisitor {
    protected context: ComponentMetadata;
    protected basePosition: number;
    preDefinedVariables: FlatSymbolTable;
    constructor(sourceFile: ts.SourceFile, options: Lint.IOptions, context: ComponentMetadata, basePosition: number);
    visit(ast: e.AST, context: any): any;
    visitNonNullAssert(ast: e.NonNullAssert, context: any): any;
    visitBinary(ast: e.Binary, context: any): any;
    visitChain(ast: e.Chain, context: any): any;
    visitConditional(ast: e.Conditional, context: any): any;
    visitPipe(ast: e.BindingPipe, context: any): any;
    visitFunctionCall(ast: e.FunctionCall, context: any): any;
    visitImplicitReceiver(ast: e.ImplicitReceiver, context: any): any;
    visitInterpolation(ast: e.Interpolation, context: any): any;
    visitKeyedRead(ast: e.KeyedRead, context: any): any;
    visitKeyedWrite(ast: e.KeyedWrite, context: any): any;
    visitLiteralArray(ast: e.LiteralArray, context: any): any;
    visitLiteralMap(ast: e.LiteralMap, context: any): any;
    visitLiteralPrimitive(ast: e.LiteralPrimitive, context: any): any;
    visitMethodCall(ast: e.MethodCall, context: any): any;
    visitPrefixNot(ast: e.PrefixNot, context: any): any;
    visitPropertyRead(ast: e.PropertyRead, context: any): any;
    visitPropertyWrite(ast: e.PropertyWrite, context: any): any;
    visitSafePropertyRead(ast: e.SafePropertyRead, context: any): any;
    visitSafeMethodCall(ast: e.SafeMethodCall, context: any): any;
    visitAll(asts: e.AST[], context: any): any;
    visitQuote(ast: e.Quote, context: any): any;
}
