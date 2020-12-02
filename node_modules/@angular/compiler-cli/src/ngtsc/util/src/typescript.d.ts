/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/util/src/typescript" />
import * as ts from 'typescript';
import { AbsoluteFsPath } from '../../file_system';
export declare function isDtsPath(filePath: string): boolean;
export declare function isNonDeclarationTsPath(filePath: string): boolean;
export declare function isFromDtsFile(node: ts.Node): boolean;
export declare function nodeNameForError(node: ts.Node & {
    name?: ts.Node;
}): string;
export declare function getSourceFile(node: ts.Node): ts.SourceFile;
export declare function getSourceFileOrNull(program: ts.Program, fileName: AbsoluteFsPath): ts.SourceFile | null;
export declare function getTokenAtPosition(sf: ts.SourceFile, pos: number): ts.Node;
export declare function identifierOfNode(decl: ts.Node & {
    name?: ts.Node;
}): ts.Identifier | null;
export declare function isDeclaration(node: ts.Node): node is ts.Declaration;
export declare function isValueDeclaration(node: ts.Node): node is ts.ClassDeclaration | ts.FunctionDeclaration | ts.VariableDeclaration;
export declare function isTypeDeclaration(node: ts.Node): node is ts.EnumDeclaration | ts.TypeAliasDeclaration | ts.InterfaceDeclaration;
export declare function isExported(node: ts.Declaration): boolean;
export declare function getRootDirs(host: ts.CompilerHost, options: ts.CompilerOptions): AbsoluteFsPath[];
export declare function nodeDebugInfo(node: ts.Node): string;
/**
 * Resolve the specified `moduleName` using the given `compilerOptions` and `compilerHost`.
 *
 * This helper will attempt to use the `CompilerHost.resolveModuleNames()` method if available.
 * Otherwise it will fallback on the `ts.ResolveModuleName()` function.
 */
export declare function resolveModuleName(moduleName: string, containingFile: string, compilerOptions: ts.CompilerOptions, compilerHost: ts.CompilerHost, moduleResolutionCache: ts.ModuleResolutionCache | null): ts.ResolvedModule | undefined;
/**
 * Asserts that the keys `K` form a subset of the keys of `T`.
 */
export declare type SubsetOfKeys<T, K extends keyof T> = K;
