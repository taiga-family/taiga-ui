/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/update-tool/component-resource-collector" />
import * as ts from 'typescript';
import { FileSystem } from './file-system';
import { LineAndCharacter } from './utils/line-mappings';
export interface ResolvedResource {
    /** Class declaration that contains this resource. */
    container: ts.ClassDeclaration | null;
    /** File content of the given template. */
    content: string;
    /** Start offset of the resource content (e.g. in the inline source file) */
    start: number;
    /** Whether the given resource is inline or not. */
    inline: boolean;
    /** Path to the file that contains this resource. */
    filePath: string;
    /**
     * Gets the character and line of a given position index in the resource.
     * If the resource is declared inline within a TypeScript source file, the line and
     * character are based on the full source file content.
     */
    getCharacterAndLineOfPosition: (pos: number) => LineAndCharacter;
}
/**
 * Collector that can be used to find Angular templates and stylesheets referenced within
 * given TypeScript source files (inline or external referenced files)
 */
export declare class ComponentResourceCollector {
    typeChecker: ts.TypeChecker;
    private _fileSystem;
    resolvedTemplates: ResolvedResource[];
    resolvedStylesheets: ResolvedResource[];
    constructor(typeChecker: ts.TypeChecker, _fileSystem: FileSystem);
    visitNode(node: ts.Node): void;
    private _visitClassDeclaration;
    /** Resolves an external stylesheet by reading its content and computing line mappings. */
    resolveExternalStylesheet(filePath: string, container: ts.ClassDeclaration | null): ResolvedResource;
}
