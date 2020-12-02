/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/typecheck/src/host" />
import * as ts from 'typescript';
/**
 * A `ts.CompilerHost` which augments source files with type checking code from a
 * `TypeCheckContext`.
 */
export declare class TypeCheckProgramHost implements ts.CompilerHost {
    private delegate;
    /**
     * Map of source file names to `ts.SourceFile` instances.
     */
    private sfMap;
    readonly resolveModuleNames?: ts.CompilerHost['resolveModuleNames'];
    constructor(sfMap: Map<string, ts.SourceFile>, delegate: ts.CompilerHost);
    getSourceFile(fileName: string, languageVersion: ts.ScriptTarget, onError?: ((message: string) => void) | undefined, shouldCreateNewSourceFile?: boolean | undefined): ts.SourceFile | undefined;
    getDefaultLibFileName(options: ts.CompilerOptions): string;
    writeFile(fileName: string, data: string, writeByteOrderMark: boolean, onError: ((message: string) => void) | undefined, sourceFiles: ReadonlyArray<ts.SourceFile> | undefined): void;
    getCurrentDirectory(): string;
    getDirectories?: (path: string) => string[];
    getCanonicalFileName(fileName: string): string;
    useCaseSensitiveFileNames(): boolean;
    getNewLine(): string;
    fileExists(fileName: string): boolean;
    readFile(fileName: string): string | undefined;
}
