/// <amd-module name="@angular/compiler-cli/ngcc/src/packages/bundle_program" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
import { AbsoluteFsPath, FileSystem } from '../../../src/ngtsc/file_system';
/**
 * An entry point bundle contains one or two programs, e.g. `src` and `dts`,
 * that are compiled via TypeScript.
 *
 * To aid with processing the program, this interface exposes the program itself,
 * as well as path and TS file of the entry-point to the program and the r3Symbols
 * file, if appropriate.
 */
export interface BundleProgram {
    program: ts.Program;
    options: ts.CompilerOptions;
    host: ts.CompilerHost;
    path: AbsoluteFsPath;
    file: ts.SourceFile;
    package: AbsoluteFsPath;
    r3SymbolsPath: AbsoluteFsPath | null;
    r3SymbolsFile: ts.SourceFile | null;
}
/**
 * Create a bundle program.
 */
export declare function makeBundleProgram(fs: FileSystem, isCore: boolean, pkg: AbsoluteFsPath, path: AbsoluteFsPath, r3FileName: string, options: ts.CompilerOptions, host: ts.CompilerHost, additionalFiles?: AbsoluteFsPath[]): BundleProgram;
/**
 * Search the given directory hierarchy to find the path to the `r3_symbols` file.
 */
export declare function findR3SymbolsPath(fs: FileSystem, directory: AbsoluteFsPath, filename: string): AbsoluteFsPath | null;
