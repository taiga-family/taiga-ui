/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/transformers/node_emitter" />
import { AssertNotNull, BinaryOperatorExpr, CastExpr, ClassStmt, CommaExpr, CommentStmt, ConditionalExpr, DeclareFunctionStmt, DeclareVarStmt, ExpressionStatement, ExpressionVisitor, ExternalExpr, FunctionExpr, IfStmt, InstantiateExpr, InvokeFunctionExpr, InvokeMethodExpr, JSDocCommentStmt, LiteralArrayExpr, LiteralExpr, LiteralMapExpr, NotExpr, ParseSourceSpan, PartialModule, ReadKeyExpr, ReadPropExpr, ReadVarExpr, ReturnStatement, Statement, StatementVisitor, ThrowStmt, TryCatchStmt, TypeofExpr, WrappedNodeExpr, WriteKeyExpr, WritePropExpr, WriteVarExpr } from '@angular/compiler';
import { LocalizedString } from '@angular/compiler/src/output/output_ast';
import * as ts from 'typescript';
export interface Node {
    sourceSpan: ParseSourceSpan | null;
}
export declare class TypeScriptNodeEmitter {
    private annotateForClosureCompiler;
    constructor(annotateForClosureCompiler: boolean);
    updateSourceFile(sourceFile: ts.SourceFile, stmts: Statement[], preamble?: string): [ts.SourceFile, Map<ts.Node, Node>];
    /** Creates a not emitted statement containing the given comment. */
    createCommentStatement(sourceFile: ts.SourceFile, comment: string): ts.Statement;
}
/**
 * Update the given source file to include the changes specified in module.
 *
 * The module parameter is treated as a partial module meaning that the statements are added to
 * the module instead of replacing the module. Also, any classes are treated as partial classes
 * and the included members are added to the class with the same name instead of a new class
 * being created.
 */
export declare function updateSourceFile(sourceFile: ts.SourceFile, module: PartialModule, annotateForClosureCompiler: boolean): [ts.SourceFile, Map<ts.Node, Node>];
export declare type RecordedNode<T extends ts.Node = ts.Node> = (T & {
    __recorded: any;
}) | null;
/**
 * Visits an output ast and produces the corresponding TypeScript synthetic nodes.
 */
export declare class NodeEmitterVisitor implements StatementVisitor, ExpressionVisitor {
    private annotateForClosureCompiler;
    private _nodeMap;
    private _importsWithPrefixes;
    private _reexports;
    private _templateSources;
    private _exportedVariableIdentifiers;
    constructor(annotateForClosureCompiler: boolean);
    /**
     * Process the source file and collect exported identifiers that refer to variables.
     *
     * Only variables are collected because exported classes still exist in the module scope in
     * CommonJS, whereas variables have their declarations moved onto the `exports` object, and all
     * references are updated accordingly.
     */
    loadExportedVariableIdentifiers(sourceFile: ts.SourceFile): void;
    getReexports(): ts.Statement[];
    getImports(): ts.Statement[];
    getNodeMap(): Map<ts.Node, Node>;
    updateSourceMap(statements: ts.Statement[]): void;
    private record;
    private sourceRangeOf;
    private getModifiers;
    visitDeclareVarStmt(stmt: DeclareVarStmt): (ts.VariableStatement & {
        __recorded: any;
    }) | ((ts.VariableStatement & {
        __recorded: any;
    }) | (ts.ExportDeclaration & {
        __recorded: any;
    }) | null)[] | null;
    visitDeclareFunctionStmt(stmt: DeclareFunctionStmt): RecordedNode<ts.FunctionDeclaration>;
    visitExpressionStmt(stmt: ExpressionStatement): RecordedNode<ts.ExpressionStatement>;
    visitReturnStmt(stmt: ReturnStatement): RecordedNode<ts.ReturnStatement>;
    visitDeclareClassStmt(stmt: ClassStmt): RecordedNode<ts.ClassDeclaration>;
    visitIfStmt(stmt: IfStmt): RecordedNode<ts.IfStatement>;
    visitTryCatchStmt(stmt: TryCatchStmt): RecordedNode<ts.TryStatement>;
    visitThrowStmt(stmt: ThrowStmt): RecordedNode<ts.ThrowStatement>;
    visitCommentStmt(stmt: CommentStmt, sourceFile: ts.SourceFile): ts.NotEmittedStatement;
    visitJSDocCommentStmt(stmt: JSDocCommentStmt, sourceFile: ts.SourceFile): ts.NotEmittedStatement;
    private createCommentStmt;
    visitWrappedNodeExpr(expr: WrappedNodeExpr<any>): any;
    visitTypeofExpr(expr: TypeofExpr): RecordedNode<ts.TypeOfExpression>;
    visitReadVarExpr(expr: ReadVarExpr): (ts.Identifier & {
        __recorded: any;
    }) | (ts.SuperExpression & {
        __recorded: any;
    }) | null;
    visitWriteVarExpr(expr: WriteVarExpr): RecordedNode<ts.BinaryExpression>;
    visitWriteKeyExpr(expr: WriteKeyExpr): RecordedNode<ts.BinaryExpression>;
    visitWritePropExpr(expr: WritePropExpr): RecordedNode<ts.BinaryExpression>;
    visitInvokeMethodExpr(expr: InvokeMethodExpr): RecordedNode<ts.CallExpression>;
    visitInvokeFunctionExpr(expr: InvokeFunctionExpr): RecordedNode<ts.CallExpression>;
    visitInstantiateExpr(expr: InstantiateExpr): RecordedNode<ts.NewExpression>;
    visitLiteralExpr(expr: LiteralExpr): RecordedNode<ts.Identifier | ts.StringLiteral | (ts.NullLiteral & ts.Token<ts.SyntaxKind.NullKeyword>)>;
    visitLocalizedString(expr: LocalizedString, context: any): void;
    visitExternalExpr(expr: ExternalExpr): RecordedNode<ts.Expression>;
    visitConditionalExpr(expr: ConditionalExpr): RecordedNode<ts.ParenthesizedExpression>;
    visitNotExpr(expr: NotExpr): RecordedNode<ts.PrefixUnaryExpression>;
    visitAssertNotNullExpr(expr: AssertNotNull): RecordedNode<ts.Expression>;
    visitCastExpr(expr: CastExpr): RecordedNode<ts.Expression>;
    visitFunctionExpr(expr: FunctionExpr): RecordedNode<ts.FunctionExpression>;
    visitBinaryOperatorExpr(expr: BinaryOperatorExpr): RecordedNode<ts.BinaryExpression | ts.ParenthesizedExpression>;
    visitReadPropExpr(expr: ReadPropExpr): RecordedNode<ts.PropertyAccessExpression>;
    visitReadKeyExpr(expr: ReadKeyExpr): RecordedNode<ts.ElementAccessExpression>;
    visitLiteralArrayExpr(expr: LiteralArrayExpr): RecordedNode<ts.ArrayLiteralExpression>;
    visitLiteralMapExpr(expr: LiteralMapExpr): RecordedNode<ts.ObjectLiteralExpression>;
    visitCommaExpr(expr: CommaExpr): RecordedNode<ts.Expression>;
    private _visitStatements;
    private _visitStatementsPrefix;
    private _visitIdentifier;
}
