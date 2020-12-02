/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from '../third_party/github.com/Microsoft/TypeScript/lib/typescript';
import { Change } from './change';
/**
 * Add Import `import { symbolName } from fileName` if the import doesn't exit
 * already. Assumes fileToEdit can be resolved and accessed.
 * @param fileToEdit (file we want to add import to)
 * @param symbolName (item to import)
 * @param fileName (path to the file)
 * @param isDefault (if true, import follows style for importing default exports)
 * @return Change
 */
export declare function insertImport(source: ts.SourceFile, fileToEdit: string, symbolName: string, fileName: string, isDefault?: boolean): Change;
/**
 * Find all nodes from the AST in the subtree of node of SyntaxKind kind.
 * @param node
 * @param kind
 * @param max The maximum number of items to return.
 * @param recursive Continue looking for nodes of kind recursive until end
 * the last child even when node of kind has been found.
 * @return all nodes of kind, or [] if none is found
 */
export declare function findNodes(node: ts.Node, kind: ts.SyntaxKind, max?: number, recursive?: boolean): ts.Node[];
/**
 * Get all the nodes from a source.
 * @param sourceFile The source file object.
 * @returns {Observable<ts.Node>} An observable of all the nodes in the source.
 */
export declare function getSourceNodes(sourceFile: ts.SourceFile): ts.Node[];
export declare function findNode(node: ts.Node, kind: ts.SyntaxKind, text: string): ts.Node | null;
/**
 * Insert `toInsert` after the last occurence of `ts.SyntaxKind[nodes[i].kind]`
 * or after the last of occurence of `syntaxKind` if the last occurence is a sub child
 * of ts.SyntaxKind[nodes[i].kind] and save the changes in file.
 *
 * @param nodes insert after the last occurence of nodes
 * @param toInsert string to insert
 * @param file file to insert changes into
 * @param fallbackPos position to insert if toInsert happens to be the first occurence
 * @param syntaxKind the ts.SyntaxKind of the subchildren to insert after
 * @return Change instance
 * @throw Error if toInsert is first occurence but fall back is not set
 */
export declare function insertAfterLastOccurrence(nodes: ts.Node[], toInsert: string, file: string, fallbackPos: number, syntaxKind?: ts.SyntaxKind): Change;
export declare function getContentOfKeyLiteral(_source: ts.SourceFile, node: ts.Node): string | null;
export declare function getDecoratorMetadata(source: ts.SourceFile, identifier: string, module: string): ts.Node[];
/**
 * Given a source file with @NgModule class(es), find the name of the first @NgModule class.
 *
 * @param source source file containing one or more @NgModule
 * @returns the name of the first @NgModule, or `undefined` if none is found
 */
export declare function getFirstNgModuleName(source: ts.SourceFile): string | undefined;
export declare function getMetadataField(node: ts.ObjectLiteralExpression, metadataField: string): ts.ObjectLiteralElement[];
export declare function addSymbolToNgModuleMetadata(source: ts.SourceFile, ngModulePath: string, metadataField: string, symbolName: string, importPath?: string | null): Change[];
/**
 * Custom function to insert a declaration (component, pipe, directive)
 * into NgModule declarations. It also imports the component.
 */
export declare function addDeclarationToModule(source: ts.SourceFile, modulePath: string, classifiedName: string, importPath: string): Change[];
/**
 * Custom function to insert an NgModule into NgModule imports. It also imports the module.
 */
export declare function addImportToModule(source: ts.SourceFile, modulePath: string, classifiedName: string, importPath: string): Change[];
/**
 * Custom function to insert a provider into NgModule. It also imports it.
 */
export declare function addProviderToModule(source: ts.SourceFile, modulePath: string, classifiedName: string, importPath: string): Change[];
/**
 * Custom function to insert an export into NgModule. It also imports it.
 */
export declare function addExportToModule(source: ts.SourceFile, modulePath: string, classifiedName: string, importPath: string): Change[];
/**
 * Custom function to insert an export into NgModule. It also imports it.
 */
export declare function addBootstrapToModule(source: ts.SourceFile, modulePath: string, classifiedName: string, importPath: string): Change[];
/**
 * Custom function to insert an entryComponent into NgModule. It also imports it.
 * @deprecated - Since version 9.0.0 with Ivy, entryComponents is no longer necessary.
 */
export declare function addEntryComponentToModule(source: ts.SourceFile, modulePath: string, classifiedName: string, importPath: string): Change[];
/**
 * Determine if an import already exists.
 */
export declare function isImported(source: ts.SourceFile, classifiedName: string, importPath: string): boolean;
/**
 * This function returns the name of the environment export
 * whether this export is aliased or not. If the environment file
 * is not imported, then it will return `null`.
 */
export declare function getEnvironmentExportName(source: ts.SourceFile): string | null;
/**
 * Returns the RouterModule declaration from NgModule metadata, if any.
 */
export declare function getRouterModuleDeclaration(source: ts.SourceFile): ts.Expression | undefined;
/**
 * Adds a new route declaration to a router module (i.e. has a RouterModule declaration)
 */
export declare function addRouteDeclarationToModule(source: ts.SourceFile, fileToAdd: string, routeLiteral: string): Change;
