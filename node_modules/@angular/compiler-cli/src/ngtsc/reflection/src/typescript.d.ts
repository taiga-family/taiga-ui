/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/reflection/src/typescript" />
import * as ts from 'typescript';
import { ClassDeclaration, ClassMember, CtorParameter, Declaration, Decorator, FunctionDefinition, Import, ReflectionHost } from './host';
/**
 * reflector.ts implements static reflection of declarations using the TypeScript `ts.TypeChecker`.
 */
export declare class TypeScriptReflectionHost implements ReflectionHost {
    protected checker: ts.TypeChecker;
    constructor(checker: ts.TypeChecker);
    getDecoratorsOfDeclaration(declaration: ts.Declaration): Decorator[] | null;
    getMembersOfClass(clazz: ClassDeclaration): ClassMember[];
    getConstructorParameters(clazz: ClassDeclaration): CtorParameter[] | null;
    getImportOfIdentifier(id: ts.Identifier): Import | null;
    getExportsOfModule(node: ts.Node): Map<string, Declaration> | null;
    isClass(node: ts.Node): node is ClassDeclaration;
    hasBaseClass(clazz: ClassDeclaration): boolean;
    getBaseClassExpression(clazz: ClassDeclaration): ts.Expression | null;
    getDeclarationOfIdentifier(id: ts.Identifier): Declaration | null;
    getDefinitionOfFunction(node: ts.Node): FunctionDefinition | null;
    getGenericArityOfClass(clazz: ClassDeclaration): number | null;
    getVariableValue(declaration: ts.VariableDeclaration): ts.Expression | null;
    getDtsDeclaration(_: ts.Declaration): ts.Declaration | null;
    getInternalNameOfClass(clazz: ClassDeclaration): ts.Identifier;
    getAdjacentNameOfClass(clazz: ClassDeclaration): ts.Identifier;
    protected getDirectImportOfIdentifier(id: ts.Identifier): Import | null;
    /**
     * Try to get the import info for this identifier as though it is a namespaced import.
     *
     * For example, if the identifier is the `Directive` part of a qualified type chain like:
     *
     * ```
     * core.Directive
     * ```
     *
     * then it might be that `core` is a namespace import such as:
     *
     * ```
     * import * as core from 'tslib';
     * ```
     *
     * @param id the TypeScript identifier to find the import info for.
     * @returns The import info if this is a namespaced import or `null`.
     */
    protected getImportOfNamespacedIdentifier(id: ts.Identifier, namespaceIdentifier: ts.Identifier | null): Import | null;
    /**
     * Resolve a `ts.Symbol` to its declaration, keeping track of the `viaModule` along the way.
     */
    protected getDeclarationOfSymbol(symbol: ts.Symbol, originalId: ts.Identifier | null): Declaration | null;
    private _reflectDecorator;
    private _reflectMember;
}
export declare function reflectNameOfDeclaration(decl: ts.Declaration): string | null;
export declare function reflectIdentifierOfDeclaration(decl: ts.Declaration): ts.Identifier | null;
export declare function reflectTypeEntityToDeclaration(type: ts.EntityName, checker: ts.TypeChecker): {
    node: ts.Declaration;
    from: string | null;
};
export declare function filterToMembersWithDecorator(members: ClassMember[], name: string, module?: string): {
    member: ClassMember;
    decorators: Decorator[];
}[];
export declare function findMember(members: ClassMember[], name: string, isStatic?: boolean): ClassMember | null;
export declare function reflectObjectLiteral(node: ts.ObjectLiteralExpression): Map<string, ts.Expression>;
